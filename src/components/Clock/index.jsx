import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

Clock.propTypes = {};
function formatDate(date) {
  if (!date) return "";

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}
function Clock() {
  const [timeString, setTimeString] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const date = new Date();
      const newTimeString = formatDate(date);

      setTimeString(newTimeString);
    }, 1000);
    return () => {
        console.log('Clock cleanup');
        clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <h1>TimeonClock</h1>
      <p style={{ fontSize: "2rem" }}>{timeString}</p>
    </div>
  );
}

export default Clock;
