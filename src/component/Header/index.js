import React, { useState } from 'react'
import './style.css';
import user from '../../assets/user.jpg';
import { Image, Dropdown, Col, Form } from "react-bootstrap";
const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleNotificationDropdown = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  return (
    <div className='container-fluid'>
    <div className='container'>
      <div className="navbarStyle">
        <div className='row navbarStyle-main'>

          <Col  className='search-input  col-lg-4 col-md-6 col-sm-6'>
          <div className='close-icon'> <i class="ri-menu-2-line"></i></div>
          </Col>
          <Col className='d-flex align-items-center justify-content-end col-lg-8 col-md-6 col-sm-6'>
            <div className='notification me-4'> 


            </div>
            <div className='myprofile'>

              <Dropdown
                show={showDropdown}
                onToggle={toggleDropdown}
              >
                <Dropdown.Toggle id="user-dropdown">
                  <Image src={user} roundedCircle style={{ width: '40px', height: '40px' }} />
                  <span className="ms-2">John Doe</span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                  <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>


          </Col>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Header