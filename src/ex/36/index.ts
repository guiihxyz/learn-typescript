// declare

declare var gh: string;

declare global {
    const gh: string;
}

Object.assign(globalThis, {
    gh: "gh",
});

//

interface UserData {
    id: string;
    name: string;
}

class User {
    declare id: string;
    declare name: string;

    constructor(data: UserData) {
        Object.assign(this, data);
    }
}

//

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
        }
    }
}

console.log(process.env.PORT);
