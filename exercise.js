//Exercise 1
class Person {
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        let foundIdx = this.hobbies.indexOf(hobby);
        
        let valuesBefore = this.hobbies.slice(0, foundIdx)

        let valuesAfter = this.hobbies.slice(foundIdx + 1);

        this.hobbies = valuesBefore.concat(valuesAfter);
    }

    greeting() {
        console.log ("Hello fellow person!");
    }

    //override the object.prototype.tostring

    toString() {
        return Object.values(this.toString);
    }
}
//Exercise 2

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);
        
        this.occupation = occupation;
    }

    greeting() {
        console.log("hello, Im a coder!");
    }
}

//Exercise 3

let coder = new Coder("Lucas", 3, "Nevada", ["soccer", "coding", "games"], "full stack web developer");
console.log(coder);

coder.addHobby("Studying");

console.log(coder);

coder.removeHobby("coding");

console.log(coder);

coder.greeting(coder);

console.log(coder.toString)
//Exercise 4

class Calculator {
    result = 0;

    add(a, b) {
        let res;

        if(b == undefined) {
            res = this.result + a;
        } else {
            res = a + b;
        }

        this.result = res;
        return this.result;
    }

    subtract(a, b) {
        let res;

        if (b == undefined) {
            res = this.result - a;
        } else {
            res = a - b;
        }
        
        this.result = res;
        return this.result;
    }

    multiply(a, b) {
        let res;

        if (b == undefined) {
            res = this.result * a;
        } else {
            res = a * b;
        }

        this.result = res;
        return this.result;
    }

    divide(a, b) {
        let res;

        if(b == undefined) {
            res = this.result / a;
        } else {
            res = a / b;
        }

        this.result = res;
        return this.result;
    }
    display() {
        console.log(this.result);
    }
}

    let calc = new Calculator();

calc.add(10);
calc.subtract(2);
calc.multiply(4);
calc.divide(2);
calc.display();