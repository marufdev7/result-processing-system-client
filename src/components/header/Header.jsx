import { GraduationCap, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ name = "Maruf Ahmed", role = "admin", profileUrl }) => {
    return (
        <header className="w-full bg-white shadow-md px-4 py-3 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 flex-wrap w-full sm:w-auto flex-1">
                <div>
                    <Link className="text-lg font-semibold text-gray-700 flex" to="/">
                        <GraduationCap color="#83bfd2" className="w-6 h-6" />
                        IST
                    </Link>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="hidden sm:block px-4 py-1.5 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />

            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto justify-end flex-1 sm:flex-none">
                <Link to="/announcement" >
                    <div className="text-sm md:flex text-gray-500 hidden sm:block">
                        Announcement<Megaphone color="#83bfd2" />
                    </div>
                </Link>
                <div className="flex items-center gap-3">
                    <div className="text-right leading-tight">
                        <p className="text-sm font-semibold text-gray-800">{name}</p>
                        <p className="text-xs text-gray-500 capitalize">{role}</p>
                    </div>
                    <Link to="/profile">
                        <img
                            src={profileUrl || "https://i.pravatar.cc/40?img=12"}
                            alt="Profile"
                            className="w-10 h-10 rounded-full border border-gray-300"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;