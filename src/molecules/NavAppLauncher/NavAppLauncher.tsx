// Generated with util/create-component.js
import React, { useRef } from "react";
import styled from "styled-components";

import { NavPopout, NavPopoutContainer } from "../../atoms/NavPopout";
import { NavButton } from "../../atoms/NavButton";

import { NavAppLauncherProps } from "./NavAppLauncher.types";
import {
    appButtonContent,
    governanceContent,
    linkContent,
    socialLinkContent,
} from "./launcherContent";

import { useOutsideClick } from "../..//hooks/useOutsideClick";

import CubeSVG from "../../assets/icons/cube.svg";

export const StyledLink = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer",
})``;

const Launcher = styled(NavPopout)<{ isActive: boolean }>`
    width: 281px;
    /* Active/inactive states */
    > div:nth-child(1) {
        transition-delay: ${({ isActive }) => (isActive ? "100ms" : "500ms")};
    }
    > div:nth-child(2) {
        transition-delay: ${({ isActive }) => (isActive ? "200ms" : "400ms")};
    }
    > a:nth-child(3) {
        transition-delay: 300ms;
    }
    > a:nth-child(4) {
        transition-delay: ${({ isActive }) => (isActive ? "400ms" : "200ms")};
    }
    > a:nth-child(5) {
        transition-delay: ${({ isActive }) => (isActive ? "400ms" : "200ms")};
    }
    > div:nth-child(6) {
        transition-delay: ${({ isActive }) => (isActive ? "500ms" : "100ms")};
    }

    a {
        color: white;
        text-decoration: none;
    }
`;

const LauncherRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1c64f2;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    font-size: 16px;
    line-height: 24px;
    font-family: "Aileron", sans-serif;

    ${({ theme }) => {
        switch (theme.isDark) {
            case true:
                return `
                    background: linear-gradient(97.74deg, rgba(28, 100, 242, 0.1) -59.53%, rgba(28, 100, 242, 0) 74.27%), #ffffff;
                    color: #1c64f2;
                `;
            case false:
                return `
                    background: rgba(53, 53, 220, 0.9);
                    color: #fff;
                `;
            default:
                return `
                    background: linear-gradient(97.74deg, rgba(28, 100, 242, 0.1) -59.53%, rgba(28, 100, 242, 0) 74.27%), #ffffff;
                    color: #1c64f2;
                `;
        }
    }}
`;

const GradientBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity ${({ theme }) => theme.animationSpeed.default}s ease;
    background: ${({ theme }) =>
        !theme.isDark
            ? "linear-gradient(272.96deg, #9BC2FC -7%, rgba(26, 85, 245, 0) 150%)"
            : "linear-gradient(273.08deg, #1E1E90 15%, rgba(26, 85, 245, 0) 120%)"};
    opacity: 0;
    z-index: -1;
`;

const AppRow = styled(LauncherRow)`
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;

    > a:nth-child(1) {
        border-right: 1px solid #1c64f2;
    }
    > a:nth-child(1) svg {
        width: 73px;
        height: 17px;
    }
    > a:nth-child(2) svg {
        width: 101px;
        height: 30px;
    }
`;

const AppRowButton = styled(StyledLink)`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100px;
    overflow: hidden;
    background-color: transparent;
    transition: color ${({ theme }) => theme.animationSpeed.default}s ease;

    &:hover {
        color: #ffffff;
    }

    &:hover > img {
        opacity: 1;
        transform: scale(1);
    }
`;

const AppBackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    transform: scale(1.1);
    opacity: 0;
    z-index: -1;
`;

const GovernanceRow = styled(LauncherRow)`
    padding: 16px 0 8px;
    flex-direction: column;
    border-top: none;
    border-bottom: none;
`;

const ButtonRow = styled.div`
    display: flex;
`;

const GovernanceButton = styled(StyledLink)`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: max-content;
    margin: 8px 10px;
    padding: 8px 10px;
    border-radius: 4px;
    overflow: hidden;
    background: transparent;
    transition: color ${({ theme }) => theme.animationSpeed.default}s ease;

    &:hover > div {
        opacity: 1;
    }

    > svg {
        width: auto;
        height: 19px;
        margin-bottom: 8px;
    }
`;

const LinkRow = styled(LauncherRow)<{ fullWidthSVG?: boolean }>`
    position: relative;
    padding: 16px;
    border-bottom: none;
    transition: color ${({ theme }) => theme.animationSpeed.default}s ease;

    &:hover > div {
        opacity: 1;
    }

    > svg {
        ${({ fullWidthSVG }) =>
            fullWidthSVG
                ? `width: 124px;
                    height: 24px;
                    margin-right: 0;`
                : `width: auto;
                    height: 17px;
                    margin-right: 20px;`};
    }
`;

const SocialIconRow = styled(LauncherRow)`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 8px 0;

    > a {
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        padding: 12px;
        transition: background-color
            ${({ theme }) => theme.animationSpeed.default}s ease;

        &:hover > div {
            opacity: 1;
        }
    }

    > a svg {
        transition: all ${({ theme }) => theme.animationSpeed.default}s ease;
    }

    /* Twitter icon */
    > a:nth-child(1) {
        margin-right: 11px;
    }
    > a:nth-child(1) svg {
        width: 18px;
        height: 15px;
    }

    /* Discord icon */
    > a:nth-child(2) {
        margin-right: 8px;
    }
    > a:nth-child(2) svg {
        width: 20px;
        height: 15px;
    }

    /* Mirror icon */
    > a:nth-child(3) svg {
        width: 24px;
        height: 14px;
    }
`;

const NavAppLauncher: React.FC<NavAppLauncherProps> = ({
    setShowAppLauncher,
    showAppLauncher,
    navMenuOpen,
    setNavMenuOpen,
}) => {
    // closes navMenu when opening settingsPopout
    const handleClick = () => {
        setShowAppLauncher(!showAppLauncher);
        setNavMenuOpen(false);
    };

    const handleClose = () => {
        setShowAppLauncher(false);
    };

    const appLauncherContainerRef = useRef<HTMLDivElement>(null);
    useOutsideClick(appLauncherContainerRef, handleClose);

    return (
        <NavPopoutContainer ref={appLauncherContainerRef}>
            <NavButton
                onClick={handleClick}
                selected={showAppLauncher}
                navMenuOpen={navMenuOpen}
            >
                <CubeSVG />
            </NavButton>
            <Launcher isActive={showAppLauncher}>
                <AppRow>
                    {appButtonContent.map((content, i) => (
                        <AppRowButton key={i} href={content.link}>
                            <content.LogoImage />
                            <AppBackgroundImage src={content.bgImage} />
                        </AppRowButton>
                    ))}
                </AppRow>
                <GovernanceRow>
                    <span>Governance</span>
                    <ButtonRow>
                        {governanceContent.map((content, i) => (
                            <GovernanceButton key={i} href={content.link}>
                                <content.LogoImage />
                                <span>{content.label}</span>
                                <GradientBackground />
                            </GovernanceButton>
                        ))}
                    </ButtonRow>
                </GovernanceRow>
                {linkContent.map((content, i) => (
                    <StyledLink key={i} href={content.link}>
                        <LinkRow fullWidthSVG={i === linkContent.length - 1}>
                            {content.label ? (
                                <>
                                    <content.LogoImage />
                                    <span>{content.label}</span>
                                </>
                            ) : (
                                <content.LogoImage />
                            )}
                            <GradientBackground />
                        </LinkRow>
                    </StyledLink>
                ))}
                <SocialIconRow>
                    {socialLinkContent.map((content, i) => (
                        <StyledLink key={i} href={content.link}>
                            <content.LogoImage key={i} />
                            <GradientBackground />
                        </StyledLink>
                    ))}
                </SocialIconRow>
            </Launcher>
        </NavPopoutContainer>
    );
};

export default NavAppLauncher;
