
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)s

# Faker::Config.locale = 'en-US'

# 10.times do
#     User.create(
#         address: Faker::Address.street_address,         
#         about: Faker::Lorem.paragraph,             
#         city: Faker::Address.city,            
#         email: Faker::Internet.email,                      
#         fname: Faker::Name.first_name,           
#         lname: Faker::Name.last_name,           
#         password_digest: 'unchanged',
#         phone_number: Faker::PhoneNumber. cell_phone,    
#         photo_url: Faker::Avatar.image,
#         session_token: Faker::Lorem.characters(number: 10),
#         state: Faker::Address.state,
#         work_number: Faker::PhoneNumber.phone_number
#     )
# end

User.create(
    fname: 'Tony',
    lname: 'Stark',
    email: 'ironman@avengers.com',
    phone_number: '678-136-7092',
    work_number: '678-136-7092',
    address: '10880 Malibu Point',
    city: 'Malibu',
    state: 'CA',
    photo_url: '',
    about: 'Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby.',
    password: '123456',
    session_token: Faker::Lorem.characters(number: 10)    
)

User.create(
    fname: 'Steve',
    lname: 'Rogers',
    email: 'cap@avengers.com',
    phone_number: '678-136-7092',
    work_number: '678-136-7092',
    address: '569 Leaman Place',
    city: 'Brooklyn Heights',
    state: 'NY',
    photo_url: '',
    about: 'Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 from Timely Comics, a predecessor of Marvel Comics.',
    password: '123456',
    session_token: Faker::Lorem.characters(number: 10)    
)

User.create(
    fname: 'Bruce',
    lname: 'Banner',
    email: 'hulk@avengers.com',
    phone_number: '678-136-7092',
    work_number: '678-136-7092',
    address: '890 Fifth Avenue',
    city: 'New York City',
    state: 'NY',
    photo_url: '',
    about: 'The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk.',
    password: '123456',
    session_token: Faker::Lorem.characters(number: 10)  
)

6.times do
    Listing.create(
        host_id: 1,
        complete_listing: true,
        title: 'Private Pool House with Amazing Views!',
        description: 'Private location with breathtaking views and access to pool and spa with free gated parking! Centrally located in LA, close to Downtown LA, Hollywood and our neighboring cities of Glendale and Pasadena.',
        address: '4127 Barryknoll Dr',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90065',
        guest_capacity: 3,
        bedroom_num: 1,
        bathroom: 1,
        property_type: 'Secondary unit',
        property_subtype: 'Guesthouse',
        property_access: 'Entire place',
        guest_dedicated: 'Yes',
        price: 175
    )
end