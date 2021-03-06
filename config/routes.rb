Rails.application.routes.draw do
  root "homes#index"
  devise_for :users

  get "/leagues", to: "homes#index"
  get "/leagues/:id", to: "homes#index"
  get "/users/:id", to: "homes#index"

  resources :users, only: [:show]
  
  namespace :api do
    namespace :v1 do
      resources :leagues, only: [:index, :show, :create]
      resources :users, only: [:show]
      resources :joins, only: [:create]
    end
    # resources :leagues, only: [:create]
  end
end
