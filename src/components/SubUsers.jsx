import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "../static/images/Icons/Search_Icon.svg";
import Buttons from "./Buttons";
import InputForm from "./InputForm";
import Edit from "../static/images/Icons/Edit_Icon.svg";
import Delete from "../static/images/Icons/Delete_Icon.svg";
import {
  StyledTable,
  TableData,
  TableHeading,
  THead,
} from "../static/CSS/Style";
import { useDispatch, useSelector } from "react-redux";
import {getSubuserDetails} from '../store/actions/subuserAction'
import Pagination from "./pagination/Pagination";

const Div = styled.div`
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

const DivContainer = styled.div`
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
  .SubUserSearchDiv {
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
  .manageSubUsers {
    width: 100%;
    @media only screen and (max-width: 600px) {
      width: 70%;
    }
    @media only screen and (min-width: 600px) {
      width: 70%;
    }
  }
  .searchSubUsers {
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

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  width: 95%;
  @media only screen and (max-width: 600px) {
    width: 98%;
    margin: 0;
  }
  @media only screen and (min-width: 600px) {
    width: 98%;
    margin: 0;
  }
  @media only screen and (min-width: 830px) {
    margin: 1%;
  }
  .subUserTableHeadingRowItems {
    text-align: left;
    @media only screen and (max-width: 600px) {
      border: 1px solid red;
      margin-right: 25px;
    }
    @media only screen and (min-width: 600px) {
      border: 1px solid red;
      margin-right: 25px;
    }
  }
  .subUserTableHeading {
    width: 100%;
    height: 5vh;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.bgDefault};
    color: ${(props) => props.theme.colors.text};
    border: ${(props) => props.theme.colors.borders};
  }
  .subUserTableHeadingRow {
    display: flex;
    justify-content: space-between;
    margin: 5px 20px;
    @media only screen and (max-width: 600px) {
      padding: 0 !important;
      margin: 0;
      margin-top: 5px;
    }
    @media only screen and (min-width: 600px) {
      padding: 0 !important;
      margin: 0;
      margin-top: 5px;
    }
    @media only screen and (min-width: 830px) {
      /* margin: 1%; */
      margin-top: 10px;
      margin-left: 10px;
    }
  }
  .subUserTableBody {
    width: 90%;
    height: 50%;
    color: ${(props) => props.theme.colors.text};
    margin-left: 20px;
    border-bottom: 1px solid #707070;
    @media only screen and (max-width: 600px) {
      /* margin: 0; */
      width: 100%;
    }
    @media only screen and (min-width: 600px) {
      margin: 0;
      padding: 0;
      width: 100%;
    }
    @media only screen and (min-width: 830px) {
      width: 100%;
    }
  }
  .subUserTableBodyRow {
    display: flex;
    justify-content: space-between;
    width: 90%;
    border: 1px solid red;
    margin-right: 150px;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    @media only screen and (max-width: 600px) {
      /* margin-left: 20px; */
    }
    @media only screen and (min-width: 600px) {
      margin-left: 10px;
    }
    @media only screen and (min-width: 830px) {
      margin-left: 50px;
      width: 100%;
    }
  }
  .subUserTableBodyRow td {
    display: flex;
    justify-content: space-between;
    /* width: 20%; */
    margin: 20px 30px;
    /* margin-left: 50px; */
    @media only screen and (max-width: 600px) {
      justify-content: space-between;
      width: 25%;
      margin-left: 0%;
      overflow-wrap: break-word;
    }
    @media only screen and (min-width: 600px) {
      justify-content: space-between;
      overflow-wrap: break-word;
      width: 25%;
      margin-left: 0%;
    }
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  .EditButtonIcon {
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
  .EditButtonIcon img {
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
const SubUsers = () => {
  const subUserDetail = useSelector((state) => state.SubUsersDetails);
  console.log('subuserdetil',subUserDetail)
  const { user, currentPage, totalPages, count, loading, error } =subUserDetail;
  const [recordsPerPage] = React.useState(10);
  const [paginationCurrentPage, setPaginationCurrentPage] = React.useState(1);
  // const indexOfLastRecord = paginationCurrentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = user?.slice(indexOfFirstRecord, indexOfLastRecord);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSubuserDetails(paginationCurrentPage));
  }, [dispatch, paginationCurrentPage]);
  console.log("user is this",user)
  return (
    <>
      <Div>
        <DivContainer>
          <div className="SubUserSearchDiv">
            <div className="manageSubUsers"> Manage Sub Users </div>
            <div className="searchSubUsers">
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
            <Buttons name={"Create Sub User"} size={"100"} />
          </div>
        </DivContainer>
      </Div>
      <StyledTable>
        <THead>
          <tr>
            <TableHeading>Name</TableHeading>
            <TableHeading>Email</TableHeading>
            <TableHeading>Phone Number</TableHeading>
            <TableHeading>Action</TableHeading>
          </tr>
        </THead>
        {user?.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <TableData>{item.name}</TableData>
                <TableData>{item.email}</TableData>
                <TableData>{item.Mobile_number}</TableData>
                <TableData>
                  <Span>
                    <span className="EditButtonIcon">
                      <img src={Edit} />
                    </span>
                    <span className="DeleteButtonIcon">
                      <img src={Delete} />
                    </span>
                  </Span>
                </TableData>
              </tr>
            </tbody>
          );
        })}
      </StyledTable>
      {/* {count > 10 && ( */}
      <Pagination
        currentPage={paginationCurrentPage}
        totalCount={32}
        pageSize={recordsPerPage && recordsPerPage}
        onPageChange={setPaginationCurrentPage}
      />
      {/* )} */}
    </>
  );
};

export default SubUsers;
