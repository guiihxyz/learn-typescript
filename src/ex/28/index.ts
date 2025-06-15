//

interface User {
    id?: string;
    name?: string;
    email?: string;
    isAdmin?: boolean
}

type RequiredUser = Required<User>; // todas as propriedades sao obrigatorias

//

type MyUserOptions = Required<Pick<User, "name" | "email">> & Omit<User, "name" | "email">; // deixa apenas os selecionados obrigatorios e o resto nao, caso nao seja obrigatorio
