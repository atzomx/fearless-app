import { useEffect, useState } from 'react';

const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const toFormat = (seconds: number) => {
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [minutes, remainingSeconds].map(padZero).join(':');
};

const useTimer = (seconds: number) => {
  const [time, setTime] = useState<number>(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTimer => {
        const newSeconds = prevTimer - 1;
        if (newSeconds < 0) return 0;
        return newSeconds;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { time, formatted: toFormat(time) };
};

export default useTimer;
