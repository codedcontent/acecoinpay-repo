import { useEffect, useState } from "react";

const TimeClock = () => {
  const getCurrentTime = (): string[] => {
    const now = new Date();
    let hours = now.getHours().toString();
    const minutes = now.getMinutes().toString();

    if (hours.length === 1) {
      hours = "0" + hours;
    }

    return `${hours}:${minutes}`.replace(":", "").split("");
  };

  const [currentTime, setCurrentTime] = useState<string[]>(getCurrentTime());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const TimeBox = ({ time }: { time: string }) => {
    return (
      <div className="bg-secondary p-1.5 rounded-md">
        <span className="text-white font-semibold">{time}</span>
      </div>
    );
  };

  return (
    <div className="flex gap-1 items-center justify-center">
      {/* Assuming this UI is some sort of time display */}
      <TimeBox time={currentTime[0]} />
      <TimeBox time={currentTime[1]} />

      <span className="text-secondary font-medium">:</span>

      <TimeBox time={currentTime[2]} />
      <TimeBox time={currentTime[3]} />
    </div>
  );
};

export default TimeClock;
