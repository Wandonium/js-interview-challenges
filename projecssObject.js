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