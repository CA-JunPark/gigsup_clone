import React from 'react';
import { View, Text, Modal, ScrollView, TouchableOpacity, Image } from 'react-native';
import { X } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MenuModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const MenuModal = ({ isVisible, onClose }: MenuModalProps) => {
    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent={false}
            onRequestClose={onClose}
        >
            <SafeAreaView className="flex-1 bg-[#0A0A0A] px-6 py-8">
                {/* Header with Close Button */}
                <View className="flex-row justify-between items-center mb-12">
                    <Image
                        source={require('../assets/gigsup_resources/gigsup-logo.png')}
                        style={{ width: 80, height: 24, opacity: 0.5 }}
                        resizeMode="contain"
                    />
                    <TouchableOpacity onPress={onClose}>
                        <X size={32} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                    {/* Students Section */}
                    <View className="items-center mb-8 w-full">
                        <View className="flex-row items-center mb-4">
                            <Text className="text-white text-xl font-bold mr-2">Students</Text>
                            <Text className="text-white text-xs">▼</Text>
                        </View>
                        <View className="bg-[#1A1A1A] w-full py-6 rounded-2xl items-center">
                            <Text className="text-gray-400 text-lg font-bold mb-6">Career Search</Text>
                            <Text className="text-gray-400 text-lg font-bold mb-6">Job Postings</Text>
                            <Text className="text-gray-400 text-lg font-bold">The Community</Text>
                        </View>
                    </View>

                    {/* Standalone Links */}
                    <TouchableOpacity className="mb-10">
                        <Text className="text-white text-xl font-bold">Career Search</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="mb-10">
                        <Text className="text-white text-xl font-bold">Job Posting</Text>
                    </TouchableOpacity>

                    {/* Company Section */}
                    <View className="items-center mb-12 w-full">
                        <View className="flex-row items-center mb-4">
                            <Text className="text-white text-xl font-bold mr-2">Company</Text>
                            <Text className="text-white text-xs">▼</Text>
                        </View>
                        <View className="bg-[#1A1A1A] w-full py-6 rounded-2xl items-center">
                            <Text className="text-gray-400 text-lg font-bold mb-6">About Us</Text>
                            <Text className="text-gray-400 text-lg font-bold">Careers</Text>
                        </View>
                    </View>

                    <View className="w-full h-[1px] bg-gray-800 mb-10" />

                    {/* Auth Buttons */}
                    <TouchableOpacity className="w-full border border-gray-600 py-5 rounded-2xl items-center mb-4">
                        <Text className="text-white text-lg font-black">Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-full bg-lime-300 py-5 rounded-2xl items-center mb-10">
                        <Text className="text-black text-lg font-black">Join for Free</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
};

export default MenuModal;