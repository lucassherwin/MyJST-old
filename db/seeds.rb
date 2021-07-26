# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(first_name: 'Lucas', last_name: 'Sherwin', email: 'test@test.com', username: 'test_user', password: 'test_pass')

Job.create!(company: 'Test Company', position: 'Test Position', status: 'test status', contact: 'test contact', user_id: user.id)
Job.create!(company: 'Test Company2 ', position: 'Test Position 2', status: 'test status 2', contact: 'test contact 2', user_id: user.id)

Task.create!(title: 'test title', details: 'test details', user_id: user.id)