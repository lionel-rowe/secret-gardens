Rails.application.routes.draw do
  devise_for :users

  # namespace :host do
  #   resources :gardens, only: [:index]
  # end

  # namespace :guest do
  #   resources :gardens, only: [:index]
  # end

  get 'ping' => 'pages#index'

  root 'pages#index'
end
