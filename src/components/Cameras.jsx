import React, { useEffect, useState } from "react";
import Edit from "../static/images/Icons/Edit_Icon.svg";
import Delete from "../static/images/Icons/Delete_Icon.svg";
import Plus from "../static/images/Icons/Plus_Icon.svg";
import IconComponent from "./IconComponent";
import { useDispatch, useSelector } from "react-redux";
import { getCameraDetails } from "../store/actions/cameraAction";
import { Div, DivContainer, CameraDescription } from "../static/CSS/Style";
import Pagination from "./pagination/Pagination";
const Cameras = () => {
  const [recordsPerPage] = useState(2);
  const [paginationCurrentPage, setPaginationCurrentPage] = useState(1);

  const Camera = useSelector((state) => state.CameraDetails);
  const { camera, currentPage, totalPages, count, loading, error } = Camera;
  console.log(Camera);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCameraDetails(paginationCurrentPage));
  }, [dispatch, paginationCurrentPage]);

  return (
    <>
      <Div>
        {camera?.map((item) => {
          return (
            <DivContainer key={item.id}>
              <IconComponent background={"#ff8d03"} src={Edit} />

              <CameraDescription>
                <div className="title"> {item.title} </div>
                <div className="location"> Location: {item.description} </div>
              </CameraDescription>

              <IconComponent background={"#D54444"} src={Delete} />
            </DivContainer>
          );
        })}

        <DivContainer style={{ borderStyle: "dashed" }}>
          <div className="addCameraDiv">
            <div className="addCamera">Add Camera</div>
            <img
              src={Plus}
              className="plusIcon"
              alt="Plus Sign"
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

export default Cameras;
