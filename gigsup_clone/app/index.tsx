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

  // Profiles
  const profileImages = [
    require('../assets/gigsup_resources/images.unsplash.com/1.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/2.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/3.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/4.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/5.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/6.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/7.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/8.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/9.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/10.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/11.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/12.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/13.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/14.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/15.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/16.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/17.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/18.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/19.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/20.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/21.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/22.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/23.jpg'),
    require('../assets/gigsup_resources/images.unsplash.com/24.jpg'),
  ];

  // Benefits
  const benefits = [
    {
      id: "High School",
      icon: "🎓",
      summary: "Explore what's possible",
      desc: "Discover careers through your transcript and interests. Get guidance on what subjects, extracurriculars, and schools will get you where you wnat to go.",
      points: ["Journaling + Transcript analysis", "Career exploration", "School requirements + Admissions plan"],
      find: "Find your path"
    },
    {
      id: "University",
      icon: "📖",
      summary: "Land your first role",
      desc: "See what careers your degree unlocks. Match with real job postings, identify gaps, and connect with mentors who've been there.",
      points: ["Resume + Transcript analysis", "Job matching based on degree", "Skill gap closing", "Mentor connections"],
      find: "Find your 1st job"
    },
    {
      id: "Mid-Career",
      icon: "💼",
      summary: "Own your next chapter",
      desc: "Whether you're pivoting or advanding, track your growth, tell your story powerfully, and discover opportunities that match where you want to go.",
      points: ["LinkedIn + Resume + Journaling analysis", "Track career porjects", "Education to build skill", "Story building"],
      find: "Level up"
    }
  ]

  // Pricing
  const [billingCycle, setBillingCycle] = useState('Monthly');

  // Partners
  const partners = [
    { name: 'Accelerate Okanagan', source: require('../assets/gigsup_resources/logos/partners/accelerate.png') },
    { name: 'Spring', source: require('../assets/gigsup_resources/logos/partners/spring.png') },
    { name: 'Movement 51', source: require('../assets/gigsup_resources/logos/partners/m51.webp') },
    { name: 'NVIDIA Inc', source: require('../assets/gigsup_resources/logos/partners/nvidia.png') },
    { name: 'Mitacs', source: require('../assets/gigsup_resources/logos/partners/mitacs.png') },
    { name: 'NRC IRAP', source: require('../assets/gigsup_resources/logos/partners/nrcirap.png') },
    { name: 'Venture To Assets', source: require('../assets/gigsup_resources/logos/partners/vta.png') },
  ];

  // Scroll
  const scrollRef = useRef<ScrollView>(null);
  const [layoutClarity, setLayoutClarity] = useState(0);
  const [layoutBenefit, setLayoutBenefit] = useState(0);

  const scrollToSection = (yValue: number) => {
    scrollRef.current?.scrollTo({
      y: yValue,
      animated: true,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView ref={scrollRef} className="flex-1" showsVerticalScrollIndicator={false}>
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
        <View className="px-6 py-16" onLayout={(e) => setLayoutClarity(e.nativeEvent.layout.y)}>
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
        <View className="px-6 py-16 items-center justify-center">
          <Text className="text-2xl font-black text-center text-black">Join the Network for Students</Text>
          <Text className="text-lg font-bold text-center text-gray-400 mb-8">
            We build Canada's student network {"\n"}
            ecosystem. Gigsup connects you to {"\n"}
            mentors, schools & employers within a growing career network ecosystem. All {"\n"}
            aligned to your stengths & next move.
          </Text>
          <Text className="text-lg font-bold text-center text-gray-600 mb-4">
            🎓 5% of our profits go directly to grants {"\n"}
            helping community members complete {"\n"}
            their studies.
          </Text>
          <TouchableOpacity className="bg-lime-300 px-7 py-4 rounded-xl flex-row items-center active:opacity-80">
            <Text className="text-slate-900 font-black mr-2 text-lg" numberOfLines={1}>Join the Network</Text>
            <ArrowRight size={20} color="#000000" />
          </TouchableOpacity>
        </View>

        <View className="px-4 py-8 items-center justify-center bg-gray-50/50">
          <View className="flex-row flex-wrap justify-center gap-2 max-w-[190px]">
            {profileImages.slice(0, 20).map((img, index) => (
              <View
                key={index}
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-white overflow-hidden"
                style={{
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.08,
                  shadowRadius: 2,
                }}
              >
                <Image
                  source={img}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
            ))}
          </View>
        </View>

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

        {/* Benefits Section */}
        <View className="px-6 py-16" onLayout={(e) => setLayoutBenefit(e.nativeEvent.layout.y)}>
          <View className="bg-lime-300 px-4 py-1 min-w-[120px] rounded-full mb-4 items-center justify-center self-center">
            <Text className="text-slate-900 text-base font-black uppercase" numberOfLines={1}>
              WHO IT'S FOR
            </Text>
          </View>
          <Text className="text-2xl font-black text-center text-black mb-4">Built for every stage of your journey</Text>
          {benefits.map((benefit, i) => (
            <View
              key={i}
              className={`bg-white rounded-[16px] w-full p-5 shadow-sm border border-gray-100`}
            >
              <View className="px-4 py-1 min-w-[120px] rounded-full mb-4 self-start">
                <Text className="text-slate-900 text-[30px] font-black uppercase " numberOfLines={1}>
                  {benefit.icon}
                </Text>
              </View>
              <Text className="text-slate-900 font-black text-2xl mb-4">
                {benefit.id}
              </Text>
              <Text className="bg-lime-300 text-slate-900 rounded-[4px] px-2 py-1 font-black text-lg mb-4">
                {benefit.summary}
              </Text>
              <Text
                numberOfLines={4}
                style={{ minHeight: 90 }}
                className="text-gray-400 font-black text-base leading-6"
              >
                {benefit.desc}
              </Text>
              <View className="mb-8">
                {benefit.points.map((point, index) => (
                  <View key={index} className="flex-row items-center mb-3">
                    <View className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-3" />
                    <Text className="text-gray-500 font-medium text-base">
                      {point}
                    </Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity className="bg-lime-300 px-6 py-4 rounded-xl flex-row items-center active:opacity-80">
                <Text className="text-slate-900 font-black mr-2 text-lg">{benefit.find}</Text>
                <ArrowRight size={20} color="#000000" />
              </TouchableOpacity>
            </View>
          ))}
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
          <View className="bg-gray-100 p-1.5 rounded-full flex-row items-center">

            {/* Monthly Option */}
            <TouchableOpacity
              onPress={() => setBillingCycle('Monthly')}
              className={`${billingCycle === 'Monthly' ? 'bg-lime-300' : ''} px-8 py-2.5 rounded-full`}
            >
              <Text className="text-black font-bold text-[16px]">Monthly</Text>
            </TouchableOpacity>

            {/* Annual Option */}
            <TouchableOpacity
              onPress={() => setBillingCycle('Annual')}
              className={`${billingCycle === 'Annual' ? 'bg-lime-300' : ''} px-8 py-2.5 rounded-full flex-row items-center`}
            >
              <Text className="text-black font-bold text-[16px] mr-2">Annual</Text>

              {/* Save 20% Badge */}
              <View className="bg-black px-3 py-1 rounded-full">
                <Text className="text-white text-[11px] font-black">Save 20%</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <View className="px-6 py-16">
          {/* The Seed Card */}
          <View className="bg-white border border-gray-200 p-8 rounded-3xl mb-8">
            <Text className="text-slate-900 font-black text-3xl mb-2">The Seed</Text>
            <Text className="text-gray-400 text-[13px] font-bold mb-8 uppercase tracking-widest">
              GOAL: SEE WHERE YOU MIGHT FIT
            </Text>

            <View className="flex-row items-baseline mb-2">
              <Text className="text-slate-900 text-5xl font-black">$0</Text>
              <Text className="text-gray-400 text-xl font-bold ml-1" numberOfLines={1}>/ forever</Text>
            </View>

            <Text className="text-gray-400 text-[15px] mb-10 font-medium">
              No credit card required
            </Text>

            {/* Features List */}
            <View className="mb-10">
              {[
                'Core strengths snapshot',
                'Top 5 career matches',
                'Community profile & interaction',
                'Limited mentor visibility',
                'Limited education visibility',
                'Full job search',
                'Full career profile search'
              ].map((feature, i) => (
                <View key={i} className="flex-row items-start mb-5">
                  <View className="bg-lime-300 p-1 rounded-full mr-4 mt-1">
                    <Check size={12} color="#000000" strokeWidth={4} />
                  </View>
                  <Text className="text-gray-500 text-[16px] font-medium leading-6 flex-1">
                    {feature}
                  </Text>
                </View>
              ))}
            </View>
            <TouchableOpacity className="border-2 border-slate-700 py-5 rounded-2xl items-center active:opacity-80">
              <Text className="text-slate-900 font-black text-lg">Get Started Free</Text>
            </TouchableOpacity>
          </View>

          {/* The Squeeze Card */}
          <View className="bg-white border-2 border-lime-300 p-8 rounded-3xl mb-8 relative">
            {/* Most Popular Badge */}
            <View className="bg-lime-300 absolute -top-4 left-1/2 -ml-16 px-6 py-1.5 rounded-full shadow-sm">
              <Text className="text-slate-900 text-[10px] font-black uppercase tracking-[0.2em]">
                Most Popular
              </Text>
            </View>

            <Text className="text-slate-900 font-black text-3xl mb-2">The Squeeze</Text>
            <Text className="text-gray-400 text-[13px] font-bold mb-8 uppercase tracking-widest">
              GOAL: TURN INSIGHT INTO DIRECTION
            </Text>

            <View className="flex-row items-baseline mb-2">
              <Text className="text-slate-900 text-5xl font-black">${billingCycle === 'Monthly' ? '10' : '8'}</Text>
              <Text className="text-gray-400 text-xl font-bold ml-1">/month</Text>
            </View>

            <Text className="text-gray-400 text-[15px] mb-10 font-medium">
              Free for 30 days, then billed monthly
            </Text>

            {/* Features List */}
            <View className="mb-10">
              {[
                'Everything in The Seed',
                'Full strengths profile',
                'Full VISI assessment access',
                'All career matches',
                'Full education pathways / post-secondary admission plan',
                'Full mentor matching',
                'Full personalized job matching'
              ].map((feature, i) => (
                <View key={i} className="flex-row items-start mb-5">
                  <View className="bg-lime-300 p-1 rounded-full mr-4 mt-1">
                    <Check size={12} color="#000000" strokeWidth={4} />
                  </View>
                  <Text className="text-gray-500 text-[16px] font-medium leading-6 flex-1">
                    {feature}
                  </Text>
                </View>
              ))}
            </View>

            <TouchableOpacity className="bg-lime-300 py-5 rounded-2xl items-center active:opacity-80 shadow-sm">
              <Text className="text-slate-900 font-black text-lg">Get The Squeeze</Text>
            </TouchableOpacity>
          </View>

          {/* The Juice Card */}
          <View className="bg-white border border-gray-200 p-8 rounded-3xl mb-8">
            <Text className="text-slate-900 font-black text-3xl mb-2">The Juice</Text>
            <Text className="text-gray-400 text-[13px] font-bold mb-8 uppercase tracking-widest">
              GOAL: EXECUTE WITH ADVANTAGE
            </Text>

            <View className="flex-row items-baseline mb-2">
              <Text className="text-slate-900 text-5xl font-black">${billingCycle === 'Monthly' ? '50' : '40'}</Text>
              <Text className="text-gray-400 text-xl font-bold ml-1">/month</Text>
            </View>

            <Text className="text-gray-400 text-[15px] mb-10 font-medium">
              Billed annually
            </Text>

            {/* Features List */}
            <View className="mb-10">
              {[
                'Everything in The Squeeze',
                'Storytelling / profile optimization',
                'Skill gap matching',
                'Resume enhancement',
                'Interview prep AI coach',
                'Targeted opportunity alerts'
              ].map((feature, i) => (
                <View key={i} className="flex-row items-start mb-5">
                  <View className="bg-lime-300 p-1 rounded-full mr-4 mt-1">
                    <Check size={12} color="#000000" strokeWidth={4} />
                  </View>
                  <Text className="text-gray-500 text-[16px] font-medium leading-6 flex-1">
                    {feature}
                  </Text>
                </View>
              ))}
            </View>
            <TouchableOpacity className="border-2 border-slate-700 py-5 rounded-2xl items-center active:opacity-80">
              <Text className="text-slate-900 font-black text-lg">Get The Juice</Text>
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
          <View className="flex-row flex-wrap justify-center items-start">
            {partners.map((partner, i) => (
              <View key={i} className="items-center justify-center w-1/2 mb-10 px-2">
                <View className="w-20 h-20 rounded-full bg-white shadow-sm border border-gray-50 items-center justify-center mb-3">
                  <Image
                    source={partner.source}
                    className="w-12 h-12"
                    resizeMode="contain"
                  />
                </View>
                <Text className="text-slate-600 font-bold text-[13px] text-center px-2">
                  {partner.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Navigation */}
        <View className="bg-black py-8 border-b border-gray-800">
          <View className="flex-row justify-center items-center space-x-6">
            <TouchableOpacity onPress={() => scrollToSection(layoutClarity)}>
              <Text className="text-gray-400 font-bold text-base mr-5">How it works</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => scrollToSection(layoutBenefit)}>
              <Text className="text-gray-400 font-bold text-base mr-5">Benefits</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-gray-400 font-bold text-base mr-5">About</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-gray-400 font-bold text-base">FAQ</Text>
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