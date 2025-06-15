// readonly

interface User {
    readonly id: string,
    name: string,
    age: number,
}

const user: User = {
    id: "asr23ir",
    name: "gh",
    age: 22,
}

//

class Command {
    public readonly createdAt: Date;
    public name: string;

    constructor(name: string) {
        this.name = name;
        this.createdAt = new Date();
    }

    public run() {
        this.name = "gh";
    }
}

//

interface Player {
    nick: string;
    health: number;
    shield: number;
    inventory: string[];
}

type StaticPlayer = Readonly<Player>;

//

const player: Player = {
    nick: "gh",
    health: 30,
    shield: 11,
    inventory: ["potion", "wand", "book"],
}

function freeze<T extends object>(obj: T): Readonly<T> {
    return Object.freeze(obj);
}

const staticPlayer = freeze(player);
