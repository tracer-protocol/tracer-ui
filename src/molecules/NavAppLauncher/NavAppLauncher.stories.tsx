// Generated with util/create-component.js
import React from "react";
import NavAppLauncher from "./NavAppLauncher";
import { NavAppLauncherProps } from "./NavAppLauncher.types";
import { ComponentMeta, Story } from "@storybook/react";

export default {
    title: "molecules/NavAppLauncher",
    component: NavAppLauncher,
} as ComponentMeta<typeof NavAppLauncher>;

// Create a master template for mapping args to render the NavAppLauncher component
const Template: Story<NavAppLauncherProps> = (args) => (
    <NavAppLauncher {...args}></NavAppLauncher>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    navMenuOpen: false,
    showAppLauncher: false,
};
