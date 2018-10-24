Rails.application.routes.draw do
  resources :users
  resources :authors
  resources :movies
  resources :sessions, only: [:show, :create, :destroy]
  # resources :movies, only: [:show, :create, :update, :destroy, :index] do
  #   match "users/:id", to: "users", via: [:put, :delete]
  # end

  get 'session', to: 'sessions#show', as: 'show'
  post 'session', to: 'sessions#create', as: 'login'
  delete 'session', to: 'sessions#destroy', as: 'logout'

  root to: 'movies#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
