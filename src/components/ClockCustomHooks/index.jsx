import React, { useEffect, useRef, useState } from "react";
import useClock from "../Hooks/useClock";

function ClockCustomHooks() {
const { timeString } = useClock();
  return (
    <div>
      <h3>useClock()</h3>
      <p style={{ fontSize: "2rem" }}>{timeString}</p>
    </div>
  );
}

export default ClockCustomHooks;
