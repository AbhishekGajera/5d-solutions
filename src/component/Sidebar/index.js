import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Collapse } from "react-bootstrap";
import { RiCloseCircleFill } from "react-icons/ri";
import DropDown from "../../assets/CustomIcon/DropDown";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`${openSidebar ? "mobile-sidebar" : "left-sidebar  pb-3"}`}>
      <div className="logo mb-3">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="img" />
        </a>
        <span className="close-lcon">
          <RiCloseCircleFill
            onClick={() => {
              setOpenSidebar(!openSidebar);
            }}
          />
        </span>
      </div>
      <div className="d-flex align-items-center ms-4 mb-4 user-img-main">
        <div className="ms-3 user-content">
        <Link to="/">
          <span className="pointer">Profile</span>
          </Link>
        </div>
      </div>

      <div className="navbar-nav w-100">
        <ul className="left-sidebar-main">
          <span
            className="pointer"
            aria-controls="example-collapse-text"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            Moments
            <DropDown open={open} />
          </span>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <ul>
                <li className="left-sidebar-inner">
                  <Link to="/">
                    <span className="left-sidebar-menu">Moment List</span>
                  </Link>
                </li>
                <li className="left-sidebar-inner">
                  <Link to="/create-moment">
                    <span className="left-sidebar-menu">Add new moment</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
