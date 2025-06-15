// string
// number
// boolean
// any
// null
// undefined
// symbol
// bigint

const myName: string = "John Doe";

function sum(a: number, b: number): number {
    return a + b;
}

// ? = deixa opcional (so podem ser os ultimos parametros)
function greet(name: string, age?: number): string {
    let message: string = `Oi ${name}`;

    if (age !== undefined) {
        message += `, você tem ${age} anos`;
    }

    message += '!';

    return message;
}

const animal = {
    name: "Gato",
    age: 5,
}

const numeros: number[] = [2, 4, 5, 6, ];

const filter = (value: number) => value < 0;
