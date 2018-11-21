class Api::V1::BaseController < ActionController::Base
  acts_as_token_authentication_handler_for User

  # CONDITIONAL AUTHENTICATION
  # if: ->(controller) { controller.user_token_authenticable? }

  include Pundit
  # Prevent CSRF attacks by raising an exception.    # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.    # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # before_action :authenticate_user!
  # after_action :verify_authorized, :except => :index, unless: :devise_controller?
  # after_action :verify_policy_scoped, :only => :index, unless: :devise_controller?
  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized


  rescue_from StandardError,                with: :internal_server_error
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  # CONDITIONAL AUTHENTICATION
  # protected

  # def user_token_authenticable?
  #   # This ensure the token can be used only for JSON requests (you may want to enable it for XML too, for example)
  #   return false unless request.format.json?
  #   return false if tokenized_user_identifier.blank?

  #   # `nil` is still a falsy value, but I want a strictly boolean field here
  #   tokenized_user.try(:token_authenticable?) || false
  # end

  private

  def user_not_authorized
    flash[:alert] = "You are not authorized to perform this action."
    redirect_to(root_path)
  end

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

   # CONDITIONAL AUTHENTICATION
  # def tokenized_user
  #   # I use email with devise, you can use whatever you want
  #   User.find_by(email: tokenized_user_identifier.to_s)
  # end

  # def tokenized_user_identifier
  #   # Customize this based on Simple Token Authentication settings
  #   request.headers['X-User-Email'] || params[:user_email]
  # end
end
