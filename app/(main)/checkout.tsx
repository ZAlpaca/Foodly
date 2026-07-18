import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCartStore } from '@/store/cart-store';
import { useOrdersStore } from '@/store/orders-store';
import { useI18n } from '@/hooks/use-i18n';
import { triggerHaptic } from '@/hooks/use-haptics';
import { Order } from '@/types';

export default function CheckoutScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { t } = useI18n();
  const [isProcessing, setIsProcessing] = useState(false);
  const [instructions, setInstructions] = useState('');

  const items = useCartStore((s) => s.items);
  const discount = useCartStore((s) => s.discount);
  const clearCart = useCartStore((s) => s.clearCart);
  const addOrder = useOrdersStore((s) => s.addOrder);

  const subtotal = items.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? 5.0 : 0;
  const serviceFee = items.length > 0 ? 2.5 : 0;
  const total = subtotal + deliveryFee + serviceFee - discount;

  const handlePlaceOrder = () => {
    triggerHaptic('medium');
    setIsProcessing(true);
    setTimeout(() => {
      const newOrder: Order = {
        id: `order-${Date.now()}`,
        restaurantName: items[0]?.restaurantName ?? 'Foodly Order',
        restaurantImage: items[0]?.menuItem.image ?? '',
        itemsSummary: `${items.length}x • ${items[0]?.menuItem.name ?? 'Order'}`,
        date: 'Today, Just Now',
        total,
        status: 'PREPARING',
        eta: 'ETA: 20 mins',
        items: items.map((item) => ({ ...item })),
      };
      addOrder(newOrder);
      clearCart();
      setIsProcessing(false);
      router.push('/(main)/(tabs)/orders');
    }, 1500);
  };

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View
        className="flex-row items-center px-4 h-14 border-b border-outline-variant/10 bg-surface/80"
        style={{ marginTop: insets.top }}
      >
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={22} color="#1a1c1f" />
        </TouchableOpacity>
        <Text className="font-sans-extrabold text-lg text-on-surface">{t('checkout.title')}</Text>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {/* Delivery Address */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="font-sans-extrabold text-base text-on-surface">
              {t('checkout.deliveryAddress')}
            </Text>
            <Text className="text-primary font-sans-bold text-xs">{t('checkout.change')}</Text>
          </View>
          <View className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10">
            <View className="h-32 bg-surface-container-high items-center justify-center">
              <Ionicons name="map-outline" size={36} color="#5a413b" style={{ opacity: 0.25 }} />
            </View>
            <View className="p-4 gap-0.5">
              <Text className="font-sans-bold text-[15px] text-on-surface">{t('checkout.home')}</Text>
              <Text className="text-xs text-on-surface-variant font-sans-semibold leading-tight">
                221B Baker Street, London, NW1 6XE
              </Text>
              <Text className="text-[11px] text-on-surface-variant/70 font-sans-semibold italic">
                {t('checkout.aptInfo')}
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View className="mb-6">
          <Text className="font-sans-extrabold text-base text-on-surface mb-3">
            {t('checkout.paymentMethod')}
          </Text>
          <View className="flex-row items-center justify-between bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/10">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-8 bg-black rounded-md items-center justify-center">
                <Text className="text-white text-[10px] font-bold">💳</Text>
              </View>
              <View>
                <Text className="font-sans-bold text-[15px] text-on-surface">Apple Pay</Text>
                <Text className="text-xs text-on-surface-variant font-sans-semibold">
                  Visa •••• 4242
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#5a413b" />
          </View>
        </View>

        {/* Order Summary */}
        <View className="mb-6">
          <Text className="font-sans-extrabold text-base text-on-surface mb-3">
            {t('checkout.orderSummary')}
          </Text>
          <View className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/10">
            {/* Item List */}
            {items.map((item, idx) => (
              <View
                key={item.id}
                className={`flex-row items-center gap-3 pb-3 ${
                  idx < items.length - 1 ? 'mb-3 border-b border-outline-variant/10' : ''
                }`}
              >
                <Image
                  source={{ uri: item.menuItem.image }}
                  className="w-12 h-12 rounded-xl"
                  resizeMode="cover"
                />
                <View className="flex-1">
                  <Text
                    className="font-sans-bold text-[14px] text-on-surface"
                    numberOfLines={1}
                  >
                    {item.menuItem.name}
                  </Text>
                  <Text className="text-[11px] text-on-surface-variant/85 font-sans-semibold">
                    {item.quantity}x
                    {item.selectedOptions.length > 0
                      ? ` • ${item.selectedOptions.join(', ')}`
                      : ''}
                  </Text>
                </View>
                <Text className="font-sans-bold text-sm text-on-surface">
                  ${(item.menuItem.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            ))}

            {/* Pricing Breakdown */}
            <View className="gap-y-2 pt-1">
              <View className="flex-row justify-between">
                <Text className="text-xs text-on-surface-variant font-sans-semibold">
                  {t('cart.subtotal')}
                </Text>
                <Text className="text-xs text-on-surface font-sans-semibold">
                  ${subtotal.toFixed(2)}
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-xs text-on-surface-variant font-sans-semibold">
                  {t('cart.deliveryFee')}
                </Text>
                <Text className="text-xs text-on-surface font-sans-semibold">
                  ${deliveryFee.toFixed(2)}
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-xs text-on-surface-variant font-sans-semibold">
                  {t('cart.serviceFee')}
                </Text>
                <Text className="text-xs text-on-surface font-sans-semibold">
                  ${serviceFee.toFixed(2)}
                </Text>
              </View>
              {discount > 0 && (
                <View className="flex-row justify-between">
                  <Text className="text-xs text-primary font-sans-semibold">{t('cart.promoDiscount')}</Text>
                  <Text className="text-xs text-primary font-sans-semibold">
                    -${discount.toFixed(2)}
                  </Text>
                </View>
              )}
            </View>

            {/* Total */}
            <View className="flex-row justify-between items-center pt-3 mt-3 border-t border-outline-variant/20">
              <Text className="font-sans-extrabold text-base text-on-surface">Total</Text>
              <Text className="font-sans-extrabold text-lg text-primary">
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Delivery Instructions */}
        <View className="mb-6">
          <Text className="font-sans-extrabold text-base text-on-surface mb-3">
            {t('checkout.deliveryInstructions')}
          </Text>
          <View className="relative">
            <TextInput
              className="bg-surface-container-low rounded-xl p-4 text-xs font-sans-semibold text-on-surface min-h-[100px]"
              placeholder={t('checkout.instructionsPlaceholder')}
              placeholderTextColor="rgba(90,65,59,0.4)"
              value={instructions}
              onChangeText={setInstructions}
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>

        {/* Bottom spacer for fixed button */}
        <View className="h-28" />
      </ScrollView>

      {/* Bottom Place Order Area */}
      <View className="bg-surface/80 backdrop-blur-xl px-4 pt-4 pb-safe border-t border-outline-variant/10">
        <TouchableOpacity
          className={`w-full h-[54px] bg-primary rounded-2xl items-center justify-center flex-row gap-3 ${
            isProcessing ? 'opacity-75' : ''
          }`}
          disabled={isProcessing}
          onPress={handlePlaceOrder}
          activeOpacity={0.85}
        >
          {isProcessing ? (
            <>
              <ActivityIndicator size="small" color="#ffffff" />
              <Text className="text-on-primary font-sans-bold text-base">{t('checkout.processing')}</Text>
            </>
          ) : (
            <>
              <Ionicons name="bag" size={18} color="#ffffff" />
              <Text className="text-on-primary font-sans-bold text-base">{t('checkout.placeOrder')}</Text>
            </>
          )}
        </TouchableOpacity>
        <Text className="text-center text-[10px] font-sans-semibold text-on-surface-variant/60 mt-3 px-6 leading-tight">
          {t('checkout.terms')}
        </Text>
      </View>
    </View>
  );
}
