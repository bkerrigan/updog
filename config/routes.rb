Rails.application.routes.draw do
  resources :teams
  resources :sports
  resources :users do
    get :sports, on: :member
    get :teams, on: :member
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
