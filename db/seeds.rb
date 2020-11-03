# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

league_1 = League.create(league_name: "Throw Away", location: "Mansfield, MA")
league_2 = League.create(league_name: "Par-Tee", location: "Boston, MA")
league_3 = League.create(league_name: "Ace in the Hole", location: "Middleboro, MA")

user_1 = User.create(first_name: "Danny", last_name: "Slants", email: "dgthrower@gmail.com", password: "123456", location: "Boston, MA", leagues: [league_2])
user_2 = User.create(first_name: "Jack", last_name: "Babble", email: "babbleJ@hotmail.com", location: "Mansfield, MA", leagues: [league_1])
user_3 = User.create(first_name: "Kelly", last_name: "Henstrain", email: "henstrainer@yahoo.com", location: "Middleboro, MA", leagues: [league_3])
user_4 = User.create(first_name: "Sam", last_name: "Pogger", email: "Poggerinthechat@twitch.tv", location: "Mansfield, MA", leagues: [league_1])
user_5 = User.create(first_name: "John", last_name: "Wick", email: "DontTouchMyDog@youlldie.com", location: "Boston, MA", leagues: [league_2])
user_6 = User.create(first_name: "Quinton", last_name: "Campell", email: "Quniverse@gmail.com", location: "Boston, MA", leagues: [league_2])
user_7 = User.create(first_name: "Nancy", last_name: "Zeek", email: "NZNotNZ@gmail.com", location: "Middleboro, MA", leagues: [league_2])
user_8 = User.create(first_name: "Lucas", last_name: "Walter", email: "WheresWalter@yahoo.com", location: "Middleboro, MA", leagues: [league_2])
user_9 = User.create(first_name: "Paul", last_name: "Knocs", email: "KnocFirst@live.com", location: "Middleboro, MA", leagues: [league_2])
user_10 = User.create(first_name: "Brandon", last_name: "Baglio", email: "BBaggs@gmail.com", location: "Mansfield, MA", leagues: [league_2])
user_11 = User.create(first_name: "Alan", last_name: "Charb", email: "Acharbs@live.com", location: "Mansfield, MA", leagues: [league_2])
user_12 = User.create(first_name: "Steve", last_name: "Silver", email: "QuickSilverSteve@hotmail.com", location: "Boston, MA", leagues: [league_2])