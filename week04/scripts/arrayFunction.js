let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0));
console.log(namesB);

let namesLength = names.map((name) => name.length);
console.log(namesLength);

const initial = 0;
let averageStringLength = console.log(names.reduce((acumm, curVal) => acumm + curVal.length, initial) / names.length);


/* Below is the explanation of the averageStringLength operation:
The initial value of the reduction is set to 0. Inside the
reducer function, total represents the accumulated sum of
string lengths, and name represents each individual name in
the array. The reducer function adds the length of each name
to the total in each iteration.
(like any accumulator, total += name.length).
*/