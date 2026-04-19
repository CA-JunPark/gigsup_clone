import { View, Text, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-blue-600">Gigsup Clone</Text>
        <Text className="text-gray-500 mt-2">Setup</Text>
      </View>
    </SafeAreaView>
  );
}