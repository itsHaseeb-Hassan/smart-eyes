import React from "react";
import styled from "styled-components";
import RangeSlider from "./RangeSlider";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 95%;
  margin: 1%;
  margin-top: 3%;
`;

const DivContainer = styled.div`
  width: 60%;
  border: 1px solid ${(props) => props.theme.colors.borders};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.bgSecondary};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .cameraInstanceHeading {
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
    margin-left: 15px;
  }

  .cameraInstanceParagraph {
    margin-top: 1%;
    margin-left: 15px;
  }

  .cameraInstanceParagraph {
    p {
      margin: 0%;
    }
  }
  .expirationHeading {
    margin-left: 15px;
  }
`;

const License = () => {
  return (
    <Div>
      <DivContainer>
        <div className="cameraInstanceHeading"> Camera Instance </div>
        <div className="cameraInstanceParagraph">
          <p> Total Count: 10</p>
          <p> Deployed: 6 </p>
          <p> Remaining: 4 </p>
        </div>

        <h4 className="expirationHeading"> Expiration </h4>
        <RangeSlider min="0" max="100" step="20" value="80" />
      </DivContainer>
    </Div>
  );
};

export default License;
