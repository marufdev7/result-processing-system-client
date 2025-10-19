import React, { useState } from 'react';
import { 
    Save, 
    User, 
    Bell, 
    Shield, 
    Palette, 
    Database, 
    Mail, 
    Phone, 
    Lock, 
    Eye, 
    EyeOff, 
    Globe, 
    Calendar, 
    Clock, 
    FileText, 
    Download, 
    Upload, 
    Trash2, 
    AlertCircle, 
    CheckCircle, 
    Settings as SettingsIcon,
    Monitor,
    Moon,
    Sun,
    Smartphone,
    Volume2,
    VolumeX
} from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    // Profile Settings State
    const [profileData, setProfileData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@school.edu',
        phone: '+1 (555) 123-4567',
        role: 'Administrator',
        department: 'Academic Affairs',
        bio: 'Experienced education administrator with over 10 years in student management systems.',
        profileImage: null
    });

    // Security Settings State
    const [securityData, setSecurityData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        twoFactorEnabled: true,
        loginNotifications: true,
        sessionTimeout: 30
    });

    // Notification Settings State
    const [notificationData, setNotificationData] = useState({
        emailNotifications: true,
        pushNotifications: false,
        smsNotifications: false,
        examReminders: true,
        assignmentDeadlines: true,
        announcementAlerts: true,
        systemUpdates: false,
        weeklyReports: true,
        soundEnabled: true,
        notificationTime: '09:00'
    });

    // Appearance Settings State
    const [appearanceData, setAppearanceData] = useState({
        theme: 'light',
        language: 'en',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12',
        fontSize: 'medium',
        compactMode: false,
        colorScheme: 'blue'
    });

    // System Settings State
    const [systemData, setSystemData] = useState({
        autoBackup: true,
        backupFrequency: 'daily',
        dataRetention: '365',
        exportFormat: 'xlsx',
        maintenanceMode: false,
        debugMode: false,
        cacheEnabled: true,
        maxFileSize: '10'
    });

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'appearance', label: 'Appearance', icon: Palette },
        { id: 'system', label: 'System', icon: Database }
    ];

    const handleSave = (section) => {
        setSaveMessage(`${section} settings saved successfully!`);
        setTimeout(() => setSaveMessage(''), 3000);
    };

    const handleProfileChange = (field, value) => {
        setProfileData({ ...profileData, [field]: value });
    };

    const handleSecurityChange = (field, value) => {
        setSecurityData({ ...securityData, [field]: value });
    };

    const handleNotificationChange = (field, value) => {
        setNotificationData({ ...notificationData, [field]: value });
    };

    const handleAppearanceChange = (field, value) => {
        setAppearanceData({ ...appearanceData, [field]: value });
    };

    const handleSystemChange = (field, value) => {
        setSystemData({ ...systemData, [field]: value });
    };

    const ProfileSettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h3>
                <div className="bg-white p-6 rounded-lg border">
                    {/* Profile Image */}
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                            {profileData.profileImage ? (
                                <img 
                                    src={profileData.profileImage} 
                                    alt="Profile" 
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            ) : (
                                <User className="w-8 h-8 text-gray-400" />
                            )}
                        </div>
                        <div>
                            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mr-2">
                                <Upload className="w-4 h-4 mr-2" />
                                Upload Photo
                            </button>
                            <p className="text-sm text-gray-500 mt-1">JPG, PNG up to 2MB</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input
                                type="text"
                                value={profileData.firstName}
                                onChange={(e) => handleProfileChange('firstName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                value={profileData.lastName}
                                onChange={(e) => handleProfileChange('lastName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={profileData.email}
                                onChange={(e) => handleProfileChange('email', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                value={profileData.phone}
                                onChange={(e) => handleProfileChange('phone', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                            <select
                                value={profileData.role}
                                onChange={(e) => handleProfileChange('role', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="Administrator">Administrator</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Staff">Staff</option>
                                <option value="Principal">Principal</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                            <input
                                type="text"
                                value={profileData.department}
                                onChange={(e) => handleProfileChange('department', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                        <textarea
                            value={profileData.bio}
                            onChange={(e) => handleProfileChange('bio', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tell us about yourself..."
                        />
                    </div>
                </div>
            </div>
            
            <button
                onClick={() => handleSave('Profile')}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                <Save className="w-4 h-4 mr-2" />
                Save Profile
            </button>
        </div>
    );

    const SecuritySettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Password & Security</h3>
                <div className="bg-white p-6 rounded-lg border">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                            <div className="relative">
                                <input
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    value={securityData.currentPassword}
                                    onChange={(e) => handleSecurityChange('currentPassword', e.target.value)}
                                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter current password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                            <div className="relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={securityData.newPassword}
                                    onChange={(e) => handleSecurityChange('newPassword', e.target.value)}
                                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                            <input
                                type="password"
                                value={securityData.confirmPassword}
                                onChange={(e) => handleSecurityChange('confirmPassword', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Security Preferences</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium text-gray-800">Two-Factor Authentication</h4>
                            <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={securityData.twoFactorEnabled}
                                onChange={(e) => handleSecurityChange('twoFactorEnabled', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium text-gray-800">Login Notifications</h4>
                            <p className="text-sm text-gray-600">Get notified of new sign-ins to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={securityData.loginNotifications}
                                onChange={(e) => handleSecurityChange('loginNotifications', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                        <select
                            value={securityData.sessionTimeout}
                            onChange={(e) => handleSecurityChange('sessionTimeout', parseInt(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={60}>1 hour</option>
                            <option value={120}>2 hours</option>
                            <option value={0}>Never</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <button
                onClick={() => handleSave('Security')}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                <Save className="w-4 h-4 mr-2" />
                Update Security
            </button>
        </div>
    );

    const NotificationSettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Preferences</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <h4 className="font-medium text-gray-800">Email Notifications</h4>
                                <p className="text-sm text-gray-600">Receive notifications via email</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={notificationData.emailNotifications}
                                onChange={(e) => handleNotificationChange('emailNotifications', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Smartphone className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <h4 className="font-medium text-gray-800">Push Notifications</h4>
                                <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={notificationData.pushNotifications}
                                onChange={(e) => handleNotificationChange('pushNotifications', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Phone className="w-5 h-5 text-gray-400 mr-3" />
                            <div>
                                <h4 className="font-medium text-gray-800">SMS Notifications</h4>
                                <p className="text-sm text-gray-600">Receive important alerts via SMS</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={notificationData.smsNotifications}
                                onChange={(e) => handleNotificationChange('smsNotifications', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Types</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    {[
                        { key: 'examReminders', label: 'Exam Reminders', desc: 'Get notified about upcoming exams' },
                        { key: 'assignmentDeadlines', label: 'Assignment Deadlines', desc: 'Alerts for assignment due dates' },
                        { key: 'announcementAlerts', label: 'New Announcements', desc: 'Notifications for new announcements' },
                        { key: 'systemUpdates', label: 'System Updates', desc: 'Information about system maintenance' },
                        { key: 'weeklyReports', label: 'Weekly Reports', desc: 'Weekly summary reports' }
                    ].map(({ key, label, desc }) => (
                        <div key={key} className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium text-gray-800">{label}</h4>
                                <p className="text-sm text-gray-600">{desc}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={notificationData[key]}
                                    onChange={(e) => handleNotificationChange(key, e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Sound & Timing</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {notificationData.soundEnabled ? (
                                <Volume2 className="w-5 h-5 text-gray-400 mr-3" />
                            ) : (
                                <VolumeX className="w-5 h-5 text-gray-400 mr-3" />
                            )}
                            <div>
                                <h4 className="font-medium text-gray-800">Sound Notifications</h4>
                                <p className="text-sm text-gray-600">Play sound for notifications</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={notificationData.soundEnabled}
                                onChange={(e) => handleNotificationChange('soundEnabled', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Daily Notification Time</label>
                        <input
                            type="time"
                            value={notificationData.notificationTime}
                            onChange={(e) => handleNotificationChange('notificationTime', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>
            
            <button
                onClick={() => handleSave('Notification')}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
            </button>
        </div>
    );

    const AppearanceSettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Theme & Display</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { value: 'light', label: 'Light', icon: Sun },
                                { value: 'dark', label: 'Dark', icon: Moon },
                                { value: 'system', label: 'System', icon: Monitor }
                            ].map(({ value, label, icon: Icon }) => (
                                <label key={value} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="theme"
                                        value={value}
                                        checked={appearanceData.theme === value}
                                        onChange={(e) => handleAppearanceChange('theme', e.target.value)}
                                        className="sr-only"
                                    />
                                    <div className={`p-3 border-2 rounded-lg text-center transition-colors ${
                                        appearanceData.theme === value 
                                            ? 'border-blue-500 bg-blue-50' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}>
                                        <Icon className="w-6 h-6 mx-auto mb-2" />
                                        <span className="text-sm font-medium">{label}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Color Scheme</label>
                        <div className="flex space-x-3">
                            {[
                                { value: 'blue', color: 'bg-blue-500' },
                                { value: 'green', color: 'bg-green-500' },
                                { value: 'purple', color: 'bg-purple-500' },
                                { value: 'red', color: 'bg-red-500' },
                                { value: 'orange', color: 'bg-orange-500' }
                            ].map(({ value, color }) => (
                                <label key={value} className="cursor-pointer">
                                    <input
                                        type="radio"
                                        name="colorScheme"
                                        value={value}
                                        checked={appearanceData.colorScheme === value}
                                        onChange={(e) => handleAppearanceChange('colorScheme', e.target.value)}
                                        className="sr-only"
                                    />
                                    <div className={`w-8 h-8 rounded-full ${color} ${
                                        appearanceData.colorScheme === value 
                                            ? 'ring-2 ring-offset-2 ring-blue-500' 
                                            : ''
                                    }`}></div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Localization</h3>
                <div className="bg-white p-6 rounded-lg border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                            <select
                                value={appearanceData.language}
                                onChange={(e) => handleAppearanceChange('language', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="zh">Chinese</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                            <select
                                value={appearanceData.dateFormat}
                                onChange={(e) => handleAppearanceChange('dateFormat', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                <option value="DD MMM YYYY">DD MMM YYYY</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Time Format</label>
                            <select
                                value={appearanceData.timeFormat}
                                onChange={(e) => handleAppearanceChange('timeFormat', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="12">12-hour (AM/PM)</option>
                                <option value="24">24-hour</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                            <select
                                value={appearanceData.fontSize}
                                onChange={(e) => handleAppearanceChange('fontSize', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="extra-large">Extra Large</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium text-gray-800">Compact Mode</h4>
                                <p className="text-sm text-gray-600">Reduce spacing and padding for more content</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={appearanceData.compactMode}
                                    onChange={(e) => handleAppearanceChange('compactMode', e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <button
                onClick={() => handleSave('Appearance')}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                <Save className="w-4 h-4 mr-2" />
                Save Appearance
            </button>
        </div>
    );

    const SystemSettings = () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Backup & Data</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium text-gray-800">Auto Backup</h4>
                            <p className="text-sm text-gray-600">Automatically backup system data</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={systemData.autoBackup}
                                onChange={(e) => handleSystemChange('autoBackup', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
                            <select
                                value={systemData.backupFrequency}
                                onChange={(e) => handleSystemChange('backupFrequency', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                disabled={!systemData.autoBackup}
                            >
                                <option value="hourly">Hourly</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Data Retention (days)</label>
                            <input
                                type="number"
                                value={systemData.dataRetention}
                                onChange={(e) => handleSystemChange('dataRetention', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                min="1"
                                max="3650"
                            />
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <Download className="w-4 h-4 mr-2" />
                            Export Data
                        </button>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Upload className="w-4 h-4 mr-2" />
                            Import Data
                        </button>
                        <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                            <Database className="w-4 h-4 mr-2" />
                            Backup Now
                        </button>
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium text-gray-800">Cache Enabled</h4>
                            <p className="text-sm text-gray-600">Enable caching for better performance</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={systemData.cacheEnabled}
                                onChange={(e) => handleSystemChange('cacheEnabled', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Max File Upload Size (MB)</label>
                        <input
                            type="number"
                            value={systemData.maxFileSize}
                            onChange={(e) => handleSystemChange('maxFileSize', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            min="1"
                            max="100"
                        />
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">System Status</h3>
                <div className="bg-white p-6 rounded-lg border space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium text-gray-800">Maintenance Mode</h4>
                            <p className="text-sm text-gray-600">Enable maintenance mode for system updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={systemData.maintenanceMode}
                                onChange={(e) => handleSystemChange('maintenanceMode', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="font-medium text-gray-800">Debug Mode</h4>
                            <p className="text-sm text-gray-600">Enable detailed logging for troubleshooting</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={systemData.debugMode}
                                onChange={(e) => handleSystemChange('debugMode', e.target.checked)}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Danger Zone
                </h3>
                <p className="text-red-700 mb-4">These actions are irreversible. Please proceed with caution.</p>
                <div className="flex space-x-3">
                    <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Clear All Data
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        <SettingsIcon className="w-4 h-4 mr-2" />
                        Reset to Defaults
                    </button>
                </div>
            </div>
            
            <button
                onClick={() => handleSave('System')}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                <Save className="w-4 h-4 mr-2" />
                Save System Settings
            </button>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile': return <ProfileSettings />;
            case 'security': return <SecuritySettings />;
            case 'notifications': return <NotificationSettings />;
            case 'appearance': return <AppearanceSettings />;
            case 'system': return <SystemSettings />;
            default: return <ProfileSettings />;
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-600 mt-2">Manage your account and system preferences</p>
            </div>

            {/* Save Message */}
            {saveMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-green-800">{saveMessage}</span>
                    </div>
                </div>
            )}

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

export default Settings;
