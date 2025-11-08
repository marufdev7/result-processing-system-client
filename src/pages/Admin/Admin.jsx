import React, { useState } from 'react';
import {
    Users,
    User,
    BookOpen,
    ClipboardList,
    CalendarCheck,
    FileText,
    BarChart,
    Megaphone,
    Settings,
    Shield,
    Database,
    Activity,
    TrendingUp,
    AlertTriangle,
    CheckCircle,
    Clock,
    Eye,
    Edit,
    Trash2,
    Plus,
    Search,
    Filter,
    Download,
    Upload,
    RefreshCw,
    Bell,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Award,
    Target,
    Zap,
    Globe,
    Lock,
    Unlock,
    UserCheck,
    UserX,
    GraduationCap,
    Building,
    DollarSign,
    PieChart,
    BarChart3
} from 'lucide-react';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedTimeRange, setSelectedTimeRange] = useState('week');

    // Sample admin data
    const [adminStats] = useState({
        totalUsers: 1285,
        totalTeachers: 45,
        totalStudents: 1240,
        totalSubjects: 12,
        totalClasses: 25,
        totalExams: 128,
        totalAssignments: 456,
        totalAnnouncements: 89,
        systemUptime: '99.8%',
        averageGrade: 85.6,
        passRate: 94.2,
        satisfactionRate: 4.7
    });

    // Recent activities
    const [recentActivities] = useState([
        {
            id: 1,
            action: 'New teacher registered',
            user: 'Engr. Farhana Akter',
            timestamp: '5 minutes ago',
            type: 'user',
            icon: 'User',
            color: 'bg-blue-100 text-blue-600'
        },
        {
            id: 2,
            action: 'Assignment "Database Systems Practice" created',
            user: 'Lect. Nazia Rahman',
            timestamp: '15 minutes ago',
            type: 'assignment',
            icon: 'FileText',
            color: 'bg-green-100 text-green-600'
        },
        {
            id: 3,
            action: 'Mid-term exam scheduled for CSE students',
            user: 'Engr. Farhana Akter',
            timestamp: '30 minutes ago',
            type: 'exam',
            icon: 'Calendar',
            color: 'bg-yellow-100 text-yellow-600'
        },
        {
            id: 4,
            action: 'New student STU21005 enrolled in ECE',
            user: 'Admin',
            timestamp: '1 hour ago',
            type: 'user',
            icon: 'UserPlus',
            color: 'bg-purple-100 text-purple-600'
        },
        {
            id: 5,
            action: 'Announcement "Project Submission Extended" published',
            user: 'Dr. Kamrul Hasan',
            timestamp: '2 hours ago',
            type: 'announcement',
            icon: 'Bell',
            color: 'bg-red-100 text-red-600'
        },
        {
            id: 6,
            action: 'Grades for Operating Systems mid-term published',
            user: 'Engr. Farhana Akter',
            timestamp: '4 hours ago',
            type: 'grades',
            icon: 'CheckCircle',
            color: 'bg-teal-100 text-teal-600'
        },
        {
            id: 7,
            action: 'Class CSE schedule updated for next semester',
            user: 'Admin',
            timestamp: '6 hours ago',
            type: 'class',
            icon: 'Clock',
            color: 'bg-indigo-100 text-indigo-600'
        }
    ]);

    // System alerts
    const [systemAlerts] = useState([
        {
            id: 1,
            level: 'warning',
            title: 'Server Load High',
            message: 'Current server load is at 85%. Consider optimizing queries.',
            timestamp: '10 minutes ago',
            icon: AlertTriangle
        },
        {
            id: 2,
            level: 'info',
            title: 'Scheduled Maintenance',
            message: 'System maintenance scheduled for Saturday 2:00 AM - 4:00 AM',
            timestamp: '1 hour ago',
            icon: Settings
        },
        {
            id: 3,
            level: 'success',
            title: 'Backup Completed',
            message: 'Daily backup completed successfully. 2.3GB archived.',
            timestamp: '2 hours ago',
            icon: CheckCircle
        }
    ]);

    // User management data
    const [users] = useState([
        {
            id: 1,
            name: 'Dr. Alice Johnson',
            email: 'alice.johnson@school.edu',
            role: 'Teacher',
            department: 'Mathematics',
            status: 'Active',
            lastLogin: '2024-02-08 14:30',
            avatar: null
        }, {
            id: 1,
            name: 'Engr. Farhana Akter',
            email: 'farhana.akter@university.edu',
            role: 'Teacher',
            department: 'Computer Science and Engineering',
            status: 'Active',
            lastLogin: '2025-11-09 09:15',
            avatar: null
        },
        {
            id: 2,
            name: 'Prof. Mahfuz Rahman',
            email: 'mahfuz.rahman@university.edu',
            role: 'Teacher',
            department: 'Electrical and Computer Engineering',
            status: 'Active',
            lastLogin: '2025-11-08 16:45',
            avatar: null
        },
        {
            id: 3,
            name: 'Dr. Kamrul Hasan',
            email: 'kamrul.hasan@university.edu',
            role: 'Teacher',
            department: 'Business Administration',
            status: 'Active',
            lastLogin: '2025-11-09 08:20',
            avatar: null
        },
        {
            id: 4,
            name: 'Engr. Saiful Islam',
            email: 'saiful.islam@university.edu',
            role: 'Teacher',
            department: 'Electrical Technology',
            status: 'Active',
            lastLogin: '2025-11-07 14:50',
            avatar: null
        },
        {
            id: 5,
            name: 'Lect. Nazia Rahman',
            email: 'nazia.rahman@university.edu',
            role: 'Teacher',
            department: 'Computer Science and Engineering',
            status: 'Active',
            lastLogin: '2025-11-09 10:05',
            avatar: null
        },
        {
            id: 6,
            name: 'Dr. Rasheda Begum',
            email: 'rasheda.begum@university.edu',
            role: 'Teacher',
            department: 'Electrical and Computer Engineering',
            status: 'Active',
            lastLogin: '2025-11-08 17:30',
            avatar: null
        }
    ]);

    // Performance metrics
    const [performanceMetrics] = useState([
        { label: 'Page Load Time', value: '1.2s', trend: 'down', color: 'green' },
        { label: 'Database Queries', value: '245/min', trend: 'up', color: 'blue' },
        { label: 'Error Rate', value: '0.02%', trend: 'down', color: 'green' },
        { label: 'API Response', value: '85ms', trend: 'stable', color: 'yellow' }
    ]);

    const tabs = [
        { id: 'overview', label: 'Overview', icon: BarChart },
        { id: 'users', label: 'User Management', icon: Users },
        { id: 'system', label: 'System Status', icon: Activity },
        { id: 'analytics', label: 'Analytics', icon: TrendingUp },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'settings', label: 'System Settings', icon: Settings }
    ];

    const getAlertColor = (level) => {
        switch (level) {
            case 'warning': return 'border-l-yellow-400 bg-yellow-50';
            case 'error': return 'border-l-red-400 bg-red-50';
            case 'success': return 'border-l-green-400 bg-green-50';
            default: return 'border-l-blue-400 bg-blue-50';
        }
    };

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Active':
                return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Active</span>;
            case 'Inactive':
                return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Inactive</span>;
            case 'Suspended':
                return <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Suspended</span>;
            default:
                return <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Unknown</span>;
        }
    };

    const OverviewTab = () => (
        <div className="space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Users</p>
                            <p className="text-3xl font-bold text-gray-900">{adminStats.totalUsers}</p>
                            <p className="text-xs text-green-600">↑ 12% from last month</p>
                        </div>
                        <Users className="w-12 h-12 text-blue-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Exams</p>
                            <p className="text-3xl font-bold text-gray-900">{adminStats.totalExams}</p>
                            <p className="text-xs text-green-600">↑ 8% from last month</p>
                        </div>
                        <CalendarCheck className="w-12 h-12 text-green-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">System Uptime</p>
                            <p className="text-3xl font-bold text-gray-900">{adminStats.systemUptime}</p>
                            <p className="text-xs text-green-600">Excellent performance</p>
                        </div>
                        <Activity className="w-12 h-12 text-purple-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Pass Rate</p>
                            <p className="text-3xl font-bold text-gray-900">{adminStats.passRate}%</p>
                            <p className="text-xs text-green-600">↑ 3% from last quarter</p>
                        </div>
                        <TrendingUp className="w-12 h-12 text-orange-500" />
                    </div>
                </div>
            </div>

            {/* Recent Activities & System Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
                        <button className="text-blue-600 text-sm hover:text-blue-800">View All</button>
                    </div>
                    <div className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
                        {recentActivities.map((activity) => {
                            const Icon = activity.icon;
                            return (
                                <div key={activity.id} className="px-6 py-4">
                                    <div className="flex items-start">
                                        <div className={`p-2 rounded-full ${activity.color} mr-4`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                            <p className="text-sm text-gray-600">{activity.user}</p>
                                            <p className="text-xs text-gray-500">{activity.timestamp}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* System Alerts */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">System Alerts</h2>
                        <Bell className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="p-6 space-y-4">
                        {systemAlerts.map((alert) => {
                            const Icon = alert.icon;
                            return (
                                <div key={alert.id} className={`border-l-4 p-4 rounded ${getAlertColor(alert.level)}`}>
                                    <div className="flex items-start">
                                        <Icon className="w-5 h-5 mr-3 mt-0.5" />
                                        <div className="flex-1">
                                            <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
                                            <p className="text-sm text-gray-700 mt-1">{alert.message}</p>
                                            <p className="text-xs text-gray-500 mt-2">{alert.timestamp}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                        { label: 'Add User', icon: Plus, color: 'bg-blue-500 hover:bg-blue-600' },
                        { label: 'Create Exam', icon: CalendarCheck, color: 'bg-green-500 hover:bg-green-600' },
                        { label: 'New Announcement', icon: Megaphone, color: 'bg-orange-500 hover:bg-orange-600' },
                        { label: 'System Backup', icon: Database, color: 'bg-purple-500 hover:bg-purple-600' },
                        { label: 'Export Data', icon: Download, color: 'bg-indigo-500 hover:bg-indigo-600' },
                        { label: 'View Reports', icon: BarChart, color: 'bg-teal-500 hover:bg-teal-600' }
                    ].map((action) => {
                        const Icon = action.icon;
                        return (
                            <button
                                key={action.label}
                                className={`${action.color} text-white p-4 rounded-lg transition-colors flex flex-col items-center space-y-2 text-sm font-medium`}
                            >
                                <Icon className="w-6 h-6" />
                                <span>{action.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const UserManagementTab = () => (
        <div className="space-y-6">
            {/* User Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Teachers</p>
                            <p className="text-2xl font-bold text-gray-900">{adminStats.totalTeachers}</p>
                        </div>
                        <User className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Students</p>
                            <p className="text-2xl font-bold text-gray-900">{adminStats.totalStudents}</p>
                        </div>
                        <Users className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Users</p>
                            <p className="text-2xl font-bold text-gray-900">{adminStats.totalUsers - 23}</p>
                        </div>
                        <UserCheck className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
            </div>

            {/* User Management Tools */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">User Management</h2>
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search users..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="all">All Roles</option>
                                <option value="teacher">Teachers</option>
                                <option value="student">Students</option>
                                <option value="admin">Administrators</option>
                            </select>
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Plus className="w-4 h-4 mr-2" />
                                Add User
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department/Class</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <User className="h-6 w-6 text-gray-400" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                                <div className="text-sm text-gray-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {user.department || user.class || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {getStatusBadge(user.status)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {user.lastLogin}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center space-x-3">
                                            <button className="text-blue-600 hover:text-blue-900">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button className="text-green-600 hover:text-green-900">
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const SystemStatusTab = () => (
        <div className="space-y-6">
            {/* System Health */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {performanceMetrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                            </div>
                            <div className={`p-2 rounded-full ${metric.color === 'green' ? 'bg-green-100 text-green-600' :
                                metric.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                                    metric.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                                        'bg-red-100 text-red-600'
                                }`}>
                                <Activity className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* System Services */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">System Services</h2>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Web Server', status: 'running', uptime: '99.8%', icon: Globe },
                            { name: 'Database', status: 'running', uptime: '99.9%', icon: Database },
                            { name: 'Email Service', status: 'running', uptime: '98.5%', icon: Mail },
                            { name: 'File Storage', status: 'running', uptime: '99.7%', icon: FileText },
                            { name: 'Authentication', status: 'running', uptime: '100%', icon: Lock },
                            { name: 'Backup Service', status: 'running', uptime: '97.8%', icon: Shield }
                        ].map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.name} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Icon className="w-6 h-6 text-gray-500 mr-3" />
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-900">{service.name}</h3>
                                                <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                            <span className="text-sm text-green-600 capitalize">{service.status}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* System Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">System Actions</h2>
                <div className="flex flex-wrap gap-4">
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Restart Services
                    </button>
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Database className="w-4 h-4 mr-2" />
                        Run Backup
                    </button>
                    <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export Logs
                    </button>
                    <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                        <Activity className="w-4 h-4 mr-2" />
                        System Diagnostics
                    </button>
                </div>
            </div>
        </div>
    );

    const AnalyticsTab = () => (
        <div className="space-y-6">
            {/* Time Range Selector */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h2>
                    <select
                        value={selectedTimeRange}
                        onChange={(e) => setSelectedTimeRange(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="week">Last 7 days</option>
                        <option value="month">Last 30 days</option>
                        <option value="quarter">Last 3 months</option>
                        <option value="year">Last year</option>
                    </select>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Average Grade</p>
                            <p className="text-2xl font-bold text-gray-900">{adminStats.averageGrade}</p>
                            <p className="text-xs text-green-600">↑ 2.3 from last month</p>
                        </div>
                        <BarChart3 className="w-8 h-8 text-blue-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
                            <p className="text-2xl font-bold text-gray-900">96.8%</p>
                            <p className="text-xs text-green-600">↑ 1.2% from last month</p>
                        </div>
                        <UserCheck className="w-8 h-8 text-green-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Assignment Completion</p>
                            <p className="text-2xl font-bold text-gray-900">89.5%</p>
                            <p className="text-xs text-red-600">↓ 0.8% from last month</p>
                        </div>
                        <Target className="w-8 h-8 text-purple-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Satisfaction Score</p>
                            <p className="text-2xl font-bold text-gray-900">{adminStats.satisfactionRate}</p>
                            <p className="text-xs text-green-600">↑ 0.2 from last quarter</p>
                        </div>
                        <Award className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
            </div>

            {/* Charts Placeholders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Distribution</h3>
                    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                        <div className="text-center">
                            <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">Grade distribution chart would go here</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
                    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                        <div className="text-center">
                            <BarChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">Performance trends chart would go here</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Department Performance */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Performance</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Grade</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pass Rate</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                { department: 'Mathematics', students: 285, avgGrade: 87.2, passRate: 94.5, trend: 'up' },
                                { department: 'Physics', students: 242, avgGrade: 84.8, passRate: 92.1, trend: 'up' },
                                { department: 'Chemistry', students: 198, avgGrade: 86.4, passRate: 93.7, trend: 'stable' },
                                { department: 'Biology', students: 234, avgGrade: 89.1, passRate: 96.2, trend: 'up' },
                                { department: 'English', students: 312, avgGrade: 85.6, passRate: 91.8, trend: 'down' }
                            ].map((dept) => (
                                <tr key={dept.department} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {dept.department}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {dept.students}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {dept.avgGrade}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {dept.passRate}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${dept.trend === 'up' ? 'bg-green-100 text-green-800' :
                                            dept.trend === 'down' ? 'bg-red-100 text-red-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {dept.trend === 'up' ? '↗' : dept.trend === 'down' ? '↘' : '→'} {dept.trend}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const SecurityTab = () => (
        <div className="space-y-6">
            {/* Security Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Security Score</p>
                            <p className="text-2xl font-bold text-gray-900">8.7/10</p>
                        </div>
                        <Shield className="w-8 h-8 text-green-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Sessions</p>
                            <p className="text-2xl font-bold text-gray-900">247</p>
                        </div>
                        <Activity className="w-8 h-8 text-blue-500" />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Failed Logins</p>
                            <p className="text-2xl font-bold text-gray-900">12</p>
                        </div>
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Security Configuration</h2>
                </div>
                <div className="p-6 space-y-6">
                    {[
                        {
                            title: 'Password Policy',
                            description: 'Enforce strong password requirements',
                            enabled: true,
                            icon: Lock
                        },
                        {
                            title: 'Two-Factor Authentication',
                            description: 'Require 2FA for admin accounts',
                            enabled: true,
                            icon: Shield
                        },
                        {
                            title: 'Session Timeout',
                            description: 'Auto-logout inactive users',
                            enabled: true,
                            icon: Clock
                        },
                        {
                            title: 'Login Attempt Limiting',
                            description: 'Block accounts after failed attempts',
                            enabled: true,
                            icon: UserX
                        },
                        {
                            title: 'IP Whitelisting',
                            description: 'Restrict access by IP address',
                            enabled: false,
                            icon: Globe
                        }
                    ].map((setting) => {
                        const Icon = setting.icon;
                        return (
                            <div key={setting.title} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                <div className="flex items-center">
                                    <Icon className="w-5 h-5 text-gray-500 mr-4" />
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">{setting.title}</h3>
                                        <p className="text-sm text-gray-500">{setting.description}</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={setting.enabled}
                                        onChange={() => { }}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Security Logs */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Security Events</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {[
                        {
                            event: 'Failed login attempt',
                            user: 'admin@school.edu',
                            ip: '192.168.1.100',
                            timestamp: '2 minutes ago',
                            severity: 'warning'
                        },
                        {
                            event: 'Password changed',
                            user: 'john.doe@school.edu',
                            ip: '192.168.1.150',
                            timestamp: '1 hour ago',
                            severity: 'info'
                        },
                        {
                            event: 'Unauthorized access attempt',
                            user: 'Unknown',
                            ip: '203.45.67.89',
                            timestamp: '3 hours ago',
                            severity: 'error'
                        }
                    ].map((log, index) => (
                        <div key={index} className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className={`w-3 h-3 rounded-full mr-3 ${log.severity === 'error' ? 'bg-red-500' :
                                        log.severity === 'warning' ? 'bg-yellow-500' :
                                            'bg-blue-500'
                                        }`}></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{log.event}</p>
                                        <p className="text-sm text-gray-500">{log.user} • {log.ip}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500">{log.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const SystemSettingsTab = () => (
        <div className="space-y-6">
            {/* General Settings */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">General Settings</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                            <input
                                type="text"
                                defaultValue="Institute of Science and Technology"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>2020-2021</option>
                                <option>2021-2022</option>
                                <option>2022-2023</option>
                                <option>2023-2024</option>
                                <option>2024-2025</option>
                                <option>2025-2026</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>UTC-6 (Central Time)</option>
                                <option>UTC-7 (Mountain Time)</option>
                                <option>UTC-8 (Pacific Time)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Email Settings */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Email Configuration</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Server</label>
                            <input
                                type="text"
                                defaultValue="smtp.school.edu"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                            <input
                                type="number"
                                defaultValue="587"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
                            <input
                                type="email"
                                defaultValue="noreply@school.edu"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">From Name</label>
                            <input
                                type="text"
                                defaultValue="Institute of Science and Technology"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                        <label className="text-sm text-gray-700">Enable TLS/SSL encryption</label>
                    </div>
                </div>
            </div>

            {/* Backup Settings */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Backup Configuration</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Retention Period</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option>30 days</option>
                                <option>90 days</option>
                                <option>1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Database className="w-4 h-4 mr-2" />
                            Run Backup Now
                        </button>
                        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <Upload className="w-4 h-4 mr-2" />
                            Restore from Backup
                        </button>
                    </div>
                </div>
            </div>

            {/* Save Settings */}
            <div className="flex justify-end">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Save All Settings
                </button>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'users': return <UserManagementTab />;
            case 'system': return <SystemStatusTab />;
            case 'analytics': return <AnalyticsTab />;
            case 'security': return <SecurityTab />;
            case 'settings': return <SystemSettingsTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">System Administration</h1>
                <p className="text-gray-600 mt-2">Comprehensive administrative control panel</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar */}
                <div className="lg:w-64">
                    <nav className="bg-white rounded-lg shadow-md p-4">
                        <ul className="space-y-2">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <li key={tab.id}>
                                        <button
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${activeTab === tab.id
                                                ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500'
                                                : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            <Icon className="w-5 h-5 mr-3" />
                                            {tab.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default Admin;
