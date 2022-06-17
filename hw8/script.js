// task1

// const getCountTrue = (arr) => {
//     const count = [];
//     for(let elem of arr)
//     if (elem === true) {
//         count.push(elem);
//         console.log('elem', elem)
//     }
//     return count;
// };

// const countTrue = getCountTrue([true, false, false, true, false]);

// console.log('countTrue', countTrue)


// task2

// const getOccurrencesCount = (arr) =>{
// result = { };
// for(let i = 0; i < arr.length; ++i) {
//     if(!result[arr[i]]){
//     result[arr[i]] = 0;
//     }
//     ++result[arr[i]];
//     }
// }

// getOccurrencesCount(["a", "v", "a", "b", "b",]);

// console.log(result);

// getOccurrencesCount([
//     "apples",
//     "oranges",
//     "pears",
//     "pears",
//     "apples",
//     "oranges",
//     "oranges",
//     "pears",
//   ]);

//     console.log(result);


    // task3

const getFindExcess = (arr) =>{
    let evenNumbers = [];
    let oddNumbers = [];
        
    for(let num of arr) {
        if (num % 2 === 0){
            evenNumbers.push(num);
            console.log(`evenNumbers`, evenNumbers)
         } else {
            oddNumbers.push(num);
            console.log(`oddNumbers`, oddNumbers)
         };
    }
}

getFindExcess([1, 2, 3]);
// getFindExcess([2, 6, 8, 10, 3]);
// getFindExcess([1, 1, 0, 1, 1]);

