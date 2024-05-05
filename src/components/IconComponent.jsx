import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: ${({ marginLeft }) => marginLeft};

    @media only screen and (max-width: 600px) {
        margin: 1px;
    }

    .IconDiv {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${({ background }) => background};
        color: ${({ color }) => color};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`;

// Function
const IconComponent = ({ background, src, color, marginLeft }) => {
    return (
        <MainWrapper background={background} marginLeft={marginLeft}>
            <div></div>
            <div className="IconDiv">
                <img src={src} color={color} alt="Icon"/>
            </div>
        </MainWrapper>
    );
};

export default IconComponent;
