import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { restaurants } from '@/data/restaurants';
import { categories } from '@/data/categories';
import { Card } from '@/components/ui/card';
import { useI18n } from '@/hooks/use-i18n';
import { triggerHaptic } from '@/hooks/use-haptics';

const categoryIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  'cat-1': 'restaurant-outline',
  'cat-2': 'cafe-outline',
  'cat-3': 'wine-outline',
  'cat-4': 'ice-cream-outline',
  'cat-5': 'fast-food-outline',
  'cat-6': 'leaf-outline',
};

export default function ExploreScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredRestaurants = selectedCategory
    ? restaurants.filter((r) => r.categories.includes(selectedCategory))
    : restaurants;

  return (
    <View className="flex-1 bg-background">
      {/* Header — glassmorphism with location + notification */}
      <View className="bg-surface/80 border-b border-outline-variant/10" style={{ paddingTop: insets.top }}>
        <View className="flex-row items-center justify-between px-margin-mobile h-14">
          <TouchableOpacity className="flex-row items-center gap-1 active:scale-95 transition-all duration-200">
            <Ionicons name="location-outline" size={18} color="#b3290f" />
            <View>
              <Text className="text-[10px] uppercase tracking-wider text-on-surface-variant font-sans-semibold">
                {t('explore.deliverTo')}
              </Text>
              <Text className="font-sans-semibold text-sm text-on-surface">{t('explore.currentLocation')}</Text>
            </View>
            <Ionicons name="chevron-down" size={16} color="#5a413b" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full active:scale-95 transition-all duration-200">
            <Ionicons name="notifications-outline" size={22} color="#1a1c1f" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="px-margin-mobile pt-stack-md pb-2">
          <View className="flex-row items-center h-14 bg-surface-container-low rounded-xl px-4">
            <Ionicons
              name="search-outline"
              size={20}
              color="#5a413b"
              style={{ opacity: 0.75 }}
            />
            <Text className="flex-1 text-sm text-on-surface-variant font-sans ml-3">
              {t('explore.searchPlaceholder')}
            </Text>
            <Ionicons name="options-outline" size={20} color="#b3290f" />
          </View>
        </View>

        {/* Categories — horizontal scroll with icon pills */}
        <View className="py-stack-md">
          <View className="flex-row items-center justify-between px-margin-mobile mb-stack-md">
            <Text className="font-sans-bold text-lg text-on-surface">{t('explore.categories')}</Text>
            <TouchableOpacity>
              <Text className="text-primary font-sans-semibold text-sm">{t('explore.seeAll')}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-margin-mobile"
            contentContainerStyle={{ gap: 16 }}
          >
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                className="items-center gap-2 shrink-0 active:scale-90 transition-all duration-200"
                onPress={() => {
                  triggerHaptic('light');
                  setSelectedCategory(selectedCategory === cat.id ? null : cat.id);
                }}
              >
                <View
                  className={`w-16 h-16 rounded-full items-center justify-center ${
                    selectedCategory === cat.id
                       ? 'bg-primary-container'
                      : 'bg-surface-container-high'
                  }`}
                >
                  <Ionicons
                    name={categoryIcons[cat.id] ?? 'restaurant-outline'}
                    size={28}
                    color={selectedCategory === cat.id ? '#5f0a00' : '#5a413b'}
                  />
                </View>
                <Text
                  className={`text-xs font-sans-semibold ${
                    selectedCategory === cat.id
                      ? 'text-on-surface'
                      : 'text-on-surface-variant'
                  }`}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Restaurants — vertical card feed */}
        <View className="px-margin-mobile pb-32">
          <Text className="font-sans-bold text-lg text-on-surface mb-stack-md">
            {t('explore.featured')}
          </Text>
          {filteredRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="mb-6"
              onPress={() => {
                triggerHaptic('light');
                router.push(`/(main)/restaurant/${restaurant.id}`);
              }}
            >
              {/* Restaurant Hero Image */}
              <View className="relative h-56">
                <Image
                  source={{ uri: restaurant.image }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                {/* Rating Badge */}
                <View className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex-row items-center gap-1 shadow-sm">
                  <Ionicons name="star" size={14} color="#fdc003" />
                  <Text className="text-xs font-sans-bold text-on-surface">
                    {restaurant.rating}
                  </Text>
                </View>
                {/* Delivery Time + Free Delivery Tag */}
                <View className="absolute bottom-4 left-4 flex-row gap-2">
                  <View className="bg-primary/95 rounded-full px-3 py-1 flex-row items-center gap-1">
                    <Ionicons name="time-outline" size={14} color="#ffffff" />
                    <Text className="text-white text-[11px] font-sans-bold">
                      {restaurant.deliveryTime}
                    </Text>
                  </View>
                  {restaurant.deliveryFee === 0 && (
                    <View className="bg-on-surface/80 rounded-full px-3 py-1">
                      <Text className="text-white text-[11px] font-sans-bold">
                        {t('explore.freeDelivery')}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              {/* Restaurant Info */}
              <View className="p-4">
                <View className="flex-row justify-between items-start mb-1">
                  <Text className="font-sans-bold text-lg text-on-surface flex-1 mr-2" numberOfLines={1}>
                    {restaurant.name}
                  </Text>
                  <View className="bg-surface-container px-2 py-1 rounded-md">
                    <Text className="text-on-surface-variant text-xs font-sans-semibold">
                      {restaurant.priceLevel} • {restaurant.cuisine}
                    </Text>
                  </View>
                </View>
                <Text
                  className="text-sm text-on-surface-variant font-sans leading-relaxed"
                  numberOfLines={1}
                >
                  {restaurant.description}
                </Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
