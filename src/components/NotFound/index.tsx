import React from 'react';
import useLanguage from '@/i18n/hooks';
import { Container, Text } from './styles';

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <Text>
        😕
        {' '}
        {t('not_found')}
      </Text>
    </Container>
  );
};

export default NotFound;
