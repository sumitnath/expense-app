console.log('hwhwh');
////// Obvject destructuring
const person = {
    name: 'sumit',
    age: 37,
    location: {
        city: 'delhi',
        temp: 92
    }
}


console.log(`${person.name} is ${person.age} old. He lives in ${person.location.city}
 , temperatur of the city is often ${person.location.temp}`)

const { name: firstName = 'unknown', age } = person;
const { city: place = 'unknown Area', temp } = person.location;
console.log(`${firstName} is ${age} old. He lives in ${place}
 , temperatur of the city is often ${temp}`)


const book = {
    title: 'Ego is the enemy',
    author: 'Ryn dublo',
    publisher: {
        name: 'Penguin'
    },
}

const { name: publisherName = ' unknown' } = book.publisher
console.log(publisherName)

////// Array destructuring

const address = ['170', 'gali no -4', 'rttameshwar nagar', 'model town', 'delhi', '110009'];

const [houseNo, streetNo, area, nearBy, city, zip] = address;

console.log(` he lives in ${houseNo},${streetNo},${area},${nearBy},${city},${zip}`)

const item = ['coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [hotcoffee, , medium] = item;
console.log(`The medium ${hotcoffee} cost is ${medium}.`)