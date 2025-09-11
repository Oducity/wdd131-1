const Day = 6;
const limit = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++){
    if (studentReport[i] < limit) {
        console.log(studentReport[i]);
    }
}

//studentReport.forEach(function (studentReport, index) {
//    console.log(studentReport[index]);
//})