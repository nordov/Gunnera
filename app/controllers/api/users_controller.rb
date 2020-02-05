class Api::UsersController < ApplicationController
  
    skip_before_action :verify_authenticity_token
    
    def create
      @user = User.new(user_params)
      if @user.save
          login_user!(@user)
          render :show
      else
          render :json => @user.errors.full_messages.to_json
      end
    end
  
    private
  
    def user_params
        params.require(:user).permit(:email, :password)
    end
end