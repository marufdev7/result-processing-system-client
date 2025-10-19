import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';
import { LogOut } from 'lucide-react';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Show confirmation before logout
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
            logout();
            navigate('/login');
        } else {
            // Go back to previous page if user cancels
            navigate(-1);
        }
    }, [logout, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <LogOut className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Logging out...</h2>
                <p className="text-gray-500">Please wait while we sign you out.</p>
            </div>
        </div>
    );
};

export default Logout;
