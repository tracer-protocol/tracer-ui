// Generated with util/create-component.js
import React from "react";
import NavPopout, { NavPopoutOption } from "./NavPopout";
import { NavPopoutProps } from "./NavPopout.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/NavPopout",
    component: NavPopout,
    argTypes: {},
} as ComponentMeta<typeof NavPopout>;

// Create a master template for mapping args to render the NavPopout component
const Template: Story<NavPopoutProps> = (args) => (
    <NavPopout {...args}>
        <NavPopoutOption borderBottom>Example option 1</NavPopoutOption>
        <NavPopoutOption>Example option 2</NavPopoutOption>
    </NavPopout>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    isActive: false,
};
