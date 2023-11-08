import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import './style.css';
export const MainLayout = ({ component }) => {
    return (
        <div>
            <div className='d-flex position-relative'>
                <div className='left-col'>
                <Sidebar />
                </div>
                <div className='right-col'>
                    <Header />
                    {component}
                    <Footer />
                </div>
            </div>

        </div>
    )
}
