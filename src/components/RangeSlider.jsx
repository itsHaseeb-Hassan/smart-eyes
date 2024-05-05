import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  --fill-color: linear-gradient(to right, orange, var(--primary-color));
  --primary-color: orange;
  --progress-radius: 20px;
  --track-height: calc(var(--thumb-size) / 2);
  --thumb-size: 22px;
  --ticks-height: 5px;
  --ticks-gap: var(--ticks-height, 0);
  --value-a: Clamp(var(--min), var(--value, 0), var(--max));
  --value-b: var(--value, 0);
  --completed-a: calc(
    (var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100
  );
  --completed-b: calc(
    (var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100
  );
  --cb: Max(var(--completed-a), var(--completed-b));

  height: max(var(--track-height), var(--thumb-size));
  padding-bottom: var(--flip-y, var(--ticks-gap));
  position: relative;
  z-index: 1;

  input[type="range"]::-webkit-slider-thumb {
    display: none;
  }

  input {
    -webkit-appearance: none;
    width: 100%;
    left: 0;
    background: none;
  }

  input:only-of-type ~ div.range-slider__progress {
    --clip-start: 0;
  }

  .range-slider__progress {
    --start-end: calc(var(--thumb-size) / 2);
    --clip-end: calc(100% - (var(--cb)) * 1%);
    --clip: inset(-20px var(--clip-end) -20px var(--clip-start));
    position: absolute;
    left: var(--start-end);
    right: var(--start-end);
    top: calc(
      var(--ticks-gap) * var(--flip-y, 0) + var(--thumb-size) / 2 -
        var(--track-height) / 2
    );
    height: calc(var(--track-height));
    background: var(--progress-background, #eee);
    z-index: -1;
    border-radius: var(--progress-radius);

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      clip-path: var(--clip);
      top: 0;
      bottom: 0;
      background: var(--fill-color, black);
      border-radius: inherit;
    }
  }
`;

const RangeSlider = ({ min, max, step, value, onChange }) => {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value));
  };

  return (
    <SliderContainer
      style={{
        "--min": min,
        "--max": max,
        "--step": step,
        "--value": value,
        "--text-value": JSON.stringify(value.toLocaleString()),
        "--prefix": "$",
      }}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <output></output>
      <div className="range-slider__progress"></div>
    </SliderContainer>
  );
};

export default RangeSlider;
