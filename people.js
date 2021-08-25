const faker = require('faker')

const alienLastNames = ["Borzox", "Grablar", "Fretotron", "Morbulax", "Trizonon", "Felubitzo", "Predorazan", "Turbulon", "Urr", "Bugozoid", "Frenuloum", "Belchozar", "Banupaalizeaon", "Frunembulon", "Horstopdes", "Blorfnox", "Tezaranax", "Forbumuron", "Calizizarnoc", "Dakorezonoid", "Frumbunculus", "Tezzabar", "Zanocharg", "Flermutron", "Beeblebrox", "Zeenox", "Zurg", "Zurutran", "Alphomos"]

const makePerson = () => {
    const shouldGetAlienLastName = Math.floor(Math.random() * 10) < 3
    const lastName = shouldGetAlienLastName 
    ? alienLastNames[Math.floor(Math.random() * alienLastNames.length)] 
    : faker.name.lastName()
    
    const person = {
        firstName: faker.name.firstName(),
        lastName: lastName,
    }

    return person
}

const makePeople = (numPeople) => {
    const people = []
    for (let index = 0; index < numPeople; index++) {
        people.push(makePerson())
    }

    return people
}

module.exports = { makePerson, makePeople }