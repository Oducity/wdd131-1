let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0));
console.log(namesB);

let namesLength = names.map((name) => name.length);
console.log(namesLength);

const initial = 0;
let sumNameLength = names.reduce((acumm, curVal) => acumm + curVal.length, initial) / names.length;