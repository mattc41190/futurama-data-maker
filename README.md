# Futurama Data Maker

<p align="center">
  <img width="200" height="385"  src="meta/bender.png">
</p>
<!-- ![Bender](meta/bender.png) -->

## What is this?

This is a script that creates fake data that has some _Futurama-y_ stank on it.

It produces: 

- __Crew__ All current / all time planet express crew members and their alive status
- __Persons__ who 30% of the time have spacey sounding last names like: _Borzox_ and _Dakorezonoid_
- __Delivery Addresses__ that use __Futurama-y__ planets, sector, streets, and lat/long.

## Examples

- Crew

```json
{
    "firstName": "Phillip",
    "lastName": "Fry",
    "alive": true,
    "positionType": "delivery"
}
```

- Person

```json
{
    "firstName": "Nedra",
    "lastName": "Bugozoid"
}
```


- Delivery

```json
{
    "planet": "Omicron Persei 8",
    "sector": 138,
    "streetAddress": "591 Mayer Spring",
    "latitude": "-83.6251",
    "longitude": "139.1034"
}
```


## Why make this?

As the companion to a blog I am writing about SQLAlchemy that I don't want to suck.

## How do I use this?

There are two ways to use this:

- Copy pre-made data either in a combined format or individually see: _premade-data_ dir for files.
- Clone this (`git clone <this-repo>`) install deps (`npm i`) and run it (`node index.js`)