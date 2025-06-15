// mapped types

interface User {
    id: string;
    name: string;
    age?: number;
    email: string;
    isAdmin?: boolean;
    send(): string;
    join(): void;
    isActive(): boolean;
}

type MyPartial<T> = {
    [Key in keyof T]?: T[Key] // deixa partial
}

type MyRequired<T> = {
    [Key in keyof T]-?: T[Key] // deixa required
}

type ToBooleanRecord<T> = {
    [Key in keyof T]: boolean; // transforma tudo em boolean
}

type UnderscoreProps<T> = {
    [Key in keyof T as Key extends string ? `_${Key}` : Key]: T[Key]; // edita o nome
}

type NoMethods<T> = {
    [Key in keyof T as T[Key] extends Function ? never : Key]: T[Key]; // remove
}

type NoProps<T> = {
    [Key in keyof T as T[Key] extends Function ? Key : never]: T[Key]; // remove
}

type RemovePropType<T, U> = {
    [Key in keyof T as T[Key] extends U ? never : Key]: T[Key]; // remove de acordo com o tipo passado
}
