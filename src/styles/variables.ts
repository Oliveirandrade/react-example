export enum fontSizes {
    SIZE_1 = "35px",
    SIZE_2 = "30px",
    SIZE_3 = "25px",
    SIZE_4 = "20px",
    SIZE_5 = "16px",
    SIZE_6 = "14px",
    SIZE_7 = "12px",
    SIZE_8 = "10px",
    SIZE_9 = "8px",
    SIZE_10 = "44px",
    SIZE_11 = "38px",
    SIZE_12 = "30px",
    SIZE_13 = "24px",
    SIZE_14 = "20px",
    SIZE_15 = "18px",
    SIZE_16 = "16px",
    SIZE_17 = "14px",
    SIZE_18 = "12px",
}


export enum spacing {
    SPACINGXXS = "4px",
    SPACINGXS = "8px",
    SPACINGS = "12px",
    SPACINGM = "16px",
    SPACINGL = "20px",
    SPACINGXL = "24px",
    SPACINGXXL = "28px",
    SPACINGXXL2 = "32px",
    SPACINGXXL3 = "36px",
    SPACINGXXL4 = "40px",
    SPACINGXXL5 = "44px",
    SPACINGXXL6 = "48px",
    SPACINGXXL7 = "52px",
    SPACINGXXL8 = "56px",
    SPACINGXXL9 = "60px",
    SPACINGXXL10 = "64px",
}

export enum fontWeights {
    BOLD = "700",
    SEMIBOLD = "600",
    NORMAL = "normal",
}

export const fontFamily = "Montserrat, Arial, Helvetica, sans-serif"

export enum buttons {
    HEIGHT_SMALL = "40px",
    HEIGHT_MEDIUM = "45px",
    HEIGHT_LARGE = "50px",
}

export enum colors {
    TERCIARY = "#ad1f3b",
    SECONDARY = "#f24c6c",
    SUPPORT = "#5d1ec0",
    PRIMARY = "#3867d6",
    POSITIVE = "#1ccb76",
    WARNING = "#fdae25",
    FULL_SHADE = "#25282b",
    NEGATIVE = "#eb3b5a",
    LIGHTEST_SHADE = "#f9f9f9",
    MEDIUM_SHADE = "#828282",
    LIGHT_SHADE = "#e0e0e0",
    EMPTY_SHADE = "#ffffff",
    OVERLAY = "#25282b80",
}

export enum borders {
    RADIUS_1 = "8px",
    RADIUS_ROUND = "50%",
}

export enum input {
    DEFAULT_HEIGHT = "40px",
}

export enum grid {
    COL_SIZE = 67.5,
    COL_SPACING = 30,
    SCREEN_MAX_WIDTH = 1170,
}

export enum size {
    mobileS = "320px",
    mobileM = "375px",
    mobileL = "425px",
    tablet = "768px",
    laptop = "1024px",
    laptopL = "1440px",
    desktop = "2560px",
}

const styles = {
    fontSizes,
    spacing,
    fontWeights,
    fontFamily,
    buttons,
    colors,
    borders,
    input,
    grid,
    size
}

export default styles
