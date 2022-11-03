import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap";
import "./AppNavbar.css";
import { useAuthContext } from "../../context/auth";
import Logo from "../../asset/image/logo.png";
import { LinkContainer } from "react-router-bootstrap";
function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const { isLoggedIn, removeAuth, auth } = useAuthContext();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("secure_k");
    localStorage.removeItem("cid");
    removeAuth();
    navigate("/login", { replace: true });
  };
  const handleChange = (e) => {
    const menu = e.target.value;
    if (menu === "GS") {
      navigate("/GoldSavingHis", { replace: true });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <img
          alt=""
          src={Logo}
          className="d-inline-block align-top ImgLogoNavbar"
        />
      </div>

      <Navbar expanded={expanded} expand="lg" variant="light">
        <Container>
          {/* <Navbar.Brand style={{ color: "white" }}>
            {process.env.REACT_APP_APP_NAME}
          </Navbar.Brand> */}

          <div className="setAlignNavbarR">
            <Navbar.Toggle
              onClick={() => setExpanded(expanded ? false : true)}
              aria-controls="basic-navbar-nav"
            />
          </div>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav>
              <a
                style={{ color: "black" }}
                className="nav-link "
                href="http://www.wangtoakang.com/"
              >
                หน้าหลัก
              </a>

              <Link
                style={{ color: "black" }}
                to="/GoldSaving"
                className="nav-link "
              >
                ออมทอง
              </Link>

              {/* {isLoggedIn && (
                <NavDropdown
                  className="Text_a_color"
                  title="ประวัติการออมทอง"
                  id="basic-nav-dropdown "
                >
                  <LinkContainer to="/GoldSavingHis">
                    <NavDropdown.Item style={{ color: "black" }}>
                      รายการออมทอง
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/GoldSavingHisApproved">
                    <NavDropdown.Item style={{ color: "black" }}>
                      รายการรออนุมัติออมทอง
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )} */}
              {!isLoggedIn && (
                <Link
                  to="/login"
                  className="nav-link "
                  onClick={() => setExpanded(false)}
                >
                  Login
                </Link>
              )}
              {isLoggedIn && (
                <a
                  style={{ color: "black" }}
                  href="!#"
                  type="button"
                  className="nav-link "
                  onClick={handleLogout}
                >
                  ออกจากระบบ
                </a>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default AppNavbar;
