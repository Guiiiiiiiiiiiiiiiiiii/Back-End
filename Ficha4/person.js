function Person(firstName, lastName, age) {
    this.firstName = firstName,
    this.lastName = lastName
}
Person.prototype.greet= function(){
    console.log("hello"+" " +this.firstName +" "+ this.lastName +" "+this.age);
}
Person.prototype.age = null

var john = new Person("John", "Doe");
john.age = 20
john.greet();

var Jane = new Person("Jane", "Doe");
Jane.age = 19
Jane.greet();

console.log(john.__proto__);
console.log(Jane.__proto__);
console.log(john.__proto__ == Jane.__proto__);


