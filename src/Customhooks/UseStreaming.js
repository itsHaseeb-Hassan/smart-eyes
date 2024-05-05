import React, { useEffect } from "react";
import { Box } from "../static/CSS/Style";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUrlDetails } from "../store/actions/urlActions";

export const UseStreaming = () => {
  const [numBoxes, setNumBoxes] = React.useState();
  const [boxWidth, setBoxWidth] = React.useState();
  const [boxHeight, setBoxHeight] = React.useState();
  const [active, setActive] = React.useState();
  const [activeTabIndex, setActiveTabIndex] = React.useState();
  const [show, setShow] = React.useState([]);
  const handleClick = (num, width, height, index) => {
    setNumBoxes(num * num);
    setBoxWidth(width);
    setBoxHeight(height);
    setActive(index);
  };
  const StreamingUrl = useSelector((state) => state.urlDetails.urls);
  console.log(StreamingUrl);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUrlDetails());
  }, []);
  useEffect(() => {
    setShow(StreamingUrl);
  }, [StreamingUrl]);
  const numColumns = Math.sqrt(numBoxes);
  const boxes = [];
  for (let i = 0; i < numBoxes; i++) {
    const video = show[i];
    const isFirstChild = i % numColumns === 0;
    const backgroundColor = isFirstChild ? "#2A9D8F" : "#F4A261";
    boxes.push(
      <Box key={i} boxWidth={boxWidth} boxHeight={boxHeight}>
        <div>
          <ReactPlayer
          style={{backgroundColor:"red"}}
            url={video.Url}
            width='100%'
            controls={true}
            height={boxHeight - 55}
            className="reactplayer"
          />
        </div>
        <div style={{ backgroundColor }} className="Boxdiv">
          <span style={{ padding: "25px" }}>The Office Room</span>
        </div>
      </Box>
    );
  }
  return {
    handleClick,
    active,
    numBoxes,
    boxes,
    activeTabIndex,
    setActiveTabIndex,
  };
};
