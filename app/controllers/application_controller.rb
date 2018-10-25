class ApplicationController < ActionController::Base
  helper_method :current_user
  helper_method :logged_in

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user = nil
    end
  end

  def logged_in
    unless current_user
      render json: {:error => "User must be logged in to access this page"}, status: 403
    end
  end
end
