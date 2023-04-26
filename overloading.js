function doubleMe(num) {
    if (typeof num === "string") {
        return num + " " + num;
    }
    else if (typeof num === "number") {
        return num * 2;
    }
}
console.log(doubleMe(3));
console.log(doubleMe("Soumik"));
