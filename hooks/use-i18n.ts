import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/app-store';
import { useEffect } from 'react';
import i18n from '@/locales/i18n';

export function useI18n() {
  const { t } = useTranslation();
  const locale = useAppStore((state) => state.locale);
  const setLocale = useAppStore((state) => state.setLocale);

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  const changeLanguage = (lang: 'en' | 'ru') => {
    setLocale(lang);
    i18n.changeLanguage(lang);
  };

  return { t, locale, changeLanguage };
}
