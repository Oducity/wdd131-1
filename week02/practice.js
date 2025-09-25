const Day = 6;
const limit = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++){
    if (studentReport[i] < limit) {
        console.log(studentReport[i]);
    }
}
const temperature1 = 50;
const velocity1 = 5;

let windChill1;
let condition1;

if (temperature1 >= 40 && velocity1 > 3)
{
    windChill1 = windChillA(temperature1, velocity1);
}

console.log(windChill1);
//studentReport.forEach(function (studentReport, index) {
//    console.log(studentReport[index]);
//})
function windChillA(temperature, velocity) {
    value1 = 35.74 + 0.6215 * temperature - 35.75 * (velocity ** 0.16) + 0.4275 * temperature * (velocity ** 0.16);
    return value1.toFixed(2);
};