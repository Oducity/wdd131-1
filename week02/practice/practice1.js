
/* Remender operation where the % symbol is the remender opretor.*/

/* Below is an example of the use of array.filter() method */

function isBigEnough(value) {
    return value >= 10;
}

const nums = [12, 5, 8, 130, 44];
console.log(nums.filter(isBigEnough));

/* Another example of array.filter() method use case. */

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n % 2 === 0) {
        return n === 2;
    }

    for (let factor = 3; factor * factor <= n; factor += 2) {
        if (n % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log(array.filter(isPrime));


/* Array.map() method simple use */

const array1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const mapped = array1.map((value) => parseInt(value, 10)); //Called the map() method, pass in a arrow function "=>" which takes value as parameter, within the function, convert to int using the parseInt(value, 10) function and store in a variable "mapped".
console.log(mapped);

/*The array.reduce() method is used to reduce the array to a
 single value. It executes a reducer function on each element
 of the array, resulting in a single output value. The reducer
 function takes four arguments: accumulator, current value,
 current index, source array. The reducer function's
returned value is assigned to the accumulator, whose value is
remembered across each iteration throughout the array and
ultimately becomes the final, single resulting value. */

//First use case, this takes the initialValue as the
// currentvalue and iteration and calculation starts with
// element at index 0 and the result is the sum of all
// elements in the array.

const givenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initialValue = 0;
const sumWithInitialValue = givenNumbers.reduce((acummulator, currentValue) => acummulator + currentValue, initialValue);
console.log(sumWithInitialValue);

//Second use case, this takes the element at index 0 as the
// currentvalue and iteration and calculation starts with
// element at index 1 and the result is the sum of all
// iterated and calculated elements in the array..

const givenNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumWithInitialValue1 = givenNumbers1.reduce(
    (acum, currentVal) => acum + currentVal, initial
);
console.log(sumWithInitialValue1);