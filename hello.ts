//test comment
console.log("hello typescript");

function greet(person:string,date:Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

greet("Salman",new Date());
