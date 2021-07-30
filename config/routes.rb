Rails.application.routes.draw do
  root to: 'welcome#index'

  get 'signup', to: 'signup#index'
  get 'login', to: 'login#index'

  get 'home', to: 'home#index'

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
