import React from "react";
import PopupComp from "../../components/PopupComp";
import ResumeModal from "./ResumeModal";

function ResumeHoverModal(props) {
  const { openPopup, setOpenPopup, records } = props;

  return (
    <>
      <PopupComp
        title="Resume View"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ResumeModal records={records} setOpenPopup={setOpenPopup} />
      </PopupComp>
    </>
  );
}

export default ResumeHoverModal;
