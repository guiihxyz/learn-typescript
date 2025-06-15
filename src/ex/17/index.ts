// record

type Settings = Record<string, string>;

//

type Offsets = Record<number, string>;

const offset: Offsets = {
    0.4: "red",
}

interface Route {
    path: string,
    children?: Routes,
}

type Routes = Record<string, Route>;

const routes: Routes = {
    home: {
        path: "/home",
    },
}

//

type Feature = "compileOnSave" | "autoSave" | "autoUpdate";

type Features = Record<Feature, boolean>;

const config: Features = {
    autoSave: true,
    autoUpdate: true,
    compileOnSave: false,
}
