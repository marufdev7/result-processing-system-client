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
    GraduationCap
} from 'lucide-react';

const Students = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample student data
    const [students, setStudents] = useState([
        {
            id: '21001',
            name: 'Md. Sobuj Ahmed',
            email: 'sobuj.ahmed@email.com',
            phone: '+88-01712345678',
            class: 'CSE',
            dateOfBirth: '2001-04-22',
            address: 'Mirpur, Dhaka',
            guardianName: 'Abdul Karim',
            guardianPhone: '+88-01987654321',
            status: 'Active',
            enrollmentDate: '2021-01-10',
            gpa: '3.85'
        },
        {
            id: '21002',
            name: 'Nusrat Jahan',
            email: 'nusrat.jahan@email.com',
            phone: '+88-01624567890',
            class: 'ECE',
            dateOfBirth: '2000-11-12',
            address: 'Uttara, Dhaka',
            guardianName: 'Fazlul Haque',
            guardianPhone: '+88-01836547890',
            status: 'Active',
            enrollmentDate: '2020-09-01',
            gpa: '3.72'
        },
        {
            id: '21003',
            name: 'Sajid Ahmed',
            email: 'sajid.ahmed@email.com',
            phone: '+88-01512457896',
            class: 'BBA',
            dateOfBirth: '1999-07-09',
            address: 'Dhanmondi, Dhaka',
            guardianName: 'Nazrul Islam',
            guardianPhone: '+88-01756987412',
            status: 'Active',
            enrollmentDate: '2019-09-01',
            gpa: '3.65'
        },
        {
            id: '21004',
            name: 'Tania Akter',
            email: 'tania.akter@email.com',
            phone: '+88-01836987451',
            class: 'Diploma',
            dateOfBirth: '2002-02-18',
            address: 'Mohammadpur, Dhaka',
            guardianName: 'Rafiqul Islam',
            guardianPhone: '+88-01945236987',
            status: 'Active',
            enrollmentDate: '2021-06-15',
            gpa: '3.90'
        },
        {
            id: '21005',
            name: 'Ariful Islam',
            email: 'ariful.islam@email.com',
            phone: '+88-01798562314',
            class: 'CSE',
            dateOfBirth: '2001-09-25',
            address: 'Khilgaon, Dhaka',
            guardianName: 'Jalal Uddin',
            guardianPhone: '+88-01845236598',
            status: 'Active',
            enrollmentDate: '2020-09-01',
            gpa: '3.78'
        },
        {
            id: '21006',
            name: 'Mitu Rahman',
            email: 'mitu.rahman@email.com',
            phone: '+88-01687965412',
            class: 'ECE',
            dateOfBirth: '2003-03-14',
            address: 'Banani, Dhaka',
            guardianName: 'Shafiqul Alam',
            guardianPhone: '+88-01978451236',
            status: 'Active',
            enrollmentDate: '2022-01-05',
            gpa: '3.67'
        },
        {
            id: '21007',
            name: 'Hasan Mahmud',
            email: 'hasan.mahmud@email.com',
            phone: '+88-01732145698',
            class: 'Diploma',
            dateOfBirth: '2000-12-30',
            address: 'Bashundhara, Dhaka',
            guardianName: 'Kamal Uddin',
            guardianPhone: '+88-01896587412',
            status: 'Active',
            enrollmentDate: '2020-02-20',
            gpa: '3.80'
        },
        {
            id: '21008',
            name: 'Sadia Khatun',
            email: 'sadia.khatun@email.com',
            phone: '+88-01574589632',
            class: 'BBA',
            dateOfBirth: '2002-06-07',
            address: 'Tejgaon, Dhaka',
            guardianName: 'Abdur Rahim',
            guardianPhone: '+88-01745269831',
            status: 'Active',
            enrollmentDate: '2021-09-01',
            gpa: '3.74'
        },
        {
            id: '21009',
            name: 'Rafiul Alam',
            email: 'rafiul.alam@email.com',
            phone: '+88-01874561239',
            class: 'CSE',
            dateOfBirth: '1999-08-11',
            address: 'Malibagh, Dhaka',
            guardianName: 'Azizur Rahman',
            guardianPhone: '+88-01987456321',
            status: 'Active',
            enrollmentDate: '2019-09-01',
            gpa: '3.91'
        },
        {
            id: '21010',
            name: 'Sumaiya Rahman',
            email: 'sumaiya.rahman@email.com',
            phone: '+88-01798765432',
            class: 'ECE',
            dateOfBirth: '2001-05-03',
            address: 'Rampura, Dhaka',
            guardianName: 'Anwar Hossain',
            guardianPhone: '+88-01856478932',
            status: 'Active',
            enrollmentDate: '2020-11-15',
            gpa: '3.82'
        }
    ]);

    const classes = ['all', 'CSE', 'ECE', 'BBA', 'Diploma'];

    // Filter students based on search term and selected class
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = selectedClass === 'all' || student.class === selectedClass;
        return matchesSearch && matchesClass;
    });

    const handleAddStudent = () => {
        setSelectedStudent(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditStudent = (student) => {
        setSelectedStudent(student);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewStudent = (student) => {
        setSelectedStudent(student);
        setModalType('view');
        setShowModal(true);
    };

    const handleDeleteStudent = (studentId) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            setStudents(students.filter(student => student.id !== studentId));
        }
    };

    const StudentModal = () => {
        const [formData, setFormData] = useState(
            selectedStudent || {
                name: '',
                email: '',
                phone: '',
                class: '',
                dateOfBirth: '',
                address: '',
                guardianName: '',
                guardianPhone: '',
                status: 'Active'
            }
        );

        const handleSubmit = (e) => {
            e.preventDefault();
            if (modalType === 'add') {
                const newStudent = {
                    ...formData,
                    id: `STU${String(students.length + 1).padStart(3, '0')}`,
                    enrollmentDate: new Date().toISOString().split('T')[0],
                    gpa: '0.0'
                };
                setStudents([...students, newStudent]);
            } else if (modalType === 'edit') {
                setStudents(students.map(student =>
                    student.id === selectedStudent.id ? { ...student, ...formData } : student
                ));
            }
            setShowModal(false);
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {modalType === 'add' ? 'Add New Student' :
                                modalType === 'edit' ? 'Edit Student' : 'Student Details'}
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
                                    Class *
                                </label>
                                <select
                                    name="class"
                                    value={formData.class}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                >
                                    <option value="">Select Class</option>
                                    {classes.slice(1).map(cls => (
                                        <option key={cls} value={cls}>{cls}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Date of Birth *
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
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
                                    <option value="Inactive">Inactive</option>
                                </select>
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

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Guardian Name *
                                </label>
                                <input
                                    type="text"
                                    name="guardianName"
                                    value={formData.guardianName}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Guardian Phone *
                                </label>
                                <input
                                    type="tel"
                                    name="guardianPhone"
                                    value={formData.guardianPhone}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
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
                                    {modalType === 'add' ? 'Add Student' : 'Update Student'}
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
                    <h1 className="text-3xl font-bold text-gray-800">Students Management</h1>
                    <p className="text-gray-600 mt-2">Manage student information and records</p>
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
                        onClick={handleAddStudent}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Student
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Students</p>
                            <p className="text-2xl font-bold text-gray-800">{students.length}</p>
                        </div>
                        <Users className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Active Students</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {students.filter(s => s.status === 'Active').length}
                            </p>
                        </div>
                        <GraduationCap className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Classes</p>
                            <p className="text-2xl font-bold text-gray-800">{classes.length - 1}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Average GPA</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {(students.reduce((sum, s) => sum + parseFloat(s.gpa), 0) / students.length).toFixed(1)}
                            </p>
                        </div>
                        <Calendar className="w-8 h-8 text-orange-500" />
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
                                placeholder="Search students..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {classes.map(cls => (
                                    <option key={cls} value={cls}>
                                        {cls === 'all' ? 'All Classes' : cls}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {filteredStudents.length} of {students.length} students
                    </div>
                </div>
            </div>

            {/* Students Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Class
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    GPA
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
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-blue-600 font-medium">
                                                    {student.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                                <div className="text-sm text-gray-500">{student.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 flex items-center">
                                            <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                            {student.email}
                                        </div>
                                        <div className="text-sm text-gray-500 flex items-center mt-1">
                                            <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                            {student.phone}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{student.class}</div>
                                        <div className="text-sm text-gray-500">Enrolled: {student.enrollmentDate}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-sm font-medium rounded-full ${parseFloat(student.gpa) >= 3.5 ? 'bg-green-100 text-green-800' :
                                            parseFloat(student.gpa) >= 3.0 ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {student.gpa}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${student.status === 'Active'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                            }`}>
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleViewStudent(student)}
                                                className="text-blue-600 hover:text-blue-900"
                                                title="View Details"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEditStudent(student)}
                                                className="text-green-600 hover:text-green-900"
                                                title="Edit Student"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteStudent(student.id)}
                                                className="text-red-600 hover:text-red-900"
                                                title="Delete Student"
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

                {filteredStudents.length === 0 && (
                    <div className="text-center py-12">
                        <Users className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No students found</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {searchTerm || selectedClass !== 'all'
                                ? 'Try adjusting your search or filter criteria.'
                                : 'Get started by adding a new student.'}
                        </p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && <StudentModal />}
        </div>
    );
};

export default Students;
