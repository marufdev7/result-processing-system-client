import React, { useState } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { 
    User, 
    Edit, 
    Save, 
    Camera, 
    Mail, 
    Phone, 
    MapPin, 
    Calendar, 
    Briefcase, 
    GraduationCap, 
    Award, 
    Clock, 
    Eye, 
    EyeOff, 
    Lock, 
    Shield, 
    Bell, 
    Activity, 
    TrendingUp, 
    BookOpen, 
    FileText, 
    Users, 
    Star,
    Badge,
    Target,
    CheckCircle,
    AlertCircle,
    Upload,
    Download,
    Settings,
    Plus,
    X
} from 'lucide-react';

const Profile = () => {
    const { user, isAdmin } = useAuth(); // Get user info and role from auth context
    const [activeTab, setActiveTab] = useState('overview');
    const [isEditing, setIsEditing] = useState(false);
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    // Admin profile data
    const adminProfileData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@school.edu',
        phone: '+1 (555) 123-4567',
        address: '123 Education Street, Learning City, LC 12345',
        dateOfBirth: '1985-03-15',
        joinDate: '2020-08-01',
        role: 'Administrator',
        department: 'Academic Affairs',
        employeeId: 'EMP001',
        bio: 'Experienced education administrator with over 10 years in student management systems. Passionate about improving educational outcomes through technology and data-driven decision making.',
        skills: ['Education Management', 'Data Analysis', 'Leadership', 'Student Affairs', 'Technology Integration'],
        profileImage: null,
        socialLinks: {
            linkedin: 'https://linkedin.com/in/johndoe',
            twitter: '@johndoe_edu',
            website: 'https://johndoe-education.com'
        }
    };

    // Student profile data
    const studentProfileData = {
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@student.edu',
        phone: '+1 (555) 987-6543',
        address: '456 Student Avenue, Campus City, CC 54321',
        dateOfBirth: '2002-07-20',
        enrollmentDate: '2021-09-01',
        role: 'Student',
        class: '12th Grade',
        studentId: 'STU2021045',
        bio: 'Dedicated high school student with a passion for science and mathematics. Actively involved in debate club and volunteer community service. Aspiring to pursue engineering in college.',
        interests: ['Mathematics', 'Physics', 'Debate', 'Community Service', 'Programming'],
        profileImage: null,
        socialLinks: {
            instagram: '@sarah_studies',
            linkedin: 'https://linkedin.com/in/sarahjohnson-student',
            github: 'https://github.com/sarahj-student'
        },
        guardian: {
            name: 'Michael Johnson',
            phone: '+1 (555) 456-7890',
            email: 'michael.johnson@email.com'
        }
    };

    // Profile data state - use appropriate data based on user role
    const [profileData, setProfileData] = useState(
        isAdmin ? adminProfileData : studentProfileData
    );

    // Password change data
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    // Admin activity and statistics data
    const adminActivityStats = {
        totalExams: 45,
        totalAssignments: 128,
        totalAnnouncements: 67,
        studentsManaged: 1250,
        coursesManaged: 15,
        averageGrade: 87.5,
        completionRate: 94.2,
        satisfactionRating: 4.8
    };

    // Student activity and statistics data
    const studentActivityStats = {
        examsCompleted: 28,
        assignmentsSubmitted: 45,
        attendanceRate: 96.5,
        currentGPA: 3.8,
        coursesEnrolled: 6,
        averageGrade: 89.2,
        completionRate: 97.3,
        extracurricularActivities: 3
    };

    // Activity and statistics data - use appropriate data based on user role
    const [activityStats] = useState(
        isAdmin ? adminActivityStats : studentActivityStats
    );

    // Admin recent activity data
    const adminRecentActivity = [
        {
            id: 1,
            type: 'exam',
            action: 'Created new exam',
            title: 'Mathematics Final Exam',
            timestamp: '2 hours ago',
            icon: BookOpen,
            color: 'text-blue-600 bg-blue-100'
        },
        {
            id: 2,
            type: 'assignment',
            action: 'Graded assignment',
            title: 'Physics Lab Report',
            timestamp: '4 hours ago',
            icon: FileText,
            color: 'text-green-600 bg-green-100'
        },
        {
            id: 3,
            type: 'announcement',
            action: 'Published announcement',
            title: 'New Academic Calendar',
            timestamp: '1 day ago',
            icon: Bell,
            color: 'text-orange-600 bg-orange-100'
        },
        {
            id: 4,
            type: 'student',
            action: 'Enrolled new students',
            title: '25 students in Computer Science',
            timestamp: '2 days ago',
            icon: Users,
            color: 'text-purple-600 bg-purple-100'
        }
    ];

    // Student recent activity data
    const studentRecentActivity = [
        {
            id: 1,
            type: 'exam',
            action: 'Completed exam',
            title: 'Chemistry Midterm - Score: 92%',
            timestamp: '1 day ago',
            icon: BookOpen,
            color: 'text-blue-600 bg-blue-100'
        },
        {
            id: 2,
            type: 'assignment',
            action: 'Submitted assignment',
            title: 'History Essay on World War II',
            timestamp: '2 days ago',
            icon: FileText,
            color: 'text-green-600 bg-green-100'
        },
        {
            id: 3,
            type: 'club',
            action: 'Attended club meeting',
            title: 'Debate Club - Weekly Discussion',
            timestamp: '3 days ago',
            icon: Users,
            color: 'text-orange-600 bg-orange-100'
        },
        {
            id: 4,
            type: 'grade',
            action: 'Received grade',
            title: 'Mathematics Quiz - Score: 95%',
            timestamp: '1 week ago',
            icon: Star,
            color: 'text-purple-600 bg-purple-100'
        }
    ];

    // Recent activity data - use appropriate data based on user role
    const [recentActivity] = useState(
        isAdmin ? adminRecentActivity : studentRecentActivity
    );

    // Admin achievements data
    const adminAchievements = [
        {
            id: 1,
            title: 'Excellence in Education',
            description: 'Recognized for outstanding contribution to student success',
            date: '2023-12-01',
            icon: Award,
            color: 'text-yellow-600 bg-yellow-100'
        },
        {
            id: 2,
            title: 'Innovation Leader',
            description: 'Led successful implementation of digital learning platform',
            date: '2023-06-15',
            icon: Badge,
            color: 'text-blue-600 bg-blue-100'
        },
        {
            id: 3,
            title: 'Student Mentor',
            description: 'Mentored over 100 students to academic success',
            date: '2023-03-20',
            icon: Target,
            color: 'text-green-600 bg-green-100'
        }
    ];

    // Student achievements data
    const studentAchievements = [
        {
            id: 1,
            title: 'Honor Roll Student',
            description: 'Maintained GPA above 3.5 for consecutive semesters',
            date: '2024-01-15',
            icon: Award,
            color: 'text-yellow-600 bg-yellow-100'
        },
        {
            id: 2,
            title: 'Debate Champion',
            description: 'Won first place in inter-school debate competition',
            date: '2023-11-20',
            icon: Badge,
            color: 'text-blue-600 bg-blue-100'
        },
        {
            id: 3,
            title: 'Community Service Leader',
            description: 'Completed 50+ hours of community service',
            date: '2023-09-10',
            icon: Target,
            color: 'text-green-600 bg-green-100'
        },
        {
            id: 4,
            title: 'Perfect Attendance',
            description: 'Maintained 100% attendance for the semester',
            date: '2023-06-30',
            icon: CheckCircle,
            color: 'text-purple-600 bg-purple-100'
        }
    ];

    // Achievements data - use appropriate data based on user role
    const [achievements] = useState(
        isAdmin ? adminAchievements : studentAchievements
    );

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Eye },
        { id: 'personal', label: 'Personal Info', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'activity', label: 'Activity', icon: Activity },
        { id: 'achievements', label: 'Achievements', icon: Award }
    ];

    const handleProfileChange = (field, value) => {
        if (field.includes('.')) {
            const [parent, child] = field.split('.');
            setProfileData({
                ...profileData,
                [parent]: {
                    ...profileData[parent],
                    [child]: value
                }
            });
        } else {
            setProfileData({ ...profileData, [field]: value });
        }
    };

    const handleSkillAdd = (skill) => {
        if (skill && !profileData.skills.includes(skill)) {
            setProfileData({
                ...profileData,
                skills: [...profileData.skills, skill]
            });
        }
    };

    const handleSkillRemove = (skillToRemove) => {
        setProfileData({
            ...profileData,
            skills: profileData.skills.filter(skill => skill !== skillToRemove)
        });
    };

    const handleSaveProfile = () => {
        setIsEditing(false);
        // Here you would typically save to API
        console.log('Profile saved:', profileData);
    };

    const handlePasswordChange = (field, value) => {
        setPasswordData({ ...passwordData, [field]: value });
    };

    const handlePasswordSubmit = () => {
        if (passwordData.newPassword === passwordData.confirmPassword) {
            // Handle password change
            console.log('Password changed');
            setShowPasswordForm(false);
            setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        }
    };

    const OverviewTab = () => (
        <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="px-6 pb-6 -mt-16">
                    <div className="flex items-end space-x-5">
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                {profileData.profileImage ? (
                                    <img 
                                        src={profileData.profileImage} 
                                        alt="Profile" 
                                        className="w-28 h-28 rounded-full object-cover"
                                    />
                                ) : (
                                    <User className="w-16 h-16 text-gray-400" />
                                )}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0 pb-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        {profileData.firstName} {profileData.lastName}
                                    </h1>
                                    <p className="text-lg text-gray-600">{profileData.role}</p>
                                    <p className="text-sm text-gray-500">{isAdmin ? profileData.department : profileData.class}</p>
                                </div>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <Edit className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6">
                        <p className="text-gray-700">{profileData.bio}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {(isAdmin ? profileData.skills : profileData.interests).map((skill, index) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {isAdmin ? (
                    <>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Exams Created</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.totalExams}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <FileText className="w-8 h-8 text-green-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Assignments</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.totalAssignments}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <Users className="w-8 h-8 text-purple-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Students Managed</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.studentsManaged}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <Star className="w-8 h-8 text-yellow-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Rating</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.satisfactionRating}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Exams Completed</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.examsCompleted}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <FileText className="w-8 h-8 text-green-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Assignments</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.assignmentsSubmitted}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <TrendingUp className="w-8 h-8 text-purple-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Current GPA</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.currentGPA}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <Users className="w-8 h-8 text-yellow-600" />
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Courses</p>
                                    <p className="text-2xl font-bold text-gray-900">{activityStats.coursesEnrolled}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {recentActivity.map((activity) => {
                        const Icon = activity.icon;
                        return (
                            <div key={activity.id} className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className={`p-2 rounded-full ${activity.color}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                        <p className="text-sm text-gray-600">{activity.title}</p>
                                    </div>
                                    <div className="text-sm text-gray-500">{activity.timestamp}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const PersonalInfoTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                        </button>
                    ) : (
                        <div className="space-x-2">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveProfile}
                                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                <Save className="w-4 h-4 mr-2" />
                                Save
                            </button>
                        </div>
                    )}
                </div>
                
                {/* Profile Image */}
                <div className="flex items-center space-x-6 mb-8">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        {profileData.profileImage ? (
                            <img 
                                src={profileData.profileImage} 
                                alt="Profile" 
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        ) : (
                            <User className="w-12 h-12 text-gray-400" />
                        )}
                    </div>
                    {isEditing && (
                        <div>
                            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                <Upload className="w-4 h-4 mr-2" />
                                Change Photo
                            </button>
                            <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                        </div>
                    )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-2" />First Name
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={profileData.firstName}
                                onChange={(e) => handleProfileChange('firstName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="text-gray-900 py-2">{profileData.firstName}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-2" />Last Name
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={profileData.lastName}
                                onChange={(e) => handleProfileChange('lastName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="text-gray-900 py-2">{profileData.lastName}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />Email
                        </label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={profileData.email}
                                onChange={(e) => handleProfileChange('email', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="text-gray-900 py-2">{profileData.email}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />Phone
                        </label>
                        {isEditing ? (
                            <input
                                type="tel"
                                value={profileData.phone}
                                onChange={(e) => handleProfileChange('phone', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="text-gray-900 py-2">{profileData.phone}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />Date of Birth
                        </label>
                        {isEditing ? (
                            <input
                                type="date"
                                value={profileData.dateOfBirth}
                                onChange={(e) => handleProfileChange('dateOfBirth', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="text-gray-900 py-2">{new Date(profileData.dateOfBirth).toLocaleDateString()}</p>
                        )}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {isAdmin ? (
                                <><Briefcase className="w-4 h-4 inline mr-2" />Employee ID</>
                            ) : (
                                <><GraduationCap className="w-4 h-4 inline mr-2" />Student ID</>
                            )}
                        </label>
                        <p className="text-gray-900 py-2">{isAdmin ? profileData.employeeId : profileData.studentId}</p>
                    </div>
                    
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <MapPin className="w-4 h-4 inline mr-2" />Address
                        </label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={profileData.address}
                                onChange={(e) => handleProfileChange('address', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="text-gray-900 py-2">{profileData.address}</p>
                        )}
                    </div>
                    
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Bio
                        </label>
                        {isEditing ? (
                            <textarea
                                value={profileData.bio}
                                onChange={(e) => handleProfileChange('bio', e.target.value)}
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        ) : (
                            <p className="text-gray-900 py-2">{profileData.bio}</p>
                        )}
                    </div>
                    
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {isAdmin ? 'Skills' : 'Interests'}
                        </label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {(isAdmin ? profileData.skills : profileData.interests).map((skill, index) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center"
                                >
                                    {skill}
                                    {isEditing && (
                                        <button
                                            onClick={() => handleSkillRemove(skill)}
                                            className="ml-2 text-blue-600 hover:text-blue-800"
                                        >
                                            <X className="w-3 h-3" />
                                        </button>
                                    )}
                                </span>
                            ))}
                            {isEditing && (
                                <button className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full flex items-center hover:bg-gray-200">
                                    <Plus className="w-3 h-3 mr-1" />
                                    Add {isAdmin ? 'Skill' : 'Interest'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const SecurityTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Password</h3>
                                <p className="text-sm text-gray-600">Last changed 3 months ago</p>
                            </div>
                            <button
                                onClick={() => setShowPasswordForm(!showPasswordForm)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Change Password
                            </button>
                        </div>
                        
                        {showPasswordForm && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Current Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showCurrentPassword ? 'text' : 'password'}
                                                value={passwordData.currentPassword}
                                                onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                                                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            >
                                                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            New Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showNewPassword ? 'text' : 'password'}
                                                value={passwordData.newPassword}
                                                onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                                                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                            >
                                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            value={passwordData.confirmPassword}
                                            onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={handlePasswordSubmit}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Update Password
                                        </button>
                                        <button
                                            onClick={() => setShowPasswordForm(false)}
                                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                                <p className="text-sm text-gray-600">Add an extra layer of security</p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-green-600 mr-3 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Enabled
                                </span>
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                    Manage
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Active Sessions</h3>
                                <p className="text-sm text-gray-600">Manage where you're logged in</p>
                            </div>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                View All Sessions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ActivityTab = () => (
        <div className="space-y-6">
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                            <p className="text-2xl font-bold text-gray-900">{activityStats.completionRate}%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Average Grade</p>
                            <p className="text-2xl font-bold text-gray-900">{activityStats.averageGrade}</p>
                        </div>
                        <Star className="w-8 h-8 text-yellow-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Courses Managed</p>
                            <p className="text-2xl font-bold text-gray-900">{activityStats.coursesManaged}</p>
                        </div>
                        <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Announcements</p>
                            <p className="text-2xl font-bold text-gray-900">{activityStats.totalAnnouncements}</p>
                        </div>
                        <Bell className="w-8 h-8 text-orange-600" />
                    </div>
                </div>
            </div>
            
            {/* Recent Activity Details */}
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Activity Timeline</h2>
                </div>
                <div className="divide-y divide-gray-200">
                    {recentActivity.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                            <div key={activity.id} className="px-6 py-4">
                                <div className="flex items-start">
                                    <div className={`p-2 rounded-full ${activity.color} flex-shrink-0`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                                <p className="text-sm text-gray-600">{activity.title}</p>
                                            </div>
                                            <div className="text-sm text-gray-500">{activity.timestamp}</div>
                                        </div>
                                        {index < recentActivity.length - 1 && (
                                            <div className="ml-2 mt-2 border-l-2 border-gray-200 h-4"></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const AchievementsTab = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Achievements & Recognition</h2>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement) => {
                            const Icon = achievement.icon;
                            return (
                                <div key={achievement.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className={`p-3 rounded-full ${achievement.color} w-fit mb-4`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                                    <p className="text-xs text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'personal': return <PersonalInfoTab />;
            case 'security': return <SecurityTab />;
            case 'activity': return <ActivityTab />;
            case 'achievements': return <AchievementsTab />;
            default: return <OverviewTab />;
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                <p className="text-gray-600 mt-2">Manage your personal information and account settings</p>
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
                                            className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                                                activeTab === tab.id
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

export default Profile;
