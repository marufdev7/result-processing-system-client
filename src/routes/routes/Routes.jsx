import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Login from '../../pages/login/Login';
import ErrorPage from '../../pages/error/ErrorPage';
import Students from '../../pages/Students/Students';
import Teachers from '../../pages/Teachers/Teachers';
import Subjects from '../../pages/Subjects/Subjects';
import Classes from '../../pages/Classes/Classes';
import Exams from '../../pages/Exams/Exams';
import Assignments from '../../pages/Assignments/Assignments';
import Results from '../../pages/Results/Results';
import Announcement from '../../pages/Announcement/Announcement';
import Profile from '../../pages/Profile/Profile';
import Settings from '../../pages/Settings/Settings';
import Home from '../../pages/Home.jsx/Home';
import Logout from '../../pages/Logout/Logout';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/students",
                element: <Students />,
            },
            {
                path: "teachers",
                element: <Teachers />,
            },
            {
                path: "subjects",
                element: <Subjects />,
            },
            {
                path: "classes",
                element: <Classes />,
            },
            {
                path: "exams",
                element: <Exams />,
            },
            {
                path: "assignments",
                element: <Assignments />,
            },
            {
                path: "results",
                element: <Results />,
            },
            {
                path: "announcement",
                element: <Announcement />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "logout",
                element: <Logout />
            }
        ]
    },
]);

export default router;