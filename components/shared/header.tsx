import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  rightAction?: {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
}

export function Header({ title, showBack = false, rightAction }: HeaderProps) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 h-14 bg-surface/80">
      <View className="w-10">
        {showBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full bg-surface-container-lowest/80"
          >
            <Ionicons name="arrow-back" size={22} color="#1a1c1f" />
          </TouchableOpacity>
        )}
      </View>
      {title && (
        <Text className="font-sans-extrabold text-lg text-on-surface">{title}</Text>
      )}
      <View className="w-10">
        {rightAction && (
          <TouchableOpacity onPress={rightAction.onPress} className="w-10 h-10 items-center justify-center">
            <Ionicons name={rightAction.icon} size={22} color="#1a1c1f" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
