import React from "react";
import { Tabs } from "./Tab/Tabs";
import {
  WrapperCard,
  TabContainer,
  Button,
  CardContainer,
} from "../../static/CSS/Style";
import { UseStreaming } from "../../Customhooks/UseStreaming";
export const Container = () => {
  const {
    handleClick,
    active,
    numBoxes,
    boxes,
    activeTabIndex,
    setActiveTabIndex,
  } = UseStreaming();
  return (
    <div>
      <WrapperCard>
        <TabContainer>
          <Tabs
            text="All"
            index={0}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
          <Tabs
            text="Site Name 1"
            index={1}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
          <Tabs
            text="Site Name 2"
            index={2}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
        </TabContainer>
        <div>
          <Button
            onClick={(e) => handleClick(2, 556, 405, 0)}
            active={active === 0}
          >
            2x2
          </Button>
          <Button
            onClick={(e) => handleClick(3, 360, 262, 1)}
            active={active === 1}
          >
            3x3
          </Button>
          <Button
            onClick={(e) => handleClick(4, 275, 200, 2)}
            active={active === 2}
          >
            4x4
          </Button>
        </div>
      </WrapperCard>
      <CardContainer numBoxes={numBoxes}>{boxes}</CardContainer>
    </div>
  );
};
