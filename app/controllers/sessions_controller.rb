class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: "Logged in", status: :logged_in
    else
      render json: "Username or password is invalid", status: :einval
    end
  end

  def destroy
    session[:user_id] = nil
    render json: "Logged out", status: :logged_out
  end
end
