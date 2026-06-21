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
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
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
