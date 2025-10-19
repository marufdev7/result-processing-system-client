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
    BarChart,
    Award,
    Calendar,
    BookOpen,
    TrendingUp,
    TrendingDown,
    Users,
    FileText
} from 'lucide-react';

const Results = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('all');
    const [selectedSubject, setSelectedSubject] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedResult, setSelectedResult] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample results data
    const [results, setResults] = useState([
        {
            id: 'RES001',
            studentId: 'STU001',
            studentName: 'John Smith',
            class: 'Class 10A',
            examType: 'Mid-term',
            subject: 'Mathematics',
            totalMarks: 100,
            obtainedMarks: 88,
            percentage: 88,
            grade: 'A-',
            examDate: '2024-01-15',
            teacher: 'Dr. Alice Johnson',
            status: 'Published'
        },
        {
            id: 'RES002',
            studentId: 'STU001',
            studentName: 'John Smith',
            class: 'Class 10A',
            examType: 'Mid-term',
            subject: 'Physics',
            totalMarks: 100,
            obtainedMarks: 82,
            percentage: 82,
            grade: 'B+',
            examDate: '2024-01-16',
            teacher: 'Prof. Michael Brown',
            status: 'Published'
        },
        {
            id: 'RES003',
            studentId: 'STU002',
            studentName: 'Emma Johnson',
            class: 'Class 10B',
            examType: 'Mid-term',
            subject: 'Chemistry',
            totalMarks: 100,
            obtainedMarks: 91,
            percentage: 91,
            grade: 'A',
            examDate: '2024-01-17',
            teacher: 'Dr. Robert Wilson',
            status: 'Published'
        },
        {
            id: 'RES004',
            studentId: 'STU003',
            studentName: 'Michael Brown',
            class: 'Class 9A',
            examType: 'Final',
            subject: 'English',
            totalMarks: 100,
            obtainedMarks: 76,
            percentage: 76,
            grade: 'B',
            examDate: '2024-01-18',
            teacher: 'Ms. Sarah Davis',
            status: 'Draft'
        }
    ]);

    const classes = ['all', 'Class 9A', 'Class 9B', 'Class 10A', 'Class 10B', 'Class 11A', 'Class 11B'];
    const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry', 'English', 'Biology', 'Computer Science'];
    const examTypes = ['Mid-term', 'Final', 'Unit Test', 'Assignment', 'Project'];

    // Filter results based on search term, class, and subject
    const filteredResults = results.filter(result => {
        const matchesSearch = result.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            result.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            result.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = selectedClass === 'all' || result.class === selectedClass;
        const matchesSubject = selectedSubject === 'all' || result.subject === selectedSubject;
        return matchesSearch && matchesClass && matchesSubject;
    });

    const handleAddResult = () => {
        setSelectedResult(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditResult = (result) => {
        setSelectedResult(result);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewResult = (result) => {
        setSelectedResult(result);
        setModalType('view');
        setShowModal(true);
    };

    const handleDeleteResult = (resultId) => {
        if (window.confirm('Are you sure you want to delete this result?')) {
            setResults(results.filter(result => result.id !== resultId));
        }
    };

    const getGradeColor = (grade) => {
        if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
        if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
        if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
        if (grade.startsWith('D')) return 'bg-orange-100 text-orange-800';
        return 'bg-red-100 text-red-800';
    };

    const calculateGrade = (percentage) => {
        if (percentage >= 90) return 'A+';
        if (percentage >= 85) return 'A';
        if (percentage >= 80) return 'A-';
        if (percentage >= 75) return 'B+';
        if (percentage >= 70) return 'B';
        if (percentage >= 65) return 'B-';
        if (percentage >= 60) return 'C+';
        if (percentage >= 55) return 'C';
        if (percentage >= 50) return 'C-';
        if (percentage >= 45) return 'D';
        return 'F';
    };

    const ResultModal = () => {
        const [formData, setFormData] = useState(
            selectedResult || {
                studentId: '',
                studentName: '',
                class: '',
                examType: '',
                subject: '',
                totalMarks: 100,
                obtainedMarks: '',
                examDate: '',
                teacher: '',
                status: 'Draft'
            }
        );

        const percentage = formData.obtainedMarks && formData.totalMarks ? 
            Math.round((formData.obtainedMarks / formData.totalMarks) * 100) : 0;
        const grade = calculateGrade(percentage);

        const handleSubmit = (e) => {
            e.preventDefault();
            const resultData = {
                ...formData,
                percentage,
                grade
            };

            if (modalType === 'add') {
                const newResult = {
                    ...resultData,
                    id: `RES${String(results.length + 1).padStart(3, '0')}`
                };
                setResults([...results, newResult]);
            } else if (modalType === 'edit') {
                setResults(results.map(result => 
                    result.id === selectedResult.id ? { ...result, ...resultData } : result
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
                            {modalType === 'add' ? 'Add New Result' : 
                             modalType === 'edit' ? 'Edit Result' : 'Result Details'}
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
                                    Student ID *
                                </label>
                                <input
                                    type="text"
                                    name="studentId"
                                    value={formData.studentId}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    placeholder="e.g., STU001"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Student Name *
                                </label>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={formData.studentName}
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
                                    <option value="">Select Exam Type</option>
                                    {examTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Exam Date *
                                </label>
                                <input
                                    type="date"
                                    name="examDate"
                                    value={formData.examDate}
                                    onChange={handleChange}
                                    required
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
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
                                    max="1000"
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Obtained Marks *
                                </label>
                                <input
                                    type="number"
                                    name="obtainedMarks"
                                    value={formData.obtainedMarks}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    max={formData.totalMarks}
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
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
                                    disabled={modalType === 'view'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                                    placeholder="Teacher name"
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
                                    <option value="Draft">Draft</option>
                                    <option value="Published">Published</option>
                                </select>
                            </div>

                            {/* Calculated fields display */}
                            {(formData.obtainedMarks && formData.totalMarks) && (
                                <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">Calculated Results</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-sm text-gray-600">Percentage:</span>
                                            <span className="ml-2 font-medium">{percentage}%</span>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-600">Grade:</span>
                                            <span className={`ml-2 px-2 py-1 rounded text-sm font-medium ${getGradeColor(grade)}`}>
                                                {grade}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
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
                                    {modalType === 'add' ? 'Add Result' : 'Update Result'}
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );
    };

    // Calculate statistics
    const avgPercentage = results.length > 0 ? 
        Math.round(results.reduce((sum, r) => sum + r.percentage, 0) / results.length) : 0;
    const publishedResults = results.filter(r => r.status === 'Published').length;
    const topPerformer = results.reduce((top, current) => 
        current.percentage > (top?.percentage || 0) ? current : top, null);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Results Management</h1>
                    <p className="text-gray-600 mt-2">Manage student exam results and grades</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export Results
                    </button>
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Upload className="w-4 h-4 mr-2" />
                        Bulk Upload
                    </button>
                    <button 
                        onClick={handleAddResult}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Result
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Results</p>
                            <p className="text-2xl font-bold text-gray-800">{results.length}</p>
                        </div>
                        <FileText className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Published</p>
                            <p className="text-2xl font-bold text-gray-800">{publishedResults}</p>
                        </div>
                        <BarChart className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Average Score</p>
                            <p className="text-2xl font-bold text-gray-800">{avgPercentage}%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Top Score</p>
                            <p className="text-2xl font-bold text-gray-800">
                                {topPerformer ? `${topPerformer.percentage}%` : 'N/A'}
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
                                placeholder="Search results..."
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
                        Showing {filteredResults.length} of {results.length} results
                    </div>
                </div>
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subject & Exam
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Marks
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Grade
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
                            {filteredResults.map((result) => (
                                <tr key={result.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-blue-600 font-medium">
                                                    {result.studentName.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{result.studentName}</div>
                                                <div className="text-sm text-gray-500">{result.studentId}</div>
                                                <div className="text-sm text-gray-500">{result.class}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 font-medium">{result.subject}</div>
                                        <div className="text-sm text-gray-500">{result.examType}</div>
                                        <div className="text-sm text-gray-500 flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {result.examDate}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900 font-medium">
                                            {result.obtainedMarks}/{result.totalMarks}
                                        </div>
                                        <div className="text-sm text-gray-500">{result.percentage}%</div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                            <div 
                                                className="bg-blue-600 h-1.5 rounded-full" 
                                                style={{ width: `${result.percentage}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-sm font-medium rounded-full ${
                                            getGradeColor(result.grade)
                                        }`}>
                                            {result.grade}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                            result.status === 'Published' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {result.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleViewResult(result)}
                                                className="text-blue-600 hover:text-blue-900"
                                                title="View Details"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEditResult(result)}
                                                className="text-green-600 hover:text-green-900"
                                                title="Edit Result"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteResult(result.id)}
                                                className="text-red-600 hover:text-red-900"
                                                title="Delete Result"
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

                {filteredResults.length === 0 && (
                    <div className="text-center py-12">
                        <BarChart className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {searchTerm || selectedClass !== 'all' || selectedSubject !== 'all'
                                ? 'Try adjusting your search or filter criteria.' 
                                : 'Get started by adding a new result.'}
                        </p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {showModal && <ResultModal />}
        </div>
    );
};

export default Results;
