import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './style.css'
import Group from '../../assets/Group.png'
import { Col, Form } from 'react-bootstrap'
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import user from "../../assets/icon/user.svg"
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
          <Col lg={8} md={12} >
            <div className='d-flex justify-content-between form-main-section'>
              <div className="mb-3 col-lg-6 p-2 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.727 12.5792L13.7275 12.5793C14.5352 12.8477 15.2378 13.3637 15.7355 14.0542C16.2332 14.7446 16.5007 15.5744 16.5 16.4255V16.4259C16.5 16.4456 16.4922 16.4644 16.4783 16.4783C16.4644 16.4922 16.4456 16.5 16.4259 16.5H1.5041C1.48442 16.5 1.46558 16.4922 1.4517 16.4783C1.4378 16.4644 1.42999 16.4456 1.42999 16.4259L1.42999 16.4255C1.42927 15.5744 1.69675 14.7446 2.19445 14.0542C2.69215 13.3637 3.39476 12.8477 4.20247 12.5793L4.20293 12.5792L6.64609 11.7648L6.64727 11.7644C6.65456 11.7619 6.66224 11.7606 6.67003 11.7606H11.2598C11.2677 11.7607 11.2755 11.762 11.2829 11.7645L11.2839 11.7648L13.727 12.5792Z" stroke="#6D6D6D"/>
<path d="M8.96174 1.43C9.74232 1.43022 10.4909 1.74044 11.0428 2.29246C11.5947 2.84452 11.9047 3.59318 11.9047 4.3738V6.66543C11.892 7.43694 11.5768 8.17266 11.0269 8.71415C10.4762 9.25651 9.73428 9.56051 8.96134 9.56051C8.18839 9.56051 7.44646 9.25651 6.89574 8.71415C6.3459 8.17266 6.03071 7.43694 6.01794 6.66542V4.3738C6.01794 3.59306 6.32809 2.84429 6.88016 2.29222C7.43221 1.74018 8.18092 1.43003 8.96162 1.43H8.96174Z" stroke="#6D6D6D"/>
</svg>
</span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Robert' />
                </div>

              </div>
              <div className="mb-3 col-lg-6 p-2 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">last Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.727 12.5792L13.7275 12.5793C14.5352 12.8477 15.2378 13.3637 15.7355 14.0542C16.2332 14.7446 16.5007 15.5744 16.5 16.4255V16.4259C16.5 16.4456 16.4922 16.4644 16.4783 16.4783C16.4644 16.4922 16.4456 16.5 16.4259 16.5H1.5041C1.48442 16.5 1.46558 16.4922 1.4517 16.4783C1.4378 16.4644 1.42999 16.4456 1.42999 16.4259L1.42999 16.4255C1.42927 15.5744 1.69675 14.7446 2.19445 14.0542C2.69215 13.3637 3.39476 12.8477 4.20247 12.5793L4.20293 12.5792L6.64609 11.7648L6.64727 11.7644C6.65456 11.7619 6.66224 11.7606 6.67003 11.7606H11.2598C11.2677 11.7607 11.2755 11.762 11.2829 11.7645L11.2839 11.7648L13.727 12.5792Z" stroke="#6D6D6D"/>
<path d="M8.96174 1.43C9.74232 1.43022 10.4909 1.74044 11.0428 2.29246C11.5947 2.84452 11.9047 3.59318 11.9047 4.3738V6.66543C11.892 7.43694 11.5768 8.17266 11.0269 8.71415C10.4762 9.25651 9.73428 9.56051 8.96134 9.56051C8.18839 9.56051 7.44646 9.25651 6.89574 8.71415C6.3459 8.17266 6.03071 7.43694 6.01794 6.66542V4.3738C6.01794 3.59306 6.32809 2.84429 6.88016 2.29222C7.43221 1.74018 8.18092 1.43003 8.96162 1.43H8.96174Z" stroke="#6D6D6D"/>
</svg>
</span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Downey Jr.' />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between form-main-section'>
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
                  <span className="input-group-text"><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.08751 0.6875H17.9125C18.8418 0.6875 19.6 1.44485 19.6 2.375V13.625C19.6 14.552 18.8452 15.3125 17.9125 15.3125H2.08751C1.16051 15.3125 0.400007 14.5577 0.400007 13.625V2.375C0.400007 1.448 1.15481 0.6875 2.08751 0.6875ZM2.32053 1.8125L9.96423 9.45624L17.674 1.8125H2.32053ZM18.475 13.3921V2.60259L13.057 7.97409L18.475 13.3921ZM17.6795 14.1875L12.2581 8.76612L10.3585 10.6495C10.1386 10.8675 9.78374 10.8668 9.56474 10.6477L7.71251 8.79549L2.3205 14.1875H17.6795ZM1.52501 13.392L6.91702 8L1.52501 2.60795V13.392Z" fill="#6D6D6D"/>
</svg>
</span>
                  <input type="email" className="form-control" id="exampleInputPassword1" placeholder='rdj@gmail.com' />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between form-main-section'>
              <div className="mb-3 p-2 col-lg-6 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                <div className="input-group-prepend d-flex">
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Pune' />
                </div>

              </div>
              <div className="mb-3 p-2 col-lg-6 submit-form-main">
                <label htmlFor="exampleInputEmail1" className="form-label">Enter Password</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.996 18.0157C12.3843 18.0157 12.6991 17.7008 12.6991 17.3126V14.4C12.6991 14.0116 12.3843 13.6968 11.996 13.6968C11.6078 13.6968 11.2928 14.0116 11.2928 14.4V17.3126C11.2928 17.7008 11.6078 18.0157 11.996 18.0157Z" fill="#6D6D6D"/>
<path d="M20.0544 7.7124H16.7267V4.28723C16.7267 1.92316 14.6045 0 11.996 0C9.38763 0 7.26544 1.92316 7.26544 4.28723V7.7124H3.9375C3.54913 7.7124 3.23438 8.02734 3.23438 8.41553V17.4077C3.23438 21.0427 6.19171 24 9.82672 24H14.1654C17.8004 24 20.7578 21.0427 20.7578 17.4077V8.41553C20.7576 8.02734 20.4428 7.7124 20.0544 7.7124ZM8.67169 4.28723C8.67169 2.69861 10.1629 1.40625 11.996 1.40625C13.829 1.40625 15.3204 2.69861 15.3204 4.28723V7.7124H8.67169V4.28723ZM19.3513 17.4077C19.3513 20.2672 17.025 22.5938 14.1652 22.5938H9.82672C6.96716 22.5938 4.64062 20.2672 4.64062 17.4077V9.11865H19.3513V17.4077Z" fill="#6D6D6D"/>
</svg>
</span>
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