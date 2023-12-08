import React from 'react'
import './style.css'
import Group from '../../assets/Group.png'
import { Col, Form } from 'react-bootstrap'

const Signup = () => {
  return (
    <div className='signup-main'>
      <div className='main-logo'>
        <img src={Group} alt="Group" />
      </div>
      <div className='signup-inner align-center'>
        <h1>Signup</h1>
        <Form className='d-flex justify-content-center'>
          <Col md={6} >
            <div className='d-flex '>
              <div className="mb-3 p-2 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i className="ri-user-line"></i></span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Robert' />
                </div>

              </div>
              <div className="mb-3 p-2 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">last Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i className="ri-user-line"></i></span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Downey Jr.' />
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} >
            <div className='d-flex '>
              <div className="mb-3 p-2 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i className="ri-user-line"></i></span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Robert' />
                </div>

              </div>
              <div className="mb-3 p-2 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">last Name</label>
                <div className="input-group-prepend d-flex">
                  <span className="input-group-text"><i className="ri-user-line"></i></span>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Downey Jr.' />
                </div>
              </div>
            </div>
          </Col>
        </Form>
      </div>
    </div>
  )
}

export default Signup