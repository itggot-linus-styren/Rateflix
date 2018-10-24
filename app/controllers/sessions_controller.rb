class SessionsController < ApplicationController
  
  # GET /session
  def show
    render plain: current_user&.id
  end

  # POST /session
  def create
    user = User.find_by_username(params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: "Logged in"
    else
      render json: "Username or password is invalid"
    end
  end

  # DELETE /session
  def destroy
    session[:user_id] = nil
    render json: "Logged out"
  end
end
