import { useState, useEffect, useMemo } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Theme } from "@mui/system";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Scatter,
} from "recharts";
// import { isMobile } from "react-device-detect";
// import { Skeleton } from "antd";
import Box from "@mui/material/Box";
// import ChartTooltip from "./graphHelpers/chartTollTipEarning";
// import { setLastPointChart } from "../../../redux/reducers/earn/Earn";
import dummy from "./dummy.json";
import ChartTooltip from "./chartTollTipEarning";
import PulsatingLastPoint from "./PulsatingLastPoint";
import { isMobile, isMobileOnly } from "react-device-detect";

const DashboardGraph = (props: any) => {
  const updatedGraphValue = JSON.parse(JSON.stringify(props));
  // const getGraphData = async () => {
  //   props?.map((data: any) => {});
  // };

  let dummyData = dummy;
  const dispatch = useDispatch();
  const [hoverValue, setHoverValue] = useState<any>();
  const theme = useTheme();

  const getHoverColors = (
    color: string,
    hoverColor: string,
    hoverPoint?: any
  ): [string, string] => {
    return [color, hoverPoint !== undefined ? hoverColor : color];
  };

  const getColors = (
    theme: Theme,
    activePoint: any,
    hoverPoint?: any
  ): [string, string] => {
    return getHoverColors("#000", "transparent", hoverPoint);
  };

  const getXAxisConfig = (dataRange: any): ((v: string | number) => string) => {
    switch (dataRange) {
      case "DayData":
        return (value) =>
          value
            ? moment(value).format("MMM Do")
            : moment().format("MMM Do h:mm");
      // case "DayData":
      //   return (value) => moment.unix(Number(value) / 1000).format("LT");
      case "MonthData":
        return (value) => moment.unix(Number(value) / 1000).format("MMM Do");
      case "WeekData":
        return (value) => moment.unix(Number(value) / 1000).format("MMM Do");
      case "YearData":
        return (value) => moment.unix(Number(value) / 1000).format("MMM Do");
      default:
        throw new Error("Invalid data range!");
    }
  };

  const xAxisFormatter = useMemo(() => getXAxisConfig("DayData"), []);

  let indexOfHover = 0;

  const data: any = useMemo(
    () =>
      props?.data?.map((entry: any, index: number) => ({
        ...entry,
        beforeHover: index <= indexOfHover ? entry?.reserve0 : undefined,
        afterHover: index >= indexOfHover ? entry?.reserve0 : undefined,
      })),
    [hoverValue, props?.data]
  );

  const lastPoint = data?.length ? data[data?.length - 1] : {};
  const activePoint = hoverValue ?? lastPoint;

  indexOfHover =
    data?.length && activePoint?.key
      ? data?.findIndex((v: any) => v.key === activePoint.key)
      : 0;
  const percentage = `${(100 * indexOfHover) / (data?.length - 1)}%`;

  const [lineColor, bodyColor] =
    data?.length && activePoint
      ? getColors(theme, activePoint, hoverValue)
      : ["#6cc8ef", "#6cc8ef"];


  return (
    <>
      <Box>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={700}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="swapChartBody1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={"#5269eb"} stopOpacity={0.8} />
                <stop offset="100%" stopColor={"#5269eb"} stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="swapChartBody2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={"#293994"} stopOpacity={0.5} />
                <stop offset="100%" stopColor={"#293994"} stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="swapChartLine1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={lineColor} />
                <stop offset={percentage} stopColor={lineColor} />
                <stop offset={percentage} stopColor={"#0da2ff"} />
                <stop offset="100%" stopColor={"#0da2ff"} />
              </linearGradient>{" "}
              <linearGradient id="swapChartLine2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={lineColor} />
                <stop offset={percentage} stopColor={lineColor} />
                <stop offset={percentage} stopColor={"#5167eb	"} />
                <stop offset="100%" stopColor={"#5167eb	"} />
              </linearGradient>
            </defs>
            <Tooltip
              wrapperStyle={{ backgroundColor: "transparent" }}
              cursor={{
                strokeDasharray: 4,
                strokeWidth: 1,
                stroke: "#AFAFAF",
              }}
              active={false}
              content={<ChartTooltip />}
            />
            <Area
              type="monotone"
              dataKey="reserve0"
              strokeWidth={2}
              stroke="url(#swapChartLine1)"
              fill="url(#swapChartBody1)"
              activeDot={{
                stroke: lineColor,
                fill: lineColor,
              }}
            />
            <Area
              type="monotone"
              dataKey="reserve1"
              strokeWidth={2}
              stroke="url(#swapChartLine2)"
              fill="url(#swapChartBody2)"
              activeDot={{
                stroke: lineColor,
                fill: lineColor,
              }}
            />
            <Scatter
              type="monotone"
              dataKey="reserve1"
              stroke={lineColor}
              isAnimationActive={true}
              // animationDuration={1000}
              shape={<PulsatingLastPoint lastPoint={lastPoint} />}
            />{" "}
            <YAxis
              type="number"
              domain={["auto", "auto"]}
              // hide
              // width={75}
            />
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <YAxis type="number" domain={[0, 1.33]} hide /> */}
            <XAxis
              // minTickGap={isMobile ? 30 : 100}
              dataKey="timestamp"
              tickCount={2}
              tickSize={2}
              // tick={false}
              // axisLine={true}
              // tickLine={false}
              tickFormatter={xAxisFormatter}
              domain={["auto", "auto"]}
              // hide
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default DashboardGraph;
