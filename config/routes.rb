Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { sessions: :sessions },
                       path_names: { sign_in: :login }
  end
  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :gardens, only: [ :index, :show, :update, :create, :destroy ] do
        resources :bookings, only: [:create]
      end
      resource :user, only: [:show, :update] do
        resources :bookings, only: [:index, :show]
        resources :gardens, only: [ :index]
      end
    end
  end

  get 'ping' => 'pages#ping'

  root to: 'pages#index'
  get '*path', to: 'pages#index'

end
