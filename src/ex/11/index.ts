// tipagem de funcoes

type Args = string | number | boolean

function bootstrap(dirname: string, args?: Args[]): boolean {
    return true;
}

bootstrap(import.meta.dirname, [2, 4, 'hello', true]);

type MainFunction = (args: string[]) => void;

const main: MainFunction = (args) => {

}

interface Functions {
    run(context: any): void,
    execute(): boolean,
    handle(req: Request, res: Response): void,
}

const funcs: Functions = {
    run(context) {
        console.log('Running with context:', context);
    },
    execute() {
        return true;
    },
    handle(req, res) {

    }
}

function oldCustomLog(text: string, color: string = 'green', time?: Date, author?: string) {
    console.log(color, text);

    if (time) console.log('Time:', time.toString());
    if (author) console.log('Author:', author);
}

oldCustomLog('Hello, World!', 'blue', new Date(), 'John Doe');

interface CustomLogOptions {
    color?: string,
    time?: Date,
    author?: string
}

function customLog(text: string, options: CustomLogOptions = {}) {
    const { color = "green", time, author } = options;

    console.log(color, text);

    if (time) console.log('Time:', time.toString());
    if (author) console.log('Author:', author);
}
