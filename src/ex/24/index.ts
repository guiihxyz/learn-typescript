// as const

const colors = ["red", "green", "blue"] as const; // torna readonly

//

const action = {
    value: 1,
    format: 2,
} as const;

type ActionEnum = typeof action;
type Actions = keyof ActionEnum;
