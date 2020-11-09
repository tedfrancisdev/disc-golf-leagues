# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

league_1 = League.create(league_name: "Throw Away", location: "Mansfield, MA", description: "We are a friendly group of disc golfers that are just looking to bring a little competitiveness to our play. We currently have 6 members but we are open to having anywhere up to 10.")
league_2 = League.create(league_name: "Par-Tee", location: "Boston, MA", description: "Group of college students that hit the course in our free time. We like to PARTY! Come have a good time with us discing or partying back at our frat house after!")
league_3 = League.create(league_name: "Ace in the Hole", location: "Middleboro, MA", description: "We are an extremely competitive league of semi professional golfers. We like to have matches once per week when we are not playing tournaments. If you are not skilled please look elsewhere.")

user_1 = User.create(first_name: "Danny", last_name: "Slants", email: "dgthrower@gmail.com", password: "123456", location: "Boston, MA", skill_level: "Intermediate", leagues: [league_2])
user_2 = User.create(first_name: "Jack", last_name: "Babble", email: "babbleJ@hotmail.com", password: "123456", location: "Mansfield, MA", skill_level: "Beginner", leagues: [league_1])
user_3 = User.create(first_name: "Kelly", last_name: "Henstrain", email: "henstrainer@yahoo.com", password: "123456", location: "Middleboro, MA", skill_level: "Advanced", leagues: [league_3])
user_4 = User.create(first_name: "Sam", last_name: "Pogger", email: "Poggerinthechat@twitch.tv", password: "123456", location: "Mansfield, MA", skill_level: "Intermediate", leagues: [league_1])
user_5 = User.create(first_name: "John", last_name: "Wick", email: "DontTouchMyDog@youlldie.com", password: "123456", location: "Boston, MA", skill_level: "Intermediate", leagues: [league_2])
user_6 = User.create(first_name: "Quinton", last_name: "Campell", email: "Quniverse@gmail.com", password: "123456", location: "Boston, MA", skill_level: "Intermediate", leagues: [league_2])
user_7 = User.create(first_name: "Nancy", last_name: "Zeek", email: "NZNotNZ@gmail.com", password: "123456", location: "Middleboro, MA", skill_level: "Advanced", leagues: [league_3])
user_8 = User.create(first_name: "Lucas", last_name: "Walter", email: "WheresWalter@yahoo.com", password: "123456", location: "Middleboro, MA", skill_level: "Advanced", leagues: [league_3])
user_9 = User.create(first_name: "Paul", last_name: "Knocs", email: "KnocFirst@live.com", password: "123456", location: "Middleboro, MA", skill_level: "Advanced", leagues: [league_3])
user_10 = User.create(first_name: "Brandon", last_name: "Baglio", email: "BBaggs@gmail.com", password: "123456", location: "Mansfield, MA", skill_level: "Intermediate", leagues: [league_1])
user_11 = User.create(first_name: "Alan", last_name: "Charb", email: "Acharbs@live.com", password: "123456", location: "Mansfield, MA", skill_level: "Beginner", leagues: [league_1])
user_12 = User.create(first_name: "Steve", last_name: "Silver", email: "QuickSilverSteve@hotmail.com", password: "123456", location: "Boston, MA", skill_level: "Beginner", leagues: [league_2])