import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, TextInput } from 'react-native';
import { X, Mail, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react-native';

interface LoginModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const LoginModal = ({ isVisible, onClose }: LoginModalProps) => {
    const [isEmailExpanded, setIsEmailExpanded] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View className="flex-1 justify-center items-center bg-black/60 px-6">
                <View className="bg-white w-full rounded-[32px] p-8 items-center relative">

                    {/* Close Button */}
                    <TouchableOpacity onPress={onClose} className="absolute top-6 right-6">
                        <X size={24} color="#94A3B8" />
                    </TouchableOpacity>

                    <Text className="text-slate-900 text-[28px] font-black mb-10">Welcome back</Text>

                    {/* Google*/}
                    <TouchableOpacity className="w-full border border-slate-200 py-4 rounded-xl flex-row items-center justify-center mb-4">
                        <Image source={require('../assets/gigsup_resources/google.png')} className="w-5 h-5 mr-3" />
                        <Text className="text-slate-700 font-bold text-lg">Sign in with Google</Text>
                    </TouchableOpacity>

                    {/* LinkedIn */}
                    <TouchableOpacity className="w-full border border-slate-200 py-4 rounded-xl flex-row items-center justify-center mb-4">
                        <Image source={require('../assets/gigsup_resources/linkedin.png')} className="w-5 h-5 mr-3" />
                        <Text className="text-slate-700 font-bold text-lg">Sign in with LinkedIn</Text>
                    </TouchableOpacity>

                    <View className="flex-row items-center w-full my-6">
                        <View className="flex-1 h-[1px] bg-slate-100" />
                        <Text className="mx-4 text-slate-400 font-bold">or</Text>
                        <View className="flex-1 h-[1px] bg-slate-100" />
                    </View>

                    {/* Email */}
                    <TouchableOpacity
                        onPress={() => setIsEmailExpanded(!isEmailExpanded)}
                        className={`w-full border border-slate-200 py-4 rounded-xl flex-row items-center justify-center ${isEmailExpanded ? 'mb-6' : 'mb-10'}`}
                    >
                        <Mail size={20} color="#64748B" className="mr-6" />
                        <Text className="text-slate-700 font-bold text-lg mr-2">Sign in with Email</Text>
                        {isEmailExpanded ? <ChevronUp size={20} color="#64748B" /> : <ChevronDown size={20} color="#64748B" />}
                    </TouchableOpacity>
                    {isEmailExpanded && (
                        <View className="w-full mb-8">
                            {/* Email Input */}
                            <View className="mb-4">
                                <Text className="text-slate-700 font-bold text-sm mb-2">
                                    Email <Text className="text-red-500">*</Text>
                                </Text>
                                <TextInput
                                    placeholder="Enter your email address..."
                                    placeholderTextColor="#94A3B8"
                                    className="w-full border border-slate-200 p-4 rounded-xl text-slate-900"
                                />
                            </View>

                            {/* PW Input*/}
                            <View className="mb-6">
                                <Text className="text-slate-700 font-bold text-sm mb-2">
                                    Password <Text className="text-red-500">*</Text>
                                </Text>
                                <View className="relative">
                                    <TextInput
                                        placeholder="Enter your password"
                                        placeholderTextColor="#94A3B8"
                                        secureTextEntry={!isPasswordVisible}
                                        className="w-full border border-slate-200 p-4 rounded-xl text-slate-900 pr-12"
                                    />
                                    <TouchableOpacity
                                        className="absolute right-4 top-4"
                                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                        {isPasswordVisible ? (
                                            <EyeOff size={20} color="#64748B" />
                                        ) : (
                                            <Eye size={20} color="#CBD5E1" />
                                        )}
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Log in */}
                            <TouchableOpacity className="w-full bg-[#1E293B] py-5 rounded-xl items-center">
                                <Text className="text-white font-black text-lg">Log in</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    {/* Sign Up */}
                    <View className="flex-row">
                        <Text className="text-slate-400 font-bold">Don't have an account? </Text>
                        <TouchableOpacity>
                            <Text className="text-slate-900 font-black">Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default LoginModal;