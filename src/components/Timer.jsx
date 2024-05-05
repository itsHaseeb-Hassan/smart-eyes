import React from "react";
import Countdown from "react-countdown";
import { UseTimer } from "../Customhooks/UseTimer";
import { WrapperTimer } from "../static/CSS/Style";
function Timer() {
  const { formatTime, expiryDate } = UseTimer();
  return (
    <WrapperTimer>
      <span>License Expire in:</span>
      <Countdown
        className="countdown"
        date={expiryDate}
        renderer={({ total }) => formatTime(total)}
      />
    </WrapperTimer>
  );
}

export default Timer;
