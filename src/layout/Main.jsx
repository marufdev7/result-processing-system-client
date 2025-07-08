import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sideBar/sideBar';

const Main = () => {
    return (
        <>
            <div>
                <Header />
                <div className='grid grid-cols-4'>
                    <div >
                        <SideBar />
                    </div>
                    <div className='col-span-3 py-3'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
