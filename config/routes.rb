Rails.application.routes.draw do
  root 'notes#index'
  resource :notes, only: [:create, :update, :destroy]
end
