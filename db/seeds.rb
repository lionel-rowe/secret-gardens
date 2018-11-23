puts "Cleaning Database..."
Booking.destroy_all
Garden.destroy_all
User.destroy_all

# creating user
puts "Creating Users..."
User.create!({ email: 'bojack@ilt.com', password: '123123' })
User.create!({ email: 'gnome1@garden.com', password: '111111' })
User.create!({ email: 'gnome2@garden.com', password: '222222' })

puts 'Finished creating Users...'

# creating gardens
puts "Adding Gardens"

Garden.create!({ 
    name: 'Gardens of Versailles', 
    description: 'The Gardens of Versailles (French: Jardins du château de Versailles; French pronunciation: [ʒaʁdɛ̃ dy ʃato də versaij]) occupy part of what was once the Domaine royal de Versailles, the royal demesne of the château of Versailles. Situated to the west of the palace, the gardens cover some 800 hectaresof land, much of which is landscaped in the classic French Garden style perfected here by André Le Nôtre. Beyond the surrounding belt of woodland, the gardens are bordered by the urban areas of Versailles to the east and Le Chesnay to the north-east, by the National Arboretum de Chèvreloup to the north, the Versailles plain (a protected wildlife preserve) to the west, and by the Satory Forest to the south.
    As part of le domaine national de Versailles et de Trianon, an autonomous public entity operating under the aegis of the French Ministry of Culture, the gardens are now one of the most visited public sites in France, receiving more than six million visitors a year.
    
    In addition to the meticulous manicured lawns, parterres of flowers, and sculptures are the fountains, which are located throughout the garden. Dating from the time of Louis XIV and still using much of the same network of hydraulics as was used during the Ancien Régime, the fountains contribute to making the gardens of Versailles unique. On weekends from late spring to early autumn, the administration of the museum sponsors the Grandes Eaux – spectacles during which all the fountains in the gardens are in full play. Designed by Andre Le Notre, the Grand Canal is the masterpiece of the Gardens of Versailles. In the Gardens too, the Grand Trianon was built to provide Sun King with the retreat he wanted. Le Petit Trianon is associated with Marie-Antoinette who spent there many weeks with her closest relatives and friends.
    
    In 1979, the gardens along with the château were inscribed on the UNESCO World Heritage List, one of thirty-one such designations in France.', 
    price: '10000', 
    location: 'Paris', 
    photo_url: 'https://res.cloudinary.com/drgdpdviq/image/upload/v1542941290/Secret gardens/versailles.jpg', 
    host: User.first 
})
Garden.create!({ 
    name: 'Royal Gardens at Kew', 
    description: 'Royal Botanic Gardens, Kew (brand name Kew) is a non-departmental public body in the United Kingdom sponsored by the Department for Environment, Food and Rural Affairs. An internationally important botanical research and education institution, it employs 723 staff (FTE). Its board of trustees is chaired by Marcus Agius, a former chairman of Barclays.

    The organisation manages botanic gardens at Kew in Richmond upon Thames in southwest London, and at Wakehurst Place, a National Trustproperty in Sussex which is home to the internationally important Millennium Seed Bank, whose scientists work with partner organisations in more than 95 countries. Kew, jointly with the Forestry Commission, founded Bedgebury National Pinetum in Kent in 1923, specialising in growing conifers. In 1994 the Castle Howard Arboretum Trust, which runs the Yorkshire Arboretum, was formed as a partnership between Kew and the Castle Howard Estate.
    
    The organisation had 2,124,138 public visitors in the year 2016/17. Its 326-acre (132 ha) site at Kew has 40 historically important buildings; it became a UNESCO World Heritage Site on 3 July 2003. The collections at Kew and Wakehurst Place include over 28,000 taxa of living plants, 8.3 million plant and fungal herbarium specimens, and 30,000 species in the seed bank.', 
    price: '6000', 
    location: 'London', 
    photo_url: 'https://res.cloudinary.com/drgdpdviq/image/upload/v1542941265/Secret%20gardens/kewgardens.jpg', 
    host: User.first 
})
Garden.create!({ 
    name: 'Sensory Garden', 
    description: 'Here, all five of the senses are needed to fully experience and learn all this garden has to offer. It is a world of discovery and excitement, also providing great habitat for pollinators including bees and butterflies. Every feature is designed to tantalized guests to touch, see, hear and smell creating memorable experiences which will linger long after their visit to the garden to over.', 
    price: '200', 
    location: 'Kyoto', 
    photo_url: 'https://res.cloudinary.com/drgdpdviq/image/upload/v1542702105/Secret%20gardens/th-3.jpg', 
    host: User.last 
})
Garden.create!({ 
    name: 'English Cottage Garden', 
    description: 'Here, all five of the senses are needed to fully experience and learn all this garden has to offer. It is a world of discovery and excitement, also providing great habitat for pollinators including bees and butterflies. Every feature is designed to tantalized guests to touch, see, hear and smell creating memorable experiences which will linger long after their visit to the garden to over.', 
    price: '600', 
    location: 'Oxford', 
    photo_url: 'https://res.cloudinary.com/drgdpdviq/image/upload/v1542702099/Secret%20gardens/th-8.jpg', 
    host: User.last 
})
Garden.create!({ 
    name: 'Conversation Garden', 
    description: 'Stories are told in the Conversation Garden in both the memorial pavers along the path and in the quiet conversations which occur regularly in this lovely sun-filled spot.    The picturesque views of the Annual Garden and the English Cottage Garden across the pond create a contemplative moment to connect through conversation, thought or the written word.', 
    price: '300', 
    location: 'Shanghai', 
    photo_url: 'https://res.cloudinary.com/drgdpdviq/image/upload/v1542702100/Secret%20gardens/French-Country-Garden-Design-2.jpg', 
    host: User.first 
})
Garden.create!({ 
    name: 'Promenade Garden', 
    description: 'Stories are told in the Conversation Garden in both the memorial pavers along the path and in the quiet conversations which occur regularly in this lovely sun-filled spot.    The picturesque views of the Annual Garden and the English Cottage Garden across the pond create a contemplative moment to connect through conversation, thought or the written word.', 
    price: '500', 
    location: 'Kyoto', 
    photo_url: 'https://res.cloudinary.com/drgdpdviq/image/upload/v1542702103/Secret%20gardens/th.jpg', 
    host: User.last 
})

puts 'Finished creating Gardens...'

# creating bookings
puts "Adding bookings"

Booking.create({ start: DateTime.new(2018,11,24,12), end: DateTime.new(2018,11,24,15), use: 'I want to practice the saxophone for the afternoon', garden: Garden.last, guest: User.last })
Booking.create({ start: DateTime.new(2018,12,1,12), end: DateTime.new(2018,12,1,13), use: 'I want to splash out and streak it like Napoleon', garden: Garden.first, guest: User.first })

puts 'Finished!'


