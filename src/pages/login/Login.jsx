import { GraduationCap, Shield, User } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

const Login = () => {
    const [activeTab, setActiveTab] = useState('admin');
    const adminEmailRef = useRef();
    const adminPasswordRef = useRef();
    const studentIdRef = useRef();
    const studentPasswordRef = useRef();
    const navigate = useNavigate();
    const { login } = useAuth();

    // Demo credentials
    const ADMIN_CREDENTIALS = {
        email: 'admin@ist.edu',
        password: 'admin123'
    };

    const STUDENT_CREDENTIALS = [
        { id: '2021001', password: 'student123', name: 'John Doe', class: 'CSE-A' },
        { id: '2021002', password: 'student123', name: 'Jane Smith', class: 'CSE-B' },
        { id: '2021003', password: 'student123', name: 'Alice Johnson', class: 'EEE-A' }
    ];

    const handleAdminLogin = (e) => {
        e.preventDefault();
        const email = adminEmailRef.current.value;
        const password = adminPasswordRef.current.value;

        if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
            const userData = {
                id: 'admin',
                email: email,
                name: 'Administrator',
                role: 'admin'
            };
            login(userData);
            navigate('/');
        } else {
            alert('Invalid admin credentials!');
        }
    };

    const handleStudentLogin = (e) => {
        e.preventDefault();
        const studentId = studentIdRef.current.value;
        const password = studentPasswordRef.current.value;

        const student = STUDENT_CREDENTIALS.find(
            s => s.id === studentId && s.password === password
        );

        if (student) {
            const userData = {
                id: student.id,
                name: student.name,
                class: student.class,
                role: 'student'
            };
            login(userData);
            navigate('/');
        } else {
            alert('Invalid student credentials!');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <GraduationCap size={32} className="text-blue-600 mr-2" />
                        <h1 className="text-3xl font-bold text-gray-800">IST Portal</h1>
                    </div>
                    <p className="text-gray-600">Select your login type</p>
                </div>

                {/* Tab Navigation */}
                <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                    <button
                        onClick={() => setActiveTab('admin')}
                        className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                            activeTab === 'admin'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        <Shield size={16} className="mr-2" />
                        Admin
                    </button>
                    <button
                        onClick={() => setActiveTab('student')}
                        className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                            activeTab === 'student'
                                ? 'bg-green-600 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        <User size={16} className="mr-2" />
                        Student
                    </button>
                </div>

                {/* Admin Login Form */}
                {activeTab === 'admin' && (
                    <form onSubmit={handleAdminLogin} className="space-y-4">
                        <div className="text-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-700 flex items-center justify-center">
                                <Shield size={20} className="mr-2 text-blue-600" />
                                Admin Login
                            </h3>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                ref={adminEmailRef}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="admin@ist.edu"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                ref={adminPasswordRef}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                placeholder="Enter admin password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 transform hover:scale-[0.98]"
                        >
                            Login as Admin
                        </button>
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-blue-700">
                                <strong>Demo Credentials:</strong><br />
                                Email: admin@ist.edu<br />
                                Password: admin123
                            </p>
                        </div>
                    </form>
                )}

                {/* Student Login Form */}
                {activeTab === 'student' && (
                    <form onSubmit={handleStudentLogin} className="space-y-4">
                        <div className="text-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-700 flex items-center justify-center">
                                <User size={20} className="mr-2 text-green-600" />
                                Student Login
                            </h3>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Student ID
                            </label>
                            <input
                                type="text"
                                ref={studentIdRef}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Enter your student ID"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                ref={studentPasswordRef}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 transform hover:scale-[0.98]"
                        >
                            Login as Student
                        </button>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-green-700">
                                <strong>Demo Student IDs:</strong><br />
                                2021001, 2021002, 2021003<br />
                                Password: student123
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
