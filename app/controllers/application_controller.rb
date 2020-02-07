class ApplicationController < ActionController::Base

    #defines helper methods so they can be used outside
    helper_method :current_user
    helper_method :logged_in?
    helper_method :auth_token
    helper_method :logged_in_require!
    helper_method :no_logged_in_require!

    private
	
    def auth_token
        <<-HTML.html_safe
            <input type="hidden" name="authenticity_token" value="#{form_authenticity_token}">
        HTML
    end

    def login_user!(user)
        session[:session_token] = user.reset_session_token
    end

    def logout_user!
        current_user.reset_session_token
        session[:session_token] = nil
        return true
    end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !current_user.nil?
    end

    def logged_in_require!
       redirect_to new_session_url if current_user.nil?
    end

    def no_logged_in_require!
       redirect_to users_url if current_user
    end

end