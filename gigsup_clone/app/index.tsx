import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Menu, Check, ArrowRight, Search, Target } from 'lucide-react-native';

export default function HomeScreen() {
  // Entry Video
  const videoSource = require('../assets/gigsup_resources/hero-video.mp4');
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Navigation Bar */}
        <View className="px-2 py-4 flex-row justify-between items-center border-b border-gray-100 bg-black">
          <Image
            source={require('../assets/gigsup_resources/gigsup-logo.png')}
            style={{ width: 100, height: 30 }}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Menu size={24} color="#ffffffff" />
          </TouchableOpacity>
        </View>

        {/* Entry Video Section */}
        <View style={styles.entryVideoContainer}>
          {/* Background Video */}
          <VideoView
            player={player}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            nativeControls={false}
          />

          {/* White Overlay Tint */}
          <View className="absolute inset-0 bg-white/10" />

          {/* Text Overlay - absolute*/}
          <View className="absolute inset-0 flex justify-center items-center px-6">
            <Text className="text-slate-900 text-4xl font-black italic text-center">
              <Text className="text-lime-300 font-black not-italic">Discover</Text> You
            </Text>

            {/* Match to Careers that Fit */}
            <Text className="text-slate-900 text-4xl font-black text-center mt-2">
              <Text className="text-lime-300 font-black">Match</Text> to Careers that Fit
            </Text>

            {/* Achieve Your Career Advantage */}
            <Text className="text-slate-900 text-4xl font-black italic text-center mt-2">
              <Text className="text-lime-300 font-black not-italic">Achieve</Text> Your Career Advantage
            </Text>
          </View>
        </View>

        {/* Network Section */}
        <View className="px-6 py-12 items-center">
          <View className="bg-lime-300 px-1 py-1 min-w-[300px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-[11px] font-black uppercase tracking-[0.2em]" numberOfLines={1}>
              The #1 Career Intelligence Network
            </Text>
          </View>
          <Text className="text-2xl font-bold text-center text-black mb-4">Unlock Your Potential in a Changing World of Work</Text>
          <Text className="text-gray-400 text-center text-black leading-6 mb-8">
            From high school to your first post-University
            job to your next career move, Gigsup helps
            you uncover your strengths, connect them
            to careers that fit, and take focused action
            with clarity and advantage - through a
            personalized job, mentor, and education
            plan.
          </Text>
          <TouchableOpacity className="bg-lime-300 px-8 py-4 rounded-xl flex-row items-center active:opacity-80">
            <Text className="text-slate-900 font-black mr-2 text-lg uppercase">Join for Free</Text>
            <ArrowRight size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        {/* Pricing Section */}
        <View className="px-6 py-16">
          <Text className="text-3xl font-bold text-center mb-10">Choose your career plan</Text>

          {/* The Squeeze Card */}
          <View className="bg-white border-2 border-blue-600 p-8 rounded-3xl mb-8 relative">
            <View className="bg-blue-600 absolute -top-4 left-1/2 -ml-12 px-4 py-1 rounded-full">
              <Text className="text-white text-xs font-bold uppercase">Popular</Text>
            </View>
            <Text className="text-2xl font-bold mb-2">The Squeeze</Text>
            <Text className="text-gray-500 text-sm mb-4">Goal: Turn insight into direction</Text>
            <View className="flex-row items-end mb-6">
              <Text className="text-4xl font-bold">$10</Text>
              <Text className="text-gray-500 mb-1 ml-1">/month</Text>
            </View>
            <View className="mb-8">
              {['Full strengths profile', 'Full mentor matching', 'Personalized job matching'].map((feature, i) => (
                <View key={i} className="flex-row items-center mt-3">
                  <Check size={18} color="#2563eb" />
                  <Text className="ml-2 text-gray-700">{feature}</Text>
                </View>
              ))}
            </View>
            <TouchableOpacity className="bg-blue-600 py-4 rounded-xl items-center shadow-lg active:scale-95">
              <Text className="text-white font-bold text-lg">Get The Squeeze</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View className="px-6 py-12 bg-gray-900 items-center">
          <Text className="text-white opacity-60 text-center mb-6">© 2026 Gigsup. All Rights Reserved.</Text>
          <View className="flex-row justify-center">
            <Text className="text-white opacity-80 mx-3 text-sm">Privacy Policy</Text>
            <Text className="text-white opacity-80 mx-3 text-sm">Terms of Service</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  entryVideoContainer: {
    width: '100%',
    height: 500,
    position: 'relative',
  },
});