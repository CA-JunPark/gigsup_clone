import React from 'react';
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface DashboardMenuModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const DashboardMenuModal = ({ isVisible, onClose }: DashboardMenuModalProps) => {
    const router = useRouter();

    const handleLogout = () => {
        onClose();
        setTimeout(() => {
            router.replace('/');
        }, 100);
    };

    return (
        <Modal visible={isVisible} animationType="fade" transparent={false}>
            <SafeAreaView className="flex-1 bg-[#0A0A0A] px-6 py-8">
                {/* Header */}
                <View className="flex-row justify-between items-center mb-12">
                    <Image
                        source={require('../assets/gigsup_resources/gigsup-logo.png')}
                        style={{ width: 80, height: 24, opacity: 0.1 }}
                        resizeMode="contain"
                    />
                    <TouchableOpacity onPress={onClose}>
                        <X size={32} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                {/* Menu Items Container */}
                <View className="flex-1 justify-center items-center">
                    {/* 상단 구분선 */}
                    <View className="w-full h-[1px] bg-gray-800 mb-8" />

                    {/* Dashboard Button */}
                    <TouchableOpacity
                        className="w-full bg-lime-300 py-5 rounded-2xl items-center mb-4 active:opacity-80"
                        onPress={onClose}
                    >
                        <Text className="text-black text-xl font-black italic">Dashboard</Text>
                    </TouchableOpacity>

                    {/* Log Out Button */}
                    <TouchableOpacity
                        className="w-full bg-[#1A1A1A] border border-gray-600 py-5 rounded-2xl items-center active:opacity-80"
                        onPress={handleLogout}
                    >
                        <Text className="text-white text-xl font-black">Log Out</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default DashboardMenuModal;