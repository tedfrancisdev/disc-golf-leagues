Rails.application.routes.draw do
  root "homes#index"
  devise_for :users

  get "/leagues", to: "homes#index"
  get "/leagues/:id", to: "homes#index"

  namespace :api do
    namespace :v1 do
      resources :leagues, only: [:index, :show]
    end
  end
end
