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