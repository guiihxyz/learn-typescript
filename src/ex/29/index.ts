// exclude

type Primitive = string | number | boolean;

type Value = Exclude<Primitive, boolean>; // exclui um tipo de um union

//

enum Colors {
    red = "#ff0000",
    green = "#00ff00",
    blue = "#0000ff",
}

type WarmColors = Exclude<Colors, Colors.blue | Colors.green>;
type CooldColors = Exclude<Colors, WarmColors>;

interface Message<T> {
    type: T;
    content: string;
    color: T extends "warm" ? WarmColors : CooldColors;
}

function createMessage<T extends "warm" | "coold">(options: Message<T>) {

}

createMessage({
    type: "coold",
    content: "hello",
    color: Colors.blue,
});
