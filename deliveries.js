const faker = require('faker')

const planets = ["Amazonia", "Amphibios 9", "Chapek 9", "Cineplex 14", "Cyclopia", "Decapod 10", "Doohan 6", "Earth", "Eternium", "Europa", "Globetrotter Planet", "Jupiter", "Klingon", "Maple Craters", "Mars", "Mercury", "Near Death Star", "Neptune", "Neutral Planet", "Nigel 7", "Nursery Planet", "O'Cyris IV", "Omega 3", "Omicron Persei 8", "Pandora", "Planet of the Moochers", "Pluto (Planet Planet Planet)", "Rumbledeehump", "Saturn", "Spa 5", "Spheron I", "Stumbos IV", "Subterra 3", "Tarantulon 6", "Thuban 9", "Titan", "Tova 9", "Trisol", "Tweenis 12", "Uranus", "Urectum", "Venus", "Vergon 6", "Wormulon", "Xenotaph 3"]

const makeDeliveries = (numDeliveries) => {
    const deliveries = []
    
    for (let index = 0; index < numDeliveries; index++) {
        const planet = planets[Math.floor(Math.random() * planets.length)]
        const sector = Math.floor(Math.random() * 200)
    
        const delivery = {
            planet: planet,
            sector: sector,
            streetAddress: faker.address.streetAddress(),
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude(),
        }    
    
        deliveries.push(delivery)
    }

    return deliveries
}

module.exports = { makeDeliveries }