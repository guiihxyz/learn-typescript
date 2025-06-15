// tipagem recursiva

type JSONValue = string | number | boolean | JSONValue[] | { [key: string]: JSONValue };

//

type PackageJson = typeof import("../../../package.json");

// type PartialPackageJson = Partial<PackageJson>;

type NestedPartial<T> = {
    [K in keyof T]?: T[K] extends object ? NestedPartial<T[K]> : T[K];
}

//

const names = "gh,dark,vini,bruno";

const arrnames = names.split(",");

type Split<S extends string, T> =
    T extends `${infer Splited}${S}${infer Rest}` ? Splited | Split<S, Rest> : never;

type Names = Split<",", typeof names>;
