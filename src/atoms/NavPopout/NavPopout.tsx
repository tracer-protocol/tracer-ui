// Generated with util/create-component.js
import styled from "styled-components";

import { NavPopoutProps, NavPopoutOptionProps } from "./NavPopout.types";

export const NavPopout = styled.div<NavPopoutProps>`
    position: static;
    top: 50px;
    right: 0;
    z-index: 50;
    display: flex;
    flex-direction: row;
    font-family: "Aileron", sans-serif;
    pointer-events: ${({ isActive }) => (isActive ? "all" : "none")};
    justify-content: space-between;
    width: 100%;
    z-index: ${({ isActive }) => (isActive ? "51" : "50")};

    /* Animate rows on open */
    > div,
    > a {
        transition-property: opacity, transform;
        transition-duration: 500ms;
        transform: ${({ isActive }) =>
            isActive ? "translate(0, 0)" : "translate(16px, 16px)"};
        opacity: ${({ isActive }) => (isActive ? "1" : "0")};
    }

    @media only screen and (min-width: 768px) {
        position: absolute;
        flex-direction: column;
        justify-content: start;
        width: auto;
    }
`;

export const NavPopoutOption = styled.div<NavPopoutOptionProps>`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 140px;
    border-bottom: ${({ borderBottom }) =>
        borderBottom ? "1px solid rgba(28, 100, 242, 0.2)" : "none"};
    color: #ffffff;

    > span {
        display: block;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 10px;

        @media only screen and (min-width: 768px) {
            margin-bottom: 0;
        }
    }

    @media only screen and (min-width: 768px) {
        align-items: center;
        flex-direction: row;
        height: 72px;
        width: 320px;
        padding: 16px;
        color: ${({ theme }) => (!theme.isDark ? "#1c64f2" : "#ffffff")};
        background: ${({ theme }) =>
            !theme.isDark
                ? "linear-gradient(97.74deg, rgba(28, 100, 242, 0.1) -59.53%, rgba(28, 100, 242, 0) 74.27%), #ffffff"
                : "rgba(53, 53, 220, 0.9)"};
        border: 1px solid rgba(28, 100, 242, 0.2);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }
`;

export const NavPopoutContainer = styled.div`
    position: relative;
    font-size: 16px;
    line-height: 24px;
    font-family: "Aileron", sans-serif;
`;

export default NavPopout;
