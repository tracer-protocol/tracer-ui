// Generated with util/create-component.js
import React from "react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";
import { ComponentMeta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";

export default {
    title: "molecules/Checkbox",
    component: Checkbox,
    argTypes: {
        checked: {
            control: {
                type: "boolean",
            },
            defaultValue: true,
            description: "Checked state of the checkbox",
        },
        disabled: {
            control: {
                type: "boolean",
            },
            defaultValue: false,
            description: "Disabled state of the checkbox",
        },
        children: {
            control: {
                type: "text",
            },
            defaultValue: "Checkbox",
            description: "Label of the checkbox",
        },
        onChange: {
            control: {
                type: "function",
            },
            description: "Function to call when the checkbox changes",
        },
    },
} as ComponentMeta<typeof Checkbox>;

// Create a master template for mapping args to render the Checkbox component
const Template: Story<CheckboxProps> = ({ onChange, ...args }) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
        <Checkbox
            {...args}
            checked={checked}
            onChange={(e) => {
                updateArgs({ checked: e.target.checked });
                onChange(e);
            }}
        ></Checkbox>
    );
};

// Reuse that template for creating different stories
export const Checked = Template.bind({});
Checked.args = {
    children: "Checkbox",
    checked: true,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
    children: "Checkbox",
    checked: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Disabled Checkbox",
    checked: false,
    disabled: true,
};

export const TermsAndConditions = Template.bind({});
TermsAndConditions.args = {
    children: "I agree to the terms and conditions",
    checked: false,
};
