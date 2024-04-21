import { FC, useEffect } from "react";
// import { SwapDataPoint } from "types";
// import { format } from "date-fns";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import "./chartTollTipStyle.scss";
import moment from "moment";

interface ChartTooltipProps {
  active?: boolean;
  payload?: {
    payload: any;
  }[];
  viewBox?: {
    width: number;
    height: number;
  };
  type?: number;
  sliderDataForToolTip?: any;
}

const TooltipWrapper = styled.div<{ height?: number }>`
  height: ${({ height }) => height ?? 0}px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-items: start;
`;

const TooltipInnerBox = styled.div`
  backdrop-filter: blur(5px);
`;

const dollarFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
  style: "currency",
  currency: "USD",
});
const percentFormat = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

const ChartTooltip: FC<ChartTooltipProps> = ({
  active,
  payload,
  viewBox,
  type,
}) => {
  const tooltipVisible = active && payload && payload.length;

  // const payloadKey = tooltipVisible ? payload[0].payload.key : undefined;

  // const { palette } = useTheme();

  if (!tooltipVisible) {
    return null;
  }

  const dataPoint = payload[0].payload;


  return (
    <TooltipWrapper className={`custom_tooltip`} height={viewBox?.height}>
      <Typography className="custom_tooltip_time">
        {moment(dataPoint?.timestamp).format("MMM Do h:mm a")}
      </Typography>
      <Typography className="custom_tooltip_time treasury_blnc">
        <div className="d-flex align-items-center">
          <span className="box_view"></span>

          <span className="font_fm">
            {dataPoint?.pair0In1Out?.split("/")[0]}{" "}
            {Number(dataPoint?.reserve0)?.toFixed(4)}
          </span>
        </div>

        <div className="d-flex align-items-center">
          <span className="box_view"></span>

          <span className="font_fm">
            {dataPoint?.pair0In1Out?.split("/")[1]}{" "}
            {Number(dataPoint?.reserve1)?.toFixed(4)}
          </span>
        </div>
      </Typography>
    </TooltipWrapper>
  );
};

export default ChartTooltip;
