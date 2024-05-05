import React from "react";
import { Tab } from "../../../static/CSS/Style";
export const Tabs = ({ text, activeTabIndex, setActiveTabIndex, index }) => {
  return (
    <Tab
      isActive={activeTabIndex === index}
      onClick={() => setActiveTabIndex(index)}
    >
      {text}
    </Tab>
  );
};
