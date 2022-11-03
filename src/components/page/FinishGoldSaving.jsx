import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import "../../css/gso_style.css";
export default function FinishGoldSaving() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/ThxResult", { replace: true });
  };
  return (
    <div>
      <div className="boxCustom">
        <span>
          <h2>ดําเนินการเสร็จสิ้นแล้ว</h2>
          หลังจากได้รับการตรวจสอบแล้วจะมีการส่งข้อมูลยืนยัน
          รายการของท่านผ่านช่องทางข้อความและอีเมลของท่าน
          <br></br>
          ***หากมีข้อสงสัยหรือต้องการติดต่อเพิ่มเติม ติดต่อได้ที่ 089-999-9999
          หรือ line @ออมทองวตก
        </span>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <button
            onClick={handleClick}
            style={({ backgroundColor: "green" }, { width: "25%" })}
            type="button"
          >
            ตกลง
          </button>
        </div>
      </div>
    </div>
  );
}
