function add(num1, num2, num3) {
    if (num3 == undefined) {
        return num1 + num2;
    }
    return num1 + num2 + num3;
}
console.log(add(10, 20));
console.log(add(2, 3, 40));
