import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sideBar/sideBar';

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Main;
