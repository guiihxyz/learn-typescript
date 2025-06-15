// omit

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean
}

type BasicUserInfo = Omit<User, "id" | "name">; // pega todos menos os selecionados

const user: BasicUserInfo = {
    email: "a@a.a",
    isAdmin: false,
}

//
