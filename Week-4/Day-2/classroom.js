class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      return `Hello, my name is ${this.name}.`;
    }
}
  
class Student extends Person {
    constructor (name, level) {
        super(name);
        this.level = level;
    }

    study() {
        return `${this.name} is studying for ${this.level} exams.`
    }
}

class Teacher extends Person {
    constructor (name, department) {
        super(name);
        this.department = department;
    }

    teach() {
        return `${this.name} is teaching ${this.department}.`
    }
}

const jack = new Student("Jack", "Junior");
const jill = new Teacher("Jill", "Mathematics");
console.log(jack.study());
console.log(jill.teach());
console.log(jack.greet());
