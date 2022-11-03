import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import ThDate from "../common/thDate";
import "../../css/gso_style.css";
import _ from "lodash";
import { getGoldSavingData } from "../../services/goldsaving";
import { useParams } from "react-router-dom";
export default function GoldSavingHis() {
  const [GoldSavingHis, setGoldSavingHis] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setPending(true);
    getGoldSavingData()
      .then((data) => {
        console.log("OK");
        setGoldSavingHis(data);
        setPending(false);
      })
      .catch((err) => {
        console.log("OKS");
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
              <th>เลขที่ออม</th>
              <th>วันที่</th>
              <th>น้ำหนักที่ได้(กรัม)</th>
              <th>ราคาทอง</th>
              <th>จำนวนเงิน</th>
            </tr>
          </thead>
          <tbody>
            {GoldSavingHis.length !== 0 &&
              GoldSavingHis.map((item, index) => (
                <tr key={index}>
                  <td>{item.savingId}</td>
                  <td>
                    <ThDate date={item.savingDate} />
                  </td>
                  <td>{item.savingWt}</td>
                  <td>{item.goldprice}</td>
                  <td>{item.savingAmt}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
