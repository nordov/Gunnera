class Api::SessionsController < ApplicationController
  
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user.nil?
        render :json => {:error => "Your email or password info is missing or incorrect..."}.to_json, status:422
    else
        login_user!(@user)
        render "api/users/show"
    end
  end

  def destroy
      if current_user
        if logout_user!
          render :json => {}.to_json
        else 
          render :json => {:error => "ERROR: 404 - Something went wrong!"}.to_json, :status => 404
        end
      else
        render :json => {:error => "ERROR: 404 - Can't find a login user :("}.to_json, :status => 404
      end
  end
end
