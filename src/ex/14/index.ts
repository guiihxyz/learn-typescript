// type guards

function printValue(value: string | number) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase);
    } else {
        console.log(value.toFixed(2));
    }
}

//

class Dog {
    bark() {
        console.log("auau");
    }
}

class Cat {
    meow() {
        console.log("miau");
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
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();
        return;
    }

    animal.fly();
}

//

interface Chef {
    cook(): void;
    certificate: string;
}

interface Teacher {
  teach(): void;
  diploma: string;
}

interface Driver {
  drive(): void;
  license: string;
}

type Professionals = Chef | Teacher | Driver;

function isChef(value: Professionals): value is Chef {
    return (value as Chef).cook !== undefined;
}

function execute(professional: Professionals) {
    if (isChef(professional)) {
        professional.certificate;
        return;
    }
}

class Professional {
    isChef(): this is Chef {
        return this instanceof Chef;
    }
    isTeacher(): this is Teacher {
        return this instanceof Teacher;
    }
    isDriver(): this is Driver {
        return this instanceof Driver;
    }
}

class Chef extends Professional {

}

class Teacher extends Professional {

}

class Driver extends Professional {

}

function test(professional: Professional) {
    if (professional.isChef()) {
        console.log('chefe é chefe');
    }
}
