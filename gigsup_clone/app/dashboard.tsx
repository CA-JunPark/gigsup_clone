import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu } from 'lucide-react-native';
import DashboardMenuModal from '../components/dashboardMenuModal';

export default function DashboardScreen() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top']}>
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

            <View className="flex-1 items-center justify-center">

            </View>
        </SafeAreaView>
    );
}