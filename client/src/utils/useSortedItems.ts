import { useMemo } from 'react';
import { Item } from '../types';

export const useSortedItems = (items: Item[]): Item[] => {
    return useMemo(() => {
        return [...items].sort((a, b) => {
            if (a.isDone !== b.isDone) {
                return a.isDone ? 1 : -1;
            }
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
    }, [items]);
};
