// extract

type Primitive = string | number | boolean | string[] | number[] | Date | Set<string>;

type MyType = Extract<Primitive, { length: number }>;
