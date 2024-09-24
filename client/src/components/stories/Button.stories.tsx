import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/Button";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Default Button",
        onClick: () => alert("Button clicked!"),
    },
};

export const Submit: Story = {
    args: {
        children: "Submit Button",
        type: "submit",
        onClick: () => alert("Submit Button clicked!"),
    },
};

export const Reset: Story = {
    args: {
        children: "Reset Button",
        type: "reset",
        onClick: () => alert("Reset Button clicked!"),
    },
};