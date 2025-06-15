// pick

interface User {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean
}

type BasicUserInfo = Pick<User, "id" | "name">; // pega todos selecionados

//

type DateProps = "getHours" | "getMinutes" | "getDay";
type DateTime = Pick<Date, DateProps>;
