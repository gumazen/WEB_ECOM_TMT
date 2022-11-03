import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import ThDate from "../common/thDate";
import "../../css/gso_style.css";
import _ from "lodash";
import { getGSOData } from "../../services/goldsavingonline";
import { useParams } from "react-router-dom";
export default function GoldSavingHis() {
  const [GSOHis, setGSOHis] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setPending(true);
    getGSOData()
      .then((data) => {
        console.log("OK");
        setGSOHis(data);
        setPending(false);
      })
      .catch((err) => {
        console.log("!OK");
        setError(true);
        setPending(false);
      });
  }, [setError]);
  return (
    <Container>
      <div style={({ marginBottom: "30px" }, { textAlign: "center" })}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>เลขที่รายการ</th>
              <th>วันที่</th>

              <th>จำนวนเงิน</th>
            </tr>
          </thead>
          <tbody>
            {GSOHis.length !== 0 &&
              GSOHis.map((item, index) => (
                <tr key={index}>
                  <td>{item.refid}</td>
                  <td>
                    <ThDate date={item.paydate} />
                  </td>
                  <td>{item.savingAmt}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
