# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#
author = Author.create(name: "George Lucas")
movie = Movie.create(title: "Star wars", author: author)
movie2 = Movie.create(title: "Test film", author: author)
user = User.create(username: "test", password: "123")
review1 = Review.create(user: user, movie: movie, rating: 5, text: "test review 1")
review2 = Review.create(user: user, movie: movie2, rating: 5, text: "test review 2")
puts review2.errors.inspect