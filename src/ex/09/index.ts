// type inserctions

interface Robot {
    materiaL: string,
    fuel: string,
}

interface Human {
    name: string,
    age: number,
}

type Cyborg = Robot & Human;

const cyborg: Cyborg = {
    materiaL: "metal",
    fuel: "electricity",
    name: "Cyborg",
    age: 5,
}
