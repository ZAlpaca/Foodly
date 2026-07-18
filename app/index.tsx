import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useI18n } from '@/hooks/use-i18n';

const { height } = Dimensions.get('window');
const HERO_HEIGHT = height * 0.65;

export default function WelcomeScreen() {
  const router = useRouter();
  const { t, changeLanguage, locale } = useI18n();

  const handleGetStarted = () => {
    router.replace('/(main)/(tabs)/explore');
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="light" />

      {/* Hero Image - top 65% of screen */}
      <View
        className="absolute top-0 left-0 right-0 overflow-hidden"
        style={{ height: HERO_HEIGHT }}
      >
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
          }}
          className="w-full h-full"
          resizeMode="cover"
        />
        {/* Semi-transparent overlay for image readability */}
        <View className="absolute inset-0 bg-black/30" />
      </View>

      {/* Brand Identity - Logo */}
      <View className="absolute top-16 left-0 right-0 items-center z-10">
        <Text className="text-white font-sans-extrabold text-[34px] tracking-tighter">
          {t('welcome.title')}
        </Text>
      </View>

      {/* Language Toggle */}
      <View className="absolute top-16 right-4 z-10 flex-row gap-2">
        <TouchableOpacity
          className={`px-3 py-1 rounded-full ${locale === 'en' ? 'bg-white' : 'bg-white/30'}`}
          onPress={() => changeLanguage('en')}
        >
          <Text className={`text-xs font-sans-bold ${locale === 'en' ? 'text-primary' : 'text-white'}`}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-3 py-1 rounded-full ${locale === 'ru' ? 'bg-white' : 'bg-white/30'}`}
          onPress={() => changeLanguage('ru')}
        >
          <Text className={`text-xs font-sans-bold ${locale === 'ru' ? 'text-primary' : 'text-white'}`}>RU</Text>
        </TouchableOpacity>
      </View>

      {/* Content Canvas - bottom portion */}
      <View className="flex-1 justify-end px-4 pb-12">
        {/* Decorative Icon */}
        <View className="items-center mb-8">
          <View className="w-16 h-16 rounded-xl bg-primary-fixed items-center justify-center shadow-sm">
            <Ionicons name="restaurant-outline" size={32} color="#3e0400" />
          </View>
        </View>

        {/* Typography */}
        <Text className="text-on-surface font-sans-extrabold text-4xl text-center mb-4 leading-tight tracking-tight">
          {t('welcome.headline')}
        </Text>
        <Text className="text-on-surface-variant font-sans text-base text-center mb-8 leading-relaxed max-w-[340px] mx-auto">
          {t('welcome.subtitle')}
        </Text>

        {/* CTA Buttons */}
        <View className="w-full gap-4">
          <TouchableOpacity
            className="w-full h-[54px] bg-primary rounded-xl items-center justify-center flex-row gap-2"
            style={{
              shadowColor: '#b3290f',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 20,
              elevation: 4,
            }}
            onPress={handleGetStarted}
            activeOpacity={0.95}
          >
            <Text className="text-on-primary font-sans-bold text-lg">
              {t('welcome.getStarted')}
            </Text>
            <Ionicons name="arrow-forward" size={20} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full h-[54px] bg-surface-container-low rounded-xl items-center justify-center"
            onPress={handleGetStarted}
            activeOpacity={0.95}
          >
            <Text className="text-on-surface font-sans-semibold text-base">
              {t('welcome.logIn')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Legal Footer */}
        <Text className="text-center text-on-surface-variant/45 font-sans-medium text-xs mt-8">
          {t('welcome.terms')}
        </Text>
      </View>

      {/* Atmospheric Glow Effect */}
      <View
        className="absolute bottom-0 w-[150%] h-[300px] bg-primary/5 rounded-full"
        style={{ left: '-25%' }}
        pointerEvents="none"
      />
    </View>
  );
}
