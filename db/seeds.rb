puts "Clearing old data..."
User.destroy_all
Room.destroy_all
Idea.destroy_all

puts "🌱 Seeding Users"

u1 = User.create(username: "Hannah", password: "password", location: "Boulder")
u2 = User.create(username: "Stan", password: "password", location: "Sydney")
u3 = User.create(username: "Stella", password: "password", location: "Paris")
u4 = User.create(username: "Mia", password: "password", location: "London")


puts "🌱 Seeding Rooms"

r1 = Room.create(name: "Living Room", title: "test", square_feet: 200, description: "causual living area/tv room", user: u1)
r2 = Room.create(name: "Kitchen", title: "test", square_feet: 100, description: "ackwardly shaped small kitchen", user: u2)
r3 = Room.create(name: "Primary Bedroom", title: "test", square_feet: 150, description: "main bedroom, long rectangular shape", user: u3)
r4 = Room.create(name: "Laundry Room", title: "test", square_feet: 70, description: "unfinished laundry room", user: u4)

puts "🌱 Seeding Ideas"

Idea.create(img: "test", description: "dark paint color", notes: "could be too dark?", room: r1)
Idea.create(img: "test", description: "new counters", notes: "too hard to clean?", room: r2)
Idea.create(img: "test", description: "oversized couch", notes: "need to get  measurements", room: r1)
Idea.create(img: "test", description: "new table", notes: "color match with cabinets", room: r2)
Idea.create(img: "test", description: "washer color", notes: "check price", room: r4)
Idea.create(img: "test", description: "king bed idea", notes: "too low for animals?", room: r3)

puts "🌱 Seeding Complete!!!"