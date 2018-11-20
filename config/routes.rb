Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :gardens, only: [ :index, :show, :update, :create, :destroy ]
      resources :bookings, only: [:index, :show, :create]
    end
  end

  get 'ping' => 'pages#ping'

  root to: 'pages#index'
  get '*path', to: 'pages#index'

  devise_for :users#, skip: :sessions

end
