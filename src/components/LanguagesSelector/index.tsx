import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Flag, FlagNavbar } from '@/components/LanguagesSelector/styles';
import useLanguage from '@/i18n/hooks';

export type Props = {
  isNavbar: boolean,
};

const LanguagesSelector:FC<Props> = ({ isNavbar = false }) => {
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

  const renderFlag = (inNavbar : boolean, lng : string) => {
    if (inNavbar) return <FlagNavbar src={`/images/flags/${lng}.png`} />;
    return <Flag src={`/images/flags/${lng}.png`} />;
  };

  const renderLanguagesButtons = () => {
    const otherLanguages = languages.filter((lng: string) => lng !== language);

    return otherLanguages.map((lng: string) => {
      const count = otherLanguages.indexOf(lng);
      const yAnimation = isNavbar ? [-10, count * 50] : [100, count * -120];
      return (
        <motion.button
          initial={{
            opacity: isNavbar ? 1 : 0,
            scale: isNavbar ? 1 : 0,
          }}
          whileInView={{ opacity: 1 }}
          animate={{
            opacity: isOpen ? [1, 0] : 0,
            scale: isOpen ? 1 : 0,
            y: isOpen ? yAnimation : 0,
          }}
          transition={{
            duration: 10,
            scale: { type: 'spring', stiffness: 200, damping: 30 },
            y: { type: 'spring', stiffness: 200, damping: 30 },
            opacity: { type: 'spring', stiffness: 200, damping: 30 },
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: count * 0.1,
          }}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            position: 'absolute',
            bottom: isNavbar ? '0' : '100%',
            right: 0,
            top: isNavbar ? '100%' : '-100%',
          }}
          onClick={() => handleChangeLanguage(lng)}
        >
          {renderFlag(isNavbar, lng)}
        </motion.button>
      );
    });
  };

  return (
  // Selector for languages

    <motion.div
      initial={{
        opacity: isNavbar ? 1 : 0,
        scale: isNavbar ? 1 : 0,
      }}
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
      style={{
        position: 'relative',
        zIndex: 100,
      }}
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
        {renderFlag(isNavbar, language)}
      </motion.button>
      {renderLanguagesButtons()}

    </motion.div>
  );
};

export default LanguagesSelector;
