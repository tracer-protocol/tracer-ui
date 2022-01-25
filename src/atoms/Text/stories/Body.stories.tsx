// Generated with util/create-component.js
import React from "react";
import Text from "../Text";
import { BodyProps } from "../Text.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/Text/Body",
    component: Text.Body,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["regular", "bold"],
            },
        },
        color: {
            control: {
                type: "select",
                options: [
                    "primary",
                    "secondary",
                    "tertiary",
                    "footnote",
                    "highlight",
                ],
            },
            defaultValue: "primary",
        },
        align: {
            control: {
                type: "select",
                options: ["left", "center", "right"],
            },
            defaultValue: "left",
        },
        margin: {
            control: "text",
            defaultValue: "0",
        },
        fontFamily: {
            control: {
                type: "select",
                options: ["primary", "secondary"],
            },
            defaultValue: "primary",
        },
    },
} as ComponentMeta<typeof Text.Body>;

// Create a master template for mapping args to render the Text component
const Template: Story<BodyProps> = (args) => (
    <Text.Body {...args}>Lorem Ipsum</Text.Body>
);

// Reuse that template for creating different stories
export const Light = Template.bind({});
Light.args = {
    variant: "light",
};

export const Regular = Template.bind({});
Regular.args = {
    variant: "regular",
};

export const Bold = Template.bind({});
Bold.args = {
    variant: "bold",
};

export const Bolder = Template.bind({});
Bolder.args = {
    variant: "bolder",
};
