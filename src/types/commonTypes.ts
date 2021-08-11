export interface FRComponent {
    testId?: string;
    customStyles?: any;
    ["data-testid"]?: string;
}

export interface SvgIconProps {
    height?: string;
    width?: string;
    fill?: string;
    color?: string;
}

export interface ChartLineDataUnit {
    [key: string]: string | number,
}
export interface ChartPieDataUnit {
    name: string,
    value: number,
}
