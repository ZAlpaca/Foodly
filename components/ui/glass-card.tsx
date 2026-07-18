import { View, ViewProps } from 'react-native';

interface GlassCardProps extends ViewProps {}

export function GlassCard({ children, className = '', ...props }: GlassCardProps) {
  return (
    <View
      className={`bg-surface/80 backdrop-blur-xl rounded-2xl border border-outline-variant/10 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}
