import React, { useState } from 'react';
import './style.css';
import Calendar from 'moedim';
import user from '../../assets/user.jpg';
import { Image} from "react-bootstrap";

const Dashboard = () => {
    const [value, setValue] = useState(new Date())

    return (
        <div className='content' >
            <div className='container-fluid p-4'>
                <div className='container'>
                    <div className="row g-4">
                        <div className="col-sm-6 col-xl-3">
                            <div className="bg-light rounded dashboard-main d-flex align-items-center justify-content-between p-3">
                                <i className="ri-line-chart-fill"></i>
                                <div className="ms-3 dashboard-content">
                                    <p className="mb-2">Today Sale</p>
                                    <h6 className="mb-0">$1234</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="bg-light rounded dashboard-main d-flex align-items-center justify-content-between p-3">
                                <i className="ri-bar-chart-fill"></i>
                                <div className="ms-3 dashboard-content">
                                    <p className="mb-2">Total Sale</p>
                                    <h6 className="mb-0">$1234</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="bg-light rounded dashboard-main d-flex align-items-center justify-content-between p-3">
                                <i className="ri-building-2-fill"></i>
                                <div className="ms-3 dashboard-content">
                                    <p className="mb-2">Today Revenue</p>
                                    <h6 className="mb-0">$1234</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="bg-light rounded dashboard-main d-flex align-items-center justify-content-between p-3">
                                <i className="ri-pie-chart-fill"></i>
                                <div className="ms-3 dashboard-content">
                                    <p className="mb-2">Total Revenue</p>
                                    <h6 className="mb-0">$1234</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid pt-4 px-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="h-100 bg-light rounded p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <h6 className="mb-0">Messages</h6>
                                        <a href="">Show All</a>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-3">
                                                          <Image src={user} roundedCircle style={{ width: '40px', height: '40px' }} />

                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-0">Jhon Doe</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                            <span>Short message goes here...</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-3">
                                                          <Image src={user} roundedCircle style={{ width: '40px', height: '40px' }} />

                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-0">Jhon Doe</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                            <span>Short message goes here...</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-3">
                                                          <Image src={user} roundedCircle style={{ width: '40px', height: '40px' }} />

                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-0">Jhon Doe</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                            <span>Short message goes here...</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-3">
                                                          <Image src={user} roundedCircle style={{ width: '40px', height: '40px' }} />

                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-0">Jhon Doe</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                            <span>Short message goes here...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <Calendar value={value} onChange={(d) => setValue(d)} />
                            </div>

                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="h-100 bg-light rounded p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <h6 className="mb-0">To Do List</h6>
                                        <a href="">Show All</a>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <input className="form-control bg-transparent" type="text" placeholder="Enter task" />
                                        <button type="button" className="btn btn-primary ms-2">Add</button>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" checked="" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span><del>Short task goes here...</del></span>
                                                <button className="btn btn-sm text-primary"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard