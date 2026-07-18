import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useCartStore } from '@/store/cart-store';
import { useI18n } from '@/hooks/use-i18n';
import { triggerHaptic } from '@/hooks/use-haptics';

export default function CartScreen() {
  const router = useRouter();
  const { t } = useI18n();
  const items = useCartStore((s) => s.items);
  const discount = useCartStore((s) => s.discount);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const applyPromo = useCartStore((s) => s.applyPromo);
  const clearCart = useCartStore((s) => s.clearCart);
  const [promoCode, setPromoCode] = useState('');

  const subtotal = items.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? 5.0 : 0;
  const serviceFee = items.length > 0 ? 2.5 : 0;
  const total = subtotal + deliveryFee + serviceFee - discount;

  const handleApplyPromo = () => {
    triggerHaptic('light');
    applyPromo(promoCode);
  };

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 h-14 border-b border-outline-variant/10 bg-surface/80">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#1a1c1f" />
        </TouchableOpacity>
        <Text className="font-sans-extrabold text-lg text-on-surface">{t('cart.title')}</Text>
        <TouchableOpacity onPress={() => { triggerHaptic('light'); clearCart(); }}>
          <Text className="text-primary font-sans-bold text-sm">{t('cart.clear')}</Text>
        </TouchableOpacity>
      </View>

      {items.length === 0 ? (
        // Empty State
        <View className="flex-1 items-center justify-center px-4">
          <Ionicons name="bag-outline" size={64} color="#5a413b" style={{ opacity: 0.3 }} />
          <Text className="font-sans-bold text-lg text-on-surface mt-4">{t('cart.empty')}</Text>
          <Text className="text-on-surface-variant font-sans text-xs text-center mt-2 max-w-xs leading-relaxed">
            {t('cart.emptySubtitle')}
          </Text>
          <TouchableOpacity
            className="mt-4 bg-primary px-6 py-2.5 rounded-full"
            onPress={() => { triggerHaptic('light'); router.back(); }}
          >
            <Text className="text-on-primary font-sans-bold text-sm">{t('cart.exploreMenu')}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <ScrollView className="flex-1 px-4 pt-4">
            {/* Delivery Address */}
            <View className="flex-row items-center gap-4 p-4 bg-surface-container-low rounded-xl mb-6">
              <View className="w-10 h-10 rounded-full bg-primary-fixed items-center justify-center">
                <Ionicons name="location" size={20} color="#b3290f" />
              </View>
              <View className="flex-1">
                <Text className="text-[10px] uppercase tracking-wider text-on-surface-variant font-sans-bold">{t('cart.deliveringTo')}</Text>
                <Text className="text-sm text-on-surface font-sans-extrabold">221B Baker Street, London</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#5a413b" />
            </View>

            {/* Cart Items */}
            {items.map((item) => (
              <View key={item.id} className="flex-row gap-4 p-4 bg-surface-container-lowest rounded-2xl mb-4 border border-outline-variant/10 ">
                <Image source={{ uri: item.menuItem.image }} className="w-20 h-20 rounded-xl" resizeMode="cover" />
                <View className="flex-1 justify-between">
                  <View className="flex-row justify-between">
                    <View className="flex-1 mr-2">
                      <Text className="font-sans-bold text-[15px] text-on-surface">{item.menuItem.name}</Text>
                      {item.selectedOptions.length > 0 && (
                        <Text className="text-xs text-on-surface-variant/80 font-sans-medium">{item.selectedOptions.join(', ')}</Text>
                      )}
                    </View>
                    <Text className="text-sm font-sans-extrabold text-on-surface">
                      ${(item.menuItem.price * item.quantity).toFixed(2)}
                    </Text>
                  </View>
                  <View className="flex-row items-center justify-between mt-2">
                    <View className="flex-row items-center bg-surface-container-low rounded-full p-1 gap-2">
                      <TouchableOpacity
                        className="w-7 h-7 items-center justify-center rounded-full bg-surface-container-highest"
                        onPress={() => { triggerHaptic('light'); updateQuantity(item.id, -1); }}
                      >
                        <Ionicons name="remove" size={14} color="#1a1c1f" />
                      </TouchableOpacity>
                      <Text className="text-xs font-sans-bold w-4 text-center">{item.quantity}</Text>
                      <TouchableOpacity
                        className="w-7 h-7 items-center justify-center rounded-full bg-secondary-container"
                        onPress={() => { triggerHaptic('light'); updateQuantity(item.id, 1); }}
                      >
                        <Ionicons name="add" size={14} color="#6c5000" />
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => removeItem(item.id)}>
                      <Ionicons name="trash-outline" size={18} color="#ba1a1a" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}

            {/* Promo Code */}
            <View className="flex-row items-center gap-3 p-3 bg-white border border-outline-variant/30 rounded-2xl mb-6 mt-2">
              <Ionicons name="pricetag-outline" size={20} color="#b3290f" />
              <TextInput
                className="flex-1 text-sm font-sans"
                placeholder={t('cart.promoPlaceholder')}
                placeholderTextColor="rgba(90,65,59,0.4)"
                value={promoCode}
                onChangeText={setPromoCode}
              />
              <TouchableOpacity className="px-4 py-2 bg-on-surface rounded-xl" onPress={handleApplyPromo}>
                <Text className="text-surface font-sans-semibold text-xs">{t('cart.apply')}</Text>
              </TouchableOpacity>
            </View>

            {/* Order Summary */}
            <View className="mb-32">
              <View className="flex-row justify-between py-2">
                <Text className="text-on-surface-variant text-sm font-sans-semibold">{t('cart.subtotal')}</Text>
                <Text className="text-on-surface text-sm font-sans-bold">${subtotal.toFixed(2)}</Text>
              </View>
              {discount > 0 && (
                <View className="flex-row justify-between py-2">
                  <Text className="text-primary text-sm font-sans-semibold">{t('cart.promoDiscount')}</Text>
                  <Text className="text-primary text-sm font-sans-bold">-${discount.toFixed(2)}</Text>
                </View>
              )}
              <View className="flex-row justify-between py-2">
                <Text className="text-on-surface-variant text-sm font-sans-semibold">{t('cart.deliveryFee')}</Text>
                <Text className="text-on-surface text-sm font-sans-bold">${deliveryFee.toFixed(2)}</Text>
              </View>
              <View className="flex-row justify-between py-2">
                <Text className="text-on-surface-variant text-sm font-sans-semibold">{t('cart.serviceFee')}</Text>
                <Text className="text-on-surface text-sm font-sans-bold">${serviceFee.toFixed(2)}</Text>
              </View>
              <View className="flex-row justify-between pt-4 mt-2 border-t border-outline-variant/30">
                <Text className="text-on-surface font-sans-extrabold text-base">Total</Text>
                <Text className="text-primary font-sans-extrabold text-xl">${total.toFixed(2)}</Text>
              </View>
            </View>
          </ScrollView>

          {/* Bottom Checkout Button */}
          <View className="bg-surface/80 backdrop-blur-xl px-4 pt-4 pb-safe border-t border-outline-variant/10">
            <TouchableOpacity
              className="w-full h-[54px] bg-primary rounded-2xl items-center justify-center flex-row gap-2"
              onPress={() => { triggerHaptic('medium'); router.push('/(main)/checkout'); }}
            >
              <Text className="text-on-primary font-sans-bold text-base">{t('cart.goToCheckout')}</Text>
              <Ionicons name="arrow-forward" size={18} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
