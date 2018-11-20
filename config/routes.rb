Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'ping' => 'pages#ping'

  root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :gardens
      resources :bookings, only: [:index, :show, :create]
    end
  end
end
