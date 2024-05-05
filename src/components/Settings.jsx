import React from "react";
import styled from "styled-components";
import SettingImg from "../static/images/image_01.png";
import Edit from "../static/images/Icons/Edit_Icon.svg";
import IconComponent from "./IconComponent"; 
import {AcivityLog} from "../dummyData" 

const Div = styled.div`
    display: flex;
    width: 95%;
    margin: 1%;
    margin-top: 3%;
    height: 60%;
    justify-content: space-between;

    @media only screen and (max-width: 600px){
        flex-direction: column;
    }

    @media only screen and (min-width: 600px ){
        flex-direction: column;
    }

    .SettingContainer {
        width: 40%;
        border: 1px solid ${(props) => props.theme.colors.borders};
        border-radius: 5px;
        color: ${(props) => props.theme.colors.text};
        height: 280px;
        display: flex;
        flex-direction: column; 
        padding: 20px;
        background: ${(props) => props.theme.colors.bgSecondary};
        justify-content: space-around;

        @media only screen and (max-width: 600px){
            width: 120%;
            height: 100%;
        }  

        @media only screen and (min-width: 600px ){
            width: 120%;
            height: 100%;
        }   
    }

    .SettingDesc {
        display: flex;
        align-items: center;
        padding-top: 0%;
        margin-top: 0%;
    }

    .SettingPicDiv {
        width: 30%;
        display: flex;
        justify-content: center;
        margin: 0px 20px;
        margin-left: 10px;
        cursor: pointer;
    }

    .SettingPic {
        object-fit: cover;
        width: 100%;
        height: 100%;
        width: 122px;
        height: 122px;
    }

    .UserDetail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 190px;
        height: 92px;
        margin-left: 20px;
    }

    .UserSettingTitle {
        font-size: 24px;
        color: ${(props) => props.theme.colors.text};
        font-weight: 700;
        margin-bottom: 0%;
    }

    .UserDescSetting {
        font-size: 16px;
        font-weight: 400;
        margin-top: 0%;
    }

    .SettingContactContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        @media only screen and (max-width: 600px){ 
            margin-top: 20px;
        }   

        @media only screen and (min-width: 600px ){ 
            margin-top: 20px;
        }   
    }

    .SettingUserContact {
        display: flex;
        flex-direction: column;
        width: 40%;
 
    }

    .UserSettingContactName {
        font-size: 16px;
        color: ${(props) => props.theme.colors.text};
    }

    .UserSettingContactDesc {
        font-weight: 700;
    }

    .userSettingIconDiv {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #ff8d03;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 90%;
        cursor: pointer;
    }

    .UserSettingActivityContainer {
        width: 53%;
        color: ${(props) => props.theme.colors.text};
        border: 1px solid ${(props) => props.theme.colors.borders};
        border-radius: 5px;
        height: 578px;
        background: ${(props) => props.theme.colors.bgSecondary};
    }

    .UserSettingActivityHeading {
        font-size: 20px;
        font-weight: 700;
        border-bottom: 1px solid ${(props) => props.theme.colors.borders};
        padding: 15px 30px;
        margin-bottom: 0px;
    }
`;

const Setting = () => {
    return (
        <Div>
            <div className="SettingContainer">
                <div className="userSettingIconDiv">
                    <IconComponent src={Edit} color={"black"} />
                </div>

                <div className="SettingDesc">
                    <div className="SettingPicDiv">
                        <img className="SettingPic" src={SettingImg} alt="Profile" />
                    </div>

                    <div className="UserDetail">
                        <div className="UserSettingTitle"> Rana Awais </div>
                        <p className="UserDescSetting"> @RanaAwais </p>
                    </div>
                </div>

                <div className="SettingContactContainer">
                    <div className="SettingUserContact">
                        <div className="UserSettingContactName"> Email </div>
                        <div className="UserSettingContactDesc"> rana.awais@gmail.com</div>
                    </div>

                    <div className="SettingUserContact">
                        <div className="UserSettingContactName"> Contact Number </div>
                        <div className="UserSettingContactDesc"> +92 333 33 33 333</div>
                    </div>
                </div>
            </div>

            <div className="UserSettingActivityContainer">
                <div className="UserSettingActivityHeading">Activity Log</div>

                <ul className="UserSettingActivityUl">
                   {AcivityLog.map(item => {
                    return (
                        <li className="UserSettingActivityli" key={item.id}>
                        <img src={item.image} alt="" className="ellipseColor"/>
                        {item.name}
                    </li>
                    )
                   })  }
                </ul>
            </div>
        </Div>
    );
};

export default Setting;
