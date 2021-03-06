// Generated with util/create-component.js
import React from "react";
import AllocationSlider from "./AllocationSlider";
import { AllocationSliderProps } from "./AllocationSlider.types";
import { ComponentMeta, Story } from "@storybook/react";
import { useArgs } from "@storybook/addons";

export default {
    title: "molecules/AllocationSlider",
    component: AllocationSlider,
    argTypes: {
        percentage: {
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 0.01,
            },
            defaultValue: 0,
        },
        tokenName: {
            control: {
                type: "text",
            },
            defaultValue: "Token Name",
        },
        tokenSymbol: {
            control: {
                type: "text",
            },
            defaultValue: "TKN",
        },
        tokenImageSrc: {
            control: {
                type: "text",
            },
            defaultValue: "",
        },
        isLocked: {
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof AllocationSlider>;

// Create a master template for mapping args to render the AllocationSlider component
const Template: Story<AllocationSliderProps> = ({
    onChange,
    onClickLock,
    ...args
}) => {
    const [{ percentage, isLocked }, updateArgs] = useArgs();
    return (
        <div style={{ minWidth: "800px" }}>
            <AllocationSlider
                {...args}
                percentage={percentage}
                onChange={(newValue) => {
                    if (!isLocked) {
                        onChange(newValue);
                        updateArgs({ percentage: newValue });
                    }
                }}
                onClickLock={() => {
                    onClickLock();
                    updateArgs({ isLocked: !isLocked });
                }}
            ></AllocationSlider>
        </div>
    );
};

// Reuse that template for creating different stories
export const Unlocked = Template.bind({});
Unlocked.args = {
    isLocked: false,
    percentage: 25,
    tokenImageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
};

export const Locked = Template.bind({});
Locked.args = {
    isLocked: true,
    percentage: 75,
    tokenImageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
};
