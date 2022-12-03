//test comment
console.log("hello typescript");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greet("Salman", new Date());
