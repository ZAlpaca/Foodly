import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

type HapticStyle = 'light' | 'medium' | 'heavy';

export function triggerHaptic(style: HapticStyle = 'light') {
  if (Platform.OS === 'web') return;

  const feedbackStyle = {
    light: Haptics.ImpactFeedbackStyle.Light,
    medium: Haptics.ImpactFeedbackStyle.Medium,
    heavy: Haptics.ImpactFeedbackStyle.Heavy,
  }[style];

  Haptics.impactAsync(feedbackStyle).catch(() => {});
}
