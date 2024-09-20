import { Item } from '../types';

export const sortItems = (items: Item[]): Item[] => {
    return [...items].sort((a, b) => {
        if (a.isDone !== b.isDone) {
            return a.isDone ? 1 : -1;
        }

        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
};

