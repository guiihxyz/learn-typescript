// keyof

interface Person {
    name: string,
    age: number,
    email: string,
}

type PersonKeys = keyof Person;

function modifyProp(prop: PersonKeys) {

}

//


