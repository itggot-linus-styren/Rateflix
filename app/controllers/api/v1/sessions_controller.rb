class Api::V1::SessionsController < ActionController::API
  
  # GET /session
  def show
    render json: {:user_id => current_user&.id}
  end

  # POST /session
  def create
    if current_user
      render json: {error: "User already logged in"}, :status => :unprocessable_entity
    else
      user = User.find_by_username(params[:username])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        render json: {notice: "Logged in"}
      else
        render json: {error: "Username or password is invalid"}, :status => :unprocessable_entity
      end
    end
  end

  # DELETE /session
  def destroy
    if current_user
      session[:user_id] = nil
      render json: {notice: "Logged out"}
    else      
      render json: {error: "User not logged in"}, :status => :unprocessable_entity
    end
  end
end
