import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { isMobile } from "react-device-detect";

interface PulsatingLastPointProps {
  cx?: number;
  cy?: number;
  stroke?: string;
  lastPoint: { key: string };
  payload?: { key: string };
}

const AnimatedSvg = styled.svg`
  animation: enterPulse 0.5s;
  animation-iteration-count: 1;
  animation-play-state: running;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  opacity: 0;
  transform: scale(0);
  transform-origin: center;

  @keyframes enterPulse {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const AnimatedCircle = styled.circle`
  animation: stretch 1.75s ease-in-out infinite running;
  opacity: 0.5;
  transform-origin: center;

  @keyframes stretch {
    0% {
      opacity: 0;
      transform: scale(2);
    }

    30% {
      opacity: 0.2;
      transform: scale(2);
    }

    60% {
      opacity: 0.2;
      transform: scale(3);
    }

    80% {
      opacity: 0.2;
      transform: scale(1);
    }
  }
`;

const PulsatingLastPoint: FC<PulsatingLastPointProps> = ({
  cx = 0,
  cy = 0,
  stroke,
  lastPoint,
  payload,
}) => {
  if (lastPoint.key !== payload?.key) {
    return null;
  }

  return (
    <AnimatedSvg x={cx - 20} y={cy - 20} width={40} height={40}>
      <circle cx="50%" cy="50%" stroke={stroke} fill={stroke} r={5} />
      <AnimatedCircle cx="50%" cy="50%" stroke={stroke} fill={stroke} r={5} />
    </AnimatedSvg>
  );
};

export default PulsatingLastPoint;
