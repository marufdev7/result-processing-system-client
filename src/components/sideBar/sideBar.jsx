import {
    Home,
    User,
    Users,
    BookOpen,
    ClipboardList,
    CalendarCheck,
    FileText,
    BarChart,
    Megaphone,
    Settings,
    LogOut,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { label: 'Home', icon: <Home color="#83bfd2" className="w-4 h-4" />, to: '/' },
        { label: 'Teachers', icon: <User color="#83bfd2" className="w-4 h-4" />, to: '/teachers' },
        { label: 'Students', icon: <Users color="#83bfd2" className="w-4 h-4" />, to: '/students' },
        { label: 'Subjects', icon: <BookOpen color="#83bfd2" className="w-4 h-4" />, to: '/subjects' },
        { label: 'Classes', icon: <ClipboardList color="#83bfd2" className="w-4 h-4" />, to: '/classes' },
        { label: 'Exams', icon: <CalendarCheck color="#83bfd2" className="w-4 h-4" />, to: '/exams' },
        { label: 'Assignments', icon: <FileText color="#83bfd2" className="w-4 h-4" />, to: '/assignments' },
        { label: 'Results', icon: <BarChart color="#83bfd2" className="w-4 h-4" />, to: '/results' },
        { label: 'Announcement', icon: <Megaphone color="#83bfd2" className="w-4 h-4" />, to: '/announcement' },
    ];

    const otherItems = [
        { label: 'Profile', icon: <User color="#83bfd2" className="w-4 h-4" />, to: '/profile' },
        { label: 'Settings', icon: <Settings color="#83bfd2" className="w-4 h-4" />, to: '/settings' },
        { label: 'Logout', icon: <LogOut color="#83bfd2" className="w-4 h-4" />, to: '/logout' },
    ];

    const linkClass = (path) =>
        `flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-blue-100 transition ${location.pathname === path ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'
        }`;

    return (
        <aside className="w-full bg-white p-4 shadow-md mt-4 rounded-lg">

            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Menu</div>
            <nav className="space-y-1 mb-4">
                {menuItems.map((item) => (
                    <Link key={item.to} to={item.to} className={linkClass(item.to)}>
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Other</div>
            <nav className="space-y-1">
                {otherItems.map((item) => (
                    <Link key={item.to} to={item.to} className={linkClass(item.to)}>
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;