// nonnullable

type MaybeName = string | null | undefined;

type Name = NonNullable<MaybeName>;

//

interface User {
    id: number | null;
    name: string | undefined;
}

interface NonNullableUser {
    id: NonNullable<User["id"]>;
    name: NonNullable<User["name"]>;
}
