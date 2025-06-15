// infer

type ArrayType<Arr> =
    Arr extends string[] ? string :
    Arr extends number[] ? number :
    Arr extends (string | number)[] ? string | number :
    never;

//

type ArrayTypeInfer<Arr> =
    Arr extends Array<infer U> ? U : never; // metodo correto em vez do feito la em cima
