import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ZoomIn, Trophy, Menu, Check, Lock, Search, LayoutGrid, Briefcase, GraduationCap, Users, Bookmark, ShieldCheck, ChevronRight, Flag } from 'lucide-react-native';
import DashboardMenuModal from '../components/dashboardMenuModal';
import { Svg, Polygon, Line } from 'react-native-svg';
import { useRouter } from 'expo-router';

const tabs = [
    { id: 'Education', icon: GraduationCap, count: 1 },
    { id: 'Mentors', icon: Users, count: 10 },
    { id: 'Jobs', icon: Briefcase, count: 3 },
];
// dummy data
const mentors = [
    { id: 1, name: 'Sample Mentor1', title: 'Senior Software Developer, Lead', company: 'V* Inc.', initial: 'M' },
    { id: 2, name: 'Sample Mentor2', title: 'Software Developer and Team Lead', company: 'A* Canada', initial: "S" }
];
const jobs = [
    { id: 1, title: 'Mid Level SW Developer', company: 'T* Inc.', location: 'Vancouver, CA' },
    { id: 2, title: 'iOS Architect', company: 'H* Inc.', location: 'Vancouver, CA' },
    { id: 3, title: 'Software Development Engineer II, Region Flexibility Engineering (RFE)', company: 'A* Canada', location: 'Vancouver, CA' }
];

const EducationContent = () => (
    <View className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm mb-3">
        <Text className="text-slate-800 font-black text-lg">Software developers and programmers</Text>
        <Text className="text-gray-400 text-sm mt-1">Masters</Text>
    </View>
);

const MentorsContent = () => (
    <View>
        {mentors.map(mentor => (
            <View key={mentor.id} className="bg-white border border-slate-100 rounded-xl p-6 flex-row items-center mb-3 shadow-sm">
                <View className="w-12 h-12 bg-lime-200 rounded-full items-center justify-center mr-4">
                    <Text className="text-slate-900 font-black">{mentor.initial}</Text>
                </View>
                <View className="flex-1">
                    <Text className="text-slate-800 font-black text-lg">{mentor.name}</Text>
                    <Text className="text-slate-400 text-xs">{mentor.title}</Text>
                </View>
                <TouchableOpacity className="bg-lime-300 px-4 py-2 rounded-full">
                    <Text className="text-slate-900 font-black text-xs">Connect</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
);

const JobsContent = () => (
    <View>
        {jobs.map(job => (
            <View key={job.id} className="bg-white border border-slate-100 rounded-2xl p-6 mb-3 shadow-sm">
                <Text className="text-slate-800 font-black text-lg">{job.title}</Text>
                <Text className="text-slate-800 font-bold text-sm mt-2">{job.location}</Text>
            </View>
        ))}
    </View>
);


export default function DashboardScreen() {
    const router = useRouter();

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Achivement Tab
    const [activeTab, setActiveTab] = useState('Jobs');

    const renderContent = () => {
        const ContentMap: Record<string, React.ReactNode> = {
            Education: <EducationContent />,
            Mentors: <MentorsContent />,
            Jobs: <JobsContent />
        };
        return ContentMap[activeTab] || null;
    };

    // Bottom Navigation Bar
    const [activeNav, setActiveNav] = useState('Home');

    return (
        <SafeAreaView className="flex-1 bg-white">
            <DashboardMenuModal
                isVisible={isMenuVisible}
                onClose={() => setIsMenuVisible(false)}
                router={router}
            />
            {/* Navigation Bar */}
            <View className="px-2 py-4 flex-row justify-between items-center border-b border-gray-100 bg-black">
                <Image
                    source={require('../assets/gigsup_resources/gigsup-logo.png')}
                    style={{ width: 100, height: 30 }}
                    resizeMode="contain"
                />
                <TouchableOpacity onPress={() => setIsMenuVisible(true)}>
                    <Menu size={24} color="#ffffffff" />
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Welcome Section */}
                <View className="px-6 pt-10 pb-8 bg-white">
                    <View className="flex-row items-center flex-wrap mb-2">
                        <Text className="text-slate-900 text-3xl font-black">Welcome back, </Text>
                        <View className="bg-lime-100 px-2 rounded-md">
                            <Text className="text-slate-900 text-3xl font-black">Jun</Text>
                        </View>
                    </View>
                    <Text className="text-gray-400 text-lg font-medium">
                        Plan your path to the right career
                    </Text>
                </View>

                {/* Progress Indicator */}
                <View className="px-6 py-6 bg-white border-t border-gray-50 items-center">
                    <View className="flex-row items-center justify-center w-full max-w-[280px]">
                        {/* Step 1: Completed */}
                        <View className="w-10 h-10 rounded-full bg-lime-300 items-center justify-center">
                            <Check size={20} color="#000000" strokeWidth={3} />
                        </View>
                        {/* Connector Line 1 */}
                        <View className="flex-1 h-[2px] bg-lime-300 mx-2" />
                        {/* Step 2: Completed */}
                        <View className="w-10 h-10 rounded-full bg-lime-300 items-center justify-center">
                            <Check size={20} color="#000000" strokeWidth={3} />
                        </View>
                        {/* Connector Line 2 */}
                        <View className="flex-1 h-[2px] bg-lime-300 mx-2" />
                        {/* Step 3: Current/Pending */}
                        <View className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center border border-gray-100">
                            <Text className="text-slate-400 font-black text-lg">3</Text>
                        </View>
                    </View>
                </View>

                {/* Discover Card Section */}
                <View className="px-4 pb-10 bg-gray-200">
                    <View className="bg-white rounded-[40px] p-8 mt-5 shadow-sm border border-slate-50">

                        {/* Header: Icon & Title */}
                        <View className="items-center mb-10">
                            <View className="w-16 h-16 bg-lime-300 rounded-full items-center justify-center mb-6">
                                <ZoomIn size={30} color="#000000" strokeWidth={2.5} />
                            </View>
                            <Text className="text-slate-900 text-4xl font-black mb-2 tracking-[3px]">DISCOVER</Text>
                            <Text className="text-gray-400 text-md font-medium" numberOfLines={1}>
                                Build your profile through guided steps
                            </Text>
                        </View>

                        {/* Profile Progress Header */}
                        <View className="flex-row justify-between items-end mb-3">
                            <Text className="text-slate-500 font-bold text-base">Profile Progress</Text>
                            <View className="bg-lime-300 px-3 py-1 rounded-full">
                                <Text className="text-slate-900 font-black text-xs">2 of 3</Text>
                            </View>
                        </View>

                        {/* Progress Bar */}
                        <View className="w-full h-1.5 bg-lime-100 rounded-full mb-8 overflow-hidden">
                            <View className="w-2/3 h-full bg-lime-400 rounded-full" />
                        </View>

                        {/* Task List */}
                        <View className="space-y-4">
                            {[
                                { title: 'Upload Resume', sub: 'Match to real jobs', done: true },
                                { title: 'VISI Assessment', sub: 'Values & interests mapped', done: true },
                                { title: 'Connect LinkedIn', sub: 'Import your profile', done: true },
                                { title: 'Journal My Future Self', sub: 'Reflect on your goals', done: false, locked: true },
                            ].map((item, i) => (
                                <View key={i} className="flex-row items-center bg-white border border-slate-50 p-5 rounded-3xl shadow-sm mb-3">
                                    <View className={`w-12 h-12 rounded-2xl items-center justify-center mr-4 ${item.locked ? 'bg-slate-50' : 'bg-lime-50/50'}`}>
                                        {item.locked ? (
                                            <Lock size={20} color="#CBD5E1" />
                                        ) : (
                                            <Check size={20} color="#A3E635" strokeWidth={3} />
                                        )}
                                    </View>
                                    <View className="flex-1">
                                        <Text className={`text-lg font-bold ${item.locked ? 'text-slate-400' : 'text-slate-600'}`}>
                                            {item.title}
                                        </Text>
                                        <Text className="text-slate-300 text-sm font-medium">{item.sub}</Text>
                                    </View>
                                    {item.done && (
                                        <View className="bg-lime-100/50 p-1 rounded-full">
                                            <Check size={16} color="#A3E635" strokeWidth={4} />
                                        </View>
                                    )}
                                </View>
                            ))}
                        </View>

                        {/* Footer Status Bar */}
                        <View className="mt-8 bg-lime-50/30 py-4 rounded-2xl items-center">
                            <View className="flex-row items-center">
                                <View className="w-2 h-2 rounded-full bg-lime-400 mr-2" />
                                <Text className="text-slate-400 font-bold text-sm">All steps completed</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Match Section */}
                <View className="px-4 pb-10 bg-gray-200">
                    <View className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50">

                        {/* Header: Icon & Title */}
                        <View className="items-center mb-10 relative">
                            <TouchableOpacity className="absolute right-0 top-0 w-8 h-8 bg-slate-50 rounded-full items-center justify-center">
                                <ChevronRight size={18} color="#A3E635" />
                            </TouchableOpacity>

                            <View className="w-16 h-16 bg-lime-300 rounded-full items-center justify-center mb-6">
                                <ShieldCheck size={30} color="#000000" />
                            </View>
                            <Text className="text-slate-900 text-4xl font-black mb-2 tracking-[3px]">MATCH</Text>
                            <Text className="text-gray-400 text-md font-medium text-center">
                                Reveal careers that align with your profile
                            </Text>
                        </View>

                        {/* Radar Chart Card */}
                        <View className="bg-slate-50/50 rounded-3xl p-6 mb-10 items-center">
                            <Text className="text-slate-500 font-bold text-xs mb-4">Values</Text>

                            {/* Radar Chart Mockup (SVG) */}
                            <View className="w-48 h-48 items-center justify-center relative">
                                <Text className="absolute left-[-20] top-1/2 text-[10px] font-bold text-slate-500">Identity</Text>
                                <Text className="absolute right-[-20] top-1/2 text-[10px] font-bold text-slate-500">Interests</Text>
                                <Text className="absolute bottom-[-10] text-[10px] font-bold text-slate-500">Skills</Text>

                                <Svg width="140" height="140" viewBox="0 0 100 100">
                                    <Polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                                    <Line x1="50" y1="10" x2="50" y2="90" stroke="#E2E8F0" strokeWidth="1" />
                                    <Line x1="10" y1="50" x2="90" y2="50" stroke="#E2E8F0" strokeWidth="1" />
                                    {/* Active Data Area */}
                                    <Polygon points="50,20 85,50 50,90 15,50" fill="#A3E635" fillOpacity="0.2" stroke="#A3E635" strokeWidth="2" />
                                </Svg>
                            </View>

                            {/* Radar Chart Stats */}
                            <View className="flex-row flex-wrap justify-between w-full mt-8">
                                {[
                                    { label: 'Values', val: '86%', color: 'text-lime-400' },
                                    { label: 'Interests', val: '85%', color: 'text-lime-400' },
                                    { label: 'Skills', val: '100%', color: 'text-lime-300' },
                                    { label: 'Identity', val: '100%', color: 'text-lime-300' },
                                ].map((stat, i) => (
                                    <View key={i} className="w-[45%] flex-row justify-between mb-2">
                                        <Text className="text-slate-400 font-bold text-sm">{stat.label}</Text>
                                        <Text className={`${stat.color} font-black text-sm`}>{stat.val}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>

                        {/* Saved Careers Section */}
                        <View className="items-center mb-8">
                            <Text className="text-slate-900 text-2xl font-black mb-2">Your Saved Careers</Text>
                            <Text className="text-gray-400 text-base font-medium">Tap a career to set it as your focus</Text>
                        </View>

                        {/* Career Cards */}
                        <View className="space-y-4">
                            {/* Card 1: Focused */}
                            <View className="bg-white border-2 border-lime-400 rounded-3xl p-6 flex-row items-center mb-4 shadow-sm">
                                <View className="w-14 h-14 bg-lime-200 rounded-full items-center justify-center mr-4">
                                    <Text className="text-slate-900 font-black text-sm">49%</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-slate-800 font-black text-lg leading-6">Computer systems developers and programmers</Text>
                                    <Text className="text-slate-400 text-xs mt-1">$61,297 - $78,811 · Very Good growth</Text>
                                </View>
                                <Check size={20} color="#A3E635" strokeWidth={3} />
                            </View>

                            {/* Card 2: Regular */}
                            <View className="bg-white border border-slate-100 rounded-3xl p-6 flex-row items-center mb-6 shadow-sm">
                                <View className="w-14 h-14 bg-lime-100 rounded-full items-center justify-center mr-4">
                                    <Text className="text-slate-900 font-black text-sm">56%</Text>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-slate-800 font-black text-lg leading-6">Software developers and programmers</Text>
                                    <Text className="text-slate-400 text-xs mt-1">$69,087 - $88,826 · Excellent growth</Text>
                                </View>
                                <TouchableOpacity className="bg-slate-50 px-4 py-2 rounded-full">
                                    <Text className="text-slate-400 font-bold text-xs">Set Focus</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Report Button */}
                        <TouchableOpacity className="bg-lime-200/50 py-5 rounded-2xl flex-row items-center justify-center mt-4">
                            <Flag size={18} color="#64748B" className="mr-2" />
                            <Text className="text-slate-600 font-bold text-base ml-2">Missing a career? Report it</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* Achieve Section */}
                <View className="px-4 pb-20 bg-gray-200">
                    <View className="bg-white rounded-[40px] p-4 shadow-sm border border-slate-50">
                        <View className="items-center mb-10 relative">
                            <TouchableOpacity className="absolute right-0 top-0 w-8 h-8 bg-slate-50 rounded-full items-center justify-center">
                                <ChevronRight size={18} color="#A3E635" />
                            </TouchableOpacity>

                            <View className="w-16 h-16 bg-lime-300 rounded-full items-center justify-center mb-6">
                                <Trophy size={30} color="#000000" />
                            </View>
                            <Text className="text-slate-900 text-4xl font-black mb-2 tracking-[3px]">ACHIEVE</Text>
                            <Text className="text-gray-400 text-sm font-medium text-center" numberOfLines={1}>
                                Path to Software developers and programmers
                            </Text>
                        </View>

                        {/* Tab Navigation */}
                        <View className="bg-slate-100 p-1.5 rounded-xl flex-row items-center mb-8">
                            {tabs.map((tab) => {
                                const isCurrentTab = activeTab === tab.id;

                                return (
                                    <TouchableOpacity
                                        key={tab.id}
                                        onPress={() => setActiveTab(tab.id)}
                                        className="flex-1 py-3 px-4 flex-row items-center justify-center rounded-xl"
                                        style={{
                                            backgroundColor: isCurrentTab ? '#FFFFFF' : 'transparent',
                                            borderColor: isCurrentTab ? '#D9F99D' : 'transparent',
                                            borderWidth: isCurrentTab ? 1 : 0,
                                            elevation: isCurrentTab ? 2 : 0,
                                            shadowOpacity: isCurrentTab ? 0.05 : 0
                                        }}
                                    >
                                        <tab.icon size={18} color={isCurrentTab ? '#A3E635' : '#94A3B8'} className="mr-2" />
                                        <Text
                                            style={{ color: isCurrentTab ? '#1E293B' : '#94A3B8' }}
                                            className="text-[10px] mr-2 font-black"
                                        >
                                            {tab.id}
                                        </Text>
                                        <View
                                            style={{ backgroundColor: isCurrentTab ? '#D9F99D' : '#CBD5E1' }} // bg-lime-300 : bg-slate-300
                                            className="w-5 h-5 rounded-full items-center justify-center"
                                        >
                                            <Text
                                                style={{ color: isCurrentTab ? '#0F172A' : '#FFFFFF' }}
                                                className="text-[10px] font-black"
                                            >
                                                {tab.count}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        <View className="min-h-[150px]">
                            <View style={{ display: activeTab === 'Education' ? 'flex' : 'none' }}>
                                <EducationContent />
                            </View>
                            <View style={{ display: activeTab === 'Mentors' ? 'flex' : 'none' }}>
                                <MentorsContent />
                            </View>
                            <View style={{ display: activeTab === 'Jobs' ? 'flex' : 'none' }}>
                                <JobsContent />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View className="bg-white border-t border-slate-100 px-4 py-3 flex-row justify-between items-center">
                {[
                    { name: 'Home', icon: LayoutGrid },
                    { name: 'Jobs', icon: Briefcase },
                    { name: 'Education', icon: GraduationCap },
                    { name: 'Mentors', icon: Users },
                    { name: 'Saved', icon: Bookmark },
                ].map((item, i) => {
                    const isNavActive = activeNav === item.name;
                    return (
                        <TouchableOpacity
                            key={i}
                            onPress={() => setActiveNav(item.name)}
                            className={`items-center justify-center px-4 py-2 rounded-2xl ${isNavActive ? 'bg-lime-50' : ''}`}
                        >
                            <item.icon
                                size={24}
                                color={isNavActive ? '#1E293B' : '#94A3B8'}
                                strokeWidth={isNavActive ? 2.5 : 2}
                            />
                            <Text className={`text-[11px] mt-1 font-bold ${isNavActive ? 'text-slate-800' : 'text-slate-400'}`}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView >
    );
}