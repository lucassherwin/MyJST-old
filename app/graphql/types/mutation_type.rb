# module Types
#   class MutationType < Types::BaseObject
#     field :add_user, mutation: Mutations::AddUser
#   end
# end

module Types
  class MutationType < Types::BaseObject
    field :add_user, mutation: Mutations::AddUser

    field :add_job, mutation: Mutations::AddJob
  end
end
