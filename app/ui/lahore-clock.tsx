"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function LahoreClock() {
  const [time, setTime] = useState("UTC+5");

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();

    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = window.setTimeout(() => {
      update();
      interval = setInterval(update, 60_000);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <p className="clock">
      <span>Lahore, Pakistan</span>
      <span aria-label={`Pakistan Standard Time ${time}`} suppressHydrationWarning>
        PKT · {time}
      </span>
    </p>
  );
}
