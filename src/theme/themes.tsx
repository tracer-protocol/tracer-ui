export interface TracerTheme {
    isDark: boolean;
    colors: {
        cell: {
            background: string;
            primary: string;
            secondary: string;
            tertiary: string;
            stroke: string;
            overlay: string;
        };
        text: {
            primary: string;
            secondary: string;
            tertiary: string;
            footnote: string;
            highlight: string;
        };
        action: {
            active: string;
            inactive: string;
            hover: string;
            text: string;
        };
        highlight: {
            primary: string;
        };
        alert: {
            hover: string;
            active: string;
            text: string;
            cell: string;
        };
        danger: {
            hover: string;
            active: string;
            text: string;
            cell: string;
        };
        success: {
            hover: string;
            active: string;
            text: string;
            cell: string;
        };
    };
    fontFamily: {
        body: string;
        heading: string;
    };
    animationSpeed: {
        default: string;
    };
}

export const darkTheme: TracerTheme = {
    isDark: true,
    colors: {
        cell: {
            background: "#040811",
            primary: "#0A0E1C",
            secondary: "#0E1324",
            tertiary: "#292E4F",
            stroke: "#8BB0EF",
            overlay: "rgba(255, 255, 255, 0.2)",
        },
        action: {
            active: "#1C64F2",
            inactive: "#71727a", // I added this
            hover: "#3535DC", // I added this
            text: "#FFFFFF",
        },
        highlight: {
            primary: "#583BD4",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#8BB0EF",
            tertiary: "#7B9CD4",
            footnote: "#D9D9D9",
            highlight: "#3DA8F5",
        },
        alert: {
            hover: "#FF700B",
            active: "#FF931E",
            text: "#FF931E",
            cell: "#FFF1E2",
        },
        danger: {
            hover: "#FF2A21",
            active: "#FF5621",
            text: "#FF5621",
            cell: "#FFE0D7",
        },
        success: {
            hover: "#4FC423",
            active: "#4FE021",
            text: "#4FE021",
            cell: "#EDFFE8",
        },
    },
    fontFamily: {
        heading: "'Inter', sans-serif",
        body: "'Source Sans Pro', sans-serif",
    },
    animationSpeed: {
        default: "0.3",
    },
};

// TODO: Add light theme
export const lightTheme: TracerTheme = {
    ...darkTheme,
    isDark: false,
};
