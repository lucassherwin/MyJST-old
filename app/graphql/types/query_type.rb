module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :jobs, [Types::JobType], null: false
    def jobs
      Job.all
    end

    field :tasks, [Types::TaskType], null: false
    def tasks
      Task.all
    end
  end
end