//Task 1

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
  ];


const filteringArrayOfObjects = (data, filter) =>{

  return data.filter((item) => {

      let arr = []

      for(let key in filter){
          arr.push([key, filter[key]])
      }

      return arr.every(([key, value]) => item[key] === value)

  })
}


// const filteringArrayOfObjects = (data, filter) =>{

//   return data.filter((item) => {
//       return Object.entries(filter).every(([key, value]) => item[key] === value)
//   })
// }


let resFiltered = filteringArrayOfObjects (data, {
  position:"middle", age: 19});

console.log(resFiltered)


// task2

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

const ownForEach = (arr, logger) => {

  for(let num of arr){

      logger(num, arr.indexOf(num), arr)
  }
}

ownForEach([1, 2, 3], logger);


let arr = [1, 2, 3]

// let test1 = arr.forEach((num) => logger(num, arr.indexOf(num), arr))

// console.log(test1);



const ownMap = (arr, increment) => {

    let arrClone = []

    for(let num of arr){
        arrClone.push(increment(num))
    }

    return arrClone
}

let resOwnMap = ownMap([1, 2, 3], increment)
console.log(resOwnMap);

// let test2 = arr.map((num) => increment(num));
// console.log(test2);


const ownFilter = (arr, isNegative) => {

  let arrClone = []

  for(let num of arr){
      if(isNegative(num) === true){ 
        arrClone.push(num)
      }
  }
  return arrClone
}

let resOwnFilter = ownFilter([-2, 4, 0, -9, -1], isNegative)
console.log(resOwnFilter)

// let arr3 = [-2, 4, 0, -9 -1]
// let test3 = arr.filter((num) => isNegative(num))
// console.log(test3)