//a program to understand enum iteration

enum Fruits{
    apple = "Apple",
    mango = "Mango",
    orange = "Orange"
}
const a:string = "apple"
var found:boolean = false;
//console.log(Fruits[a as Fruits]);
for(let x in Fruits){
    if(x == a){
        found = true;
        break;
    }
}

if(found){
    console.log(Fruits[a as unknown as Fruits]);
}
else{
    console.log("Not found");
}