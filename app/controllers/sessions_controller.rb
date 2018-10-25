class SessionsController < ApplicationController
  
  # GET /session
  def show
    render json: {:user_id => current_user&.id}
  end

  # POST /session
  def create
    if current_user
      render json: "User already logged in", :status => :unprocessable_entity
    else
      user = User.find_by_username(params[:name])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: "Logged in"
      else
        render json: "Username or password is invalid", :status => :unprocessable_entity
      end
    end
  end

  # DELETE /session
  def destroy
    if current_user
      session[:user_id] = nil
      render json: "Logged out"
    else      
      render json: "User not logged in", :status => :unprocessable_entity
    end
  end
end
