// Let's go already!
const path = require('path')
const fs = require('fs')

const crewMaker = require('./crew.js')
const peopleMaker = require('./people.js')
const deliveriesMaker = require('./deliveries.js')

const crew = crewMaker.makeCoreCrew()
const senders = peopleMaker.makePeople(500)
const recipients = peopleMaker.makePeople(500)
const deliveries = deliveriesMaker.makeDeliveries(1150)
const combined = {crew, senders, recipients, deliveries}

const crewContents = new Uint8Array(Buffer.from(JSON.stringify(crew)))
const sendersContents = new Uint8Array(Buffer.from(JSON.stringify(senders)))
const recipientsContents = new Uint8Array(Buffer.from(JSON.stringify(recipients)))
const deliveriesContents = new Uint8Array(Buffer.from(JSON.stringify(deliveries)))
const combinedContents = new Uint8Array(Buffer.from(JSON.stringify(combined)))

const crewFile = 'crew.json'
const sendersFile = 'senders.json'
const recipientsFile = 'recipients.json'
const deliveriesFile = 'deliveries.json'
const combinedFile = 'combined.json'

const filesAndContents = [
    {file: crewFile, contents: crewContents},
    {file: sendersFile, contents: sendersContents},
    {file: recipientsFile, contents: recipientsContents},
    {file: deliveriesFile, contents: deliveriesContents},
    {file: combinedFile, contents: combinedContents},
] 

filesAndContents.forEach((data) => {
    fs.writeFile(path.resolve('premade-data', data.file), data.contents, (err) => {
        if (err) {
            throw err
        }
        console.log(`${data.file} was saved...`)
    })
})

