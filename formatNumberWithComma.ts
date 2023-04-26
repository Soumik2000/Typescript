// A typescript program to display a number in comma seperated format

var inputNumber: number | string = 1235.567

//use toLocaleString() method to convert the number to comma formatted value

var formattedNumber: number | string = inputNumber.toLocaleString();

var formattedNum: number = Number(formattedNumber); // returns not a number (NaN)

console.log(formattedNumber);
console.log(formattedNum);