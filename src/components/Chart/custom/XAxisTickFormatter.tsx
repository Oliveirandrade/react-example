import React from "react"

export interface Props {
    x: number;
    y: number;
    payload: {
        coordinate: number;
        value: string;
        index: number;
        offset: number;
        tickCoord: number;
        isShow: boolean;
    };
    fill: React.CSSProperties["fill"];
    type: string;
    className: string;
    stroke: React.CSSProperties["stroke"];
    textAnchor: React.CSSProperties["textAnchor"];
    verticalAnchor: string;
    index: number;
    visibleTicksCount: number;
    textStyles?: React.SVGProps<SVGTextElement>;
}

const XAxisTickFormatter: React.FC<Props> = ({
    x,
    y,
    fill,
    payload,
    textStyles,
}) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={12}
                textAnchor="middle"
                fill={fill}
                {...textStyles}
            >
                {payload.value}
            </text>
        </g>
    )
}

export default XAxisTickFormatter
