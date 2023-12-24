/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect } from "react";
import { convertToPersianDigits } from "../functions/Functions";
import { Box, CircularProgress } from "@mui/material";
export interface TimerProps {
  min?: number;
  sec?: number;
  onTimeOut?: () => void;
  name?: string;
}
const Timer = ({
  min = 0,
  sec = 0,
  onTimeOut,
  name = "",
}: TimerProps) => {
  const localMin = localStorage.getItem("minutes" + name);
  const localSec = localStorage.getItem("seconds" + name);
  const localMountTime = localStorage.getItem("mountTime" + name);

  const [minutes, setMinutes] = React.useState(min);
  const [seconds, setSeconds] = React.useState(sec);

  React.useEffect(() => {
    if (localMin && localSec && localMountTime) {
      const mountTime = JSON.parse(localMountTime);
      const currentTime = Date.now();
      const timeDiff = Math.round((currentTime - mountTime) / 1000);
      const timeLeft =
        60 * parseInt(localMin) + parseInt(localSec) - timeDiff;
      if (timeLeft > 0) {
        setMinutes(Math.floor(timeLeft / 60));
        setSeconds(timeLeft % 60);
      } else {
        localStorage.removeItem("minutes" + name);
        localStorage.removeItem("seconds" + name);
        if (onTimeOut) onTimeOut();
      }
    }
  }, [localMin, localMountTime, localSec, name, onTimeOut]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          // localStorage.removeItem("minutes"+name);
          // localStorage.removeItem("seconds"+name);
          if (onTimeOut) onTimeOut();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, name, onTimeOut, seconds]);

  return convertToPersianDigits(minutes + ":" + seconds);
};

export const TimerWithProgress = ({
  min = 0,
  sec = 0,
  onTimeOut,
  name = "",
}: TimerProps) => {
  const localMin = localStorage.getItem("minutes" + name);
  const localSec = localStorage.getItem("seconds" + name);
  const localMountTime = localStorage.getItem("mountTime" + name);

  const [minutes, setMinutes] = React.useState(min);
  const [seconds, setSeconds] = React.useState(sec);

  React.useEffect(() => {
    if (localMin && localSec && localMountTime) {
      const mountTime = JSON.parse(localMountTime);
      const currentTime = Date.now();
      const timeDiff = Math.round((currentTime - mountTime) / 1000);
      const timeLeft =
        60 * parseInt(localMin) + parseInt(localSec) - timeDiff;
      if (timeLeft > 0) {
        setMinutes(Math.floor(timeLeft / 60));
        setSeconds(timeLeft % 60);
      } else {
        localStorage.removeItem("minutes" + name);
        localStorage.removeItem("seconds" + name);
      }
    }
  }, [localMin, localMountTime, localSec, name]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        const percent = (minutes * 60 + seconds) / (min * 60 + sec);
        console.log(percent);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          // localStorage.removeItem("minutes"+name);
          // localStorage.removeItem("seconds"+name);
          if (onTimeOut) onTimeOut();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, name, onTimeOut, seconds]);

  return (
    <Box display={"flex"} gap={1} justifyContent={'center'} alignItems={'center'}>
      <CircularProgress
        variant="determinate"
        value={((60 * minutes + seconds) / (60 * (localMin as unknown as number) + (localSec as unknown as number))) * 1000}
        size={20}
      />
      {convertToPersianDigits(minutes + ":" + seconds)}
    </Box>
  );
};

export default Timer;
