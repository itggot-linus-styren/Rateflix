Rails.application.routes.draw do
  # get 'session', to: 'sessions#show', as: 'show'
  # post 'session', to: 'sessions#create', as: 'login'
  # delete 'session', to: 'sessions#destroy', as: 'logout'

  namespace :api do
    namespace :v1 do
      resources :reviews
      resources :users
      resources :authors
      resources :movies
      resources :sessions, only: [:show, :create, :destroy]
    end
  end
  root 'application#show'
  match '/*path', to:'application#show', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
