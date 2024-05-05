import React from "react";
import styled from "styled-components";
import SearchIcon from "../static/images/Icons/Search_Icon.svg";
import Buttons from "../components/Buttons";
import InputForm from "../components/InputForm";
import Edit from "../static/images/Icons/Edit_Icon.svg";
import Delete from "../static/images/Icons/Delete_Icon.svg";
import Person from "../static/images/Icons/person_icon.svg";
import Timer from "../components/Timer";
import {
  StyledTable,
  TableData,
  TableHeading,
  THead,
} from "../static/CSS/Style";

const WrapperUser = styled.div`
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

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  @media only screen and (max-width: 600px) {
    display: flex;
    width: 98%;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
    width: 98%;
  }
  .UserSearchDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    height: 100%;
    @media only screen and (max-width: 600px) {
      width: 60%;
    }
    @media only screen and (min-width: 600px) {
      width: 60%;
    }
  }
  .manageUsers {
    width: 100%;
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
    @media only screen and (min-width: 600px) {
      width: 70%;
    }
  }
  .searchUsers {
    border: 1px solid ${(props) => props.theme.colors.borders};
    height: 70%;
    width: 100%;
    border-radius: 5px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  .ButtonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff8d03;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    padding: 1px;
    margin-right: 5px;
  }
  .ButtonIcon img {
    color: ${(props) => props.theme.colors.text};
    background: transparent;
  }
  .DeleteButtonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d54444;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    padding: 1px;
  }
`;
const UserTable = () => {
  return (
    <>
      <WrapperUser>
        <User>
          <div className="UserSearchDiv">
            <div className="manageUsers"> Manage Users </div>
            <div className="searchUsers">
              <InputForm
                type={"text"}
                width={"100"}
                borderRadius={"0"}
                marginRight={"0"}
                background={"none"}
                paddingLeft={"0"}
              />
              <img src={SearchIcon} alt="Search Icon" />
            </div>
          </div>
          <div>
            <Buttons name={"Create User"} size={"100"} />
          </div>
        </User>
      </WrapperUser>
      <StyledTable>
        <THead>
          <tr>
            <TableHeading>Name</TableHeading>
            <TableHeading>Email</TableHeading>
            <TableHeading>Phone Number</TableHeading>
            <TableHeading>License</TableHeading>
            <TableHeading>Action</TableHeading>
          </tr>
        </THead>
        <tbody>
          <tr>
            <TableData>Awais Mughal</TableData>
            <TableData>awaismughal@virol.com</TableData>
            <TableData>+92 333 4567 890</TableData>
            <TableData>
              <Timer />
            </TableData>
            <TableData>
              <Span>
                <span className="ButtonIcon">
                  <img src={Person} />
                </span>
                <span className="ButtonIcon">
                  <img src={Edit} />
                </span>
                <span className="DeleteButtonIcon">
                  <img src={Delete} />
                </span>
              </Span>
            </TableData>
          </tr>
        </tbody>
      </StyledTable>
      {/* <Pagination
        currentPage={paginationCurrentPage}
        totalCount={32}
        pageSize={recordsPerPage && recordsPerPage}
        onPageChange={setPaginationCurrentPage}
      /> */}
    </>
  );
};

export default UserTable;
