// conditional types

type Conditional<T> = T extends string ? "string" : "not a string";

function conditional<T>(value: T): Conditional<T> {
    const text = typeof value === "string" ? "string" : "not a string";

    return text as Conditional<T>;
}

//

class SelectMenu {};
class Checkbox {};
class Input {};
class Button {};

type ElementType = "input" | "button" | "selectmenu" | "checkbox";

type GetElement<T> =
    T extends "input" ? Input :
    T extends "button" ? Button :
    T extends "selectmenu" ? SelectMenu :
    T extends "checkbox" ? Checkbox :
    never;
