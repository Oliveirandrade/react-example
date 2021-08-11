import React from "react"

interface Props {
    fill: string,
    x: number,
    y: number,
    width: number,
    height: number,
}

const RoundBorderBar: React.FC<Props> = ({
    fill,
    x,
    y,
    width,
    height,
}) => <rect x={x} y={y} width={width} height={height} fill={fill} rx="4" />

export default RoundBorderBar
