/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TimerProps } from "./Timer";

export const setTimer = ({
  min = 0,
  sec = 0,
  name = "",
  onTimeOut,
}: TimerProps) => {
  const localMin = localStorage.getItem("minutes" + name);
  const localSec = localStorage.getItem("seconds" + name);
  const localMountTime = localStorage.getItem("mountTime" + name);

  if (localMin && localSec && localMountTime) {
    const mountTime = JSON.parse(localMountTime);
    const currentTime = Date.now();
    const timeDiff = Math.round((currentTime - mountTime) / 1000);
    const timeLeft =
      60 * parseInt(localMin) + parseInt(localSec) - timeDiff;
    if (timeLeft > 0) {
      return timeLeft;
    } else {
      localStorage.removeItem("minutes" + name);
      localStorage.removeItem("seconds" + name);
      if (onTimeOut) onTimeOut();
    }
  } else {
    localStorage.setItem("minutes" + name, JSON.stringify(min));
    localStorage.setItem("seconds" + name, JSON.stringify(sec));
    localStorage.setItem(
      "mountTime" + name,
      JSON.stringify(Date.now())
    );
  }
};

export const getTimer = ({ name = "",onTimeOut }: TimerProps) => {
  const localMin = localStorage.getItem("minutes" + name);
  const localSec = localStorage.getItem("seconds" + name);
  const localMountTime = localStorage.getItem("mountTime" + name);

  // return remaining time in seconds
  if (localMin && localSec && localMountTime) {
    const mountTime = JSON.parse(localMountTime);
    const currentTime = Date.now();
    const timeDiff = Math.round((currentTime - mountTime) / 1000);
    const timeLeft =
      60 * parseInt(localMin) + parseInt(localSec) - timeDiff;
    if (timeLeft > 0) {
      return timeLeft;
    } else {
      localStorage.removeItem("minutes" + name);
      localStorage.removeItem("seconds" + name);
      if (onTimeOut) onTimeOut();
    }
  }
};
