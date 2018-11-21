# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning Database..."
Booking.destroy_all
Garden.destroy_all
User.destroy_all

# creating user
puts "Creating Users..."
User.create!({ email: 'bojack@ilt.com', password: '123123' })
User.create!({ email: 'archer@ilt.com', password: '789789' })

puts 'Finished creating Users...'

# creating gardens
puts "Adding Gardens"

# Garden.create!({ name: 'Gardens of Versailles', description: 'meh', price: '300', location: 'Paris', photo: '...', host: User.first })
# Garden.create!({ name: 'The West End Lot', description: 'Eastenders favorite picnic spot', price: '0', location: 'London', photo: '...', host: User.first })
# Garden.create!({ name: 'Body Dump', description: 'let the bodies hit the floor', price: '10300', location: 'my back yard', photo: '...', host: User.last })

Garden.create!({ name: 'Gardens of Versailles', description: 'meh', price: '300', location: 'Paris', photo: 'Secret gardens/secretgarden.jpg', host: User.first })
Garden.create!({ name: 'The West End Lot', description: 'Eastenders favorite picnic spot', price: '0', location: 'London', photo: 'Secret gardens/th-4.jpg', host: User.first })
Garden.create!({ name: 'Body Dump', description: 'let the bodies hit the floor', price: '10300', location: 'my back yard', photo: 'Secret gardens/th-5.jpg', host: User.last })


puts 'Finished creating Gardens...'

# creating bookings
puts "Adding bookings"

Booking.create({ start: DateTime.new(2018,11,21,12), end: DateTime.new(2018,11,21,15), use: 'BBQ', garden: Garden.first, guest: User.last })
Booking.create({ start: DateTime.new(2018,12,1,12), end: DateTime.new(2018,12,1,13), use: 'BBQ', garden: Garden.first, guest: User.first })

puts 'Finished!'
