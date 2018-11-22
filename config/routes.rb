Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/login', to: 'users#login'
      post '/signup', to: 'users#signup'

      resources :gardens, only: [ :index, :show, :update, :create, :destroy ] do
        resources :bookings, only: [:create]
      end
      resources :users, only: [ ] do
        resources :bookings, only: [:index, :show]
        resources :gardens, only: [ :index]
      end
    end
  end

  get 'ping' => 'pages#ping'

  root to: 'pages#index'
  get '*path', to: 'pages#index'

  # devise_for :users#, skip: :sessions

end
