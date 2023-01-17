import {mediaSizes} from "types/theme";

export const sizes: mediaSizes = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1280,
    wrap: 1365,
    giantDesktop: 1600,
    hugeDesktop: 1920
};
export const breakpoints = Object.values(sizes).map((size) => `${size}px`);
