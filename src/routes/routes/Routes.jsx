import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import ErrorPage from '../../pages/error/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
]);

export default router;