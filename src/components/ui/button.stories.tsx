import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      description: "Select Size",
      options: ["icon", "lg", "sm", "default"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("default Click"),
    children: "Login",
    className: "shadow-lg",
  },
};
export const Primary: Story = {
  args: {
    variant: "destructive",
    size: "lg",
    disabled: false,
    onClick: action("default Click"),
    children: "Register",
    className: "shadow-lg",
  },
};
export const Secondary: Story = {
  args: {
    variant: "ghost",
    size: "sm",
    disabled: false,
    onClick: action("default Click"),
    children: "Secondary ",
    className: "shadow-lg",
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    size: "sm",
    disabled: false,
    onClick: action("default Click"),
    children: "Link",
    className: "shadow-lg",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    onClick: action("default Click"),
    children: "Outline",
    className: "shadow-lg",
  },
};
