import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authenticate } from "../../services/auth";
import { useAuthContext } from "../../context/auth";

import loginIcon from "../../asset/icon/login-user.png";
import userIcon from "../../asset/icon/icon-user-x.png";
import lockIcon from "../../asset/icon/icon-lock.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    authenticate(username, password)
      .then(({ token, custid }) => {
        setAuth({ token, custid });
        toast.success("เข้าสู่ระบบแล้ว");

        navigate("/", { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}>
        <div className="icon">
          <img alt="user icon" src={loginIcon} />
        </div>
        <Form.Group className="mb-1 group" controlId="formBasicEmail">
          <div className="input-icon">
            <img alt="..." src={userIcon} />
          </div>
          <Form.Control
            className="login-input"
            type="text"
            placeholder="User(รหัสลูกค้า  C000xxx)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-1 group" controlId="formBasicPassword">
          <div className="input-icon">
            <img alt="..." src={lockIcon} />
          </div>
          <Form.Control
            className="login-input"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <button type="submit">เข้าสู่ระบบ</button>
        </div>
      </Form>
    </div>
  );
}
