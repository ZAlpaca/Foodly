import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  title: string;
}

export function Button({ variant = 'primary', title, className = '', ...props }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      className={`h-[54px] rounded-2xl items-center justify-center ${
        isPrimary
          ? 'bg-primary shadow-[0_4px_20px_rgba(179,41,15,0.2)]'
          : 'bg-surface-container-low'
      } ${className}`}
      activeOpacity={0.95}
      {...props}
    >
      <Text
        className={`font-sans-bold text-lg ${
          isPrimary ? 'text-on-primary' : 'text-on-surface'
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
