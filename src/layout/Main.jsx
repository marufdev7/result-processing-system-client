import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sideBar/sideBar';

const Main = () => {
    return (
        <>
            <div>
                <Header />
                <div className='grid lg:grid-cols-12 gap-4 h-screen'>
                    <div className='col-span-2'>
                        <SideBar />
                    </div>
                    <div className='col-span-10 mt-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
