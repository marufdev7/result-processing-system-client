import { GraduationCap, Megaphone, Bell, Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

const Header = () => {
    const { user, isAdmin, isStudent } = useAuth();

    const getRoleIcon = () => {
        if (isAdmin()) return <Shield className="w-3 h-3 text-blue-600" />;
        if (isStudent()) return <User className="w-3 h-3 text-green-600" />;
        return null;
    };

    const getRoleBadgeColor = () => {
        if (isAdmin()) return 'bg-blue-100 text-blue-800';
        if (isStudent()) return 'bg-green-100 text-green-800';
        return 'bg-gray-100 text-gray-800';
    };

    const getProfileImage = () => {
        if (isAdmin()) return "https://i.pravatar.cc/40?img=1";
        if (isStudent()) return `https://i.pravatar.cc/40?img=${parseInt(user?.id?.slice(-1) || '1') + 10}`;
        return "https://i.pravatar.cc/40?img=12";
    };

    return (
        <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto flex-1">
                <div>
                    <Link className="text-xl font-bold text-gray-800 flex items-center" to="/">
                        <GraduationCap color="#2563eb" className="w-7 h-7 mr-1" />
                        IST Portal
                    </Link>
                </div>
                {isAdmin() && (
                    <input
                        type="text"
                        placeholder="Search students, teachers, results..."
                        className="hidden md:block px-4 py-1.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm min-w-[250px]"
                    />
                )}
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-end flex-1 sm:flex-none">
                <Link to="/announcement" className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
                    <div className="flex items-center text-gray-600 hover:text-gray-800">
                        <Bell className="w-5 h-5" />
                        <span className="hidden sm:inline ml-1 text-sm">Notifications</span>
                    </div>
                </Link>

                <div className="flex items-center gap-3">
                    <div className="text-right leading-tight">
                        <p className="text-sm font-semibold text-gray-800">{user?.name || 'User'}</p>
                        <div className="flex items-center gap-1">
                            {getRoleIcon()}
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getRoleBadgeColor()}`}>
                                {user?.role || 'Guest'}
                            </span>
                        </div>
                        {isStudent() && user?.class && (
                            <p className="text-xs text-gray-500">{user.class}</p>
                        )}
                    </div>
                    <Link to="/profile" className="relative">
                        <img
                            src={getProfileImage()}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-blue-400 transition-colors"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;