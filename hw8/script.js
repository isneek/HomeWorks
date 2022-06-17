// task1

const getCountTrue = (value) => {
    const count = [];

    for(let elem of value)
    if (elem === true) {
        count.push(elem);
        console.log('elem', elem)
    }
    return count.length;
};
const countTrue = getCountTrue([true, true, false, false, false]);

const countTrue1 = getCountTrue([false, false, false, false]);

const countTrue2 = getCountTrue([]);

console.log('countTrue', countTrue)
console.log('countTrue1', countTrue1)
console.log('countTrue2', countTrue2)


// task2

const getOccurrencesCount = (arr) =>{
let result = {};
for(let i = 0; i < arr.length; i++) {
    if(!result[arr[i]]){
    result[arr[i]] = 0;
    }
    ++result[arr[i]];
    }
    console.log('result', result)
    
}

getOccurrencesCount(["a", "v", "a", "b", "b",]);

getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ]);


    // task3

const getFindExcess = (arr) =>{

    let evenNumber = [];
    let oddNumber = [];
        
    for(let num of arr) {
        if (num % 2 === 0){

            evenNumber.push(num);
        } else {
            oddNumber.push(num);
        };
    }

    if(evenNumber.length > oddNumber.length){ 
        return oddNumber[0] 
        }else{
        return evenNumber[0]
    }
}   

const number = getFindExcess([1, 2, 3]);
const number1 = getFindExcess([2, 6, 8, 10, 3]);
const number2 = getFindExcess([1, 1, 0, 1, 1]);

console.log(`number`, number);
console.log(`number1`, number1);
console.log(`number2`, number2);

