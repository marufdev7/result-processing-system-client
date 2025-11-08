import React, { useState } from 'react';
import {
    Search,
    Plus,
    Edit,
    Trash2,
    Eye,
    Filter,
    Download,
    Upload,
    Users,
    Mail,
    Phone,
    Calendar,
    BookOpen,
    GraduationCap,
    Award,
    Clock
} from 'lucide-react';

const Teachers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample teacher data
    const [teachers, setTeachers] = useState([
        {
            id: 'TEA001',
            name: 'Engr. Farhana Akter',
            email: 'farhana.akter@university.edu.bd',
            phone: '+88-01712345678',
            department: 'Computer Science and Engineering',
            subjects: ['Data Structures', 'Algorithms', 'Object Oriented Programming'],
            qualification: 'M.Sc. in Computer Science',
            experience: '6 years',
            dateOfJoining: '2018-07-12',
            address: 'Mirpur, Dhaka',
            status: 'Active',
            salary: '৳75,000',
            classesAssigned: ['CSE']
        },
        {
            id: 'TEA002',
            name: 'Prof. Mahfuz Rahman',
            email: 'mahfuz.rahman@university.edu.bd',
            phone: '+88-01687451236',
            department: 'Electrical and Computer Engineering',
            subjects: ['Digital Electronics', 'Microprocessors', 'Embedded Systems'],
            qualification: 'Ph.D. in Electrical Engineering',
            experience: '12 years',
            dateOfJoining: '2012-09-01',
            address: 'Uttara, Dhaka',
            status: 'Active',
            salary: '৳95,000',
            classesAssigned: ['ECE']
        },
        {
            id: 'TEA003',
            name: 'Dr. Kamrul Hasan',
            email: 'kamrul.hasan@business.edu.bd',
            phone: '+88-01896321457',
            department: 'Business Administration',
            subjects: ['Principles of Management', 'Marketing', 'Organizational Behavior'],
            qualification: 'Ph.D. in Business Administration',
            experience: '10 years',
            dateOfJoining: '2014-02-10',
            address: 'Dhanmondi, Dhaka',
            status: 'Active',
            salary: '৳88,000',
            classesAssigned: ['BBA']
        },
        {
            id: 'TEA004',
            name: 'Engr. Saiful Islam',
            email: 'saiful.islam@polytechnic.edu.bd',
            phone: '+88-01758463291',
            department: 'Electrical Technology',
            subjects: ['Electrical Circuits', 'Power Systems', 'Control Engineering'],
            qualification: 'B.Sc. in Electrical Engineering',
            experience: '9 years',
            dateOfJoining: '2016-03-20',
            address: 'Mohammadpur, Dhaka',
            status: 'Active',
            salary: '৳70,000',
            classesAssigned: ['Diploma']
        },
        {
            id: 'TEA005',
            name: 'Dr. Rasheda Begum',
            email: 'rasheda.begum@university.edu.bd',
            phone: '+88-01987456321',
            department: 'Electrical and Computer Engineering',
            subjects: ['Signal Processing', 'Communication Systems', 'Analog Electronics'],
            qualification: 'Ph.D. in Telecommunication Engineering',
            experience: '11 years',
            dateOfJoining: '2013-06-25',
            address: 'Banani, Dhaka',
            status: 'Active',
            salary: '৳92,000',
            classesAssigned: ['ECE']
        },
        {
            id: 'TEA006',
            name: 'Lect. Nazia Rahman',
            email: 'nazia.rahman@university.edu.bd',
            phone: '+88-01547896523',
            department: 'Computer Science and Engineering',
            subjects: ['Database Systems', 'Web Development', 'Computer Networks'],
            qualification: 'M.Sc. in Information Technology',
            experience: '5 years',
            dateOfJoining: '2019-11-10',
            address: 'Khilgaon, Dhaka',
            status: 'Active',
            salary: '৳68,000',
            classesAssigned: ['CSE']
        }
    ]);

    const departments = ['all', 'CSE', 'ECE', 'BBA', 'Diploma'];

    // Filter teachers based on search term and selected department
    const filteredTeachers = teachers.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesDepartment = selectedDepartment === 'all' || teacher.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    const handleAddTeacher = () => {
        setSelectedTeacher(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditTeacher = (teacher) => {
        setSelectedTeacher(teacher);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewTeacher = (teacher) => {
        setSelectedTeacher(teacher);
        setModalType('view');
        setShowModal(true);
    };

    const handleDeleteTeacher = (teacherId) => {
        if (window.confirm('Are you sure you want to delete this teacher?')) {
            setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
        }
    };

    const TeacherModal = () => {
        const [formData, setFormData] = useState(
            selectedTeacher || {
                name: '',
                email: '',
                phone: '',
                department: '',
                subjects: [],
                qualification: '',
                experience: '',
                address: '',
                salary: '',
                status: 'Active'
            }
        );

        const handleSubmit = (e) => {
            e.preventDefault();
            if (modalType === 'add') {
                const newTeacher = {
                    ...formData,
                    id: `TEA${String(teachers.length + 1).padStart(3, '0')}`,
                    dateOfJoining: new Date().toISOString().split('T')[0],
                    classesAssigned: []
                };
                setTeachers([...teachers, newTeacher]);
            } else if (modalType === 'edit') {
                setTeachers(teachers.map(teacher =>
                    teacher.id === selectedTeacher.id ? { ...teacher, ...formData } : teacher
                ));
            }
            setShowModal(false);
        };

        const handleChange = (e) => {
            if (e.target.name === 'subjects') {
                setFormData({
                    ...formData,
                    subjects: e.target.value.split(',').map(s => s.trim()).filter(s => s)
                });
            } else {
                setFormData({
                    ...formData,
                    [e.target.name]: e.target.value
                });
            }
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {modalType === 'add' ? 'Add New Teacher' :
                                modalType === 'edit' ? 'Edit Teacher' : 'Teacher Details'}
                        </h2>
                        <button
                            onClick={() => setShowModal(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Department *
                                </label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                >
                                    <option value="">Select Department</option>
                                    {departments.slice(1).map(dept => (
                                        <option key={dept} value={dept}>{dept}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Qualification *
                                </label>
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    placeholder="e.g., M.Sc. in Mathematics"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Experience *
                                </label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    placeholder="e.g., 5 years"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Salary *
                                </label>
                                <input
                                    type="text"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    placeholder="e.g., $60000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                >
                                    <option value="Active">Active</option>
                                    <option value="On Leave">On Leave</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subjects (comma separated) *
                                </label>
                                <input
                                    type="text"
                                    name="subjects"
                                    value={Array.isArray(formData.subjects) ? formData.subjects.join(', ') : ''}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    placeholder="e.g., Algebra, Calculus, Statistics"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address *
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>
                        </div>

                        {modalType !== 'view' && (
                            <div className="flex justify-end space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    {modalType === 'add' ? 'Add Teacher' : 'Update Teacher'}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Teachers Management</h1>
                    <p className="text-gray-600 mt-2">Manage teacher information and assignments</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Upload className="w-4 h-4 mr-2" />
                        Import
                    </button>
                    <button
                        onClick={handleAddTeacher}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Teacher
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Teachers</p>
                            <p className="text-2xl font-bold text-gray-800">{teachers.length}</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Active Teachers</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {teachers.filter(t => t.status === 'Active').length}
                            </p>
                        </div>
                        <GraduationCap className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Departments</p>
                            <p className="text-2xl font-bold text-gray-800">{departments.length - 1}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Avg Experience</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {Math.round(teachers.reduce((sum, t) => sum + parseInt(t.experience), 0) / teachers.length)} yrs
                            </p>
                        </div>
                        <Award className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search teachers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                value={selectedDepartment}
                                onChange={(e) => setSelectedDepartment(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {departments.map(dept => (
                                    <option key={dept} value={dept}>
                                        {dept === 'all' ? 'All Departments' : dept}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {filteredTeachers.length} of {teachers.length} teachers
                    </div>
                </div>
            </div>

            {/* Teachers Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Teacher
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Department
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Experience
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredTeachers.map((teacher) => (
                                <tr key={teacher.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                                <span className="text-purple-600 font-medium">
                                                    {teacher.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{teacher.name}</div>
                                                <div className="text-sm text-gray-500">{teacher.id}</div>
                                                <div className="text-xs text-gray-400">
                                                    Subjects: {teacher.subjects.join(', ')}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 flex items-center">
                                            <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                            {teacher.email}
                                        </div>
                                        <div className="text-sm text-gray-500 flex items-center mt-1">
                                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                            {teacher.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{teacher.department}</div>
                                        <div className="text-sm text-gray-500">{teacher.qualification}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center text-sm text-gray-900">
                                            <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                            {teacher.experience}
                                        </div>
                                        <div className="text-sm text-gray-500">Since: {teacher.dateOfJoining}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${teacher.status === 'Active' ? 'bg-green-100 text-green-800' :
                                            teacher.status === 'On Leave' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {teacher.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleViewTeacher(teacher)}
                                                className="text-blue-600 hover:text-blue-900"
                                                title="View Details"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEditTeacher(teacher)}
                                                className="text-green-600 hover:text-green-900"
                                                title="Edit Teacher"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTeacher(teacher.id)}
                                                className="text-red-600 hover:text-red-900"
                                                title="Delete Teacher"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredTeachers.length === 0 && (
                    <div className="text-center py-12">
                        <Users className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No teachers found</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {searchTerm || selectedDepartment !== 'all'
                                ? 'Try adjusting your search or filter criteria.'
                                : 'Get started by adding a new teacher.'}
                        </p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && <TeacherModal />}
        </div>
    );
};

export default Teachers;
