class Api::UsersController < ApplicationController
  
    skip_before_action :verify_authenticity_token
    
    def index
        @users = User.all
        render :index
    end

    def show
        if @user = User.find_by(id: params[:id])
            render :show
        else
            render :json => {:error => "Your email or password info is missing or incorrect..."}.to_json, status:422
        end
    end
    
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