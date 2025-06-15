// generics

function getFirst<T>(array: T[]) { // costuma ser o alfabeto a partir do T
    return array[0];
}

//

function isEqual<T,>(a: T, b: T): boolean {
    return a === b;
}

//

interface ApiResponse<T> {
    data: T;
    success: boolean,
    error?: string,
}

interface User {
    id: string,
    name: string,
    role: string,
}

function fetchUser(): ApiResponse<User> {
    return {
        data: { id: "123", name: "ghxw", role: 'User' },
        success: true,
    }
}

//

class CustomArray<T> {
    private items: T[] = [];

    public add(item: T) {
        this.items.unshift(item);
    }

    public remove(): T | undefined {
        return this.items.shift();
    }

    public isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const customArray = new CustomArray<string>();

//

function logLength<T extends { length: number }>(item: T) {
    console.log(item.length)
}

//

interface HasName {
    name: string,
}

function hello<T extends HasName>(obj: T) {
    return 'hi! ' + obj.name;
}
