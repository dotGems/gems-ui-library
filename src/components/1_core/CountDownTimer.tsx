/* eslint-disable @typescript-eslint/no-use-before-define */
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import moment from 'moment';

interface IClock {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

interface ICountdownTimerProps {
    startTime: number,
    title: string
}


const CountdownTimer = ({startTime, title}:ICountdownTimerProps) => {
const [remainingTime, setRemainingTime] = useState<IClock>({
    days: -1,
    hours: -1,
    minutes: -1,
    seconds: -1
});

const countdown = function(timestamp:number) {
  let display
  display = moment.duration((timestamp - moment().unix()) * 1000, 'milliseconds')
  display = {
    days: moment.duration(display).days(),
    hours: moment.duration(display).hours(),
    minutes: moment.duration(display).minutes(),
    seconds: moment.duration(display).seconds()
  }
  return display
}

useEffect(() => {
    let interval = setInterval(function(){
        let timeRemaining = countdown(startTime);
        if (!isNaN(timeRemaining.days) || !isNaN(timeRemaining.hours) || !isNaN(timeRemaining.minutes) || !isNaN(timeRemaining.seconds)){
            if (timeRemaining.seconds < 0){
                clearInterval(interval);
            } else {
                setRemainingTime(():IClock => timeRemaining)
            }
        }
    }, 1000);
}, [startTime]);

    return (remainingTime.seconds >= 0 ? <><h2 style={{ fontFamily:`"proxima-soft", sans-serif`, color: "#021b4d" }}>{title}</h2><Typography variant="h3" style={{ color:"#021b4d", fontFamily:`"proxima-soft", sans-serif` }}>
    {('0'+remainingTime.days).slice(-2)}:{('0'+remainingTime.hours).slice(-2)}:{('0'+remainingTime.minutes).slice(-2)}:{('0'+remainingTime.seconds).slice(-2)}
    </Typography></>: <></>)
}

export default CountdownTimer;