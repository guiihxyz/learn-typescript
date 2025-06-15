// partial

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean
}

type PartialUser = Partial<User>; // todas as propriedades nao sao obrigatorias

const user: PartialUser = {

}

type PartialUserOmit = Partial<Omit<User, "name">> & Pick<User, "name">;

const partialUser: PartialUserOmit = {
    name: "gh",
}
