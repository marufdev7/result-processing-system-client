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
    BookOpen,
    Users,
    GraduationCap,
    Clock,
    Award,
    Calendar
} from 'lucide-react';

const Subjects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample subjects data
    const [subjects, setSubjects] = useState([
        {
            id: 'SUB001',
            name: 'Mathematics',
            code: 'MATH101',
            department: 'Mathematics',
            description: 'Fundamental mathematics including algebra, geometry, and calculus',
            credits: 4,
            duration: '1 Year',
            totalClasses: 120,
            teacher: 'Dr. Alice Johnson',
            teacherId: 'TEA001',
            prerequisites: ['Basic Algebra'],
            syllabus: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus'],
            grades: ['9', '10', '11', '12'],
            status: 'Active',
            enrolledStudents: 85
        },
        {
            id: 'SUB002',
            name: 'Physics',
            code: 'PHY101',
            department: 'Science',
            description: 'Introduction to physics covering mechanics, thermodynamics, and electromagnetism',
            credits: 4,
            duration: '1 Year',
            totalClasses: 100,
            teacher: 'Prof. Michael Brown',
            teacherId: 'TEA002',
            prerequisites: ['Mathematics'],
            syllabus: ['Mechanics', 'Thermodynamics', 'Electricity', 'Magnetism'],
            grades: ['11', '12'],
            status: 'Active',
            enrolledStudents: 65
        },
        {
            id: 'SUB003',
            name: 'Chemistry',
            code: 'CHEM101',
            department: 'Science',
            description: 'Basic chemistry concepts including organic and inorganic chemistry',
            credits: 4,
            duration: '1 Year',
            totalClasses: 110,
            teacher: 'Dr. Robert Wilson',
            teacherId: 'TEA004',
            prerequisites: ['Basic Science'],
            syllabus: ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry', 'Inorganic Chemistry'],
            grades: ['11', '12'],
            status: 'Active',
            enrolledStudents: 58
        },
        {
            id: 'SUB004',
            name: 'English Literature',
            code: 'ENG101',
            department: 'Languages',
            description: 'Study of English literature, grammar, and composition',
            credits: 3,
            duration: '1 Year',
            totalClasses: 90,
            teacher: 'Ms. Sarah Davis',
            teacherId: 'TEA003',
            prerequisites: [],
            syllabus: ['Grammar', 'Literature', 'Composition', 'Poetry'],
            grades: ['9', '10', '11', '12'],
            status: 'Active',
            enrolledStudents: 120
        },
        {
            id: 'SUB005',
            name: 'Computer Science',
            code: 'CS101',
            department: 'Technology',
            description: 'Introduction to programming and computer science fundamentals',
            credits: 3,
            duration: '1 Year',
            totalClasses: 80,
            teacher: 'Mr. Tech Teacher',
            teacherId: 'TEA005',
            prerequisites: ['Basic Mathematics'],
            syllabus: ['Programming Basics', 'Data Structures', 'Algorithms', 'Web Development'],
            grades: ['10', '11', '12'],
            status: 'Inactive',
            enrolledStudents: 0
        }
    ]);

    const departments = ['all', 'Mathematics', 'Science', 'Languages', 'Technology', 'Arts', 'Social Science'];

    // Filter subjects based on search term and selected department
    const filteredSubjects = subjects.filter(subject => {
        const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            subject.teacher.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment === 'all' || subject.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    const handleAddSubject = () => {
        setSelectedSubject(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditSubject = (subject) => {
        setSelectedSubject(subject);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewSubject = (subject) => {
        setSelectedSubject(subject);
        setModalType('view');
        setShowModal(true);
    };

    const handleDeleteSubject = (subjectId) => {
        if (window.confirm('Are you sure you want to delete this subject?')) {
            setSubjects(subjects.filter(subject => subject.id !== subjectId));
        }
    };

    const SubjectModal = () => {
        const [formData, setFormData] = useState(
            selectedSubject || {
                name: '',
                code: '',
                department: '',
                description: '',
                credits: 3,
                duration: '1 Year',
                totalClasses: 80,
                teacher: '',
                prerequisites: [],
                syllabus: [],
                grades: [],
                status: 'Active'
            }
        );

        const handleSubmit = (e) => {
            e.preventDefault();
            if (modalType === 'add') {
                const newSubject = {
                    ...formData,
                    id: `SUB${String(subjects.length + 1).padStart(3, '0')}`,
                    teacherId: `TEA${String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')}`,
                    enrolledStudents: 0
                };
                setSubjects([...subjects, newSubject]);
            } else if (modalType === 'edit') {
                setSubjects(subjects.map(subject => 
                    subject.id === selectedSubject.id ? { ...subject, ...formData } : subject
                ));
            }
            setShowModal(false);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            if (name === 'prerequisites' || name === 'syllabus' || name === 'grades') {
                setFormData({
                    ...formData,
                    [name]: value.split(',').map(s => s.trim()).filter(s => s)
                });
            } else {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {modalType === 'add' ? 'Add New Subject' : 
                             modalType === 'edit' ? 'Edit Subject' : 'Subject Details'}
                        </h2>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    {modalType === 'view' && selectedSubject ? (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Basic Information</h3>
                                    <div className="space-y-2">
                                        <p><span className="font-medium">Subject Name:</span> {selectedSubject.name}</p>
                                        <p><span className="font-medium">Code:</span> {selectedSubject.code}</p>
                                        <p><span className="font-medium">Department:</span> {selectedSubject.department}</p>
                                        <p><span className="font-medium">Credits:</span> {selectedSubject.credits}</p>
                                        <p><span className="font-medium">Duration:</span> {selectedSubject.duration}</p>
                                        <p><span className="font-medium">Total Classes:</span> {selectedSubject.totalClasses}</p>
                                        <p><span className="font-medium">Enrolled Students:</span> {selectedSubject.enrolledStudents}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Teaching Details</h3>
                                    <div className="space-y-2">
                                        <p><span className="font-medium">Teacher:</span> {selectedSubject.teacher}</p>
                                        <p><span className="font-medium">Status:</span> 
                                            <span className={`ml-2 px-2 py-1 rounded text-sm ${
                                                selectedSubject.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                                {selectedSubject.status}
                                            </span>
                                        </p>
                                        <div>
                                            <span className="font-medium">Applicable Grades:</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {selectedSubject.grades.map((grade, index) => (
                                                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                                        Grade {grade}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-3">Description</h3>
                                <p className="text-gray-700">{selectedSubject.description}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Prerequisites</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedSubject.prerequisites.length > 0 ? 
                                            selectedSubject.prerequisites.map((prereq, index) => (
                                                <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                                                    {prereq}
                                                </span>
                                            )) : 
                                            <span className="text-gray-500 text-sm">No prerequisites</span>
                                        }
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Syllabus Topics</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedSubject.syllabus.map((topic, index) => (
                                            <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject Name *
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
                                        Subject Code *
                                    </label>
                                    <input
                                        type="text"
                                        name="code"
                                        value={formData.code}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., MATH101"
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
                                        Teacher *
                                    </label>
                                    <input
                                        type="text"
                                        name="teacher"
                                        value={formData.teacher}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Credits *
                                    </label>
                                    <input
                                        type="number"
                                        name="credits"
                                        value={formData.credits}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        max="6"
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Duration *
                                    </label>
                                    <select
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    >
                                        <option value="1 Semester">1 Semester</option>
                                        <option value="1 Year">1 Year</option>
                                        <option value="2 Years">2 Years</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Total Classes *
                                    </label>
                                    <input
                                        type="number"
                                        name="totalClasses"
                                        value={formData.totalClasses}
                                        onChange={handleChange}
                                        required
                                        min="1"
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
                                        Description *
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Prerequisites (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        name="prerequisites"
                                        value={Array.isArray(formData.prerequisites) ? formData.prerequisites.join(', ') : ''}
                                        onChange={handleChange}
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., Basic Mathematics, Algebra"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Applicable Grades (comma separated) *
                                    </label>
                                    <input
                                        type="text"
                                        name="grades"
                                        value={Array.isArray(formData.grades) ? formData.grades.join(', ') : ''}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., 9, 10, 11, 12"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Syllabus Topics (comma separated) *
                                    </label>
                                    <input
                                        type="text"
                                        name="syllabus"
                                        value={Array.isArray(formData.syllabus) ? formData.syllabus.join(', ') : ''}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., Algebra, Geometry, Trigonometry"
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
                                    {modalType === 'add' ? 'Add Subject' : 'Update Subject'}
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
                    <h1 className="text-3xl font-bold text-gray-800">Subjects Management</h1>
                    <p className="text-gray-600 mt-2">Manage academic subjects and curriculum</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button 
                        onClick={handleAddSubject}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Subject
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Subjects</p>
                            <p className="text-2xl font-bold text-gray-800">{subjects.length}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Active Subjects</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {subjects.filter(s => s.status === 'Active').length}
                            </p>
                        </div>
                        <GraduationCap className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Enrolled</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {subjects.reduce((sum, s) => sum + s.enrolledStudents, 0)}
                            </p>
                        </div>
                        <Users className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Departments</p>
                            <p className="text-2xl font-bold text-gray-800">{departments.length - 1}</p>
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
                                placeholder="Search subjects..."
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
                        Showing {filteredSubjects.length} of {subjects.length} subjects
                    </div>
                </div>
            </div>

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubjects.map((subject) => (
                    <div key={subject.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{subject.name}</h3>
                                    <p className="text-sm text-gray-500">{subject.code}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                    subject.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                    {subject.status}
                                </span>
                            </div>
                            
                            <div className="space-y-3">
                                <p className="text-sm text-gray-700 line-clamp-2">{subject.description}</p>
                                
                                <div className="flex items-center text-sm text-gray-600">
                                    <GraduationCap className="w-4 h-4 mr-2" />
                                    Teacher: {subject.teacher}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Department: {subject.department}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Users className="w-4 h-4 mr-2" />
                                    Enrolled: {subject.enrolledStudents} students
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {subject.totalClasses} classes • {subject.credits} credits
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <p className="text-sm text-gray-600 mb-2">Applicable Grades:</p>
                                <div className="flex flex-wrap gap-1">
                                    {subject.grades.map((grade, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                            Grade {grade}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-6 py-3 bg-gray-50 border-t">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">ID: {subject.id}</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleViewSubject(subject)}
                                        className="text-blue-600 hover:text-blue-900"
                                        title="View Details"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleEditSubject(subject)}
                                        className="text-green-600 hover:text-green-900"
                                        title="Edit Subject"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteSubject(subject.id)}
                                        className="text-red-600 hover:text-red-900"
                                        title="Delete Subject"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredSubjects.length === 0 && (
                <div className="text-center py-12">
                    <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No subjects found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {searchTerm || selectedDepartment !== 'all' 
                            ? 'Try adjusting your search or filter criteria.' 
                            : 'Get started by adding a new subject.'}
                    </p>
                </div>
            )}

            {/* Modal */}
            {showModal && <SubjectModal />}
        </div>
    );
};

export default Subjects;
