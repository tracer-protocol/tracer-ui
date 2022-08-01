// Generated with util/create-component.js
import React, { useRef } from "react";
import styled from "styled-components";

import { NavSettingsProps } from "./NavSettings.types";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import {
    NavPopout,
    NavPopoutOption,
    NavPopoutContainer,
} from "../../atoms/NavPopout";
import { NavButton } from "../../atoms/NavButton";

import SettingsSVG from "../../assets/icons/settings.svg";

export const StyledLink = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer",
})``;

export const StyledSettingsPopout = styled(NavPopout)<{ isActive: boolean }>`
    padding-top: 16px;

    ${NavPopoutOption} {
        border-top: none;
    }
    ${NavPopoutOption}:nth-child(1) {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        margin-right: 6px;

        @media only screen and (min-width: 375px) {
            margin-right: 32px;
        }
        @media only screen and (min-width: 768px) {
            margin-right: 0;
        }
    }
    ${NavPopoutOption}:last-child {
        border: 1px solid rgba(28, 100, 242, 0.2);
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    /* Active/inactive states */
    > div:nth-child(1) {
        transition-delay: ${({ isActive }) => (isActive ? "100ms" : "300ms")};
    }
    > div:nth-child(2) {
        transition-delay: 200ms;
    }
    > div:nth-child(3) {
        transition-delay: ${({ isActive }) => (isActive ? "300ms" : "100ms")};
    }

    @media only screen and (min-width: 1024px) {
        padding-top: 0px;
    }
`;

const NavSettings: React.FC<NavSettingsProps> = ({
    navMenuOpen,
    setNavMenuOpen,
    showSettingsPopout,
    setShowSettingsPopout,
    children,
}) => {
    // closes navMenu when opening settingsPopout
    const handleClick = () => {
        setShowSettingsPopout(!showSettingsPopout);
        setNavMenuOpen(false);
    };

    const handleClose = () => {
        setShowSettingsPopout(false);
    };

    const settingsContainerRef = useRef<HTMLDivElement>(null);
    useOutsideClick(settingsContainerRef, handleClose);

    return (
        <NavPopoutContainer ref={settingsContainerRef}>
            <NavButton
                onClick={handleClick}
                selected={showSettingsPopout}
                navMenuOpen={navMenuOpen}
            >
                <SettingsSVG />
            </NavButton>
            <StyledSettingsPopout isActive={showSettingsPopout}>
                {children}
            </StyledSettingsPopout>
        </NavPopoutContainer>
    );
};

export default NavSettings;
