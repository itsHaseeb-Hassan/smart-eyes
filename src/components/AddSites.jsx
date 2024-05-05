import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import InputForm from "./InputForm";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 1%;
    margin-top: 3%;
`;

const DivContainer = styled.div`
    width: 97%;
    border: 1px solid ${(props) => props.theme.colors.borders};
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.bgSecondary};
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin-right: 20px;

    cursor: pointer;

    .cameraName {
        display: flex;
        flex-direction: column;
        width: 30%;
    }

    .checkboxContainer {
        display: flex;
    }

    .checkboxWrapper {
        display: flex;
        width: 30%;
        align-items: center;
    }
`;

const AddSites = () => {
    return (
        <Div>
            <DivContainer>
                <div className="cameraName">
                    <label> Site Name </label>
                    <InputForm />
                </div>
                <div className="cameraName">
                    <label> Site Address </label>
                    <InputForm />
                </div>
                <div className="cameraName">
                    <label> Site Phone Number </label>
                    <InputForm />
                </div>
            </DivContainer>

            <Buttons name={"SAVE"} marginLeft={"0"}  />
        </Div>
    );
};

export default AddSites;
