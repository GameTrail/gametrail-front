import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Flag } from '@/components/Landing/AboutSection/LanguagesSelector/styles';
import useLanguage from '@/i18n/hooks';

const LanguagesSelector = () => {
  // Get i18n from context
  const { i18n } = useLanguage();
  const { language } = i18n;
  const languages = Object.keys(i18n.services.resourceStore.data);
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng).catch(() => {});
    localStorage.setItem('language', lng);
    setIsOpen(false);
  }, [i18n]);

  const renderLanguagesButtons = () => {
    const otherLanguages = languages.filter((lng: string) => lng !== language);
    return otherLanguages.map((lng: string) => (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{
          opacity: isOpen ? [1, 0] : 0,
          scale: isOpen ? 1 : 0,
          y: isOpen ? [100, 0] : 0,
        }}
        transition={{
          duration: 10,
          scale: { type: 'spring', stiffness: 200, damping: 30 },
          y: { type: 'spring', stiffness: 200, damping: 30 },
          opacity: { type: 'spring', stiffness: 200, damping: 30 },
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          position: 'absolute',
          zIndex: 1,
          bottom: '100%',
          right: 0,
        }}
        onClick={() => handleChangeLanguage(lng)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Flag src={`/images/flags/${lng}.png`} />
      </motion.button>
    ));
  };

  return (
  // Selector for languages

    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      onMouseLeave={() => setIsOpen(false)}
      onTap={() => setIsOpen(!isOpen)}
    >
      <motion.button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Flag src={`/images/flags/${language}.png`} />
      </motion.button>
      {renderLanguagesButtons()}

    </motion.div>
  );
};

export default LanguagesSelector;
