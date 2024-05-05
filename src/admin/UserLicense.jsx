import React from "react";
import styled from "styled-components";
import { Data } from "./data";
const WrapperLicense = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 1%;
  @media only screen and (max-width: 600px) {
    width: 98%;
  }
  @media only screen and (min-width: 600px) {
    width: 98%;
  }
`;
const License = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
const LicenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  .licensedetail {
    width: 50.25rem;
    height: 450px;
    border: 1px solid #707070;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .licenserenewl {
    width: 45rem;
    margin-left: 80px;
    border: 1px solid #707070;
    border-radius: 10px;
    height: 300px;
  }
`;
const UserLicense = () => {
  return (
    <WrapperLicense>
      <License>
        <div className="manageLicense">
          {" "}
          License (Activate/Deactivate)
          <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </label>
        </div>
      </License>
      <LicenseContainer className="licenseContainer">
        <div className="licensedetail">
          <p style={{ marginLeft: "30px" }}>License Details</p>
          {Data.map((item, index) => {
            return (
              <div
                style={{
                  margin: "30px",
                  borderBottom: "1px solid black",
                }}
              >
                <div>Camera Insenses</div>
                <span>Deployed:{item.deployed}</span>
                <span style={{ marginLeft: "15px" }}>
                  Remaing:{item.remaining}
                </span>
                <span style={{ margin: "300px" }}>count</span>
              </div>
            );
          })}
        </div>
        <div className="licenserenewl">
          <div style={{ margin: "30px" }}>
            <p>License Renewal</p>
            <input type="date" />
          </div>
        </div>
      </LicenseContainer>
    </WrapperLicense>
  );
};

export default UserLicense;
