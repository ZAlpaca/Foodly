import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useI18n } from '@/hooks/use-i18n';
import { triggerHaptic } from '@/hooks/use-haptics';

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { t } = useI18n();

  const menuItems = [
    { id: 'personal', icon: 'person-outline' as const, labelKey: 'personalInfo', color: 'bg-primary-container/10', iconColor: '#b3290f' },
    { id: 'payment', icon: 'card-outline' as const, labelKey: 'paymentMethods', color: 'bg-secondary-container/10', iconColor: '#785900' },
    { id: 'address', icon: 'location-outline' as const, labelKey: 'addressBook', color: 'bg-tertiary-container/10', iconColor: '#5f5e5e' },
    { id: 'promotions', icon: 'pricetag-outline' as const, labelKey: 'promotions', color: 'bg-secondary-container/20', iconColor: '#785900' },
    { id: 'settings', icon: 'settings-outline' as const, labelKey: 'settings', color: 'bg-surface-variant', iconColor: '#5a413b' },
  ];

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 border-b border-outline-variant/10 bg-surface/80" style={{ paddingTop: insets.top, height: insets.top + 56 }}>
        <View className="flex-row items-center gap-1">
          <Ionicons name="location-outline" size={18} color="#b3290f" />
          <Text className="font-sans-extrabold text-base text-on-surface">{t('profile.currentLocation')}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={22} color="#1a1c1f" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Avatar */}
        <View className="items-center pt-8 pb-6">
          <View className="relative">
            <View className="w-24 h-24 rounded-full bg-surface-container items-center justify-center border-4 border-surface-container-lowest">
              <Ionicons name="person-circle-outline" size={80} color="#5a413b" />
            </View>
            <View className="absolute bottom-0 right-0 bg-primary rounded-full p-1.5 border-2 border-surface">
              <Ionicons name="pencil" size={16} color="#ffffff" />
            </View>
          </View>
          <Text className="mt-4 font-sans-extrabold text-2xl text-on-surface">Alexander West</Text>
          <Text className="text-on-surface-variant text-sm font-sans-semibold opacity-70">alexander.west@premium.com</Text>
        </View>

        {/* Menu Items */}
        <View className="mx-4 bg-surface-container-lowest rounded-2xl overflow-hidden mb-8 border border-outline-variant/15">
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-row items-center justify-between px-4 py-4"
            >
              <View className="flex-row items-center gap-3">
                <View className={`w-9 h-9 items-center justify-center rounded-lg ${item.color}`}>
                  <Ionicons name={item.icon} size={20} color={item.iconColor} />
                </View>
                <Text className="text-sm font-sans-bold text-on-surface">{t(`profile.${item.labelKey}`)}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#e3beb7" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <View className="px-4">
          <TouchableOpacity
            className="w-full h-[54px] bg-surface-container-low rounded-2xl flex-row items-center justify-center gap-2 border border-outline-variant/25"
            onPress={() => { triggerHaptic('medium'); router.replace('/'); }}
          >
            <Ionicons name="log-out-outline" size={20} color="#b3290f" />
            <Text className="text-primary text-sm font-sans-extrabold">{t('profile.logout')}</Text>
          </TouchableOpacity>
        </View>

        {/* Version */}
        <Text className="text-center text-on-surface-variant text-xs font-sans-semibold opacity-40 mt-6 mb-8">
          {t('profile.version')}
        </Text>
      </ScrollView>
    </View>
  );
}
