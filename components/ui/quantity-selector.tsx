import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QuantitySelectorProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
  min?: number;
}

export function QuantitySelector({ quantity, onDecrement, onIncrement, min = 1 }: QuantitySelectorProps) {
  const isMin = quantity <= min;

  return (
    <View className="flex-row items-center bg-surface-container-high rounded-full p-1 gap-4">
      <TouchableOpacity
        className={`w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest shadow-sm ${
          isMin ? 'opacity-40' : ''
        }`}
        onPress={onDecrement}
        disabled={isMin}
      >
        <Ionicons name="remove" size={18} color="#1a1c1f" />
      </TouchableOpacity>
      <Text className="font-sans-bold text-base w-6 text-center text-on-surface">{quantity}</Text>
      <TouchableOpacity
        className="w-10 h-10 items-center justify-center rounded-full bg-primary shadow-sm"
        onPress={onIncrement}
      >
        <Ionicons name="add" size={18} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}
