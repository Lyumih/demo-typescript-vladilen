var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = "Hello TypeScript";
var numberArray1 = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ["Hello", "TypeScript"];
// Tuple
var contact = ["Mikhail", 1234567];
// Any
var variable = 42;
// ...
variable = "New String";
variable = [];
// ======
function sayMyName(name) {
    console.log(name);
}
sayMyName("Хайзенберг");
// Never
function throwError(message) {
    throw new Error(message);
}
function infinit() {
    while (true) { }
}
var login = "admin";
var id1 = 1234;
var id2 = "1234";
// const id1: ID = true