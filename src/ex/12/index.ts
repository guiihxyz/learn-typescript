// class

export class Player {
    private static players: Player[] = [];
    public static getPlayers(): Player[] {
        return Player.players;
    }
    private name: string;
    private health: number;
    constructor(name: string) {
        this.name = name;
        this.health = 100;
        Player.players.push(this);
    }
    public getName(): string {
        return this.name;
    }
    public getHealth(): number {
        return this.health;
    }
    public takeDamage(amount: number, damager?: Player): void {
        const updateHealth = this.health - amount;

        console.log(damager ? `${damager.getName()} deu ${amount} de dano em ${this.getName()}` : `${this.name} tomou ${amount} de dano`);

        if (updateHealth < 0) {
            this.health = 0;
            this.die(damager);
            return;
        }

        this.health -= updateHealth;
    }
    private die(damager?: Player): void {
        console.log(damager ? `${damager.getName()} matou ${this.getName}` : `${this.getName} morreu`)
    }
}

const guiihxyz = new Player("guiihxyz");
const roberto = new Player("robeto");

guiihxyz.takeDamage(50, roberto);

/////////////////////

class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    makeSound(): void {
        console.log(`${this.name} está fazendo um som`);
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    makeSound(): void {
        console.log(`${this.name} está latindo`);
    }
}

const dog = new Dog("Rex", 5, "Labrador");
dog.makeSound();

////////////////////////

interface Drivable {
    startEngine(): void;
    drive(): void;
}

class Car implements Drivable {
    startEngine(): void {
        console.log("Motor do carro ligado");
    }
    drive(): void {
        console.log("Carro está dirigindo");
    }
}

///////////////////

abstract class Shape {
    abstract area(): number;

    describe(): void {
        console.log('isso é uma forma')
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

///////////////////////////////

class Person {
    protected age: number;
    constructor(age: number) {
        this.age = age;
    }
    protected getAge(): number {
        return this.age;
    }
}

class Employee extends Person {
    private name: string;
    constructor(name: string, age: number) {
        super(age);
        this.name = name;
    }
    public introduce(): void {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.getAge()} anos.`);
    }
}
