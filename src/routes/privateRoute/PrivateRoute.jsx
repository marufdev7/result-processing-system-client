import { Navigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

const PrivateRoute = ({ children, adminOnly = false, studentOnly = false }) => {
    const { user, loading, isAuthenticated, isAdmin, isStudent } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Check role-based access
    if (adminOnly && !isAdmin()) {
        return <Navigate to="/" replace />;
    }

    if (studentOnly && !isStudent()) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
