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
import Admin from '../../pages/Admin/Admin';
import Home from '../../pages/Home.jsx/Home';
import Logout from '../../pages/Logout/Logout';
import PrivateRoute from '../privateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <Main />
            </PrivateRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            // Admin-only routes
            {
                path: "/students",
                element: (
                    <PrivateRoute adminOnly>
                        <Students />
                    </PrivateRoute>
                ),
            },
            {
                path: "teachers",
                element: (
                    <PrivateRoute adminOnly>
                        <Teachers />
                    </PrivateRoute>
                ),
            },
            {
                path: "subjects",
                element: (
                    <PrivateRoute adminOnly>
                        <Subjects />
                    </PrivateRoute>
                ),
            },
            {
                path: "classes",
                element: (
                    <PrivateRoute adminOnly>
                        <Classes />
                    </PrivateRoute>
                ),
            },
            {
                path: "exams",
                element: (
                    <PrivateRoute adminOnly>
                        <Exams />
                    </PrivateRoute>
                ),
            },
            {
                path: "assignments",
                element: (
                    <PrivateRoute adminOnly>
                        <Assignments />
                    </PrivateRoute>
                ),
            },
            {
                path: "admin",
                element: (
                    <PrivateRoute adminOnly>
                        <Admin />
                    </PrivateRoute>
                ),
            },
            // Shared routes (both admin and student can access)
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
