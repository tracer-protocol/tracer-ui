// Generated with util/create-component.js
import React from "react";
import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";
import { ComponentMeta, Story } from "@storybook/react";
import {
    NavAppLauncher,
    NavDropdownButton,
    NavSettings,
} from "../../molecules";

export default {
    title: "organisms/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        links: {
            defaultValue: [],
            control: {
                type: "array",
            },
        },
        activeLink: {
            defaultValue: "",
            control: {
                type: "text",
            },
        },
        href: {
            defaultValue: "",
            control: { type: "text" },
        },
        productName: {
            defaultValue: "Product",
            control: { type: "text" },
        },
    },
} as ComponentMeta<typeof Navbar>;

// Create a master template for mapping args to render the Navbar component
const Template: Story<NavbarProps<string>> = (args) => (
    <Navbar {...args}></Navbar>
);

export const Default = Template.bind({});
Default.args = {};

export const WithLinks = Template.bind({});
WithLinks.args = {
    links: [
        {
            href: "https://www.google.com",
            label: "Google",
        },
        {
            href: "https://www.facebook.com",
            label: "Facebook",
        },
        {
            href: "https://www.twitter.com",
            label: "Twitter",
        },
    ],
    activeLink: "https://www.twitter.com",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
    links: [
        {
            href: "#1",
            label: "Buy",
        },
        {
            href: "#2",
            label: "Sell",
        },
        {
            href: "#3",
            label: "Stake",
        },
    ],
    activeLink: "#2",
    children: (
        <>
            <NavDropdownButton
                placement="bottom-end"
                dropdownItems={[
                    {
                        key: "arbitrum",
                        content: "Arbitrum",
                    },
                    {
                        key: "arb-rinkeby",
                        content: "Arbitrum Rinkeby",
                    },
                ]}
                onItemClick={console.log}
            >
                Connect Wallet
            </NavDropdownButton>
            <NavSettings
                navMenuOpen={false}
                setNavMenuOpen={console.log}
                showSettingsPopout={false}
                setShowSettingsPopout={console.log}
            />
            <NavAppLauncher
                navMenuOpen={false}
                setNavMenuOpen={console.log}
                showAppLauncher={false}
                setShowAppLauncher={console.log}
            />
        </>
    ),
};
