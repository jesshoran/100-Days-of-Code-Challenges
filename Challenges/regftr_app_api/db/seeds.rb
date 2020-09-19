# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Gift.create([
    {description: "Apple Watch", value: 199.99, event: "Birthday", gift_giver: "Eva"},
    {description: "Gorgon City Ticket", value: 75.50, event: "Hanukkah", gift_giver: "Chris"},
    {description: "Yearly Netflix Subsciption", value: 77.94, event: "Birthday", gift_giver: "Greg"},
    {description: "Margarita", value: 12.99, event: "Cinco De Mayo", gift_giver: "Dan"}
])