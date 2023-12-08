import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './style.css'
import Group from '../../assets/Group.png'
import { Col, Form } from 'react-bootstrap'
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='signup-main'>
      <div className='main-logo'>
        <img src={Group} alt="Group" />
      </div>
      <div className='signup-inner align-center'>
        <h1>Signup</h1>
        <Form className='d-flex justify-content-center'>
          <Col md={8} >
            <div className='d-flex justify-content-between '>
              <div className="mb-3 col-lg-6 p-2 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i className="ri-user-line"></i></span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Robert' />
                </div>

              </div>
              <div className="mb-3 col-lg-6 p-2 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">last Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i className="ri-user-line"></i></span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Downey Jr.' />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between '>
              <div className="mb-3 p-2 col-lg-6 submit-form-main">
                <div className='input-group-prepend'>
                  <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                  <PhoneInput
                    country={'us'} // default country
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputProps={{
                      name: 'phone',
                      required: true,
                      autoFocus: true,
                      placeholder: '9876543210',
                      className: 'form-control',
                    }}
                  />
                </div>
              </div>
              <div className="mb-3 p-2 col-lg-6 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">Email-ID</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i class="ri-mail-line"></i></span>
                  <input type="email" className="form-control" id="exampleInputPassword1" placeholder='rdj@gmail.com' />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between '>
              <div className="mb-3 p-2 col-lg-6 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                <div className="input-group-prepend d-flex">
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Pune' />
                </div>

              </div>
              <div className="mb-3 p-2 col-lg-6 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">Enter Password</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i class="ri-lock-line"></i></span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span onClick={handleTogglePassword}>
                    {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                  </span>
                </div>
              </div>
            </div>

            <div className='submit-main'>
                            <button type="submit" className="btn btn-primary form-button submit-btn" >submit</button>
                            </div>

          </Col>
        </Form>
      </div>
    </div>
  )
}

export default Signup