import React from "react";
import { Layout } from "../Layout";
import { ListItem } from "../ListItem"; // Import your ListItem component
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof Layout>;

// Sample to-do items data
const todoItems = [
    {
        label: "Buy groceries",
        isDone: false,
        onItemLabelEdit: (label: string) => console.log(`Edit item: ${label}`),
        onItemDoneToggle: (isDone: boolean) => console.log(`Toggle done: ${isDone}`),
        onItemDelete: () => console.log("Delete item"),
    },
    {
        label: "Walk the dog",
        isDone: true,
        onItemLabelEdit: (label: string) => console.log(`Edit item: ${label}`),
        onItemDoneToggle: (isDone: boolean) => console.log(`Toggle done: ${isDone}`),
        onItemDelete: () => console.log("Delete item"),
    },
    {
        label: "Finish project report",
        isDone: false,
        onItemLabelEdit: (label: string) => console.log(`Edit item: ${label}`),
        onItemDoneToggle: (isDone: boolean) => console.log(`Toggle done: ${isDone}`),
        onItemDelete: () => console.log("Delete item"),
    },
];

export const Default: Story = {
    args: {
        children: (
            <>
                <h1>To-Do List</h1>
                {todoItems.map((item, index) => (
                    <ListItem
                        key={index}
                        label={item.label}
                        isDone={item.isDone}
                        onItemLabelEdit={item.onItemLabelEdit}
                        onItemDoneToggle={item.onItemDoneToggle}
                        onItemDelete={item.onItemDelete}
                    />
                ))}
            </>
        ),
    },
};
