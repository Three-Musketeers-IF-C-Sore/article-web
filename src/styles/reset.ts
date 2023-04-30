import { globalCss } from "./styles";

export const resetStyles = globalCss({
  "*, *::before, *::after": { boxSizing: "border-box" },
  body: {
    margin: "0",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "$body5",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    lineHeight: 1,
  },
});
