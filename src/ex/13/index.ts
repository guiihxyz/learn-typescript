// overload

/**
 * Criar uma nova data a partir de outra data
 */
function createDate(value: Date): Date;
/**
 * Criar uma nova data a partir de um número
 */
function createDate(value: number): Date;
/**
 * Criar uma nova data a partir de um texto
 */
function createDate(value: string): Date;
function createDate(value: Date | number | string): Date {
    return new Date(value);
}

////////////////////

interface Person {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    breed: string;
}

interface House {
    address: string;
    size: number;
}

function generate(type: "person"): Person;
function generate(type: "dog"): Dog;
function generate(type: "house"): House;
function generate(type: "person" | "dog" | "house"): Person | Dog | House {
    switch(type) {
        case "person": return {
            name: "John Doe",
            age: 30
        }
        case "dog": return {
            name: "Rex",
            breed: "Labrador"
        }
        case "house": return {
            address: "123 Main St",
            size: 120
        }
    }
}

////////////////////

interface Component {
    id: string;
    label: string;
}

interface Button extends Component {
    style: string;
}

interface SelectMenu extends Component {
    options: string[];
}

enum InputType {
    String,
    Number,
    Date,
    Email,
    Password
}

interface Input extends Component {
    type: InputType;
}

function buildComponent(id: string, label: string, style: string): Button;
function buildComponent(id: string, label: string, options: string[]): SelectMenu;
function buildComponent(id: string, label: string, type: InputType): Input;
function buildComponent(id: string, label: string, arg: string | string[] | InputType): Button | SelectMenu | Input {
    if (typeof arg === 'string') {
        return { id, label, style: arg};
    }
    if (Array.isArray(arg)) {
        return { id, label, options: arg };
    }
    return { id, label, type: arg  as InputType };
}

////////////////

class Player {
    public name: string;
    public nickname: string;
    public health: number;

    constructor(name: string, nickname: string);
    constructor(name: string, health: number);
    constructor(name: string, arg: string | number) {
        this.name = name;
        if (typeof arg === 'string') {
            this.nickname = arg;
            this.health = 100;
        } else {
            this.health = arg;
            this.nickname = name;
        }
    }
}
