// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { ToggleSwitchProps } from "./ToggleSwitch.types";

export const StyledToggleSwitch = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    width: 140px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;

    @media only screen and (min-width: 768px) {
        border: 1px solid rgba(28, 100, 242, 0.2);
    }
`;

export const SwitchOption = styled.span<{ selected: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 40px;
    border-radius: 3px;
    transition: color ${({ theme }) => theme.animationSpeed.default}s ease;
    z-index: 1;
    ${({ selected }) => {
        switch (true) {
            case selected:
                return `
                    color: #1c64f2;
                `;
            default:
                return `
                    color: #ffffff;
                `;
        }
    }}

    @media only screen and (min-width: 768px) {
        ${({ theme, selected }) => {
            switch (true) {
                case selected && !theme.isDark:
                    return `
                    color: #ffffff;
                `;
                case selected && theme.isDark:
                    return `
                    color: #1c64f2;
                `;
                case !theme.isDark:
                    return `
                    color: #1c64f2;
                `;
                default:
                    return `
                    color: #ffffff;
                `;
            }
        }}
    }
`;

export const Slider = styled.span<{ isSwitchedOn: boolean }>`
    position: absolute;
    top: 50%;
    left: ${({ isSwitchedOn }) => (isSwitchedOn ? "68px" : "1px")};
    transform: translateY(-50%);
    display: flex;
    width: 68px;
    height: 36px;
    border-radius: 3px;
    z-index: 0;
    transition: left ${({ theme }) => theme.animationSpeed.default}s ease;
    background-color: #ffffff;

    @media only screen and (min-width: 768px) {
        background-color: ${({ theme }) =>
            !theme.isDark ? "#1c64f2" : "#ffffff"};
    }
`;

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
    selected,
    handleClick,
    options,
}) => (
    <StyledToggleSwitch onClick={handleClick}>
        <SwitchOption selected={!selected}>{options?.[0]}</SwitchOption>
        <SwitchOption selected={selected}>{options?.[1]}</SwitchOption>
        <Slider isSwitchedOn={selected} />
    </StyledToggleSwitch>
);

export default ToggleSwitch;
