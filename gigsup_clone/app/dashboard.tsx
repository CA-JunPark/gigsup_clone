import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu, Check, Lock, Search, LayoutGrid, Briefcase, GraduationCap, Users, Bookmark, ShieldCheck, ChevronRight, Flag } from 'lucide-react-native';
import DashboardMenuModal from '../components/dashboardMenuModal';
import { Svg, Polygon, Line } from 'react-native-svg';

export default function DashboardScreen() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-white">
            <DashboardMenuModal
                isVisible={isMenuVisible}
                onClose={() => setIsMenuVisible(false)}
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
                                <Search size={30} color="#000000" strokeWidth={2.5} />
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
            </ScrollView>

            {/* Bottom Navigation Bar */}
            <View className="bg-white border-t border-slate-100 px-4 py-3 flex-row justify-between items-center">
                {[
                    { name: 'Home', icon: LayoutGrid, active: true },
                    { name: 'Jobs', icon: Briefcase, active: false },
                    { name: 'Education', icon: GraduationCap, active: false },
                    { name: 'Mentors', icon: Users, active: false },
                    { name: 'Saved', icon: Bookmark, active: false },
                ].map((item, i) => (
                    <TouchableOpacity
                        key={i}
                        className={`items-center justify-center px-4 py-2 rounded-2xl ${item.active ? 'bg-lime-50' : ''}`}
                    >
                        <item.icon
                            size={24}
                            color={item.active ? '#1E293B' : '#94A3B8'}
                            strokeWidth={item.active ? 2.5 : 2}
                        />
                        <Text
                            className={`text-[11px] mt-1 font-bold ${item.active ? 'text-slate-800' : 'text-slate-400'}`}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView >
    );
}