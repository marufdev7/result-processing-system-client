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
    BookOpen,
    Calendar,
    GraduationCap,
    Clock,
    MapPin
} from 'lucide-react';

const Classes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample class data
    const [classes, setClasses] = useState([
        {
            id: 'CLS001',
            name: 'CSE',
            grade: 'Undergraduate',
            section: 'A',
            classTeacher: 'Engr. Farhana Akter',
            teacherId: 'TEA001',
            subjects: [
                'Data Structures',
                'Operating Systems',
                'Database Systems',
                'Computer Networks',
                'Mathematics'
            ],
            students: ['STU21001', 'STU21002', 'STU21003', 'STU21004'],
            totalStudents: 42,
            capacity: 45,
            room: 'Lab 201',
            schedule: {
                sunday: ['Data Structures', 'Operating Systems', 'Mathematics', 'Database Systems', 'Computer Networks'],
                monday: ['Operating Systems', 'Database Systems', 'Mathematics', 'Computer Networks', 'Lab'],
                tuesday: ['Mathematics', 'Computer Networks', 'Data Structures', 'Operating Systems', 'Lab'],
                wednesday: ['Database Systems', 'Mathematics', 'Computer Networks', 'English', 'Project Work'],
                thursday: ['Operating Systems', 'Data Structures', 'Database Systems', 'Lab', 'Free']
            },
            status: 'Active'
        },
        {
            id: 'CLS002',
            name: 'ECE',
            grade: 'Undergraduate',
            section: 'A',
            classTeacher: 'Prof. Mahfuz Rahman',
            teacherId: 'TEA002',
            subjects: [
                'Digital Electronics',
                'Signal Processing',
                'Electrical Circuits',
                'Computer Networks',
                'Mathematics'
            ],
            students: ['STU21005', 'STU21006', 'STU21007', 'STU21008'],
            totalStudents: 39,
            capacity: 45,
            room: 'Lab 203',
            schedule: {
                sunday: ['Digital Electronics', 'Signal Processing', 'Mathematics', 'Electrical Circuits', 'Computer Networks'],
                monday: ['Signal Processing', 'Mathematics', 'Electrical Circuits', 'Digital Electronics', 'Lab'],
                tuesday: ['Electrical Circuits', 'Computer Networks', 'Signal Processing', 'Mathematics', 'Lab'],
                wednesday: ['Digital Electronics', 'Mathematics', 'Electrical Circuits', 'Computer Networks', 'Free'],
                thursday: ['Signal Processing', 'Mathematics', 'Digital Electronics', 'Lab', 'Project Work']
            },
            status: 'Active'
        },
        {
            id: 'CLS003',
            name: 'BBA',
            grade: 'Undergraduate',
            section: 'A',
            classTeacher: 'Dr. Kamrul Hasan',
            teacherId: 'TEA003',
            subjects: [
                'Financial Accounting',
                'Principles of Management',
                'Business Communication',
                'Economics',
                'Mathematics'
            ],
            students: ['STU21009', 'STU21010', 'STU21011', 'STU21012'],
            totalStudents: 36,
            capacity: 40,
            room: 'Room 305',
            schedule: {
                sunday: ['Financial Accounting', 'Principles of Management', 'Mathematics', 'Business Communication', 'Economics'],
                monday: ['Principles of Management', 'Economics', 'Mathematics', 'Financial Accounting', 'Free'],
                tuesday: ['Economics', 'Business Communication', 'Mathematics', 'Principles of Management', 'Presentation'],
                wednesday: ['Financial Accounting', 'Mathematics', 'Economics', 'English', 'Business Case Study'],
                thursday: ['Business Communication', 'Economics', 'Principles of Management', 'Lab', 'Free']
            },
            status: 'Active'
        },
        {
            id: 'CLS004',
            name: 'Diploma',
            grade: 'Technical',
            section: 'A',
            classTeacher: 'Engr. Saiful Islam',
            teacherId: 'TEA004',
            subjects: [
                'Electrical Circuits',
                'Digital Electronics',
                'Mathematics',
                'Signal Processing',
                'Computer Networks'
            ],
            students: ['STU21013', 'STU21014', 'STU21015', 'STU21016'],
            totalStudents: 33,
            capacity: 40,
            room: 'Workshop 101',
            schedule: {
                sunday: ['Electrical Circuits', 'Digital Electronics', 'Mathematics', 'Computer Networks', 'Signal Processing'],
                monday: ['Digital Electronics', 'Signal Processing', 'Mathematics', 'Electrical Circuits', 'Workshop'],
                tuesday: ['Signal Processing', 'Computer Networks', 'Mathematics', 'Electrical Circuits', 'Lab'],
                wednesday: ['Electrical Circuits', 'Mathematics', 'Digital Electronics', 'Free', 'Workshop'],
                thursday: ['Signal Processing', 'Electrical Circuits', 'Mathematics', 'Lab', 'Free']
            },
            status: 'Active'
        }
    ]);

    const grades = ['all', 'CSE', 'ECE', 'BBA', 'Diploma'];

    // Filter classes based on search term and selected grade
    const filteredClasses = classes.filter(cls => {
        const matchesSearch = cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cls.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cls.classTeacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cls.room.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGrade = selectedGrade === 'all' || cls.grade === selectedGrade;
        return matchesSearch && matchesGrade;
    });

    const handleAddClass = () => {
        setSelectedClass(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditClass = (cls) => {
        setSelectedClass(cls);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewClass = (cls) => {
        setSelectedClass(cls);
        setModalType('view');
        setShowModal(true);
    };

    const handleDeleteClass = (classId) => {
        if (window.confirm('Are you sure you want to delete this class?')) {
            setClasses(classes.filter(cls => cls.id !== classId));
        }
    };

    const ClassModal = () => {
        const [formData, setFormData] = useState(
            selectedClass || {
                name: '',
                grade: '',
                section: '',
                classTeacher: '',
                subjects: [],
                capacity: '',
                room: '',
                status: 'Active'
            }
        );

        const handleSubmit = (e) => {
            e.preventDefault();
            if (modalType === 'add') {
                const newClass = {
                    ...formData,
                    id: `CLS${String(classes.length + 1).padStart(3, '0')}`,
                    name: `Class ${formData.grade}${formData.section}`,
                    totalStudents: 0,
                    students: [],
                    schedule: {
                        monday: [],
                        tuesday: [],
                        wednesday: [],
                        thursday: [],
                        friday: []
                    }
                };
                setClasses([...classes, newClass]);
            } else if (modalType === 'edit') {
                setClasses(classes.map(cls =>
                    cls.id === selectedClass.id ? {
                        ...cls,
                        ...formData,
                        name: `Class ${formData.grade}${formData.section}`
                    } : cls
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
                <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {modalType === 'add' ? 'Add New Class' :
                                modalType === 'edit' ? 'Edit Class' : 'Class Details'}
                        </h2>
                        <button
                            onClick={() => setShowModal(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    {modalType === 'view' && selectedClass ? (
                        <div className="space-y-6">
                            {/* Class Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Basic Information</h3>
                                    <div className="space-y-2">
                                        <p><span className="font-medium">Class Name:</span> {selectedClass.name}</p>
                                        <p><span className="font-medium">Grade:</span> {selectedClass.grade}</p>
                                        <p><span className="font-medium">Section:</span> {selectedClass.section}</p>
                                        <p><span className="font-medium">Room:</span> {selectedClass.room}</p>
                                        <p><span className="font-medium">Class Teacher:</span> {selectedClass.classTeacher}</p>
                                        <p><span className="font-medium">Capacity:</span> {selectedClass.totalStudents}/{selectedClass.capacity}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Subjects</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedClass.subjects.map((subject, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Schedule */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-3">Weekly Schedule</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="p-2 text-left">Time</th>
                                                <th className="p-2 text-left">Monday</th>
                                                <th className="p-2 text-left">Tuesday</th>
                                                <th className="p-2 text-left">Wednesday</th>
                                                <th className="p-2 text-left">Thursday</th>
                                                <th className="p-2 text-left">Friday</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[0, 1, 2, 3, 4].map(period => (
                                                <tr key={period} className="border-t">
                                                    <td className="p-2 font-medium">Period {period + 1}</td>
                                                    <td className="p-2">{selectedClass.schedule.monday[period] || '-'}</td>
                                                    <td className="p-2">{selectedClass.schedule.tuesday[period] || '-'}</td>
                                                    <td className="p-2">{selectedClass.schedule.wednesday[period] || '-'}</td>
                                                    <td className="p-2">{selectedClass.schedule.thursday[period] || '-'}</td>
                                                    <td className="p-2">{selectedClass.schedule.friday[period] || '-'}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Grade *
                                    </label>
                                    <select
                                        name="grade"
                                        value={formData.grade}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    >
                                        <option value="">Select Grade</option>
                                        {grades.slice(1).map(grade => (
                                            <option key={grade} value={grade}>Grade {grade}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Section *
                                    </label>
                                    <select
                                        name="section"
                                        value={formData.section}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    >
                                        <option value="">Select Section</option>
                                        {['A', 'B', 'C', 'D'].map(section => (
                                            <option key={section} value={section}>Section {section}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Class Teacher *
                                    </label>
                                    <input
                                        type="text"
                                        name="classTeacher"
                                        value={formData.classTeacher}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="Teacher name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Room *
                                    </label>
                                    <input
                                        type="text"
                                        name="room"
                                        value={formData.room}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., Room 101"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Capacity *
                                    </label>
                                    <input
                                        type="number"
                                        name="capacity"
                                        value={formData.capacity}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        max="50"
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="Maximum students"
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
                                        placeholder="e.g., Mathematics, Physics, Chemistry, English"
                                    />
                                </div>
                            </div>

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
                                    {modalType === 'add' ? 'Add Class' : 'Update Class'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Classes Management</h1>
                    <p className="text-gray-600 mt-2">Manage class schedules and assignments</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button
                        onClick={handleAddClass}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Class
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Classes</p>
                            <p className="text-2xl font-bold text-gray-800">{classes.length}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Active Classes</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {classes.filter(c => c.status === 'Active').length}
                            </p>
                        </div>
                        <GraduationCap className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Students</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {classes.reduce((sum, c) => sum + c.totalStudents, 0)}
                            </p>
                        </div>
                        <Users className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Avg Class Size</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {Math.round(classes.reduce((sum, c) => sum + c.totalStudents, 0) / classes.length)}
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
                                placeholder="Search classes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                value={selectedGrade}
                                onChange={(e) => setSelectedGrade(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {grades.map(grade => (
                                    <option key={grade} value={grade}>
                                        {grade === 'all' ? 'All Grades' : `Grade ${grade}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {filteredClasses.length} of {classes.length} classes
                    </div>
                </div>
            </div>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClasses.map((cls) => (
                    <div key={cls.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">{cls.name}</h3>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${cls.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                    {cls.status}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-gray-600">
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    Class Teacher: {cls.classTeacher}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {cls.room}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Users className="w-4 h-4 mr-2" />
                                    Students: {cls.totalStudents}/{cls.capacity}
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{ width: `${(cls.totalStudents / cls.capacity) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm text-gray-600 mb-2">Subjects:</p>
                                <div className="flex flex-wrap gap-1">
                                    {cls.subjects.slice(0, 3).map((subject, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                            {subject}
                                        </span>
                                    ))}
                                    {cls.subjects.length > 3 && (
                                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                            +{cls.subjects.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-3 bg-gray-50 border-t">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">ID: {cls.id}</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleViewClass(cls)}
                                        className="text-blue-600 hover:text-blue-900"
                                        title="View Details"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleEditClass(cls)}
                                        className="text-green-600 hover:text-green-900"
                                        title="Edit Class"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClass(cls.id)}
                                        className="text-red-600 hover:text-red-900"
                                        title="Delete Class"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredClasses.length === 0 && (
                <div className="text-center py-12">
                    <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No classes found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {searchTerm || selectedGrade !== 'all'
                            ? 'Try adjusting your search or filter criteria.'
                            : 'Get started by adding a new class.'}
                    </p>
                </div>
            )}

            {/* Modal */}
            {showModal && <ClassModal />}
        </div>
    );
};

export default Classes;
