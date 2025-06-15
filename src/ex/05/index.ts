// interfaces

interface UserWallet {
    coins?: number,
    credits?: number,
}

interface User {
    name: string,
    createdAt: Date,
    wallet?: UserWallet,
    talk(): void,
}

function createUser(name: string): User {
    return { name, createdAt: new Date(),
        talk() {
            console.log(`Oi, eu sou ${this.name}`);
        }
    };
}

function updateWallet(user: User, wallet: UserWallet) {
    user.wallet = { ...user.wallet, ...wallet };
}

const user = createUser("guiihxyz");

user.talk();

updateWallet(user, { coins: 100 });

interface Admin extends User {
    kick(user: User): void,
    ban(user: User): void,
}

function promoteUser(user: User): Admin {
    return {
        ...user,
        kick(userToKick: User) {
            console.log(`Usuário ${userToKick.name} foi expulso!`);
        },
        ban(userToBan: User) {
            console.log(`Usuário ${userToBan.name} foi banido!`);
        },
    }
}

const admin = promoteUser(user);

function adminAction(admin: Admin) {

}

adminAction(admin);

// sobscrevendo

declare global {
    interface Console {
        sayHello(): void,
    }
}

Object.assign(console, {
    sayHello() {
        console.log("Hello, world!");
    }
});

console.sayHello();
