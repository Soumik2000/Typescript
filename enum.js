//A simple example of enum
var Role;
(function (Role) {
    Role[Role["endUser"] = 0] = "endUser";
    Role[Role["admin"] = 1] = "admin";
})(Role || (Role = {}));
var b = "endUser";
console.log(typeof Role[0]);
console.log(typeof '');
