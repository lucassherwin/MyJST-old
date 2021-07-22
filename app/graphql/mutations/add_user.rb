module Mutations
  class AddUser < Mutations::BaseMutation
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :email, String, required: true
    argument :username, String, required: true
    argument :password, String, required: true

    field :user, Types::UserType, null: false
    field :errors, [String], null: false 

    # resolver
    # this is where we execute our ActiveRecord commands
    def resolve(first_name:, last_name:, email:, username:, password:)
      user = User.new(first_name: first_name, last_name: last_name, email: email, username: username, password: password)
      if user.save
      {
        user: user,
        errors: []
      }
      else
      {
        user: nil,
        errors: user.errors.full_messages
      }
      end
    end
  end
end

# old -- doesnt work
# argument :params, Types::Input::UserType

#     # field :note, Types::NoteType, null: false
#     field :id, ID, null: false
#     field :first_name, String, null: true
#     field :last_name, String, null: true
#     field :email, String, null: true
#     field :username, String, null: true
#     field :password, String, null: true

#     def resolve(params:)
#       user_params = Hash params

#       begin
#         user = User.create!(user_params)

#         { user: user }
#       rescue ActiveRecord::RecordInvalid => e
#         GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
#           " #{e.record.errors.full_messages.join(', ')}")
#       end
#     end