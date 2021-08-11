import React, { useCallback } from 'react'
import {
    Bar,
    BarChart,
    BarChartProps,
    BarProps,
    Brush,
    BrushProps,
    CartesianGrid,
    Cell,
    Legend,
    LegendProps,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    XAxisProps,
    YAxisProps,
    YAxis,
} from 'recharts'

import { colors } from '../../styles/variables'
import { ChartPieDataUnit, FRComponent } from '../../types/commonTypes'

import RoundBorderBar from './custom/RoundBorderBar'
import XAxisTickFormatter from './custom/XAxisTickFormatter'

const COLORS = [colors.PRIMARY, colors.SUPPORT, colors.POSITIVE, colors.WARNING]

type DefaultKeyType = {
    [key: string]: React.ReactText
}

export type BarDataUnit<Keys = DefaultKeyType> = {
    label: string
} & Keys

export type BarChartType<Keys = DefaultKeyType> = {
    type: 'bar'
    data: BarDataUnit<Keys>[]
    chartOptions?: BarChartProps
    barOptions: BarProps[]
    legendOptions?: LegendProps
    brushOptions?: BrushProps
    tooltipOptions?: TooltipProps
    xAxisOptions?: XAxisProps
    yAxisProps?: YAxisProps
}

export interface PieChartType {
    data: ChartPieDataUnit[]
    type: 'pie'
}

type CompiledChartTypes = PieChartType | BarChartType

interface GenericChartType extends FRComponent {
    width?: number
    height?: number
    responsiveWidth?: React.ReactText
    responsiveHeight?: React.ReactText
}

const Chart: React.FC<GenericChartType & CompiledChartTypes> = ({
    height = 400,
    width = 750,
    responsiveWidth = '100%',
    responsiveHeight = '100%',
    ...props
}) => {
    const defaultBrushTickFormatter = useCallback(
        (index) => {
            return props.type === 'bar' ? props.data[index].label : ''
        },
        [props.data, props.type]
    )
    switch (props.type) {
        case 'bar': {
            return (
                <ResponsiveContainer width={responsiveWidth} height={responsiveHeight}>
                    <BarChart width={width} height={height} data={props.data} {...props.chartOptions}>
                        <CartesianGrid strokeDasharray='0' vertical={false} />
                        <XAxis
                            dataKey='label'
                            {...props.xAxisOptions}
                            tick={props.xAxisOptions?.tick || XAxisTickFormatter}
                        />
                        <YAxis {...props.yAxisProps} />
                        {props.tooltipOptions && <Tooltip {...props.tooltipOptions} />}
                        {props.legendOptions && <Legend {...props.legendOptions} />}
                        {props.barOptions.map(({ shape, ...barProps }, i) => (
                            <Bar key={i} shape={shape || (RoundBorderBar as any)} {...barProps} />
                        ))}
                        {props.brushOptions && (
                            <Brush
                                tickFormatter={props.brushOptions.tickFormatter || defaultBrushTickFormatter}
                                {...props.brushOptions}
                            />
                        )}
                    </BarChart>
                </ResponsiveContainer>
            )
        }
        case 'pie': {
            return (
                <PieChart width={width} height={height}>
                    <Pie
                        data={props.data}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey='value'
                        nameKey='name'
                    >
                        {props.data.map((entry, index) => (
                            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend />
                    <Tooltip allowEscapeViewBox={{ x: true, y: true }} />
                </PieChart>
            )
        }
    }
}

export default Chart
