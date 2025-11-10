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
    Bell,
    Calendar,
    Clock,
    Users,
    FileText,
    AlertCircle,
    CheckCircle,
    XCircle,
    Pin,
    Globe,
    BookOpen,
    GraduationCap
} from 'lucide-react';
import { useAuth } from '../../providers/AuthProvider';

const Announcement = () => {
    const { isAdmin } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPriority, setSelectedPriority] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    const [modalType, setModalType] = useState('add'); // 'add', 'edit', 'view'

    // Sample announcement data
    const [announcements, setAnnouncements] = useState([
        {
            id: 'ANN001',
            title: 'Mid-term Exam Schedule Released',
            content: 'The mid-term examination schedule for all departments has been released. Please check the notice board or online portal for detailed timings and venues. Students are advised to prepare accordingly.',
            category: 'Academic',
            priority: 'High',
            targetAudience: 'Students',
            classes: ['CSE', 'ECE', 'BBA', 'Diploma'],
            author: 'Admin',
            publishedDate: '2024-01-15',
            expiryDate: '2024-02-28',
            status: 'Published',
            isPinned: true,
            viewCount: 245,
            attachments: ['Mid_Term_Schedule.pdf']
        },
        {
            id: 'ANN002',
            title: 'Holiday Notice for Eid-ul-Fitr',
            content: 'The university will remain closed on 10th and 11th of April in observance of Eid-ul-Fitr. All classes and labs are suspended during this period.',
            category: 'General',
            priority: 'Medium',
            targetAudience: 'All Students and Staff',
            classes: ['CSE', 'ECE', 'BBA', 'Diploma'],
            author: 'Admin',
            publishedDate: '2024-04-05',
            expiryDate: '2024-04-12',
            status: 'Published',
            isPinned: false,
            viewCount: 180,
            attachments: []
        },
        {
            id: 'ANN003',
            title: 'Project Submission Deadline Extended',
            content: 'The deadline for submission of final semester projects for CSE and ECE students has been extended by one week. Students must submit their projects online before the new deadline.',
            category: 'Academic',
            priority: 'High',
            targetAudience: 'Students',
            classes: ['CSE', 'ECE'],
            author: 'Dr. Farhana Akter',
            publishedDate: '2024-11-10',
            expiryDate: '2024-12-01',
            status: 'Published',
            isPinned: true,
            viewCount: 102,
            attachments: ['Project_Extension_Notice.pdf']
        },
        {
            id: 'ANN004',
            title: 'Guest Lecture on Digital Marketing',
            content: 'A guest lecture on Digital Marketing strategies will be held for BBA students on 20th September. Attendance is compulsory for all students of the BBA department.',
            category: 'Event',
            priority: 'Medium',
            targetAudience: 'BBA Students',
            classes: ['BBA'],
            author: 'Dr. Kamrul Hasan',
            publishedDate: '2024-09-10',
            expiryDate: '2024-09-21',
            status: 'Published',
            isPinned: false,
            viewCount: 85,
            attachments: ['Guest_Lecture_Details.pdf']
        },
        {
            id: 'ANN005',
            title: 'Laboratory Maintenance Notice',
            content: 'The ECE and CSE laboratories will remain closed for maintenance from 15th to 18th July. Students are advised to reschedule their practical sessions accordingly.',
            category: 'Academic',
            priority: 'Medium',
            targetAudience: 'Students',
            classes: ['CSE', 'ECE'],
            author: 'Lab Incharge',
            publishedDate: '2024-07-10',
            expiryDate: '2024-07-19',
            status: 'Published',
            isPinned: false,
            viewCount: 63,
            attachments: []
        },
        {
            id: 'ANN006',
            title: 'Scholarship Application Open',
            content: 'Applications for the merit-based scholarship for the upcoming semester are now open. Eligible students can apply online through the student portal before 30th November.',
            category: 'Academic',
            priority: 'High',
            targetAudience: 'Students',
            classes: ['CSE', 'ECE', 'BBA', 'Diploma'],
            author: 'Admin',
            publishedDate: '2024-11-01',
            expiryDate: '2024-11-30',
            status: 'Published',
            isPinned: true,
            viewCount: 220,
            attachments: ['Scholarship_Application_Form.pdf']
        }
    ]);

    const categories = ['all', 'Academic', 'General', 'Event', 'Emergency', 'Holiday'];
    const priorities = ['all', 'Low', 'Medium', 'High', 'Urgent'];
    const audiences = ['All', 'Students', 'Teachers', 'Parents', 'Staff'];
    const statuses = ['Draft', 'Published', 'Expired', 'Archived'];

    // Filter announcements based on search term, category, and priority
    const filteredAnnouncements = announcements.filter(announcement => {
        const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            announcement.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || announcement.category === selectedCategory;
        const matchesPriority = selectedPriority === 'all' || announcement.priority === selectedPriority;
        return matchesSearch && matchesCategory && matchesPriority;
    });

    // Sort announcements - pinned first, then by date
    const sortedAnnouncements = filteredAnnouncements.sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return new Date(b.publishedDate) - new Date(a.publishedDate);
    });

    const handleAddAnnouncement = () => {
        setSelectedAnnouncement(null);
        setModalType('add');
        setShowModal(true);
    };

    const handleEditAnnouncement = (announcement) => {
        setSelectedAnnouncement(announcement);
        setModalType('edit');
        setShowModal(true);
    };

    const handleViewAnnouncement = (announcement) => {
        setSelectedAnnouncement(announcement);
        setModalType('view');
        setShowModal(true);
        // Increment view count
        setAnnouncements(announcements.map(ann =>
            ann.id === announcement.id ? { ...ann, viewCount: ann.viewCount + 1 } : ann
        ));
    };

    const handleDeleteAnnouncement = (announcementId) => {
        if (window.confirm('Are you sure you want to delete this announcement?')) {
            setAnnouncements(announcements.filter(announcement => announcement.id !== announcementId));
        }
    };

    const handleTogglePin = (announcementId) => {
        setAnnouncements(announcements.map(announcement =>
            announcement.id === announcementId
                ? { ...announcement, isPinned: !announcement.isPinned }
                : announcement
        ));
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Low': return 'bg-blue-100 text-blue-800';
            case 'Medium': return 'bg-yellow-100 text-yellow-800';
            case 'High': return 'bg-orange-100 text-orange-800';
            case 'Urgent': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'Academic': return <BookOpen className="w-4 h-4" />;
            case 'General': return <Globe className="w-4 h-4" />;
            case 'Event': return <Calendar className="w-4 h-4" />;
            case 'Emergency': return <AlertCircle className="w-4 h-4" />;
            case 'Holiday': return <Clock className="w-4 h-4" />;
            default: return <FileText className="w-4 h-4" />;
        }
    };

    const AnnouncementModal = () => {
        const [formData, setFormData] = useState(
            selectedAnnouncement || {
                title: '',
                content: '',
                category: 'General',
                priority: 'Medium',
                targetAudience: 'All',
                classes: [],
                expiryDate: '',
                status: 'Draft',
                isPinned: false,
                attachments: []
            }
        );

        const handleSubmit = (e) => {
            e.preventDefault();
            if (modalType === 'add') {
                const newAnnouncement = {
                    ...formData,
                    id: `ANN${String(announcements.length + 1).padStart(3, '0')}`,
                    author: 'Admin', // In real app, get from user context
                    publishedDate: new Date().toISOString().split('T')[0],
                    viewCount: 0
                };
                setAnnouncements([...announcements, newAnnouncement]);
            } else if (modalType === 'edit') {
                setAnnouncements(announcements.map(announcement =>
                    announcement.id === selectedAnnouncement.id
                        ? { ...announcement, ...formData }
                        : announcement
                ));
            }
            setShowModal(false);
        };

        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            if (name === 'classes') {
                setFormData({
                    ...formData,
                    classes: value.split(',').map(s => s.trim()).filter(s => s)
                });
            } else if (type === 'checkbox') {
                setFormData({
                    ...formData,
                    [name]: checked
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
                            {modalType === 'add' ? 'Create New Announcement' :
                                modalType === 'edit' ? 'Edit Announcement' : 'Announcement Details'}
                        </h2>
                        <button
                            onClick={() => setShowModal(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>

                    {modalType === 'view' && selectedAnnouncement ? (
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {selectedAnnouncement.isPinned && <Pin className="w-5 h-5 inline mr-2 text-orange-500" />}
                                            {selectedAnnouncement.title}
                                        </h3>
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <span className="flex items-center">
                                                {getCategoryIcon(selectedAnnouncement.category)}
                                                <span className="ml-1">{selectedAnnouncement.category}</span>
                                            </span>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(selectedAnnouncement.priority)}`}>
                                                {selectedAnnouncement.priority}
                                            </span>
                                            <span>{selectedAnnouncement.publishedDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Content</h4>
                                <p className="text-gray-700 leading-relaxed">{selectedAnnouncement.content}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Details</h4>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="font-medium">Author:</span> {selectedAnnouncement.author}</p>
                                        <p><span className="font-medium">Target Audience:</span> {selectedAnnouncement.targetAudience}</p>
                                        <p><span className="font-medium">Status:</span>
                                            <span className={`ml-2 px-2 py-1 rounded text-xs ${selectedAnnouncement.status === 'Published' ? 'bg-green-100 text-green-800' :
                                                selectedAnnouncement.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                {selectedAnnouncement.status}
                                            </span>
                                        </p>
                                        <p><span className="font-medium">Expires:</span> {selectedAnnouncement.expiryDate}</p>
                                        <p><span className="font-medium">Views:</span> {selectedAnnouncement.viewCount}</p>
                                    </div>
                                </div>

                                {selectedAnnouncement.classes.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-2">Target Classes</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedAnnouncement.classes.map((cls, index) => (
                                                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                                    {cls}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {selectedAnnouncement.attachments.length > 0 && (
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Attachments</h4>
                                    <div className="space-y-2">
                                        {selectedAnnouncement.attachments.map((attachment, index) => (
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
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter announcement title"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Content *
                                    </label>
                                    <textarea
                                        name="content"
                                        value={formData.content}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter announcement content"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category *
                                        </label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            {categories.slice(1).map(category => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Priority *
                                        </label>
                                        <select
                                            name="priority"
                                            value={formData.priority}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            {priorities.slice(1).map(priority => (
                                                <option key={priority} value={priority}>{priority}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Target Audience *
                                        </label>
                                        <select
                                            name="targetAudience"
                                            value={formData.targetAudience}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            {audiences.map(audience => (
                                                <option key={audience} value={audience}>{audience}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Expiry Date *
                                        </label>
                                        <input
                                            type="date"
                                            name="expiryDate"
                                            value={formData.expiryDate}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
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
                                            {statuses.map(status => (
                                                <option key={status} value={status}>{status}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Target Classes (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        name="classes"
                                        value={Array.isArray(formData.classes) ? formData.classes.join(', ') : ''}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., Class 10A, Class 11B (leave empty for all classes)"
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="isPinned"
                                        name="isPinned"
                                        checked={formData.isPinned}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="isPinned" className="ml-2 block text-sm text-gray-900">
                                        Pin this announcement (will appear at top)
                                    </label>
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
                                    {modalType === 'add' ? 'Create Announcement' : 'Update Announcement'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        );
    };

    // Calculate statistics
    const publishedCount = announcements.filter(a => a.status === 'Published').length;
    const pinnedCount = announcements.filter(a => a.isPinned).length;
    const totalViews = announcements.reduce((sum, a) => sum + a.viewCount, 0);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Announcements</h1>
                    <p className="text-gray-600 mt-2">
                        {isAdmin() ? 'Manage school announcements and notices' : 'View important announcements and notices'}
                    </p>
                </div>
                {isAdmin() && (
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </button>
                        <button
                            onClick={handleAddAnnouncement}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            New Announcement
                        </button>
                    </div>
                )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Announcements</p>
                            <p className="text-2xl font-bold text-gray-800">{announcements.length}</p>
                        </div>
                        <Bell className="w-8 h-8 text-blue-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Published</p>
                            <p className="text-2xl font-bold text-gray-800">{publishedCount}</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Pinned</p>
                            <p className="text-2xl font-bold text-gray-800">{pinnedCount}</p>
                        </div>
                        <Pin className="w-8 h-8 text-orange-500" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total Views</p>
                            <p className="text-2xl font-bold text-gray-800">{totalViews}</p>
                        </div>
                        <Eye className="w-8 h-8 text-purple-500" />
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
                                placeholder="Search announcements..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Filter className="w-4 h-4 text-gray-400" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category === 'all' ? 'All Categories' : category}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={selectedPriority}
                                onChange={(e) => setSelectedPriority(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {priorities.map(priority => (
                                    <option key={priority} value={priority}>
                                        {priority === 'all' ? 'All Priorities' : priority}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {sortedAnnouncements.length} of {announcements.length} announcements
                    </div>
                </div>
            </div>

            {/* Announcements List */}
            <div className="space-y-4">
                {sortedAnnouncements.map((announcement) => (
                    <div key={announcement.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        {announcement.isPinned && (
                                            <Pin className="w-4 h-4 text-orange-500 mr-2" />
                                        )}
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {announcement.title}
                                        </h3>
                                        <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(announcement.priority)}`}>
                                            {announcement.priority}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                        {announcement.content}
                                    </p>

                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <span className="flex items-center">
                                            {getCategoryIcon(announcement.category)}
                                            <span className="ml-1">{announcement.category}</span>
                                        </span>
                                        <span className="flex items-center">
                                            <Users className="w-4 h-4 mr-1" />
                                            {announcement.targetAudience}
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {announcement.publishedDate}
                                        </span>
                                        <span className="flex items-center">
                                            <Eye className="w-4 h-4 mr-1" />
                                            {announcement.viewCount} views
                                        </span>
                                        <span className={`px-2 py-1 text-xs rounded ${announcement.status === 'Published' ? 'bg-green-100 text-green-800' :
                                            announcement.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                            {announcement.status}
                                        </span>
                                    </div>

                                    {announcement.classes.length > 0 && (
                                        <div className="mt-3">
                                            <div className="flex flex-wrap gap-1">
                                                {announcement.classes.slice(0, 3).map((cls, index) => (
                                                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                                        {cls}
                                                    </span>
                                                ))}
                                                {announcement.classes.length > 3 && (
                                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                                        +{announcement.classes.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center space-x-2 ml-4">
                                    {isAdmin() && (
                                        <>
                                            <button
                                                onClick={() => handleTogglePin(announcement.id)}
                                                className={`p-2 rounded hover:bg-gray-100 ${announcement.isPinned ? 'text-orange-500' : 'text-gray-400'
                                                    }`}
                                                title={announcement.isPinned ? 'Unpin' : 'Pin'}
                                            >
                                                <Pin className="w-4 h-4" />
                                            </button>
                                        </>
                                    )}
                                    <button
                                        onClick={() => handleViewAnnouncement(announcement)}
                                        className="text-blue-600 hover:text-blue-900 p-2 rounded hover:bg-blue-50"
                                        title="View Details"
                                    >
                                        <Eye className="w-4 h-4" />
                                    </button>
                                    {isAdmin() && (
                                        <>
                                            <button
                                                onClick={() => handleEditAnnouncement(announcement)}
                                                className="text-green-600 hover:text-green-900 p-2 rounded hover:bg-green-50"
                                                title="Edit Announcement"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteAnnouncement(announcement.id)}
                                                className="text-red-600 hover:text-red-900 p-2 rounded hover:bg-red-50"
                                                title="Delete Announcement"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {sortedAnnouncements.length === 0 && (
                <div className="text-center py-12">
                    <Bell className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No announcements found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {searchTerm || selectedCategory !== 'all' || selectedPriority !== 'all'
                            ? 'Try adjusting your search or filter criteria.'
                            : 'Get started by creating a new announcement.'}
                    </p>
                </div>
            )}

            {/* Modal */}
            {showModal && <AnnouncementModal />}
        </div>
    );
};

export default Announcement;
