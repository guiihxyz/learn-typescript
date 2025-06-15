// union types

type Primitives = string | number | boolean;

export function main(value: Primitives) {
    if (typeof value === 'string') {
        return
    }

    if (typeof value === 'number') {
        return
    }

    value
}

enum TrafficLightType {
    Yellow,
    Red,
    Green,
}

interface YellowColor {
    type: TrafficLightType.Yellow;
    wait(): void,
}

interface RedColor {
    type: TrafficLightType.Red;
    stop(): void,
}

interface GreenColor {
    type: TrafficLightType.Green;
    drive(): void,
}

type TrafficLight = YellowColor | RedColor | GreenColor;

const trafficLight: TrafficLight = {
    type: TrafficLightType.Yellow,
    wait() {

    },
}

type JSONValue = string | number | boolean | JSONValue[] | {
    [key: string]: JSONValue,
};

