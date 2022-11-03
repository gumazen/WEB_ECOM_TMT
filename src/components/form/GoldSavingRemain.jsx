import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import logo from "../../asset/image/logo.png";
import { getCustomerRemainData } from "../../services/customer";
import "../../css/gso_style.css";
import _ from "lodash";
export default function GoldSavingRemain({ ItemCustomer }) {
  const [CustomerRemainData, setCustomerRemainData] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    setPending(true);
    getCustomerRemainData()
      .then((data) => {
        setCustomerRemainData(data);
        setPending(false);
      })
      .catch((err) => {
        setError(true);
        setPending(false);
      });
  }, [setError]);
  return (
    <Container>
      <div style={({ marginBottom: "30px" }, { textAlign: "center" })}>
        <span>รายการออมทอง</span>
      </div>
      <div className="setAlign">
        <div>
          ชื่อ-นามสกุลลูกค้า {ItemCustomer.custname}
          <br></br>
        </div>
        <div>
          รหัสลูกค้า {ItemCustomer.custid} <br></br>
        </div>
        <hr></hr>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{ textAlign: "center" }}>
          <div>น้ำหนักออมปัจจุบัน</div>
          <div className="d-flex justify-content-center">
            <div className="circle">{ItemCustomer.totalWtSaving} g</div>
          </div>

          <div>
            จํานวนเงินออมในปัจจุบัน : {CustomerRemainData.moneyRemain + " "}
            บาท
          </div>
        </div>
      </div>

      <div className="setAlign">
        <div>*** น้ําหนักทองที่ออมได้ในแต่ละวันจะขึ้นอยู่กับราคาในวันนั้น</div>
        <hr></hr>
      </div>
    </Container>
  );
}
