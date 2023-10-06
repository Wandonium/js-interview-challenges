const passengers = [
    {
      id: 1,
      passengerName: "Freddie Mercury",
      isVegetarianOrVegan: false,
      connectedFlights: 2,
    },
    {
      id: 2,
      passengerName: "Amy Winehouse",
      isVegetarianOrVegan: true,
      connectedFlights: 4,
    },
      {
      id: 3,
      passengerName: "Kurt Cobain",
      isVegetarianOrVegan: true,
      connectedFlights: 3,
    },
       {
      id: 3,
      passengerName: "Michael Jackson",
      isVegetarianOrVegan: true,
      connectedFlights: 1,
    },
];

// Main Question: Get the passengers' names using the data provided 
const names = passengers.map(pass => pass.passengerName);
console.log('names: ', names);
// Bonus Part (a)- Return vegetarians/vegans
const vegs = passengers.filter(pass => pass.isVegetarianOrVegan == true).map(pass => pass.passengerName);
console.log('vegs: ', vegs);
// Bonus Part (b)- Sort passengers by the number of connected flights in descending order
const sorted = passengers.sort((p1, p2) => p1.connectedFlights - p2.connectedFlights);
console.log("sorted: ", JSON.stringify(sorted, null, 2));

// write the createBase() function
//var addSix = createBase(6);
//addSix(10); // returns 16
//addSix(21); // returns 27

let createBase = base => {
    return function(n) {
        return n + base;
    }
}

var addSix = createBase(6);
console.log("addSix(10): ", addSix(10));
console.log("addSix(21): ", addSix(21));

// fizzbuzz
for(let i = 1; i <= 15; i++) {
    if(i%3 == 0 && i%5 == 0) console.log(`fizzbuzz`);
    else if(i%3 == 0) console.log(`fizz`);
    else if(i%5 == 0) console.log(`buzz`);
    else console.log(i);
}

// change object properties without changing original object

const heroes = [
    { name: 'Wolverine', family: 'Marvel', isEvil: false},
    { name: 'Deadpool', family: 'Marvel', isEvil: false},
    { name: 'Batman', family: 'DC Comics', isEvil: false},
    { name: 'Harley Quinn', family: 'DC Comics', isEvil: true},
    { name: 'Saruman', family: 'Tolkien', isEvil: true},
]

const newHeroes = heroes.map(h => {
    h.name = h.name.toUpperCase();
    return h;
});

// changes the original object.
console.log('heroes: ', heroes);

const newHeroes2 = heroes.map(h => {
    return {...h, name: h.name.toLowerCase()};
});

// does not change the original object.
console.log("heroes: ", heroes);
console.log('newHeroes2: ', newHeroes2);