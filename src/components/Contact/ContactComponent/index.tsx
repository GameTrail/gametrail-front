import React from 'react';
import { ContactLottie } from '@/components/Lotties';
import useLanguage from '@/i18n/hooks';
import {
  Container, Title, Text, Strong,
} from './styles';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <ContactLottie />
      <Title>{t('contact_us')}</Title>
      <Text>
        {' '}
        {t('contact_us_description')}
      </Text>
      <Strong>
        {' '}
        {t('help_email')}
        {' '}
      </Strong>
    </Container>
  );
};

export default Contact;
