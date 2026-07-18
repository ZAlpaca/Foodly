import { View, TextInput, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

export function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <View className="flex-row items-center h-14 bg-surface-container-low rounded-xl px-4">
      {icon && (
        <Ionicons name={icon} size={20} color="#5a413b" style={{ opacity: 0.75, marginRight: 10 }} />
      )}
      <TextInput
        className="flex-1 text-sm text-on-surface font-sans"
        placeholderTextColor="rgba(90, 65, 59, 0.75)"
        {...props}
      />
    </View>
  );
}
