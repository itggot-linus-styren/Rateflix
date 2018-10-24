Rails.application.routes.draw do
  resources :users
  resources :authors
  resources :movies
  resources :sessions, only: [:new, :create, :destroy]
  # resources :movies, only: [:show, :create, :update, :destroy, :index] do
  #   match "users/:id", to: "users", via: [:put, :delete]
  # end

  post 'login', to: 'sessions#new', as: 'login'
  post 'logout', to: 'sessions#destroy', as: 'logout'

  root to: 'movies#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
