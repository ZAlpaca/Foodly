import { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getRestaurantById } from '@/data/restaurants';
import { getReviewsByRestaurant } from '@/data/reviews';
import { useCartStore, useCartCount, useCartSubtotal } from '@/store/cart-store';
import { useI18n } from '@/hooks/use-i18n';
import { triggerHaptic } from '@/hooks/use-haptics';
import type { MenuItem } from '@/types';

type Tab = 'menu' | 'reviews' | 'info';

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <View className="flex-row items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Ionicons
          key={star}
          name={star <= rating ? 'star' : 'star-outline'}
          size={size}
          color={star <= rating ? '#fdc003' : '#e2e2e7'}
          style={{ marginRight: 1 }}
        />
      ))}
    </View>
  );
}

export default function RestaurantDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const { t } = useI18n();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [activeTab, setActiveTab] = useState<Tab>('menu');

  const restaurant = getRestaurantById(id);
  const reviews = getReviewsByRestaurant(id);
  const items = useCartStore((s) => s.items);
  const addItem = useCartStore((s) => s.addItem);
  const cartCount = useCartCount();
  const cartSubtotal = useCartSubtotal();
  const hasItems = items.length > 0;

  // Find most expensive menu item for Chef's Choice
  const sortedByPrice = restaurant ? [...restaurant.menu].sort((a, b) => b.price - a.price) : [];
  const chefChoice = sortedByPrice.length >= 4 ? sortedByPrice[0] : null;
  const regularItems = restaurant
    ? chefChoice
      ? restaurant.menu.filter((m) => m.id !== chefChoice.id)
      : restaurant.menu
    : [];

  if (!restaurant) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Text className="text-on-surface font-sans-bold text-xl">Restaurant not found</Text>
        <TouchableOpacity
          className="mt-4 bg-primary px-6 py-2.5 rounded-full"
          onPress={() => router.back()}
        >
          <Text className="text-on-primary font-sans-bold text-sm">{t('common.back')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const handleAddItem = (menuItem: MenuItem) => {
    triggerHaptic('medium');
    addItem(menuItem, 1, [], restaurant.id, restaurant.name);
  };

  return (
    <View className="flex-1 bg-background">
      {/* Animated Floating Header */}
      <Animated.View
        className="absolute top-0 left-0 right-0 z-50"
        style={{ opacity: headerOpacity, paddingTop: insets.top }}
      >
        <View className="flex-row items-center justify-between px-margin-mobile h-14 bg-surface/85 backdrop-blur-xl">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-all"
          >
            <Ionicons name="arrow-back" size={22} color="#1a1c1f" />
          </TouchableOpacity>
          <View className="flex-row gap-2">
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-all">
              <Ionicons name="search-outline" size={20} color="#1a1c1f" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-all">
              <Ionicons name="heart-outline" size={20} color="#1a1c1f" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      {/* Header — always visible (transparent over hero) */}
      <View className="absolute top-0 left-0 right-0 z-40" style={{ paddingTop: insets.top }}>
        <View className="flex-row items-center justify-between px-margin-mobile h-14">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-all"
          >
            <Ionicons name="arrow-back" size={22} color="#1a1c1f" />
          </TouchableOpacity>
          <View className="flex-row gap-2">
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-all">
              <Ionicons name="search-outline" size={20} color="#1a1c1f" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-all">
              <Ionicons name="heart-outline" size={20} color="#1a1c1f" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Animated.ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: hasItems ? 120 : 40 }}
      >
        {/* Hero Image */}
        <View className="relative h-[340px] w-full overflow-hidden">
          <Image
            source={{ uri: restaurant.image }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
        </View>

        {/* Floating Info Card */}
        <View className="relative -mt-12 z-10 px-margin-mobile">
          <View className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/20">
            <View className="flex-row justify-between items-start mb-4">
              <View className="flex-1 mr-4">
                <Text className="font-sans-extrabold text-2xl text-on-surface mb-1" numberOfLines={2}>
                  {restaurant.name}
                </Text>
                <Text className="text-sm text-on-surface-variant font-sans-medium">
                  {restaurant.cuisine} · {restaurant.priceLevel}
                </Text>
              </View>
              <View className="items-end">
                <View className="flex-row items-center gap-1 bg-secondary-container px-3 py-1 rounded-full shadow-sm">
                  <Ionicons name="star" size={16} color="#6c5000" />
                  <Text className="text-xs font-sans-bold text-on-secondary-container">
                    {restaurant.rating}
                  </Text>
                </View>
                <Text className="text-xs font-sans-semibold text-on-surface-variant mt-2">
                  {restaurant.reviewCount}+ {t('restaurant.reviews')}
                </Text>
              </View>
            </View>
            <View className="flex-row pt-4 border-t border-outline-variant/20">
              <View className="flex-1 items-center">
                <Ionicons name="time-outline" size={20} color="#b3290f" />
                <Text className="text-xs font-sans-semibold text-on-surface-variant mt-1">
                  {restaurant.deliveryTime}
                </Text>
              </View>
              <View className="flex-1 items-center border-x border-outline-variant/20">
                <Ionicons name="bicycle-outline" size={20} color="#b3290f" />
                <Text className="text-xs font-sans-semibold text-on-surface-variant mt-1">
                  {restaurant.deliveryFee === 0 ? t('explore.freeDelivery') : `$${restaurant.deliveryFee.toFixed(2)}`}
                </Text>
              </View>
              <View className="flex-1 items-center">
                <Ionicons name="location-outline" size={20} color="#b3290f" />
                <Text className="text-xs font-sans-semibold text-on-surface-variant mt-1">
                  {restaurant.distance}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Segmented Tab Control */}
        <View className="sticky bg-background/95 backdrop-blur-md z-30 py-4 px-margin-mobile border-b border-outline-variant/10">
          <View className="flex-row bg-surface-container-low p-1 rounded-2xl relative">
            <TouchableOpacity
              className={`flex-1 py-2 rounded-xl items-center z-10 ${activeTab === 'menu' ? '' : ''}`}
              onPress={() => { triggerHaptic('light'); setActiveTab('menu'); }}
            >
              <Text
                className={`text-xs font-sans-semibold ${
                  activeTab === 'menu'
                    ? 'text-primary font-sans-bold'
                    : 'text-on-surface-variant'
                }`}
              >
                {t('restaurant.menu')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 py-2 rounded-xl items-center z-10"
              onPress={() => { triggerHaptic('light'); setActiveTab('reviews'); }}
            >
              <Text
                className={`text-xs font-sans-semibold ${
                  activeTab === 'reviews'
                    ? 'text-primary font-sans-bold'
                    : 'text-on-surface-variant'
                }`}
              >
                {t('restaurant.reviews')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 py-2 rounded-xl items-center z-10"
              onPress={() => { triggerHaptic('light'); setActiveTab('info'); }}
            >
              <Text
                className={`text-xs font-sans-semibold ${
                  activeTab === 'info'
                    ? 'text-primary font-sans-bold'
                    : 'text-on-surface-variant'
                }`}
              >
                {t('restaurant.info')}
              </Text>
            </TouchableOpacity>
            {/* Animated Sliding Indicator */}
            <View
              className="absolute top-1 bottom-1 bg-surface-container-lowest rounded-xl shadow-sm transition-all duration-300"
              style={{
                width: '33.33%',
                left:
                  activeTab === 'menu'
                    ? '0%'
                    : activeTab === 'reviews'
                      ? '33.33%'
                      : '66.66%',
              }}
            />
          </View>
        </View>

        {/* Tab Content */}
        {activeTab === 'menu' && (
          <View className="px-margin-mobile mt-6 space-y-8">
            {/* Regular Menu Items */}
            <View>
              <Text className="font-sans-extrabold text-xl text-on-surface mb-6">
                Signature Entrées
              </Text>
              <View className="space-y-6">
                {regularItems.map((menuItem, index) => (
                  <View key={menuItem.id}>
                    <View className="flex-row gap-4">
                      <View className="flex-1">
                        <Text className="font-sans-bold text-base text-on-surface mb-1">
                          {menuItem.name}
                        </Text>
                        <Text
                          className="text-xs text-on-surface-variant font-sans leading-relaxed"
                          numberOfLines={2}
                        >
                          {menuItem.description}
                        </Text>
                        <View className="flex-row items-center gap-3 mt-3">
                          <Text className="font-sans-bold text-base text-primary">
                            ${menuItem.price.toFixed(2)}
                          </Text>
                          <TouchableOpacity
                            className="bg-primary px-4 py-1.5 rounded-full active:scale-95 transition-all shadow-sm"
                            onPress={() => handleAddItem(menuItem)}
                          >
                            <Text className="text-on-primary text-xs font-sans-semibold">
                              {t('restaurant.add')}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/15">
                        <Image
                          source={{ uri: menuItem.image }}
                          className="w-full h-full"
                          resizeMode="cover"
                        />
                      </View>
                    </View>
                    {index < regularItems.length - 1 && (
                      <View className="h-[1px] bg-outline-variant/20 mt-6" />
                    )}
                  </View>
                ))}
              </View>
            </View>

            {/* Chef's Choice Feature Card */}
            {chefChoice && (
              <View className="bg-primary-container/10 rounded-[32px] p-6 border border-primary-container/20">
                <View className="flex-row items-center gap-2 mb-3">
                  <Ionicons name="sparkles" size={20} color="#b3290f" />
                  <Text className="text-[10px] text-primary uppercase font-sans-bold tracking-wider">
                    {t('restaurant.chefsChoice')}
                  </Text>
                </View>
                <Text className="font-sans-extrabold text-xl text-on-surface mb-2">
                  {chefChoice.name}
                </Text>
                <Text className="text-xs text-on-surface-variant font-sans mb-4 leading-relaxed">
                  {chefChoice.description}
                </Text>
                <View className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 shadow-sm">
                  <Image
                    source={{ uri: chefChoice.image }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                <TouchableOpacity
                  className="w-full bg-primary py-4 rounded-2xl items-center active:scale-[0.98] transition-all shadow-lg"
                  onPress={() => handleAddItem(chefChoice)}
                >
                  <Text className="text-on-primary font-sans-bold text-sm">
                    Add to Order — ${chefChoice.price.toFixed(2)}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        {activeTab === 'reviews' && (
          <View className="px-margin-mobile mt-6 space-y-4">
            {reviews.length === 0 ? (
              <View className="items-center py-8">
                <Text className="text-on-surface-variant font-sans text-sm">
                  No reviews yet
                </Text>
              </View>
            ) : (
              reviews.map((review) => (
                <View
                  key={review.id}
                  className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10"
                >
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="font-sans-bold text-sm text-on-surface">
                      {review.author}
                    </Text>
                    <StarRating rating={review.rating} />
                  </View>
                  <Text className="text-xs text-on-surface-variant font-sans leading-relaxed">
                    {review.text}
                  </Text>
                  <Text className="text-[10px] text-on-surface-variant/60 font-sans mt-2">
                    {review.date}
                  </Text>
                </View>
              ))
            )}
          </View>
        )}

        {activeTab === 'info' && (
          <View className="px-margin-mobile mt-6">
            <View className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10 space-y-4">
              <View>
                <Text className="font-sans-bold text-sm text-on-surface mb-2">
                  About the Restaurant
                </Text>
                <Text className="text-xs text-on-surface-variant font-sans leading-relaxed">
                  {restaurant.description}
                </Text>
              </View>
              {restaurant.address && (
                <View className="flex-row items-center gap-2 pt-2 border-t border-outline-variant/10">
                  <Ionicons name="map-outline" size={18} color="#b3290f" />
                  <Text className="text-xs text-on-surface font-sans-semibold flex-1">
                    {restaurant.address}
                  </Text>
                </View>
              )}
              {!restaurant.address && (
                <View className="flex-row items-center gap-2 pt-2 border-t border-outline-variant/10">
                  <Ionicons name="map-outline" size={18} color="#b3290f" />
                  <Text className="text-xs text-on-surface-variant font-sans flex-1">
                    {restaurant.distance} · {restaurant.cuisine} · {restaurant.priceLevel}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
      </Animated.ScrollView>

      {/* Floating Cart Bar */}
      {hasItems && (
        <View
          className="absolute left-margin-mobile right-margin-mobile z-50"
          style={{ bottom: insets.bottom > 0 ? insets.bottom + 8 : 24 }}
        >
          <TouchableOpacity
            className="bg-on-surface/90 flex-row items-center justify-between p-4 rounded-3xl shadow-2xl"
            onPress={() => { triggerHaptic('light'); router.push('/(main)/cart'); }}
            activeOpacity={0.95}
          >
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 bg-primary rounded-full items-center justify-center">
                <Text className="font-sans-bold text-white">{cartCount}</Text>
              </View>
              <View>
                <Text className="text-[10px] text-white/85 uppercase tracking-wider font-sans-semibold">
                  {t('restaurant.viewBasket')}
                </Text>
                <Text className="font-sans-extrabold text-base text-white">
                  ${cartSubtotal.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="font-sans-bold text-sm text-on-primary">{t('restaurant.checkout')}</Text>
              <Ionicons name="arrow-forward" size={16} color="#ffffff" />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
