
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

console.log(araay.filter(isPrime));


/* Array.map() method simple use */

const array1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const mapped = array1.map((value) => parseInt(value, 10));
console.log(mapped);