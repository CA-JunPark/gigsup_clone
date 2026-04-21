import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, TextInput } from 'react-native';
import { X, Mail, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface LoginModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const LoginModal = ({ isVisible, onClose }: LoginModalProps) => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isEmailExpanded, setIsEmailExpanded] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [pw, setPW] = useState('');

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    const handleLogin = () => {
        // Check Email Format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email');
            return;
        }

        setEmailError('');

        // For Test Environment
        if (email !== "test@gmail.com" || pw !== "1234") {
            setErrorMessage("Invalid email or password");
        }
        else {
            // Login Success -> go to dash board
            onClose();

            setTimeout(() => {
                router.replace('/dashboard');
            }, 100);
        }
    };

    const handleGoogleLogin = () => {
        onClose();

        setTimeout(() => {
            router.replace('/dashboard');
        }, 100);
    };

    const handleLinkedInLogin = () => {
        onClose();

        setTimeout(() => {
            router.replace('/dashboard');
        }, 100);
    };

    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View className="flex-1 justify-center items-center bg-black/60 px-6">
                <View className="bg-white w-full rounded-[32px] p-8 items-center relative">

                    {/* Close Button */}
                    <TouchableOpacity onPress={onClose} className="absolute top-6 right-6">
                        <X size={24} color="#94A3B8" />
                    </TouchableOpacity>

                    <Text className="text-slate-900 text-[28px] font-black mb-10">Welcome back</Text>

                    {/* Error Message */}
                    {errorMessage && (
                        <View className="w-full bg-red-50 border border-red-200 p-4 rounded-xl mb-6 items-left">
                            <Text className="text-red-500 font-medium">{errorMessage}</Text>
                        </View>
                    )}

                    {/* Google*/}
                    <TouchableOpacity
                        className="w-full border border-slate-200 py-4 rounded-xl flex-row items-center justify-center mb-4"
                        onPress={handleGoogleLogin}>
                        <Image source={require('../assets/gigsup_resources/google.png')} className="w-5 h-5 mr-3" />
                        <Text className="text-slate-700 font-bold text-lg">Sign in with Google</Text>
                    </TouchableOpacity>

                    {/* LinkedIn */}
                    <TouchableOpacity
                        className="w-full border border-slate-200 py-4 rounded-xl flex-row items-center justify-center mb-4"
                        onPress={handleLinkedInLogin}>
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
                                    className={`w-full border p-4 rounded-xl text-slate-900 ${emailError ? 'border-red-400' : 'border-slate-200'
                                        }`}
                                    value={email}
                                    onChangeText={setEmail}
                                />
                                {emailError ? (
                                    <Text className="text-red-400 text-xs mt-2 ml-1 font-medium">
                                        {emailError}
                                    </Text>
                                ) : null}
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
                                        value={pw}
                                        onChangeText={setPW}
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
                            <TouchableOpacity
                                className="w-full bg-lime-300 py-5 rounded-xl items-center"
                                onPress={handleLogin}>
                                <Text className="text-slate-900 font-black text-lg">Log in</Text>
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