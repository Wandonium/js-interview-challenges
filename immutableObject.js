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