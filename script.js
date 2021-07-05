//Assignment1
// const name = 'Parrot'
// const colors = ['Red', 'Green', 'Blue', 'Yellow']

// const bird = {
//   name,
//   colors,
// }

// console.log(bird)

// const name = 'Parrot'
// const colors = ['Red', 'Green', 'Blue', 'Yellow']
// const talons = true

// const bird = {
//   name,
//   colors,
//   talons
// }

// console.log(bird)

// const capital = 'Hanoi'
// const continent = 'Asia'

// const vietnam = {
//   capital,
//   continent
// }

// console.log(vietnam)

// const wheelsCount = 4
// const doorsCount = 4
// const color = 'black'

// const car = {
//   wheelsCount,
//   doorsCount,
//   color
// }

// console.log(car)

//Assignment2
// function getAverage(obj) {
//     const {x,y,z}=obj
//     return Math.floor((x + y + z) / 3.0);
//   }
//   console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }))

// function getAddress(obj) {
//     const {city,country, address:{street}} = obj
//     console.log(street)
//     console.log(city)
    
//     return city === "HCMC" && country === "Vietnam" && street === "Ton Dan"; // CHANGE ME
//   }
  
 
//   console.log(getAddress({
//     city: "HCMC",
//     country: "Vietnam",
//     address: {
//       number: 12,
//       street: "Ton Dan",
//       district: "4",
//     },
//   }))
// function objectifyElements(arr) {
//     const [first,second,third, ,fourth] = arr
//     // CHANGE ME
  
//     return { first, second, third,fourth };  // CHANGE ME
//   }
  
//   console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4)
// function getFoodItems() {
//     const food = [
//       ["carrots", "beans", "peas", "lettuce"],
//       ["apples", "mangos", "oranges"],
//       ["cookies", "cake", "pizza", "chocolate"],
//     ];
//     const [[carrots],[,mangos],[cookies]] = food; // CHANGE ME
//     console.log(carrots)
//     console.log(mangos)
//     console.log(cookies)
    
//     return { carrots, cookies,mangos } // CHANGE ME
//   }
  
//   console.log(getFoodItems().mangos === 'mangos')

//Assignment3
function restParams(first, ...rest) {
    return first === 'first' && rest[0] === 'second'
  }
  
  console.log(restParams("first","second")); // CHANGE ME

  function restParams2(first, ...rest) {
  return first === 'first' && rest[0] === 'second' && rest[1] === 'third'
}

console.log(restParams2('first','second','third')); // CHANGE ME

function restParams3(first, ...rest) {
    return first === "first" && rest[0] === "second" && rest[1] === "third" && rest[2] === undefined;
  }
  
  console.log(restParams3('first','second','third')); // CHANGE ME


function restParams4(...rest) {
    return rest[2] === "first" && rest[0] === "second" && rest[1] === "third"; // CHANGE ME
  }
  
  console.log(restParams4("second", "third","first"));

function ontoAnObject() {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {};
    // CHANGE BELOW
    object.one = array[0];
    object.two = array[1];
    object.three = array[2];
    object.rest = array.slice(3);
    // CHANGE ABOVE
   ({one,two,three,...rest}=array)
    return object;
  }