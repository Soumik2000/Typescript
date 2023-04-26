//a program to understand enum iteration
var Fruits;
(function (Fruits) {
    Fruits["apple"] = "Apple";
    Fruits["mango"] = "Mango";
    Fruits["orange"] = "Orange";
})(Fruits || (Fruits = {}));
var a = "apple";
var found = false;
//console.log(Fruits[a as Fruits]);
for (var x in Fruits) {
    if (x == a) {
        found = true;
        break;
    }
}
if (found) {
    console.log(Fruits[a]);
}
else {
    console.log("Not found");
}
