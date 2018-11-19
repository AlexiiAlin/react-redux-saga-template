import { Row } from "./interfaces";

export const rows : Row[] = [
{
    id: 1,
    title: 'Topic number 1',
    userName: 'Johnny'
}, {
    id: 2,
    title: 'Topic number 2',
    userName: 'Johnny'
}, {
    id: 3,
    title: 'Topic number 3',
    userName: 'Johnny'
}, {
    id: 4,
    title: 'Topic number 4',
    userName: 'Johnny'
}, {
    id: 5,
    title: 'Topic number 5',
    userName: 'Johnny'
}, {
    id: 6,
    title: 'Topic number 6',
    userName: 'Johnny'
}, {
    id: 7,
    title: 'Topic number 7',
    userName: 'Johnny'
}, {
    id: 8,
    title: 'Topic number 8',
    userName: 'Johnny'
}, {
    id: 9,
    title: 'Topic number 9',
    userName: 'Johnny'
}, {
    id: 10,
    title: 'Topic number 10',
    userName: 'Johnny'
}];

export function getRow(id: number): Row{
    return rows[id-1];
}