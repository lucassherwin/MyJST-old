module Types
  class JobType < Types::BaseObject
    field :id, ID, null: false
    field :company, String, null: true
    field :position, String, null: true
    field :status, String, null: true
    field :contact, String, null: true
    field :user_id, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
