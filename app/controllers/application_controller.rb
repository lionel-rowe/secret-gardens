class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  # include Pundit
  # # Prevent CSRF attacks by raising an exception.    # Prevent CSRF attacks by raising an exception.
  # # For APIs, you may want to use :null_session instead.    # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  # before_action :authenticate_user!
  # after_action :verify_authorized, :except => :index, unless: :devise_controller?
  # after_action :verify_policy_scoped, :only => :index, unless: :devise_controller?
  # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  # private

  # def user_not_authorized
  #   flash[:alert] = "You are not authorized to perform this action."
  #   redirect_to(root_path)
  # end

  # acts_as_token_authentication_handler_for User

  # Security note: controllers with no-CSRF protection must disable the Devise fallback,
  # see #49 for details.
  # acts_as_token_authentication_handler_for User, fallback: :none

  # The token authentication requirement can target specific controller actions:
  # acts_as_token_authentication_handler_for User, only: [:create, :update, :destroy]
  # acts_as_token_authentication_handler_for User, except: [:index, :show]
  #
  # Or target specific controller conditions:
  # acts_as_token_authentication_handler_for User, unless: lambda { |controller| controller.request.format.html? }
  # acts_as_token_authentication_handler_for User, if: lambda { |controller| controller.request.format.json? }

  # Several token authenticatable models can be handled by the same controller.
  # If so, for all of them except the last, the fallback should be set to :none.
  #
  # Please do notice that the order of declaration defines the order of precedence.
  #
  # acts_as_token_authentication_handler_for Admin, fallback: :none
  # acts_as_token_authentication_handler_for SpecialUser, fallback: :none
  # acts_as_token_authentication_handler_for User # the last fallback is up to you

  # Aliases can be defined for namespaced models:
  #
  # acts_as_token_authentication_handler_for Customer::Representative, as: :facilitator
  # acts_as_token_authentication_handler_for SpecialUser, as: :user
  #
  # When defined, aliases are used to define both the params and the header names to watch.
  # E.g. facilitator_token, X-Facilitator-Token

end

# before_action :authenticate_user!
# include Pundit

# # Pundit: white-list approach.
# after_action :verify_authorized, except: :index, unless: :skip_pundit?
# after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

# # Uncomment when you *really understand* Pundit!
# # rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
# # def user_not_authorized
# #   flash[:alert] = "You are not authorized to perform this action."
# #   redirect_to(root_path)
# # end

# private

# def skip_pundit?
#   devise_controller? || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
# end
