import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/gso_style.css";
import _ from "lodash";
import { addGSO } from "../../services/goldsavingonline";
import { getSettingdata } from "../../services/geturl";
export default function GoldSavingAdd({ ItemCustomer }) {
  const [customer, setCustomer] = useState({});
  const [gso, setGso] = useState({});
  const [imgslip, setImgslip] = useState(null);
  const [amount, setAmount] = useState(null);
  const [bankid, setBankid] = useState(null);
  const [bankname, setBankname] = useState();
  const [branchname, setBranchname] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setError(false);
    setPending(true);
    getSettingdata("api/GetSetting/BankOfBranch")
      .then((data) => {
        setList(data);
        setPending(false);
      })
      .catch((err) => {
        setError(true);
        setPending(false);
      });
  }, [setError]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/FinishGoldSaving", { replace: true });
    setError(false);
    setPending(true);
    if (!amount) return;
    addGSO({
      branchname: branchname,
      custname: ItemCustomer.custname,
      savingAmt: amount,
      custid: ItemCustomer.custid,
      bankid: bankid,
      bankname: bankname,
      imgslip,
    })
      .then((data) => {
        setPending(false);
        navigate("/FinishGoldSaving", { replace: true });
      })
      .catch((err) => {
        setError(true);
        setPending(false);
      });
  };
  const handleFileChange = (e) => {
    const [file] = e.target.files;
    if (!file) return;
    if (!_.startsWith(file.type, "image/")) {
      // toast.warning('โปรดเลือกไฟล์รูปภาพsss');
      return console.log("file is not an image");
    }
    setImgslip(file);
  };
  const handleChange = (e) => {
    const id = e.target.value;
    const bank = list.find((item) => item.bankid === id);
    setBankname(bank.bankname);
    setBankid(bank.bankid);
    setBranchname(bank.branchname);
    console.log(bank.bankname);
    console.log(bank.bankid);
    console.log(bank.branchname);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div style={{ textAlign: "center" }}>
          <div>จํานวนเงินที่ต้องการออม</div>
          <Form.Control
            className="setWidthControl"
            type="text"
            onChange={(e) => setAmount(e.target.value)}
          ></Form.Control>
          <div>
            <div>บัญชีธนาคาร</div>
            <Form.Select className="setWidthControl" onChange={handleChange}>
              {" "}
              <option type="text">{"เลือกธนาคาร"} </option>
              {list &&
                list.map((item, index) => (
                  <option key={index} value={item.bankid}>
                    {item.bankname} {" " + item.branchname + " "}
                    {item.bankid}
                  </option>
                ))}
            </Form.Select>
            <div>เลขที่บัญชี</div>

            <div>{bankid}</div>
          </div>
          <div>สลิปการชําระเงิน</div>
          <Form.Group className="position-relative mb-3 setWidthControl">
            <Form.Control
              type="file"
              required
              name="file"
              onChange={handleFileChange}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.file} */}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <button type="submit">ยืนยัน</button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
