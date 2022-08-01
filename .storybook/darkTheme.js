import { create } from "@storybook/theming";
import { darkTheme } from "../src/theme";

export default create({
    base: "dark",
    brandTitle: "Tracer DAO",
    brandUrl: "https://tracer.finance",
    brandImage: "/tracer/tracer_logo.svg",

    colorPrimary: darkTheme.colors.action.active,
    colorSecondary: darkTheme.colors.action.active,

    appBg: darkTheme.colors.cell.primary,
    appContentBg: darkTheme.colors.cell.background,
    appBorderColor: darkTheme.colors.cell.stroke,

    barSelectedColor: darkTheme.colors.action.active,
    barBg: darkTheme.colors.cell.secondary,

    textColor: darkTheme.colors.text.primary,
    textInverseColor: darkTheme.colors.text.footnote,
    textMutedColor: darkTheme.colors.text.tertiary,

    inputBg: darkTheme.colors.cell.tertiary,
    inputTextColor: darkTheme.colors.text.primary,
    inputBorderColor: darkTheme.colors.cell.stroke,
});
