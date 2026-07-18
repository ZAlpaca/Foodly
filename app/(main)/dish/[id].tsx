import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { restaurants } from '@/data/restaurants';
import { useCartStore } from '@/store/cart-store';
import { useI18n } from '@/hooks/use-i18n';
import { triggerHaptic } from '@/hooks/use-haptics';

const { width } = Dimensions.get('window');

export default function DishDetailScreen() {
  const router = useRouter();
  const { id, restaurantId } = useLocalSearchParams<{ id: string; restaurantId: string }>();
  const insets = useSafeAreaInsets();
  const { t } = useI18n();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const addItem = useCartStore((s) => s.addItem);

  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const menuItem = restaurant?.menu.find((item) => item.id === id);

  if (!menuItem || !restaurant) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Text className="text-on-surface font-sans-bold text-xl">Dish not found</Text>
        <TouchableOpacity
          className="mt-4 bg-primary px-6 py-2.5 rounded-full"
          onPress={() => router.back()}
        >
          <Text className="text-on-primary font-sans-bold text-sm">{t('common.back')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const basePrice = menuItem.price;
  const optionsPrice = selectedOptions.reduce((sum, optName) => {
    const opt = menuItem.availableOptions.find((o) => o.name === optName);
    return sum + (opt?.price ?? 0);
  }, 0);
  const totalPrice = (basePrice + optionsPrice) * quantity;

  const toggleOption = (optionName: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionName)
        ? prev.filter((n) => n !== optionName)
        : [...prev, optionName],
    );
  };

  const handleAddToCart = () => {
    triggerHaptic('medium');
    addItem(menuItem, quantity, selectedOptions, restaurant.id, restaurant.name);
    router.push('/(main)/cart');
  };

  return (
    <View className="flex-1 bg-background">
      {/* Floating Header (overlaid on hero) */}
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
              <Ionicons name="share-outline" size={20} color="#1a1c1f" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80 shadow-sm active:scale-95 transition-all">
              <Ionicons name="heart-outline" size={20} color="#1a1c1f" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        {/* Hero Image */}
        <View className="relative w-full h-[390px] overflow-hidden">
          <Image
            source={{ uri: menuItem.image }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </View>

        {/* Content Body (overlapping hero) */}
        <View className="px-margin-mobile -mt-8 relative z-10">
          {/* Header Section — Name + Price */}
          <View className="flex-col gap-1 mb-6">
            <View className="flex-row justify-between items-start">
              <View className="flex-1 mr-4">
                <Text className="font-sans-extrabold text-3xl text-on-surface tracking-tight">
                  {menuItem.name}
                </Text>
              </View>
              <Text className="font-sans-bold text-2xl text-primary">
                ${basePrice.toFixed(2)}
              </Text>
            </View>
            {/* Star Rating */}
            <View className="flex-row items-center gap-2 mt-1">
              <View className="flex-row">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Ionicons
                    key={star}
                    name={star <= Math.floor(restaurant.rating) ? 'star' : star - 0.5 <= restaurant.rating ? 'star-half' : 'star-outline'}
                    size={16}
                    color={star <= Math.floor(restaurant.rating) || star - 0.5 <= restaurant.rating ? '#fdc003' : '#e2e2e7'}
                    style={{ marginRight: 1 }}
                  />
                ))}
              </View>
              <Text className="text-xs font-sans-semibold text-on-surface-variant">
                ({restaurant.rating} • {restaurant.reviewCount}+ {t('restaurant.reviews')})
              </Text>
            </View>
          </View>

          {/* Description */}
          <View className="mb-6">
            <Text className="text-sm text-on-surface-variant font-sans leading-relaxed">
              {menuItem.description}
            </Text>
          </View>

          {/* Nutritional Info Grid */}
          <View className="flex-row gap-3 mb-6">
            {[
              { label: 'calories', key: 'calories', value: menuItem.nutritionalInfo.calories },
              { label: 'protein', key: 'protein', value: menuItem.nutritionalInfo.protein },
              { label: 'fat', key: 'fat', value: menuItem.nutritionalInfo.fat },
              { label: 'carbs', key: 'carbs', value: menuItem.nutritionalInfo.carbs },
            ].map((item) => (
              <View
                key={item.key}
                className="flex-1 bg-surface-container-low rounded-xl p-3 items-center border border-outline-variant/15"
              >
                <Text className="text-[10px] uppercase font-sans-bold text-on-surface-variant/70 mb-0.5">
                  {t(`dish.${item.key}`)}
                </Text>
                <Text className="font-sans-bold text-base text-on-surface">
                  {item.value}
                </Text>
              </View>
            ))}
          </View>

          {/* Customization Options */}
          {menuItem.availableOptions.length > 0 && (
            <View className="mb-6">
              <View className="flex-row justify-between items-center mb-3">
                <Text className="font-sans-bold text-base text-on-surface">
                  {t('dish.extraToppings')}
                </Text>
                <View className="px-2 py-0.5 bg-secondary-container rounded-full">
                  <Text className="text-[10px] font-sans-bold text-on-secondary-container uppercase tracking-wider">
                    {t('dish.optional')}
                  </Text>
                </View>
              </View>
              <View className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/15">
                {menuItem.availableOptions.map((option, index) => (
                  <TouchableOpacity
                    key={option.name}
                    className="flex-row items-center justify-between px-4 py-4 active:bg-surface-container transition-colors"
                    onPress={() => { triggerHaptic('light'); toggleOption(option.name); }}
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center gap-3 flex-1">
                      <View
                        className={`w-5 h-5 rounded-md border-2 items-center justify-center ${
                          selectedOptions.includes(option.name)
                            ? 'bg-primary border-primary'
                            : 'border-outline'
                        }`}
                      >
                        {selectedOptions.includes(option.name) && (
                          <Ionicons name="checkmark" size={14} color="#ffffff" />
                        )}
                      </View>
                      <Text className="text-sm font-sans-semibold text-on-surface flex-1">
                        {option.name}
                      </Text>
                    </View>
                    <Text className="text-xs font-sans-bold text-on-surface-variant">
                      +${option.price.toFixed(2)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {/* Quantity Selector */}
          <View className="flex-row items-center justify-between mb-6">
            <Text className="font-sans-bold text-base text-on-surface">{t('dish.quantity')}</Text>
            <View className="flex-row items-center bg-surface-container-high rounded-full p-1 gap-4">
              <TouchableOpacity
                className={`w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest shadow-sm active:scale-90 transition-all ${
                  quantity <= 1 ? 'opacity-40' : ''
                }`}
                onPress={() => { triggerHaptic('light'); setQuantity(Math.max(1, quantity - 1)); }}
                disabled={quantity <= 1}
              >
                <Ionicons name="remove" size={18} color="#1a1c1f" />
              </TouchableOpacity>
              <Text className="font-sans-bold text-base w-6 text-center">{quantity}</Text>
              <TouchableOpacity
                className="w-10 h-10 items-center justify-center rounded-full bg-primary shadow-sm active:scale-90 transition-all"
                onPress={() => { triggerHaptic('light'); setQuantity(quantity + 1); }}
              >
                <Ionicons name="add" size={18} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View
        className="absolute left-0 right-0 z-50 bg-surface/90 border-t border-outline-variant/10 shadow-lg"
        style={{ bottom: insets.bottom > 0 ? insets.bottom : 0, paddingBottom: insets.bottom > 0 ? 0 : 8 }}
      >
        <View className="px-margin-mobile py-4 flex-row items-center gap-4">
          <View className="flex-col min-w-[80px]">
            <Text className="text-xs font-sans-semibold text-on-surface-variant">{t('dish.total')}</Text>
            <Text className="font-sans-extrabold text-xl text-on-surface">
              ${totalPrice.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity
            className="flex-1 h-14 bg-primary rounded-2xl active:scale-[0.98] transition-all shadow-md flex-row items-center justify-center gap-2"
            onPress={handleAddToCart}
            activeOpacity={0.9}
          >
            <Ionicons name="bag" size={18} color="#ffffff" />
            <Text className="text-on-primary font-sans-bold text-base">{t('dish.addToCart')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
