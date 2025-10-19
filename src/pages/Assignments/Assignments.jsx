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
    Send,
    CheckSquare,
    AlertTriangle
} from 'lucide-react';

const Assignments = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample assignment data
    const [assignments, setAssignments] = useState([
        {
            id: 'ASG001',
            title: 'Algebraic Equations Practice',
            description: 'Solve the given set of linear and quadratic equations. Show all working steps clearly. Submit handwritten solutions.',
            subject: 'Mathematics',
            class: 'Class 10A',
            teacher: 'Dr. Alice Johnson',
            assignedDate: '2024-02-01',
            dueDate: '2024-02-15',
            totalMarks: 50,
            instructions: 'Use A4 size paper. Write your name and roll number clearly. Show all calculations.',
            attachments: ['equations_worksheet.pdf', 'reference_formulas.pdf'],
            status: 'Active',
            submissionType: 'Physical',
            studentsAssigned: 28,
            studentsSubmitted: 15,
            studentsGraded: 10,
            averageScore: 38
        },
        {
            id: 'ASG002',
            title: 'Newton\'s Laws Lab Report',
            description: 'Write a detailed lab report on the experiment demonstrating Newton\'s three laws of motion. Include observations, calculations, and conclusions.',
            subject: 'Physics',
            class: 'Class 11A',
            teacher: 'Prof. Michael Brown',
            assignedDate: '2024-01-28',
            dueDate: '2024-02-10',
            totalMarks: 75,
            instructions: 'Submit as PDF file through online portal. Maximum 2000 words. Include graphs and diagrams.',
            attachments: ['lab_report_template.docx', 'experiment_data.xlsx'],
            status: 'Active',
            submissionType: 'Online',
            studentsAssigned: 22,
            studentsSubmitted: 20,
            studentsGraded: 18,
            averageScore: 62
        },
        {
            id: 'ASG003',
            title: 'Essay on Shakespeare\'s Hamlet',
            description: 'Write a critical analysis essay on the theme of revenge in Shakespeare\'s Hamlet. Analyze character motivations and plot development.',
            subject: 'English',
            class: 'Class 12A',
            teacher: 'Ms. Sarah Davis',
            assignedDate: '2024-01-20',
            dueDate: '2024-02-05',
            totalMarks: 100,
            instructions: '1500-2000 words. Use MLA format. Cite at least 3 sources. Submit both hard copy and digital copy.',
            attachments: ['essay_guidelines.pdf', 'mla_format_guide.pdf'],
            status: 'Completed',
            submissionType: 'Both',
            studentsAssigned: 25,
            studentsSubmitted: 25,
            studentsGraded: 25,
            averageScore: 78
        },
        {
            id: 'ASG004',
            title: 'Chemical Reactions Project',
            description: 'Create a presentation on different types of chemical reactions with real-world examples. Include chemical equations and practical applications.',
            subject: 'Chemistry',
            class: 'Class 11B',
            teacher: 'Dr. Robert Wilson',
            assignedDate: '2024-02-08',
            dueDate: '2024-02-28',
            totalMarks: 60,
            instructions: '10-15 slides presentation. Include videos or animations if possible. Present to class on due date.',
            attachments: ['project_rubric.pdf', 'sample_presentation.pptx'],
            status: 'Draft',
            submissionType: 'Online',
            studentsAssigned: 0,
            studentsSubmitted: 0,
            studentsGraded: 0,
            averageScore: 0
        }
    ]);

    const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry', 'English', 'Biology', 'Computer Science'];
    const statuses = ['all', 'Draft', 'Active', 'Completed', 'Overdue', 'Cancelled'];
    const submissionTypes = ['Physical', 'Online', 'Both'];

    // Filter assignments based on search term, status, and subject
    const filteredAssignments = assignments.filter(assignment => {
        const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            assignment.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            assignment.class.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === 'all' || assignment.status === selectedStatus;
        const matchesSubject = selectedSubject === 'all' || assignment.subject === selectedSubject;
        return matchesSearch && matchesStatus && matchesSubject;
    });

    const handleAddAssignment = () => {
        setSelectedAssignment(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditAssignment = (assignment) => {
        setSelectedAssignment(assignment);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewAssignment = (assignment) => {
        setSelectedAssignment(assignment);
        setModalType('view');
        setShowModal(true);
    };

    const handleDeleteAssignment = (assignmentId) => {
        if (window.confirm('Are you sure you want to delete this assignment?')) {
            setAssignments(assignments.filter(assignment => assignment.id !== assignmentId));
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Draft': return 'bg-gray-100 text-gray-800';
            case 'Active': return 'bg-blue-100 text-blue-800';
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'Overdue': return 'bg-red-100 text-red-800';
            case 'Cancelled': return 'bg-orange-100 text-orange-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Draft': return <FileText className="w-4 h-4" />;
            case 'Active': return <Send className="w-4 h-4" />;
            case 'Completed': return <CheckCircle className="w-4 h-4" />;
            case 'Overdue': return <AlertTriangle className="w-4 h-4" />;
            case 'Cancelled': return <XCircle className="w-4 h-4" />;
            default: return <AlertCircle className="w-4 h-4" />;
        }
    };

    const getSubmissionProgress = (assignment) => {
        if (assignment.studentsAssigned === 0) return 0;
        return Math.round((assignment.studentsSubmitted / assignment.studentsAssigned) * 100);
    };

    const getGradingProgress = (assignment) => {
        if (assignment.studentsSubmitted === 0) return 0;
        return Math.round((assignment.studentsGraded / assignment.studentsSubmitted) * 100);
    };

    const AssignmentModal = () => {
        const [formData, setFormData] = useState(
            selectedAssignment || {
                title: '',
                description: '',
                subject: '',
                class: '',
                teacher: '',
                dueDate: '',
                totalMarks: 100,
                instructions: '',
                submissionType: 'Online',
                status: 'Draft',
                attachments: []
            }
        );

        const handleSubmit = (e) => {
            e.preventDefault();
            if (modalType === 'add') {
                const newAssignment = {
                    ...formData,
                    id: `ASG${String(assignments.length + 1).padStart(3, '0')}`,
                    assignedDate: new Date().toISOString().split('T')[0],
                    studentsAssigned: 0,
                    studentsSubmitted: 0,
                    studentsGraded: 0,
                    averageScore: 0
                };
                setAssignments([...assignments, newAssignment]);
            } else if (modalType === 'edit') {
                setAssignments(assignments.map(assignment => 
                    assignment.id === selectedAssignment.id ? { ...assignment, ...formData } : assignment
                ));
            }
            setShowModal(false);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {modalType === 'add' ? 'Create New Assignment' : 
                             modalType === 'edit' ? 'Edit Assignment' : 'Assignment Details'}
                        </h2>
                        <button 
                            onClick={() => setShowModal(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    {modalType === 'view' && selectedAssignment ? (
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {selectedAssignment.title}
                                        </h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <span className="flex items-center">
                                                <BookOpen className="w-4 h-4 mr-1" />
                                                {selectedAssignment.subject}
                                            </span>
                                            <span className="flex items-center">
                                                <Users className="w-4 h-4 mr-1" />
                                                {selectedAssignment.class}
                                            </span>
                                            <span className={`px-2 py-1 rounded text-xs font-medium inline-flex items-center ${getStatusColor(selectedAssignment.status)}`}>
                                                {getStatusIcon(selectedAssignment.status)}
                                                <span className="ml-1">{selectedAssignment.status}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                                <p className="text-gray-700 leading-relaxed">{selectedAssignment.description}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Assignment Details</h4>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="font-medium">Teacher:</span> {selectedAssignment.teacher}</p>
                                        <p><span className="font-medium">Assigned Date:</span> {selectedAssignment.assignedDate}</p>
                                        <p><span className="font-medium">Due Date:</span> {selectedAssignment.dueDate}</p>
                                        <p><span className="font-medium">Total Marks:</span> {selectedAssignment.totalMarks}</p>
                                        <p><span className="font-medium">Submission Type:</span> {selectedAssignment.submissionType}</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Progress Statistics</h4>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Submissions</span>
                                                <span>{selectedAssignment.studentsSubmitted}/{selectedAssignment.studentsAssigned}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-blue-600 h-2 rounded-full" 
                                                    style={{ width: `${getSubmissionProgress(selectedAssignment)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Graded</span>
                                                <span>{selectedAssignment.studentsGraded}/{selectedAssignment.studentsSubmitted}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-green-600 h-2 rounded-full" 
                                                    style={{ width: `${getGradingProgress(selectedAssignment)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        {selectedAssignment.averageScore > 0 && (
                                            <p className="text-sm"><span className="font-medium">Average Score:</span> {selectedAssignment.averageScore}/{selectedAssignment.totalMarks}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Instructions</h4>
                                <p className="text-gray-700 bg-gray-50 p-3 rounded">{selectedAssignment.instructions}</p>
                            </div>
                            
                            {selectedAssignment.attachments.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Attachments</h4>
                                    <div className="space-y-2">
                                        {selectedAssignment.attachments.map((attachment, index) => (
                                            <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                                                <FileText className="w-4 h-4 mr-2 text-gray-500" />
                                                <span className="text-sm text-gray-700">{attachment}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Assignment Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter assignment title"
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
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., Class 10A"
                                    />
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
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Teacher name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Due Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="dueDate"
                                        value={formData.dueDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Submission Type *
                                    </label>
                                    <select
                                        name="submissionType"
                                        value={formData.submissionType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {submissionTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Status *
                                    </label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {statuses.slice(1).map(status => (
                                            <option key={status} value={status}>{status}</option>
                                        ))}
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
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Describe the assignment requirements"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Instructions
                                    </label>
                                    <textarea
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Additional instructions for students"
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
                                    {modalType === 'add' ? 'Create Assignment' : 'Update Assignment'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    };

    // Calculate statistics
    const activeAssignments = assignments.filter(a => a.status === 'Active').length;
    const completedAssignments = assignments.filter(a => a.status === 'Completed').length;
    const totalSubmissions = assignments.reduce((sum, a) => sum + a.studentsSubmitted, 0);
    const pendingGrading = assignments.reduce((sum, a) => sum + (a.studentsSubmitted - a.studentsGraded), 0);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Assignments</h1>
                    <p className="text-gray-600 mt-2">Manage and track student assignments</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </button>
                    <button 
                        onClick={handleAddAssignment}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        New Assignment
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Assignments</p>
                            <p className="text-2xl font-bold text-gray-800">{assignments.length}</p>
                        </div>
                        <FileText className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Active</p>
                            <p className="text-2xl font-bold text-gray-800">{activeAssignments}</p>
                        </div>
                        <Send className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Completed</p>
                            <p className="text-2xl font-bold text-gray-800">{completedAssignments}</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Pending Grading</p>
                            <p className="text-2xl font-bold text-gray-800">{pendingGrading}</p>
                        </div>
                        <CheckSquare className="w-8 h-8 text-red-500" />
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
                                placeholder="Search assignments..."
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
                        Showing {filteredAssignments.length} of {assignments.length} assignments
                    </div>
                </div>
            </div>

            {/* Assignments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssignments.map((assignment) => (
                    <div key={assignment.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{assignment.title}</h3>
                                    <p className="text-sm text-gray-600">{assignment.subject} • {assignment.class}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full inline-flex items-center ${getStatusColor(assignment.status)}`}>
                                    {getStatusIcon(assignment.status)}
                                    <span className="ml-1">{assignment.status}</span>
                                </span>
                            </div>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{assignment.description}</p>
                            
                            <div className="space-y-3">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Due: {assignment.dueDate}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <FileText className="w-4 h-4 mr-2" />
                                    {assignment.totalMarks} marks • {assignment.submissionType}
                                </div>
                                
                                {assignment.studentsAssigned > 0 && (
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                                            <span>Submissions</span>
                                            <span>{assignment.studentsSubmitted}/{assignment.studentsAssigned}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className="bg-blue-600 h-2 rounded-full" 
                                                style={{ width: `${getSubmissionProgress(assignment)}%` }}
                                            ></div>
                                        </div>
                                        
                                        {assignment.studentsSubmitted > 0 && (
                                            <div className="mt-2">
                                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                                    <span>Graded</span>
                                                    <span>{assignment.studentsGraded}/{assignment.studentsSubmitted}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div 
                                                        className="bg-green-600 h-2 rounded-full" 
                                                        style={{ width: `${getGradingProgress(assignment)}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="px-6 py-3 bg-gray-50 border-t">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{assignment.teacher}</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleViewAssignment(assignment)}
                                        className="text-blue-600 hover:text-blue-900"
                                        title="View Details"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleEditAssignment(assignment)}
                                        className="text-green-600 hover:text-green-900"
                                        title="Edit Assignment"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteAssignment(assignment.id)}
                                        className="text-red-600 hover:text-red-900"
                                        title="Delete Assignment"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredAssignments.length === 0 && (
                <div className="text-center py-12">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No assignments found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {searchTerm || selectedStatus !== 'all' || selectedSubject !== 'all'
                            ? 'Try adjusting your search or filter criteria.' 
                            : 'Get started by creating a new assignment.'}
                    </p>
                </div>
            )}

            {/* Modal */}
            {showModal && <AssignmentModal />}
        </div>
    );
};

export default Assignments;
