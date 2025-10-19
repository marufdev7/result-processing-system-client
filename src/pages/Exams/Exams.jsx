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
    Calendar,
    Clock,
    BookOpen,
    Users,
    FileText,
    AlertCircle,
    CheckCircle,
    XCircle,
    Timer
} from 'lucide-react';

const Exams = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedExam, setSelectedExam] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample exam data
    const [exams, setExams] = useState([
        {
            id: 'EXM001',
            title: 'Mid-term Mathematics Exam',
            subject: 'Mathematics',
            class: 'Class 10A',
            examType: 'Mid-term',
            date: '2024-02-15',
            startTime: '09:00',
            endTime: '11:00',
            duration: 120, // minutes
            totalMarks: 100,
            passingMarks: 40,
            venue: 'Room 101',
            teacher: 'Dr. Alice Johnson',
            instructions: 'Bring calculator and geometry box. No mobile phones allowed.',
            syllabus: ['Algebra', 'Geometry', 'Trigonometry'],
            status: 'Scheduled',
            studentsEnrolled: 28,
            studentsAppeared: 0,
            createdDate: '2024-01-20'
        },
        {
            id: 'EXM002',
            title: 'Physics Final Exam',
            subject: 'Physics',
            class: 'Class 11A',
            examType: 'Final',
            date: '2024-02-20',
            startTime: '10:00',
            endTime: '13:00',
            duration: 180,
            totalMarks: 100,
            passingMarks: 35,
            venue: 'Physics Lab',
            teacher: 'Prof. Michael Brown',
            instructions: 'Practical exam followed by theory. Lab coats mandatory.',
            syllabus: ['Mechanics', 'Thermodynamics', 'Electricity', 'Magnetism'],
            status: 'In Progress',
            studentsEnrolled: 22,
            studentsAppeared: 22,
            createdDate: '2024-01-18'
        },
        {
            id: 'EXM003',
            title: 'Chemistry Unit Test',
            subject: 'Chemistry',
            class: 'Class 11B',
            examType: 'Unit Test',
            date: '2024-01-25',
            startTime: '14:00',
            endTime: '15:30',
            duration: 90,
            totalMarks: 50,
            passingMarks: 20,
            venue: 'Room 201',
            teacher: 'Dr. Robert Wilson',
            instructions: 'Periodic table will be provided. No calculators allowed.',
            syllabus: ['Atomic Structure', 'Chemical Bonding'],
            status: 'Completed',
            studentsEnrolled: 25,
            studentsAppeared: 24,
            createdDate: '2024-01-10'
        },
        {
            id: 'EXM004',
            title: 'English Literature Assessment',
            subject: 'English',
            class: 'Class 12A',
            examType: 'Assignment',
            date: '2024-03-01',
            startTime: '11:00',
            endTime: '13:00',
            duration: 120,
            totalMarks: 75,
            passingMarks: 30,
            venue: 'Room 301',
            teacher: 'Ms. Sarah Davis',
            instructions: 'Essay writing and poetry analysis. Reference books allowed.',
            syllabus: ['Poetry', 'Drama', 'Essay Writing'],
            status: 'Draft',
            studentsEnrolled: 0,
            studentsAppeared: 0,
            createdDate: '2024-02-01'
        }
    ]);

    const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry', 'English', 'Biology', 'Computer Science'];
    const examTypes = ['Mid-term', 'Final', 'Unit Test', 'Assignment', 'Project', 'Quiz'];
    const statuses = ['all', 'Draft', 'Scheduled', 'In Progress', 'Completed', 'Cancelled'];

    // Filter exams based on search term, status, and subject
    const filteredExams = exams.filter(exam => {
        const matchesSearch = exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            exam.class.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === 'all' || exam.status === selectedStatus;
        const matchesSubject = selectedSubject === 'all' || exam.subject === selectedSubject;
        return matchesSearch && matchesStatus && matchesSubject;
    });

    const handleAddExam = () => {
        setSelectedExam(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditExam = (exam) => {
        setSelectedExam(exam);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewExam = (exam) => {
        setSelectedExam(exam);
        setModalType('view');
        setShowModal(true);
    };

    const handleDeleteExam = (examId) => {
        if (window.confirm('Are you sure you want to delete this exam?')) {
            setExams(exams.filter(exam => exam.id !== examId));
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Draft': return <FileText className="w-4 h-4" />;
            case 'Scheduled': return <Clock className="w-4 h-4" />;
            case 'In Progress': return <Timer className="w-4 h-4" />;
            case 'Completed': return <CheckCircle className="w-4 h-4" />;
            case 'Cancelled': return <XCircle className="w-4 h-4" />;
            default: return <AlertCircle className="w-4 h-4" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Draft': return 'bg-gray-100 text-gray-800';
            case 'Scheduled': return 'bg-blue-100 text-blue-800';
            case 'In Progress': return 'bg-yellow-100 text-yellow-800';
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'Cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const ExamModal = () => {
        const [formData, setFormData] = useState(
            selectedExam || {
                title: '',
                subject: '',
                class: '',
                examType: '',
                date: '',
                startTime: '',
                endTime: '',
                totalMarks: 100,
                passingMarks: 40,
                venue: '',
                teacher: '',
                instructions: '',
                syllabus: [],
                status: 'Draft'
            }
        );

        // Calculate duration when start/end time changes
        const duration = formData.startTime && formData.endTime ? 
            Math.abs(new Date(`2000-01-01T${formData.endTime}`) - new Date(`2000-01-01T${formData.startTime}`)) / (1000 * 60) : 0;

        const handleSubmit = (e) => {
            e.preventDefault();
            if (modalType === 'add') {
                const newExam = {
                    ...formData,
                    id: `EXM${String(exams.length + 1).padStart(3, '0')}`,
                    duration: duration,
                    studentsEnrolled: 0,
                    studentsAppeared: 0,
                    createdDate: new Date().toISOString().split('T')[0]
                };
                setExams([...exams, newExam]);
            } else if (modalType === 'edit') {
                setExams(exams.map(exam => 
                    exam.id === selectedExam.id ? { ...exam, ...formData, duration } : exam
                ));
            }
            setShowModal(false);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            if (name === 'syllabus') {
                setFormData({
                    ...formData,
                    syllabus: value.split(',').map(s => s.trim()).filter(s => s)
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
                <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {modalType === 'add' ? 'Schedule New Exam' : 
                             modalType === 'edit' ? 'Edit Exam' : 'Exam Details'}
                        </h2>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    {modalType === 'view' && selectedExam ? (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Exam Information</h3>
                                    <div className="space-y-2">
                                        <p><span className="font-medium">Title:</span> {selectedExam.title}</p>
                                        <p><span className="font-medium">Subject:</span> {selectedExam.subject}</p>
                                        <p><span className="font-medium">Class:</span> {selectedExam.class}</p>
                                        <p><span className="font-medium">Type:</span> {selectedExam.examType}</p>
                                        <p><span className="font-medium">Teacher:</span> {selectedExam.teacher}</p>
                                        <p><span className="font-medium">Status:</span> 
                                            <span className={`ml-2 px-2 py-1 rounded text-sm inline-flex items-center ${getStatusColor(selectedExam.status)}`}>
                                                {getStatusIcon(selectedExam.status)}
                                                <span className="ml-1">{selectedExam.status}</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Schedule & Venue</h3>
                                    <div className="space-y-2">
                                        <p><span className="font-medium">Date:</span> {selectedExam.date}</p>
                                        <p><span className="font-medium">Time:</span> {selectedExam.startTime} - {selectedExam.endTime}</p>
                                        <p><span className="font-medium">Duration:</span> {selectedExam.duration} minutes</p>
                                        <p><span className="font-medium">Venue:</span> {selectedExam.venue}</p>
                                        <p><span className="font-medium">Total Marks:</span> {selectedExam.totalMarks}</p>
                                        <p><span className="font-medium">Passing Marks:</span> {selectedExam.passingMarks}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-3">Instructions</h3>
                                <p className="text-gray-700">{selectedExam.instructions}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Syllabus Coverage</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedExam.syllabus.map((topic, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-3">Statistics</h3>
                                    <div className="space-y-2">
                                        <p><span className="font-medium">Enrolled Students:</span> {selectedExam.studentsEnrolled}</p>
                                        <p><span className="font-medium">Appeared Students:</span> {selectedExam.studentsAppeared}</p>
                                        <p><span className="font-medium">Attendance Rate:</span> 
                                            {selectedExam.studentsEnrolled > 0 ? 
                                                Math.round((selectedExam.studentsAppeared / selectedExam.studentsEnrolled) * 100) : 0}%
                                        </p>
                                        <p><span className="font-medium">Created:</span> {selectedExam.createdDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Exam Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., Mid-term Mathematics Exam"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    >
                                        <option value="">Select Subject</option>
                                        {subjects.slice(1).map(subject => (
                                            <option key={subject} value={subject}>{subject}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Class *
                                    </label>
                                    <input
                                        type="text"
                                        name="class"
                                        value={formData.class}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., Class 10A"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Exam Type *
                                    </label>
                                    <select
                                        name="examType"
                                        value={formData.examType}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    >
                                        <option value="">Select Type</option>
                                        {examTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
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
                                        placeholder="Teacher name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Start Time *
                                    </label>
                                    <input
                                        type="time"
                                        name="startTime"
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        End Time *
                                    </label>
                                    <input
                                        type="time"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Venue *
                                    </label>
                                    <input
                                        type="text"
                                        name="venue"
                                        value={formData.venue}
                                        onChange={handleChange}
                                        required
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="e.g., Room 101"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Total Marks *
                                    </label>
                                    <input
                                        type="number"
                                        name="totalMarks"
                                        value={formData.totalMarks}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        disabled={modalType === 'view'}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Passing Marks *
                                    </label>
                                    <input
                                        type="number"
                                        name="passingMarks"
                                        value={formData.passingMarks}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        max={formData.totalMarks}
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
                                        {statuses.slice(1).map(status => (
                                            <option key={status} value={status}>{status}</option>
                                        ))}
                                    </select>
                                </div>

                                {duration > 0 && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Duration (calculated)
                                        </label>
                                        <input
                                            type="text"
                                            value={`${duration} minutes`}
                                            disabled
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                                        />
                                    </div>
                                )}

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Instructions
                                    </label>
                                    <textarea
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleChange}
                                        disabled={modalType === 'view'}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                        placeholder="Special instructions for students..."
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Syllabus Topics (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        name="syllabus"
                                        value={Array.isArray(formData.syllabus) ? formData.syllabus.join(', ') : ''}
                                        onChange={handleChange}
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
                                    {modalType === 'add' ? 'Schedule Exam' : 'Update Exam'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    };

    // Calculate statistics
    const upcomingExams = exams.filter(e => e.status === 'Scheduled').length;
    const completedExams = exams.filter(e => e.status === 'Completed').length;
    const totalStudentsEnrolled = exams.reduce((sum, e) => sum + e.studentsEnrolled, 0);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Exams Management</h1>
                    <p className="text-gray-600 mt-2">Schedule and manage examinations</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export Schedule
                    </button>
                    <button 
                        onClick={handleAddExam}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Schedule Exam
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Exams</p>
                            <p className="text-2xl font-bold text-gray-800">{exams.length}</p>
                        </div>
                        <FileText className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Upcoming</p>
                            <p className="text-2xl font-bold text-gray-800">{upcomingExams}</p>
                        </div>
                        <Clock className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Completed</p>
                            <p className="text-2xl font-bold text-gray-800">{completedExams}</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Enrolled</p>
                            <p className="text-2xl font-bold text-gray-800">{totalStudentsEnrolled}</p>
                        </div>
                        <Users className="w-8 h-8 text-purple-500" />
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
                                placeholder="Search exams..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {statuses.map(status => (
                                    <option key={status} value={status}>
                                        {status === 'all' ? 'All Status' : status}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={selectedSubject}
                                onChange={(e) => setSelectedSubject(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {subjects.map(subject => (
                                    <option key={subject} value={subject}>
                                        {subject === 'all' ? 'All Subjects' : subject}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {filteredExams.length} of {exams.length} exams
                    </div>
                </div>
            </div>

            {/* Exams Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => (
                    <div key={exam.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{exam.title}</h3>
                                    <p className="text-sm text-gray-600">{exam.subject} • {exam.class}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full inline-flex items-center ${getStatusColor(exam.status)}`}>
                                    {getStatusIcon(exam.status)}
                                    <span className="ml-1">{exam.status}</span>
                                </span>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {exam.date}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {exam.startTime} - {exam.endTime} ({exam.duration} min)
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    {exam.venue} • {exam.totalMarks} marks
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Users className="w-4 h-4 mr-2" />
                                    {exam.studentsAppeared}/{exam.studentsEnrolled} appeared
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <p className="text-sm text-gray-600 mb-2">Syllabus:</p>
                                <div className="flex flex-wrap gap-1">
                                    {exam.syllabus.slice(0, 2).map((topic, index) => (
                                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                            {topic}
                                        </span>
                                    ))}
                                    {exam.syllabus.length > 2 && (
                                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                            +{exam.syllabus.length - 2} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-6 py-3 bg-gray-50 border-t">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{exam.examType}</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleViewExam(exam)}
                                        className="text-blue-600 hover:text-blue-900"
                                        title="View Details"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleEditExam(exam)}
                                        className="text-green-600 hover:text-green-900"
                                        title="Edit Exam"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteExam(exam.id)}
                                        className="text-red-600 hover:text-red-900"
                                        title="Delete Exam"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredExams.length === 0 && (
                <div className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No exams found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {searchTerm || selectedStatus !== 'all' || selectedSubject !== 'all'
                            ? 'Try adjusting your search or filter criteria.' 
                            : 'Get started by scheduling a new exam.'}
                    </p>
                </div>
            )}

            {/* Modal */}
            {showModal && <ExamModal />}
        </div>
    );
};

export default Exams;
