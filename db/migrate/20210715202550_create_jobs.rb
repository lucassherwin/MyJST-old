class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :position
      t.string :status
      t.string :contact
      t.integer :user_id

      t.timestamps
    end
  end
end
