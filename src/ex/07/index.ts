// tuplas

import { create } from "domain";

type NameList = string[];

type CalendarDate = [day: number, month: number, year: number];

const list: NameList = [];
list.push("gh");

function createDate(...date: CalendarDate) {
    const [day, month, year] = date;
}

createDate(30, 11, 2024);
