interface User {
    name: string;
    age: number;
    createdAt: Date;
}

function createUser(name: string, age: number): User {
    return { name, age, createdAt: new Date() }
}

export { createUser, type User }
