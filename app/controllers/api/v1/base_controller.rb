class Api::V1::BaseController < ActionController::Base
  # acts_as_token_authentication_handler_for User
  before_action :check_token, except: [:login, :signup]

  protect_from_forgery with: :null_session
  # skip_before_action :verify_authenticity_token

  # include Pundit
  # Prevent CSRF attacks by raising an exception.    # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.    # For APIs, you may want to use :null_session instead.

  # before_action :authenticate_user!
  # after_action :verify_authorized, :except => :index, unless: :devise_controller?
  # after_action :verify_policy_scoped, :only => :index, unless: :devise_controller?
  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized


  rescue_from StandardError,                with: :internal_server_error
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  def check_token
    @user = User.find_by(token: request.headers['token'])
    if @user.nil?
      render json: {error:"Unable to login, Please try again!"}
    end

  end
  private

  # def user_not_authorized
  #   flash[:alert] = "You are not authorized to perform this action."
  #   redirect_to(root_path)
  # end

  def not_found(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def internal_server_error(exception)
    if Rails.env.development?
      response = { type: exception.class.to_s, error: exception.message }
    else
      response = { error: "Internal Server Error" }
    end
    render json: response, status: :internal_server_error
  end
end
