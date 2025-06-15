// never

function error(message: string): never {
    throw new Error(message);
}

function main() {
    error('404');

    console.log('oi');
}

//

function type(x: string | number) {
    if (typeof x === "string") {

        return;
    }

    if (typeof x === "number") {

        return;
    }

    
}
