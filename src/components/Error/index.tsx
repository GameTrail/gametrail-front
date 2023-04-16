import React from 'react';
import useLanguage from '@/i18n/hooks';
import { Container, Text } from './styles';

const Error = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <Text>
        ❌
        {' '}
        {t('unexpected_error')}
      </Text>
    </Container>
  );
};

export default Error;
