import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Layout } from "../Layout";
import { Header } from "../Header";
import { List } from "../List";
import { Footer } from "../Footer";
import { Item } from '../../types';

const meta = {
    title: "Layout with To-Do List",
    component: Layout,
} as Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    render: () => {
        const [todos, setTodos] = useState<Item[]>([]);
        
        const handleAddItem = (label: string) => {
            const newItem: Item = { 
				id: Date.now(), 
				label, 
				isDone: false, 
				createdAt: Date.now()
			};
			setTodos([...todos, newItem]);
            setTodos([...todos, newItem]);
        };

        const handleEditItem = (id: number, label: string) => {
            const updatedTodos = todos.map(item =>
                item.id === id ? { ...item, label } : item
            );
            setTodos(updatedTodos);
        };

        const handleToggleDone = (id: number, isDone: boolean) => {
            const updatedTodos = todos.map(item =>
                item.id === id ? { ...item, isDone } : item
            );
            setTodos(updatedTodos);
        };

        const handleDeleteItem = (id: number) => {
            const updatedTodos = todos.filter(item => item.id !== id);
            setTodos(updatedTodos);
        };

        return (
            <Layout>
                <Header onItemAdd={handleAddItem}>My To-Do List</Header>
                <List
                    items={todos}
                    onItemLabelEdit={handleEditItem}
                    onItemDoneToggle={handleToggleDone}
                    onItemDelete={handleDeleteItem}
                />
                <Footer />
            </Layout>
        );
    },
};
