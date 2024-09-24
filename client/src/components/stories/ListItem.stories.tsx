import { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../ListItem";

const meta = {
    title: "List Item",
    component: ListItem,
    argTypes: {
        onItemDelete: { action: "removed" },
        onItemLabelEdit: { action: "edited" },
    },
} as Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof ListItem>;
export const ToDo: Story = {
    args: {
        label: "Lorem ipsum dolor",
        isDone: false,
        onItemDoneToggle: (isDone) => console.log(`Item done: ${isDone}`),
        onItemLabelEdit: () => console.log("Edit item"),
        onItemDelete: () => console.log("Delete item"),
    },
};
export const Done: Story = {
    args: {
        ...ToDo.args,
        isDone: true,
    },
};

export const WithHoverEffect: Story = {
    render: () => (
        <div style={{ width: "300px" }}>
            <ListItem 
                label="Hover to see actions"
                isDone={false}
                onItemDoneToggle={(isDone) => console.log(`Item done: ${isDone}`)}
                onItemLabelEdit={() => console.log("Edit item")}
                onItemDelete={() => console.log("Delete item")}
            />
        </div>
    ),
};
