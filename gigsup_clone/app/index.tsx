import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Animated, Dimensions, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Menu, Check, ArrowRight, Search, Target } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  // Entry Video
  const videoSource = require('../assets/gigsup_resources/hero-video.mp4');
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  // Path Finding
  const [activeTab, setActiveTab] = useState('High School');

  const paths = [
    {
      id: 'High School',
      icon: '🎓',
      title: "I'm in High School",
      badge: "EXPLORE WHAT'S POSSIBLE",
      desc: "Discover who you are and plan where you're going. Build a post-secondary admission & career plan aligned to your strengths.",
      cta: "Get Your Post-Secondary Admission Plan",
    },
    {
      id: 'University',
      icon: '📚',
      title: "I'm in Uni / College",
      badge: "LAND YOUR FIRST ROLE",
      desc: "Discover your edge. Match your degree to opportunity. See the career paths your major unlocks & identify co-ops / internships to help you standout.",
      cta: "Discover the Top 5 Career Matches for Your Degree",
    },
    {
      id: 'Mid-Career',
      icon: '🚀',
      title: "I'm Mid-Career",
      badge: "OWN YOUR NEXT CHAPTER",
      desc: "Rediscover your strengths. Rematch your path. Get a personalized edication plan, methor match & strategic job postings just for you.",
      cta: "Get Your Personalized Career Plan",
    }
  ];

  const currentPath = paths.find(p => p.id === activeTab) || paths[0];

  // Career Clarity steps
  const steps = [
    {
      id: "01",
      icon: "🔍",
      title: "DISCOVER",
      summary: "Understand who you are",
      desc: "Upload your transcript or resume or LinkedIn profile or journal or complete our VISI assessment. We analyze your skills, interests, personality & values to build your unique profile.",
    },
    {
      id: "02",
      icon: "🎯",
      title: "MATCH",
      summary: "Find & Explore careers that fit you",
      desc: "Get matched with careers based on your unique profile. See skills required, supply & demand by region, compensation, education & growth paths.",
    },
    {
      id: "03",
      icon: "⚡",
      title: "ACHIEVE",
      summary: "Close the gap & get your career advantage",
      desc: "See your custom education plan to close all your skill gaps, match with a mentor, and receive curated job postings.",
    }
  ]

  // universities
  const row1 = [
    { name: 'University of Waterloo', source: require('../assets/gigsup_resources/logos/universities/waterloo.png') },
    { name: 'Queen\'s University', source: require('../assets/gigsup_resources/logos/universities/queens.png') },
    { name: 'Western University', source: require('../assets/gigsup_resources/logos/universities/western.png') },
    { name: 'University of Alberta', source: require('../assets/gigsup_resources/logos/universities/uofa.png') },
    { name: 'University of Toronto', source: require('../assets/gigsup_resources/logos/universities/uoft.png') },
    { name: 'UBC', source: require('../assets/gigsup_resources/logos/universities/ubc.png') },
    { name: 'MacGill University', source: require('../assets/gigsup_resources/logos/universities/mcgill.png') },
    { name: 'University of Alberta', source: require('../assets/gigsup_resources/logos/universities/uofa.png') },
  ];
  const row2 = [
    { name: 'University of Victoria', source: require('../assets/gigsup_resources/logos/universities/uvic.png') },
    { name: 'York University', source: require('../assets/gigsup_resources/logos/universities/york.png') },
    { name: 'Dalhousie University', source: require('../assets/gigsup_resources/logos/universities/dal.png') },
    { name: 'University of Calgary', source: require('../assets/gigsup_resources/logos/universities/ucalgary.png') },
    { name: 'SFU', source: require('../assets/gigsup_resources/logos/universities/sfu.png') },
    { name: 'Toronto Metropolitan', source: require('../assets/gigsup_resources/logos/universities/tmu.png') },
    { name: 'University of Ottawa', source: require('../assets/gigsup_resources/logos/universities/uottawa.png') },
  ];
  const row3 = [
    { name: 'Capilano University', source: require('../assets/gigsup_resources/logos/universities/capu.png') },
    { name: 'Langara College', source: require('../assets/gigsup_resources/logos/universities/langara.png') },
    { name: 'Douglas College', source: require('../assets/gigsup_resources/logos/universities/douglas.png') },
    { name: 'BCIT', source: require('../assets/gigsup_resources/logos/universities/bcit.png') },
    { name: 'UCW', source: require('../assets/gigsup_resources/logos/universities/ucw.png') },
    { name: 'Alexander College', source: require('../assets/gigsup_resources/logos/universities/alexander.png') },
    { name: 'KPU', source: require('../assets/gigsup_resources/logos/universities/kpu.png') },
  ];

  const scrollX1 = useRef(new Animated.Value(0)).current;
  const scrollX2 = useRef(new Animated.Value(0)).current;
  const scrollX3 = useRef(new Animated.Value(0)).current;

  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [width3, setWidth3] = useState(0);

  const LogoCard = ({ item }: { item: any }) => (
    <View className="bg-white border border-gray-100 px-4 py-2 rounded-2xl flex-row items-center mx-2 shadow-sm">
      <Image source={item.source} className="w-6 h-6 mr-2" resizeMode="contain" />
      <Text className="text-gray-600 font-bold text-[14px]">{item.name}</Text>
    </View>
  );

  // Employers
  const employerRow = [
    { name: 'Air Canada', source: require('../assets/gigsup_resources/logos/employers/aircanada.png') },
    { name: 'BC Hydro', source: require('../assets/gigsup_resources/logos/employers/bchydro.png') },
    { name: 'BlackBerry', source: require('../assets/gigsup_resources/logos/employers/blackberry.png') },
    { name: 'BMO', source: require('../assets/gigsup_resources/logos/employers/bmo.png') },
    { name: 'Canadian Tire', source: require('../assets/gigsup_resources/logos/employers/canadiantirecorp.png') },
    { name: 'CIBC', source: require('../assets/gigsup_resources/logos/employers/cibc.png') },
    { name: 'Desjardins', source: require('../assets/gigsup_resources/logos/employers/desjardins.png') },
    { name: 'Enbridge', source: require('../assets/gigsup_resources/logos/employers/enbridge.png') },
    { name: 'Loblaw', source: require('../assets/gigsup_resources/logos/employers/loblaw.png') },
    { name: 'Lululemon', source: require('../assets/gigsup_resources/logos/employers/lululemon.png') },
    { name: 'Manulife', source: require('../assets/gigsup_resources/logos/employers/manulife.png') },
    { name: 'Maple Leaf', source: require('../assets/gigsup_resources/logos/employers/mapleleaf.png') },
    { name: 'OpenText', source: require('../assets/gigsup_resources/logos/employers/opentext.png') },
    { name: 'RBC', source: require('../assets/gigsup_resources/logos/employers/rbc.png') },
    { name: 'Rogers', source: require('../assets/gigsup_resources/logos/employers/rogers.png') },
    { name: 'Scotiabank', source: require('../assets/gigsup_resources/logos/employers/scotiabank.png') },
    { name: 'Shopify', source: require('../assets/gigsup_resources/logos/employers/shopify.png') },
    { name: 'Sun Life', source: require('../assets/gigsup_resources/logos/employers/sunlife.png') },
    { name: 'TD', source: require('../assets/gigsup_resources/logos/employers/td.png') },
    { name: 'Telus', source: require('../assets/gigsup_resources/logos/employers/telus.png') },
  ];

  const scrollXEmployer = useRef(new Animated.Value(0)).current;
  const [widthEmployer, setWidthEmployer] = useState(0);

  useEffect(() => {
    const startAnim = (value: Animated.Value, toValue: number, duration: number) => {
      value.setValue(0);
      Animated.loop(
        Animated.timing(value, {
          toValue: toValue,
          duration: duration,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    if (width1 > 0) startAnim(scrollX1, -width1, 25000);
    if (width2 > 0) startAnim(scrollX2, width2, 25000);
    if (width3 > 0) startAnim(scrollX3, -width3, 25000);
    if (widthEmployer > 0) startAnim(scrollXEmployer, widthEmployer, 25000);
  }, [width1, width2, width3, widthEmployer]);



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

        {/* Intro Section */}
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

        {/* Path Finding Section */}
        <View className="px-6 py-12 items-center">
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-[11px] font-black uppercase tracking-[0.23em]" numberOfLines={1}>
              BUILT FOR YOU
            </Text>
          </View>
          <Text className="text-2xl font-bold text-center text-black mb-4">Where are you on your journey?</Text>
          {paths.map((path, index) => (
            <TouchableOpacity
              key={path.id}
              onPress={() => setActiveTab(path.id)}
              className={`bg-white rounded-[16px] w-full p-5 shadow-sm border ${activeTab === path.id ? 'border-lime-400' : 'border-gray-100'}`}
            >
              {/* Number & Icon Row */}
              <View className="flex-row items-center justify-left">
                <Text className="text-2xl mr-2">{path.icon}</Text>
                <Text className="text-slate-900 font-black text-xl">
                  {path.id}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          <View
            className={`bg-white rounded-[16px] w-full h-[450px] p-5 shadow-sm border border-gray-100`}
          >
            <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 self-start">
              <Text className="text-slate-900 text-[11px] font-black uppercase " numberOfLines={1}>
                {currentPath.badge}
              </Text>
            </View>
            <Text className="text-slate-900 font-black text-2xl mb-4">
              {currentPath.title}
            </Text>
            <Text
              numberOfLines={4}
              style={{ minHeight: 90 }}
              className="text-gray-400 font-black text-base mb-6 leading-6"
            >
              {currentPath.desc}
            </Text>
            <TouchableOpacity className="bg-lime-300 px-8 py-4 rounded-xl flex-row items-center active:opacity-80">
              <Text className="text-slate-900 font-black mr-2 text-lg">{currentPath.cta}</Text>
              <ArrowRight size={20} color="#000000" />
            </TouchableOpacity>
            {/* Floating animation is not applied */}
            <Text className="leading-none text-7xl text-center w-full mt-12 mb-12">
              {currentPath.icon}
            </Text>
          </View>
        </View>

        {/* Stats Section */}
        <View className="bg-white px-6 py-20 border-t border-b border-gray-100 ml-4">
          <View className="flex-row items-center justify-center">
            <View className="bg-lime-300 px-1 py-1 rounded-[4px] items-center justify-center self-center ml-2">
              <Text className="text-slate-900 text-[30px] font-black uppercase" numberOfLines={1}>
                1,000
              </Text>
            </View>
            <Text className="text-[32px] mr-5">+</Text>
            <View className="bg-lime-300 px-1 py-1 rounded-[4px] items-center justify-center self-center">
              <Text className="text-slate-900 text-[30px] font-black uppercase" numberOfLines={1}>
                40,000
              </Text>
            </View>
            <Text className="text-[32px]">+</Text>
          </View>
          <View className="self-center pr-9">
            <Text className="text-gray-400 text-[12px] font-black uppercase" numberOfLines={1}>CAREER PROFILES              JOB TITLES</Text>
          </View>

          <View className="flex-row items-center justify-center ml-12">
            <View className="bg-lime-300 px-1 py-1 rounded-[4px] self-center">
              <Text className="text-slate-900 text-[30px] font-black uppercase " numberOfLines={1}>
                1,000
              </Text>
            </View>
            <Text className="text-[32px] mr-10">+</Text>
          </View>
          <View className="self-center mr-4">
            <Text className="text-gray-400 text-[12px] font-black uppercase" numberOfLines={1}>MEMBERS</Text>
          </View>
        </View>

        {/* Clarity steps section */}
        <View className="px-6 py-16">
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-[11px] font-black uppercase" numberOfLines={1}>
              HOW IT WORKS
            </Text>
          </View>
          <Text className="text-2xl font-bold text-center text-black mb-4">Three steps to career clarity</Text>
        </View>
        {steps.map((step, index) => (
          <View
            key={step.id}
            className={`bg-white rounded-[16px] p-5 shadow-sm mr-5 ml-5 mb-4 border border-gray-100`}
          >
            <View className="flex-row items-center justify-center self-start">
              <View className="bg-lime-300 px-1 py-1 h-[50px] rounded-full mb-4 mr-2 items-center justify-center self-center">
                <Text className="text-slate-900 text-[20px] font-black uppercase" numberOfLines={1}>
                  {step.icon}
                </Text>
              </View>
              <Text className="text-2xl font-bold text-center text-black mb-4">{step.id}</Text>
            </View>
            <Text className="text-2xl font-bold text-left text-black mb-4">{step.title}</Text>
            <Text className="text-gray-600 text-xl font-bold italic text-left mb-4">{step.summary}</Text>
            <Text className="text-gray-400 text-lg font-normal text-left mb-4">{step.desc}</Text>
          </View>
        ))}

        <View className="px-6 py-16 items-center justify-center flex-row flex-wrap">
          <Text className="text-xl font-bold text-black">
            Human First.{" "}
          </Text>
          <View className="bg-lime-300 px-2 py-1 rounded-md">
            <Text className="text-xl font-bold text-black">
              Powered by Real Data.
            </Text>
          </View>
        </View>

        {/* University section */}
        <View className="px-6 py-16">
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-base font-black uppercase" numberOfLines={1}>
              ACROSS CAMPUSES
            </Text>
          </View>
          <Text className="text-2xl font-black text-center text-black mb-4">Empowering students across Canada</Text>

          <View className="px-6 py-16 bg-white overflow-hidden">
            {/* Badge & Title */}
            <View className="items-center mb-10">
              <View className="bg-lime-300 px-4 py-1 rounded-full mb-4">
                <Text className="text-slate-900 text-[11px] font-black uppercase tracking-[0.2em]">
                  ACROSS CAMPUSES
                </Text>
              </View>
              <Text className="text-2xl font-black text-center text-black leading-tight">
                Empowering students across{"\n"}Canada
              </Text>
            </View>

            {/* Row 1 */}
            <Animated.View style={{ transform: [{ translateX: scrollX1 }] }} className="flex-row mb-4">
              <View className="flex-row" onLayout={(e) => setWidth1(e.nativeEvent.layout.width)}>
                {row1.map((item, i) => <LogoCard key={i} item={item} />)}
              </View>
              {row1.map((item, i) => <LogoCard key={`c1-${i}`} item={item} />)}
            </Animated.View>

            {/* Row 2 (backward) */}
            <Animated.View
              style={{
                transform: [{ translateX: scrollX2 }],
                marginLeft: -width2
              }}
              className="flex-row mb-4"
            >
              <View className="flex-row" onLayout={(e) => setWidth2(e.nativeEvent.layout.width)}>
                {row2.map((item, i) => <LogoCard key={i} item={item} />)}
              </View>
              {row2.map((item, i) => <LogoCard key={`c2-${i}`} item={item} />)}
            </Animated.View>

            {/* Row 3 */}
            <Animated.View style={{ transform: [{ translateX: scrollX3 }] }} className="flex-row">
              <View className="flex-row" onLayout={(e) => setWidth3(e.nativeEvent.layout.width)}>
                {row3.map((item, i) => <LogoCard key={i} item={item} />)}
              </View>
              {row3.map((item, i) => <LogoCard key={`c3-${i}`} item={item} />)}
            </Animated.View>
          </View>
        </View>

        {/* Network section */}

        {/* Employer section */}
        <View className="px-6 py-16">
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-base font-black uppercase" numberOfLines={1}>
              EMPLOYER NETWORK
            </Text>
          </View>
          <Text className="text-2xl font-black text-center text-black mb-4">Leading employers across Canada</Text>

          <Animated.View
            style={{
              transform: [{ translateX: scrollXEmployer }],
              marginLeft: -widthEmployer
            }}
            className="flex-row"
          >
            <View className="flex-row" onLayout={(e) => setWidthEmployer(e.nativeEvent.layout.width)}>
              {employerRow.map((item, i) => <LogoCard key={i} item={item} />)}
            </View>
            {employerRow.map((item, i) => <LogoCard key={`ce-${i}`} item={item} />)}
          </Animated.View>
        </View>

        {/* Whos It's For section */}
        <View className="px-6 py-16">
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-base font-black uppercase" numberOfLines={1}>
              WHO IT'S FOR
            </Text>
          </View>
          <Text className="text-2xl font-black text-center text-black mb-4">Built for every stage of your journey</Text>

        </View>

        {/* Pricing Section */}
        <View className="px-6 py-16">
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-base font-black uppercase" numberOfLines={1}>
              PRICING
            </Text>
          </View>
          <Text className="text-2xl font-black text-center text-black mb-4">Choose your career plan</Text>
          <Text className="text-sm font-normal text-center text-gray-400 mb-4">Start free. Upgrade when you're ready to go deeper</Text>

        </View>
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

        {/* Partners section */}
        <View className="px-6 py-16">
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-base font-black uppercase" numberOfLines={1}>
              OUR PARTNERS
            </Text>
          </View>
          <Text className="text-2xl font-black text-center text-black mb-4">Supported By</Text>

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