import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../static/images/Icons/Edit_Icon.svg";
import Delete from "../static/images/Icons/Delete_Icon.svg";
import Plus from "../static/images/Icons/Plus_Icon.svg";
import IconComponent from "./IconComponent";
import { Div, DivContainer, CameraDescription } from "../static/CSS/Style";
import { getSiteDetails } from "../store/actions/SiteAction";
import Pagination from "./pagination/Pagination";

const Sites = () => {
  const [recordsPerPage] = React.useState(2);
  const [paginationCurrentPage, setPaginationCurrentPage] = React.useState(1);
  const Sites = useSelector((state) => state.SiteDetails);
  console.log(Sites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSiteDetails());
  }, []);
  const { Site, currentPage, totalPages, count, loading, error } = Sites;

  React.useEffect(() => {
    dispatch(getSiteDetails(paginationCurrentPage));
  }, [dispatch, paginationCurrentPage]);

  return (
    <>
      <Div>
        {Site?.map((item) => {
          return (
            <DivContainer key={item.id}>
              <IconComponent background={"#ff8d03"} src={Edit} />

              <CameraDescription>
                <div className="title"> {item.title} </div>
                <div className="location">
                  Number_of_Cameras: {item.No_Of_Cameras}
                </div>
              </CameraDescription>

              <IconComponent background={"#D54444"} src={Delete} />
            </DivContainer>
          );
        })}

        <DivContainer style={{ borderStyle: "dashed" }}>
          <div className="addCameraDiv">
            <div className="addCamera">Add Site</div>
            <img
              src={Plus}
              className="plusIcon"
              alt={"Not Display"}
              style={{ color: "${(props) => props.theme.colors.text}" }}
            />
          </div>
        </DivContainer>
      </Div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          currentPage={paginationCurrentPage}
          totalCount={8}
          pageSize={recordsPerPage && recordsPerPage}
          onPageChange={setPaginationCurrentPage}
        />
      </div>
    </>
  );
};

export default Sites;
