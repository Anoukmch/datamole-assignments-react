import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/Button";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Edit: Story = {
    args: {
        children: <Pencil1Icon />,
        onClick: () => alert("Button clicked!"),
    },
};

export const Delete: Story = {
    args: {
        children: <TrashIcon />,
        onClick: () => alert("Button clicked!"),
    },
};

export const Submit: Story = {
    args: {
        children: <CheckIcon />,
        type: "submit",
        onClick: () => alert("Submit Button clicked!"),
    },
};

export const Reset: Story = {
    args: {
        children: <Cross1Icon />,
        type: "reset",
        onClick: () => alert("Reset Button clicked!"),
    },
};