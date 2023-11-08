import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import user from '../../assets/user.jpg';
import logo from '../../assets/logo.jpeg';
const Sidebar = () => {
  return (
    <div className='left-sidebar pe-4 pb-3 '>
        <div className='logo mb-3'>
      <a class="navbar-brand" href="#"><img src={logo} alt="img" /></a>
      </div>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img className="rounded-circle"  src={user} alt="img" style={{ width: '40px', height: '40px' }}/>
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div class="ms-3">
            <h6 class="mb-0">Jhon Doe</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <ul className='left-sidebar-main'>
            <li className='left-sidebar-inner'><Link to="/"><i class="ri-dashboard-3-line"></i>Dashboard</Link></li>
            <li className='left-sidebar-inner'><Link to="/form"><i class="ri-keyboard-line"></i>Form</Link></li>
            <li className='left-sidebar-inner'><Link to="/"><i class="ri-tablet-fill"></i>Table</Link></li>
            <li className='left-sidebar-inner'><Link to="/"><i class="ri-file-text-line"></i>page</Link></li>
          </ul>
        </div>

    </div>
  )
}

export default Sidebar