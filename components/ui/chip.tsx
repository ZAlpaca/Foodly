import { TouchableOpacity, Text } from 'react-native';

interface ChipProps {
  label: string;
  icon?: string;
  active?: boolean;
  onPress?: () => void;
}

export function Chip({ label, active = false, onPress }: ChipProps) {
  return (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full border ${
        active
          ? 'bg-primary border-primary'
          : 'bg-transparent border-[#E5E5EA]'
      }`}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        className={`text-xs font-sans-semibold ${
          active ? 'text-on-primary' : 'text-on-surface-variant'
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
