import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const setupLanguage = useCallback(() => {
    const language = localStorage.getItem('language') || 'es_ES';
    i18n.changeLanguage(language);
  }, [i18n]);

  return {
    language: i18n.language,
    setLanguage: i18n.changeLanguage,
    setupLanguage,
    t,
    i18n,
  };
};

export default useLanguage;
