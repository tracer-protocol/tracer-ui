// Generated with util/create-component.js
import React, { useState } from "react";
import { ComponentMeta, Story } from "@storybook/react";

import NavSettings from "./NavSettings";
import { NavSettingsProps } from "./NavSettings.types";

import { NavPopoutOption } from "../../atoms/NavPopout";
import { ToggleSwitch } from "../../atoms/ToggleSwitch";

export default {
    title: "molecules/NavSettings",
    component: NavSettings,
    argTypes: {},
} as ComponentMeta<typeof NavSettings>;

// Create a master template for mapping args to render the NavSettings component
const Template: Story<NavSettingsProps> = (args) => {
    const [v2Selected, setV2Selected] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const handleVersionSwitch = () => {
        setV2Selected(!v2Selected);
    };
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <NavSettings {...args}>
            <NavPopoutOption borderBottom>
                <span>Version Selector</span>
                <ToggleSwitch
                    selected={v2Selected}
                    handleClick={handleVersionSwitch}
                    options={["V1", "V2"]}
                />
            </NavPopoutOption>
            <NavPopoutOption>
                <span>Dark Mode</span>
                <ToggleSwitch
                    selected={isDark}
                    handleClick={toggleTheme}
                    options={["Off", "On"]}
                />
            </NavPopoutOption>
        </NavSettings>
    );
};

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
    navMenuOpen: false,
    showSettingsPopout: false,
};
