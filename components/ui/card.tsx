import { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';

interface CardProps {
  onPress?: () => void;
  children?: ReactNode;
  className?: string;
}

export function Card({ onPress, children, className = '' }: CardProps) {
  if (onPress) {
    return (
      <TouchableOpacity
        className={`bg-surface rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10 active:scale-[0.98] transition-all ${className}`}
        onPress={onPress}
        activeOpacity={0.95}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View
      className={`bg-surface rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-outline-variant/10 active:scale-[0.98] transition-all ${className}`}
    >
      {children}
    </View>
  );
}
