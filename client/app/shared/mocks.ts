import { Row } from "./interfaces";

export const rows : Row[] = [
{
    id: 1,
    title: 'TopicContainer number 1',
    userName: 'Johnny'
}, {
    id: 2,
    title: 'TopicContainer number 2',
    userName: 'Johnny'
}, {
    id: 3,
    title: 'TopicContainer number 3',
    userName: 'Johnny'
}, {
    id: 4,
    title: 'TopicContainer number 4',
    userName: 'Johnny'
}, {
    id: 5,
    title: 'TopicContainer number 5',
    userName: 'Johnny'
}, {
    id: 6,
    title: 'TopicContainer number 6',
    userName: 'Johnny'
}, {
    id: 7,
    title: 'TopicContainer number 7',
    userName: 'Johnny'
}, {
    id: 8,
    title: 'TopicContainer number 8',
    userName: 'Johnny'
}, {
    id: 9,
    title: 'TopicContainer number 9',
    userName: 'Johnny'
}, {
    id: 10,
    title: 'TopicContainer number 10',
    userName: 'Johnny'
}];

export function getRow(id: number): Row{
    return rows[id-1];
}
