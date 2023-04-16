import React from 'react';
import useLanguage from '@/i18n/hooks';
import {
  Container, Title, Text, Subtitle2, Li, Ul, Strong,
} from './styles';

const Disclaimer = () => {
  const { t } = useLanguage();

  return (
    <Container>
      <Title>{t('disclaimer')}</Title>
      <Text>{t('disclaimer_last_update')}</Text>
      <Subtitle2>{t('disclaimer-1')}</Subtitle2>
      <Subtitle2>{t('disclaimer-2')}</Subtitle2>
      <Text>
        {t('disclaimer-3')}
      </Text>
      <Subtitle2>{t('disclaimer-4')}</Subtitle2>
      <Text>{t('disclaimer-5')}</Text>
      <Ul>
        <Li>
          <Strong>{t('disclaimer-6')}</Strong>
          {t('disclaimer-7')}
        </Li>
        <Li>
          <Strong>{t('disclaimer-8')}</Strong>
          {t('disclaimer-9')}
        </Li>
        <Li>
          <Strong>{t('disclaimer-10')}</Strong>
          {t('disclaimer-11')}
        </Li>
        <Li>
          <Strong>{t('disclaimer-12')}</Strong>
          {t('disclaimer-13')}
          <a href="https://gametrail.vercel.app/" rel="external nofollow noopener noreferrer" target="_blank">https://gametrail.vercel.app/</a>
        </Li>
        <Li>
          <Strong>{t('disclaimer-14')}</Strong>
          {t('disclaimer-15')}
        </Li>
      </Ul>
      <Subtitle2>{t('disclaimer-16')}</Subtitle2>
      <Text>{t('disclaimer-17')}</Text>
      <Text>{t('disclaimer-18')}</Text>
      <Text>{t('disclaimer-19')}</Text>
      <Subtitle2>{t('disclaimer-20')}</Subtitle2>
      <Text>{t('disclaimer-21')}</Text>
      <Text>{t('disclaimer-22')}</Text>
      <Subtitle2>{t('disclaimer-23')}</Subtitle2>
      <Text>{t('disclaimer-24')}</Text>
      <Text>{t('disclaimer-25')}</Text>
      <Subtitle2>{t('disclaimer-26')}</Subtitle2>
      <Text>{t('disclaimer-27')}</Text>
      <Text>
        {' '}
        {t('disclaimer-28')}
      </Text>
      <Text>{t('disclaimer-29')}</Text>
      <Subtitle2>{t('disclaimer-30')}</Subtitle2>
      <Text>{t('disclaimer-31')}</Text>
      <Text>{t('disclaimer-32')}</Text>
      <Subtitle2>{t('disclaimer-33')}</Subtitle2>
      <Text>{t('disclaimer-34')}</Text>
      <Text>{t('disclaimer-35')}</Text>
      <Subtitle2>{t('disclaimer-36')}</Subtitle2>
      <Text>{t('disclaimer-37')}</Text>
      <Text>{t('disclaimer-38')}</Text>
      <Subtitle2>{t('disclaimer-39')}</Subtitle2>
      <Text>{t('disclaimer-40')}</Text>
      <Ul>
        <Li>
          {t('disclaimer-41')}
          {' '}
          help.user.gametrail@gmail.com
        </Li>
      </Ul>
    </Container>
  );
};

export default Disclaimer;
