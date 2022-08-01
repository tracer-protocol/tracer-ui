// Generated with util/create-component.js
import React from "react";
import NavButton from "./NavButton";
import { NavButtonProps } from "./NavButton.types";
import { ComponentMeta, Story } from "@storybook/react";

import SettingsSVG from "../../assets/icons/settings.svg";
import CubeSVG from "../../assets/icons/cube.svg";

export default {
    title: "atoms/NavButton",
    component: NavButton,
} as ComponentMeta<typeof NavButton>;

// Create a master template for mapping args to render the NavButton component
const Template: Story<NavButtonProps> = (args) => (
    <NavButton {...args}></NavButton>
);

// Reuse that template for creating different stories
export const AppLauncher = Template.bind({});
AppLauncher.args = {
    selected: false,
    navMenuOpen: false,
    children: <CubeSVG />,
};

export const Settings = Template.bind({});
Settings.args = {
    selected: false,
    navMenuOpen: false,
    children: <SettingsSVG />,
};
