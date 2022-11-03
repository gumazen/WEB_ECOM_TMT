import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import GoldSavingRemain from "../form/GoldSavingRemain";
import GoldSavingAdd from "../form/GoldSavingAdd";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { getCustomerData } from "../../services/customer";
export default function GoldSaving() {
  const [customer, setCustomer] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setError(false);
    setPending(true);
    getCustomerData()
      .then((data) => {
        setCustomer(data);
        setPending(false);
      })
      .catch((err) => {
        setError(true);
        setPending(false);
        navigate("/Login", { replace: true });
      });
  }, [setError]);
  return (
    <div style={{ marginBottom: "10px" }}>
      <GoldSavingRemain ItemCustomer={customer}></GoldSavingRemain>
      <GoldSavingAdd ItemCustomer={customer}></GoldSavingAdd>
    </div>
  );
}
