// Generated with util/create-component.js
import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ToggleSwitchProps } from "./ToggleSwitch.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "atoms/ToggleSwitch",
    component: ToggleSwitch,
    argTypes: {},
} as ComponentMeta<typeof ToggleSwitch>;

// Create a master template for mapping args to render the ToggleSwitch component
const Template: Story<ToggleSwitchProps> = (args) => (
    <ToggleSwitch {...args}></ToggleSwitch>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    options: ["Off", "On"],
};
