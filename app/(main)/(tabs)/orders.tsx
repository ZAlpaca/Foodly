import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useOrdersStore, useActiveOrders, usePastOrders } from '@/store/orders-store';
import { useI18n } from '@/hooks/use-i18n';
import { triggerHaptic } from '@/hooks/use-haptics';

export default function OrdersScreen() {
  const insets = useSafeAreaInsets();
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');
  const activeOrders = useActiveOrders();
  const pastOrders = usePastOrders();

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 border-b border-outline-variant/10 bg-surface/80" style={{ paddingTop: insets.top, height: insets.top + 56 }}>
        <View className="flex-row items-center gap-2">
          <Ionicons name="receipt-outline" size={22} color="#b3290f" />
          <Text className="font-sans-extrabold text-lg text-on-surface">{t('orders.title')}</Text>
        </View>
        <TouchableOpacity onPress={() => { triggerHaptic('light'); }}>
          <Ionicons name="search-outline" size={22} color="#1a1c1f" />
        </TouchableOpacity>
      </View>

      {/* Tab Toggle */}
      <View className="flex-row items-center gap-8 px-4 border-b border-outline-variant/20">
        <TouchableOpacity
          className={`pb-3 pt-2 ${activeTab === 'active' ? 'border-b-2 border-primary' : ''}`}
          onPress={() => { triggerHaptic('light'); setActiveTab('active'); }}
        >
          <Text className={`text-xs font-sans-bold ${activeTab === 'active' ? 'text-primary' : 'text-on-surface-variant'}`}>
            {t('orders.active')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`pb-3 pt-2 ${activeTab === 'past' ? 'border-b-2 border-primary' : ''}`}
          onPress={() => { triggerHaptic('light'); setActiveTab('past'); }}
        >
          <Text className={`text-xs font-sans-bold ${activeTab === 'past' ? 'text-primary' : 'text-on-surface-variant'}`}>
            {t('orders.past')}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        {activeTab === 'active' ? (
          activeOrders.length > 0 ? (
            activeOrders.map((order) => (
              <View key={order.id} className="bg-surface-container-lowest rounded-[24px] p-4 mb-4 border border-surface-container">
                {/* Order Header */}
                <View className="flex-row gap-4 mb-4">
                  <View className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden">
                    <Ionicons name="restaurant-outline" size={32} color="#5a413b" />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between items-start">
                      <Text className="font-sans-bold text-base text-on-surface">{order.restaurantName}</Text>
                      <View className={`px-2.5 py-1 rounded-full ${order.status === 'ACTIVE' ? 'bg-secondary-container' : 'bg-surface-container-high'}`}>
                        <Text className={`text-[10px] font-sans-bold uppercase tracking-wider ${order.status === 'ACTIVE' ? 'text-on-secondary-container' : 'text-on-surface-variant'}`}>
                          {order.status === 'ACTIVE' ? t('orders.activeLabel') : t('orders.preparing')}
                        </Text>
                      </View>
                    </View>
                    <Text className="text-on-surface-variant text-[11px] font-sans-semibold mt-1">
                      {order.date} • {order.itemsSummary}
                    </Text>
                  </View>
                </View>

                {/* Status Bar */}
                <View className="bg-surface-container-low rounded-xl p-3 flex-row items-center gap-3 mb-4">
                  <View className="w-2 h-2 rounded-full bg-primary" />
                  <Text className="text-xs font-sans-bold text-primary">
                    {order.status === 'ACTIVE' ? t('orders.outForDelivery') : t('orders.kitchenPreparing')}
                  </Text>
                  <Text className="text-on-surface-variant text-[11px] font-sans-semibold ml-auto">{order.eta}</Text>
                </View>

                {/* Actions */}
                <View className="flex-row gap-2">
                  <TouchableOpacity className="flex-1 h-12 bg-primary rounded-xl items-center justify-center" onPress={() => { triggerHaptic('light'); }}>
                    <Text className="text-on-primary text-xs font-sans-bold">{t('orders.trackOrder')}</Text>
                  </TouchableOpacity>
                  {order.status === 'ACTIVE' && (
                    <TouchableOpacity className="w-12 h-12 bg-surface-container rounded-xl items-center justify-center border border-outline-variant/10" onPress={() => { triggerHaptic('light'); }}>
                      <Ionicons name="call-outline" size={18} color="#1a1c1f" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))
          ) : (
            // Empty state
            <View className="py-12 items-center">
              <Ionicons name="fast-food-outline" size={48} color="#5a413b" style={{ opacity: 0.3 }} />
              <Text className="text-xs font-sans-semibold text-on-surface-variant mt-4">{t('orders.noActive')}</Text>
            </View>
          )
        ) : (
          pastOrders.length > 0 ? (
            pastOrders.map((order) => (
              <View key={order.id} className="bg-surface-container-lowest rounded-[24px] p-4 mb-4 border border-surface-container opacity-90">
                {/* Past Order Header */}
                <View className="flex-row gap-4 mb-4">
                  <View className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden">
                    <Ionicons name="restaurant-outline" size={32} color="#5a413b" />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between items-start">
                      <Text className="font-sans-bold text-base text-on-surface">{order.restaurantName}</Text>
                      <Text className="text-on-surface-variant text-xs font-sans-bold uppercase tracking-wider">{t('orders.delivered')}</Text>
                    </View>
                    <Text className="text-on-surface-variant text-[11px] font-sans-semibold mt-1">
                      {order.date} • ${order.total.toFixed(2)}
                    </Text>
                  </View>
                </View>

                {/* Actions */}
                <View className="flex-row gap-2">
                  <TouchableOpacity className="flex-1 h-12 bg-surface-container rounded-xl items-center justify-center border border-outline-variant/10" onPress={() => { triggerHaptic('light'); }}>
                    <Text className="text-on-surface text-xs font-sans-bold">{t('orders.reorder')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 h-12 border border-outline-variant rounded-xl items-center justify-center" onPress={() => { triggerHaptic('light'); }}>
                    <Text className="text-on-surface text-xs font-sans-bold">{t('orders.viewReceipt')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <View className="py-12 items-center">
              <Text className="text-xs font-sans-semibold text-on-surface-variant">{t('orders.noPast')}</Text>
            </View>
          )
        )}
        <View className="h-8" />
      </ScrollView>
    </View>
  );
}
