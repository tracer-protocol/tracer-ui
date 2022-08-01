// Generated with util/create-component.js
import React from "react";
import { device } from "../../helpers";
import styled from "styled-components";
import { List } from "../../atoms";
import { NavbarProps } from ".";
import TracerLogo from "../../assets/tracer/tracer_logo.svg";

const Navbar = <Link extends string>({
    children,
    links,
    productName,
    homeHref,
    onClickLink,
}: NavbarProps<Link>): JSX.Element => {
    return (
        <NavbarContent>
            <Branding href={homeHref}>
                <TracerLogo className="logo" />
                &nbsp;
                <div className="product-name">{productName}</div>
            </Branding>
            <NavLinks>
                {links.map((link) => (
                    <NavLink
                        key={link.href}
                        href={link.href}
                        onClick={() => onClickLink && onClickLink(link.href)}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </NavLinks>
            <NavChildren>{children}</NavChildren>
        </NavbarContent>
    );
};

const NavbarContent = styled.nav`
    display: flex;
    font-size: 1rem;
    align-items: center;
    height: 60px;
    margin: auto;
    width: 100%;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
    @media ${device.mobileL} {
        max-width: 540px;
    }
    @media ${device.tablet} {
        max-width: 720px;
    }
    @media ${device.laptop} {
        max-width: 960px;
    }
    @media ${device.desktop} {
        max-width: 1140px;
    }
    @media ${device.desktopL} {
        max-width: 1320px;
    }
`;

const Branding = styled.a`
    position: relative;
    width: auto;
    height: 1.5rem;
    cursor: pointer;
    margin-right: 0.75rem;
    display: flex;
    color: ${(props) => props.theme.colors.text.highlight};

    .product-name {
        height: 100%;
        display: flex;
        align-items: center;
        font-family: ${(props) => props.theme.fontFamily.heading};
        font-size: 18px;
    }
`;

const NavLinks = styled(List)`
    margin-left: 50px;
    display: flex;
    width: auto;
    flex: 1;
`;

const NavLink = styled.a`
    display: flex;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.text.highlight};
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 16px;
    font-family: ${(props) => props.theme.fontFamily.heading};
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    text-decoration-line: none;
`;

const NavChildren = styled.div`
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default Navbar;
