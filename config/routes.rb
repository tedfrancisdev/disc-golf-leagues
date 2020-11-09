Rails.application.routes.draw do
  root "homes#index"
  devise_for :users

  get "/leagues", to: "homes#index"
  get "/leagues/:id", to: "homes#index"
  get "/users/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :leagues, only: [:index, :show]
      resources :users, only: [:show]
    end
    resources :leagues, only: [:create]
  end
end
