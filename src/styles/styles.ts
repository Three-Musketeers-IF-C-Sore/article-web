import { createStitches } from "@stitches/react";

const stitches = createStitches({
    theme: {
        colors: {
            primary0: "#ffffff",
            primary1: "#fefefe",
            primary2: "#fefefe",
            primary3: "#fefefe",
            primary4: "#fefefe",
            danger: "#ff4949",

            white0: "#ffffff",

            gray0: "#ffffff",
            gray1: "#fefefe",
            gray2: "#fefefe",
            gray3: "#fefefe",
            gray4: "#fefefe",
        },
        fontWeights: {
            regular: 400,
            semiBold: 600,
            bold: 700
        },
        fontSizes: {
            body0: "32px",
            body1: "28px",
            body2: "24px",
            body3: "20px",
            body4: "16px",
        }
    }
});

export const { css, theme, globalCss } = stitches;