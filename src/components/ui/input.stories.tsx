import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input, InputProps } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable input field component built with Tailwind CSS.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    placeholder: {
      control: "text",
    },
    className: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter Your Name ",
    value: "Alamin",
  },
};
export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter Your Age ",
  },
};
export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter Your email ",
  },
};
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter Your Password ",
  },
};

// const Template: StoryObj<InputProps> = {
//   render: (args) => <Input {...args} />,
// };

// export const Default: StoryObj<InputProps> = {
//   ...Template,
//   args: {
//     type: "text",
//     placeholder: "Enter text...",
//   },
// };

// export const Password: StoryObj<InputProps> = {
//   ...Template,
//   args: {
//     type: "password",
//     placeholder: "Enter password...",
//   },
// };

// export const Email: StoryObj<InputProps> = {
//   ...Template,
//   args: {
//     type: "email",
//     placeholder: "Enter email...",
//   },
// };

// export const Number: StoryObj<InputProps> = {
//   ...Template,
//   args: {
//     type: "number",
//     placeholder: "Enter number...",
//   },
// };

// export const Disabled: StoryObj<InputProps> = {
//   ...Template,
//   args: {
//     type: "text",
//     placeholder: "Disabled input...",
//     disabled: true,
//   },
// };
