class Person {
    static jobs = [];
    #name;
    #age;
    #money = 0;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
        Person.jobs.push(this);
    }
    whoAmI() {
        return `My name is ${this.#name} and I am ${this.#age} years old.`;
    }
    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    setMoney(value) {
        this.#money = value;
    }
    incrementMoney(value) {
        this.#money += value;
    }
    deleteJob(jobName) {
        Person.jobs = Person.jobs.filter(job => job !== jobName);
    }
}

const person = new Person('Alice', 30);

console.log(person.whoAmI());
