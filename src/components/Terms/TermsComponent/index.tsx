import React from 'react';
import useLanguage from '@/i18n/hooks';
import {
  Container, Title, Text, Subtitle, Li, Ul, Strong,
} from './styles';

const Terms = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <Title>{t('terms-1')}</Title>
      <Text>{t('terms-2')}</Text>
      <Text>
        {t('terms-3')}
        <Ul>
          <Li>
            {t('terms-4')}
          </Li>
        </Ul>
        <Ul>
          <Li>
            {t('terms-5')}
          </Li>
        </Ul>
        <Ul>
          <Li>
            {t('terms-6')}
          </Li>
        </Ul>
        <Ul>
          <Li>
            {t('terms-7')}
          </Li>
        </Ul>
        <Ul>
          <Li>
            {t('terms-8')}
          </Li>
        </Ul>
      </Text>
      <Subtitle>{t('terms-9')}</Subtitle>
      <Text>{t('terms-10')}</Text>
      <Ul>
        <Strong>help.user.gametrail@gmail.com</Strong>
      </Ul>
    </Container>
  );
};

export default Terms;
