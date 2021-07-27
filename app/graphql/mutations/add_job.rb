module Mutations
  class AddJob < Mutations::BaseMutation
    argument :company, String, required: true
    argument :position, String, required: true
    argument :status, String, required: true
    argument :contact, String, required: true

    field :job, Types::JobType, null: false
    field :errors, [String], null: false 

    def resolve(company:, position:, status:, contact:)
      job = Job.new(company: company, position: position, status: status, contact: contact)
      if job.save
      {
        job: job,
        errors: []
      }
      else
      {
        job: nil,
        errors: job.errors.full_messages
      }
      end
    end
  end
end