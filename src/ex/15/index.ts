// narrowing

function printValue(value: string | number | boolean) {
    if (typeof value === "string") {
        return;
    }

    if(typeof value === "number") {
        return;
    }
}

//

class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
        return;
    }

    animal.meow();
}

//

interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
        return;
    }

    animal.fly();
}

//

function handle(value: string | undefined | null) {
    if(!value) return;

    value.toUpperCase();
}

interface User {
    id: string,
    name: string,
    nickname?: string,
}

function handleUser(user?: User) {
    if (!user) return;

    user.id.toUpperCase();
    user.name.toUpperCase();

    if (user.nickname) {
        user.nickname.toUpperCase();
    }

}

//

interface Animal {
  name: string;
  age: number;
  follow(): void;
}

interface Human {
  name: string;
  age: number;
  pets?: Animal[];
}

interface Post {
  title: string;
  author: Human;
}

function otherHandle(value: Animal | Human | Post) {
    if ("follow" in value) {
        return;
    }

    if ("title" in value) {
        return;
    }
}
