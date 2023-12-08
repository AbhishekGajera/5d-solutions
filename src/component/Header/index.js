import React, { useState } from 'react'
import './style.css';
import user from '../../assets/user.jpg';
import { Image, Dropdown, Col, Form } from "react-bootstrap";
const Header = ({openSidebar,setOpenSidebar}) => {

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
        <div className="navbarStyle">
          <div className='row navbarStyle-main'>

            <Col className='search-input  col-lg-4 col-md-6 col-sm-6'>
              <div className='close-icon'><svg width="29" height="28" onClick={()=> {setOpenSidebar(!openSidebar)}} viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3877 14.6299H5.27056C5.02804 14.6299 4.79545 14.5341 4.62397 14.3634C4.45248 14.1927 4.35614 13.9613 4.35614 13.7199C4.35614 13.4786 4.45248 13.2471 4.62397 13.0765C4.79545 12.9058 5.02804 12.8099 5.27056 12.8099H25.3877C25.6303 12.8099 25.8628 12.9058 26.0343 13.0765C26.2058 13.2471 26.3022 13.4786 26.3022 13.7199C26.3022 13.9613 26.2058 14.1927 26.0343 14.3634C25.8628 14.5341 25.6303 14.6299 25.3877 14.6299Z" fill="#001B30" />
                <path d="M25.3877 7.65334H5.27056C5.02804 7.65334 4.79545 7.55747 4.62397 7.38681C4.45248 7.21615 4.35614 6.98469 4.35614 6.74334C4.35614 6.502 4.45248 6.27053 4.62397 6.09988C4.79545 5.92922 5.02804 5.83334 5.27056 5.83334H25.3877C25.6303 5.83334 25.8628 5.92922 26.0343 6.09988C26.2058 6.27053 26.3022 6.502 26.3022 6.74334C26.3022 6.98469 26.2058 7.21615 26.0343 7.38681C25.8628 7.55747 25.6303 7.65334 25.3877 7.65334Z" fill="#001B30" />
                <path d="M17.0337 21.6066H4.90714C4.60233 21.6066 4.35614 21.1994 4.35614 20.6966C4.35614 20.1938 4.6035 19.7866 4.90714 19.7866H17.0337C17.3385 19.7866 17.5847 20.1938 17.5847 20.6966C17.5847 21.1994 17.3385 21.6066 17.0337 21.6066Z" fill="#001B30" />
              </svg>
              </div>
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
  )
}


export default Header