import { create } from 'zustand';

type Locale = 'en' | 'ru';

interface AppState {
  locale: Locale;
  isFirstLaunch: boolean;
  setLocale: (locale: Locale) => void;
  setFirstLaunchComplete: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  locale: 'en',
  isFirstLaunch: true,

  setLocale: (locale) => set({ locale }),
  setFirstLaunchComplete: () => set({ isFirstLaunch: false }),
}));
