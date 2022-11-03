import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import "../../css/gso_style.css";
import imgCat from "../../asset/image/cat.png";
import imglogoH from "../../asset/image/logoH.png";
export default function ThxResult() {
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <img src={imglogoH} style={{ width: "350px", height: "250px" }}></img>
      </div>
      <div style={{ width: "100%" }} className="d-flex justify-content-center ">
        <h2>ขอบคุณสำหรับการทำรายการ</h2>
      </div>
      <div style={{ width: "100%" }} className="d-flex justify-content-center ">
        ห้างทองหวังโต๊ะกัง ยินดีบริการ
      </div>
      <div className="d-flex justify-content-center ">
        <img style={{ width: "250px", height: "250px" }} src={imgCat}></img>
      </div>
    </div>
  );
}
