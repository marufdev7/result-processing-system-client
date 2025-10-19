import React from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { 
    Users, 
    BookOpen, 
    BarChart, 
    Calendar, 
    Trophy, 
    Bell,
    TrendingUp,
    GraduationCap,
    Plus,
    FileText,
    Megaphone,
    ClipboardList,
    Activity,
    AlertTriangle,
    CheckCircle,
    Clock,
    Eye,
    CalendarCheck
} from 'lucide-react';

const Home = () => {
    const { user, isAdmin, isStudent } = useAuth();
    const navigate = useNavigate();

    // Sample data for admin dashboard
    const adminStats = {
        totalStudents: 245,
        totalTeachers: 18,
        activeClasses: 12,
        pendingResults: 8
    };

    // Recent activities for admin
    const recentActivities = [
        {
            id: 1,
            action: 'New student enrollment',
            user: 'John Smith - Grade 10',
            timestamp: '5 minutes ago',
            icon: Users,
            color: 'text-blue-600 bg-blue-100'
        },
        {
            id: 2,
            action: 'Exam results published',
            user: 'Mathematics Final - Class 11A',
            timestamp: '1 hour ago',
            icon: CalendarCheck,
            color: 'text-green-600 bg-green-100'
        },
        {
            id: 3,
            action: 'New announcement created',
            user: 'Parent-Teacher Meeting Schedule',
            timestamp: '2 hours ago',
            icon: Megaphone,
            color: 'text-orange-600 bg-orange-100'
        },
        {
            id: 4,
            action: 'Teacher assignment updated',
            user: 'Dr. Sarah Wilson - Physics Dept',
            timestamp: '3 hours ago',
            icon: BookOpen,
            color: 'text-purple-600 bg-purple-100'
        }
    ];

    // System alerts
    const systemAlerts = [
        {
            id: 1,
            level: 'warning',
            message: '8 exam results pending review',
            action: 'View Results',
            icon: AlertTriangle
        },
        {
            id: 2,
            level: 'info',
            message: 'System backup completed successfully',
            action: 'View Logs',
            icon: CheckCircle
        },
        {
            id: 3,
            level: 'error',
            message: '3 failed login attempts detected',
            action: 'Security',
            icon: AlertTriangle
        }
    ];

    // Quick action handlers
    const handleQuickAction = (action) => {
        switch (action) {
            case 'students':
                navigate('/students');
                break;
            case 'exams':
                navigate('/exams');
                break;
            case 'results':
                navigate('/results');
                break;
            case 'announcements':
                navigate('/announcement');
                break;
            case 'assignments':
                navigate('/assignments');
                break;
            case 'teachers':
                navigate('/teachers');
                break;
            default:
                console.log('Action not defined:', action);
        }
    };

    // Sample data for student dashboard
    const studentData = {
        currentGPA: 3.75,
        totalSubjects: 6,
        completedExams: 4,
        pendingAssignments: 2,
        recentResults: [
            { subject: 'Mathematics', grade: 'A-', score: 88 },
            { subject: 'Physics', grade: 'B+', score: 82 },
            { subject: 'Chemistry', grade: 'A', score: 91 },
        ],
        announcements: [
            { title: 'Mid-term Exam Schedule Released', date: '2024-01-15', type: 'exam' },
            { title: 'New Library Hours', date: '2024-01-12', type: 'general' },
            { title: 'Assignment Deadline Extended', date: '2024-01-10', type: 'assignment' }
        ]
    };

    const AdminDashboard = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800 font-medium">Administrator</span>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Students</p>
                            <p className="text-2xl font-bold text-gray-800">{adminStats.totalStudents}</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-green-500 text-sm font-medium">+12 this month</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Teachers</p>
                            <p className="text-2xl font-bold text-gray-800">{adminStats.totalTeachers}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-green-500 text-sm font-medium">+2 this month</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Active Classes</p>
                            <p className="text-2xl font-bold text-gray-800">{adminStats.activeClasses}</p>
                        </div>
                        <Calendar className="w-8 h-8 text-purple-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-blue-500 text-sm font-medium">Current semester</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Pending Results</p>
                            <p className="text-2xl font-bold text-gray-800">{adminStats.pendingResults}</p>
                        </div>
                        <BarChart className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-orange-500 text-sm font-medium">Requires attention</span>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <button 
                        onClick={() => handleQuickAction('students')}
                        className="p-4 text-left hover:bg-blue-50 rounded-lg border border-gray-200 transition-colors hover:border-blue-300"
                    >
                        <Users className="w-6 h-6 text-blue-500 mb-2" />
                        <span className="block font-medium text-gray-800">Students</span>
                        <span className="text-sm text-gray-500">Manage students</span>
                    </button>
                    <button 
                        onClick={() => handleQuickAction('teachers')}
                        className="p-4 text-left hover:bg-green-50 rounded-lg border border-gray-200 transition-colors hover:border-green-300"
                    >
                        <BookOpen className="w-6 h-6 text-green-500 mb-2" />
                        <span className="block font-medium text-gray-800">Teachers</span>
                        <span className="text-sm text-gray-500">Manage teachers</span>
                    </button>
                    <button 
                        onClick={() => handleQuickAction('exams')}
                        className="p-4 text-left hover:bg-purple-50 rounded-lg border border-gray-200 transition-colors hover:border-purple-300"
                    >
                        <CalendarCheck className="w-6 h-6 text-purple-500 mb-2" />
                        <span className="block font-medium text-gray-800">Exams</span>
                        <span className="text-sm text-gray-500">Schedule exams</span>
                    </button>
                    <button 
                        onClick={() => handleQuickAction('results')}
                        className="p-4 text-left hover:bg-orange-50 rounded-lg border border-gray-200 transition-colors hover:border-orange-300"
                    >
                        <BarChart className="w-6 h-6 text-orange-500 mb-2" />
                        <span className="block font-medium text-gray-800">Results</span>
                        <span className="text-sm text-gray-500">View results</span>
                    </button>
                    <button 
                        onClick={() => handleQuickAction('assignments')}
                        className="p-4 text-left hover:bg-indigo-50 rounded-lg border border-gray-200 transition-colors hover:border-indigo-300"
                    >
                        <FileText className="w-6 h-6 text-indigo-500 mb-2" />
                        <span className="block font-medium text-gray-800">Assignments</span>
                        <span className="text-sm text-gray-500">Manage tasks</span>
                    </button>
                    <button 
                        onClick={() => handleQuickAction('announcements')}
                        className="p-4 text-left hover:bg-pink-50 rounded-lg border border-gray-200 transition-colors hover:border-pink-300"
                    >
                        <Megaphone className="w-6 h-6 text-pink-500 mb-2" />
                        <span className="block font-medium text-gray-800">Notices</span>
                        <span className="text-sm text-gray-500">Announcements</span>
                    </button>
                </div>
            </div>

            {/* Recent Activities & System Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
                        <button className="text-blue-600 text-sm hover:text-blue-800">View All</button>
                    </div>
                    <div className="space-y-4">
                        {recentActivities.map((activity) => {
                            const Icon = activity.icon;
                            return (
                                <div key={activity.id} className="flex items-start space-x-3">
                                    <div className={`p-2 rounded-full ${activity.color}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                        <p className="text-sm text-gray-600">{activity.user}</p>
                                        <p className="text-xs text-gray-500">{activity.timestamp}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* System Alerts */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">System Alerts</h2>
                        <Bell className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-4">
                        {systemAlerts.map((alert) => {
                            const Icon = alert.icon;
                            const alertColor = alert.level === 'warning' ? 'text-yellow-600 bg-yellow-100' : 
                                             alert.level === 'error' ? 'text-red-600 bg-red-100' : 
                                             'text-green-600 bg-green-100';
                            return (
                                <div key={alert.id} className="flex items-start justify-between p-3 rounded-lg border border-gray-200">
                                    <div className="flex items-start space-x-3">
                                        <div className={`p-1 rounded-full ${alertColor}`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-600 text-xs hover:text-blue-800">
                                        {alert.action}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    const StudentDashboard = () => (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                    <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
                    <p className="text-sm text-gray-500">Class: {user?.class} • Student ID: {user?.id}</p>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">Student</span>
                </div>
            </div>

            {/* Student Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Current GPA</p>
                            <p className="text-2xl font-bold text-gray-800">{studentData.currentGPA}</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-green-500 text-sm font-medium">Above average</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Subjects</p>
                            <p className="text-2xl font-bold text-gray-800">{studentData.totalSubjects}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-green-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-blue-500 text-sm font-medium">Current semester</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Completed Exams</p>
                            <p className="text-2xl font-bold text-gray-800">{studentData.completedExams}</p>
                        </div>
                        <Trophy className="w-8 h-8 text-purple-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-purple-500 text-sm font-medium">This semester</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Pending Tasks</p>
                            <p className="text-2xl font-bold text-gray-800">{studentData.pendingAssignments}</p>
                        </div>
                        <Calendar className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="mt-2">
                        <span className="text-orange-500 text-sm font-medium">Due this week</span>
                    </div>
                </div>
            </div>

            {/* Recent Results and Announcements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Results */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Results</h2>
                    <div className="space-y-3">
                        {studentData.recentResults.map((result, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-800">{result.subject}</p>
                                    <p className="text-sm text-gray-500">Score: {result.score}%</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    result.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                                    result.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                                    'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {result.grade}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Announcements */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Announcements</h2>
                    <div className="space-y-3">
                        {studentData.announcements.map((announcement, index) => (
                            <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <p className="font-medium text-gray-800">{announcement.title}</p>
                                        <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                                    </div>
                                    <span className={`px-2 py-1 text-xs rounded-full ${
                                        announcement.type === 'exam' ? 'bg-red-100 text-red-800' :
                                        announcement.type === 'assignment' ? 'bg-blue-100 text-blue-800' :
                                        'bg-gray-100 text-gray-800'
                                    }`}>
                                        {announcement.type}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {isAdmin() ? <AdminDashboard /> : <StudentDashboard />}
        </div>
    );
};

export default Home;
