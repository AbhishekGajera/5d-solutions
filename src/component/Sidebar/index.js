import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Button, Collapse } from 'react-bootstrap';
import { RiCloseCircleFill } from 'react-icons/ri';

const Sidebar = ({openSidebar,setOpenSidebar}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={`${openSidebar ? 'mobile-sidebar' : 'left-sidebar  pb-3'}`}>
      <div className='logo mb-3'>
        <a className="navbar-brand" href="#"><img src={logo} alt="img" /></a>
        <span className='close-lcon'><RiCloseCircleFill  onClick={()=> {setOpenSidebar(!openSidebar)}} /></span>
      </div>
      <div className="d-flex align-items-center ms-4 mb-4 user-img-main">
        <div class="ms-3 user-content">
          <span>Profile</span>
        </div>
      </div>


      <div className="navbar-nav w-100">

        <ul className='left-sidebar-main'>
          <span

            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Moments
            <svg width="16" onClick={() => setOpen(!open)} className={`${open ? 'open-sidebar' : 'close-sidebar'}`} height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99996 9.14221C7.72798 9.14221 7.45604 9.03836 7.24868 8.8311L0.723428 2.30578C0.308337 1.89069 0.308337 1.21769 0.723428 0.80277C1.13835 0.387846 1.81122 0.387846 2.22634 0.80277L7.99996 6.57673L13.7736 0.802971C14.1887 0.388048 14.8615 0.388048 15.2764 0.802971C15.6917 1.21789 15.6917 1.89089 15.2764 2.30598L8.75125 8.8313C8.54379 9.03859 8.27184 9.14221 7.99996 9.14221Z" fill="white" />
            </svg>

          </span>
          <Collapse in={open}>
            <div id="example-collapse-text">
              <ul>
              <li className='left-sidebar-inner'><Link to="/"><span className='left-sidebar-menu'>Moment List</span></Link></li>
                <li className='left-sidebar-inner'><Link to="/form"><span className='left-sidebar-menu'>Add new moment</span></Link></li>
              </ul>
            </div>
          </Collapse>

        </ul>
      </div>


    </div>
  )
}

export default Sidebar