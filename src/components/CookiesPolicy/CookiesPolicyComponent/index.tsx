import React from 'react';
import useLanguage from '@/i18n/hooks';
import {
  Container, Title, Text, Subtitle, Li, Ul, Strong, Subtitle2,
} from './styles';

const CookiesPolicy = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <Title>{t('cookies_policy')}</Title>
      <Text>{t('last_update')}</Text>
      <Text>{t('cookies_disclaimer')}</Text>
      <Text>{t('cookies_disclaimer2')}</Text>
      <Subtitle>{t('interpretation')}</Subtitle>
      <Subtitle2>{t('interpretation-1')}</Subtitle2>
      <Text>{t('interpretation-2')}</Text>
      <Subtitle2>{t('interpretation-3')}</Subtitle2>
      <Text>{t('interpretation-4')}</Text>
      <Ul>
        <Li>
          <Strong>{t('company')}</Strong>
          {t('company-1')}
        </Li>
        <Li>
          <Strong>{t('cookies')}</Strong>
          {t('cookies-1')}
        </Li>
        <Li>
          <Strong>{t('website')}</Strong>
          {t('website-1')}
          <a href="http://gametrail.vercel.app" rel="external nofollow noopener noreferrer" target="_blank">http://gametrail.vercel.app</a>
        </Li>
        <Li>
          <Strong>{t('you')}</Strong>
          {t('you-1')}
        </Li>
      </Ul>
      <Title>{t('cookies_use')}</Title>
      <Subtitle2>{t('cookies-use-1')}</Subtitle2>
      <Text>{t('cookies-use-2')}</Text>
      <Text>{t('cookies-use-3')}</Text>
      <Ul>
        <Li>
          <Text><Strong>{t('cookies-use-4')}</Strong></Text>
          <Text>{t('cookies-use-5')}</Text>
          <Text>{t('admin_by_us')}</Text>
          <Text>{t('cookies-use-7')}</Text>
        </Li>
        <Li>
          <Text><Strong>{t('cookies-use-8')}</Strong></Text>
          <Text>{t('cookies-use-9')}</Text>
          <Text>{t('admin_by_us')}</Text>
          <Text>{t('cookies-use-10')}</Text>
        </Li>
      </Ul>
      <Subtitle2>{t('cookies-use-11')}</Subtitle2>
      <Text>{t('cookies-use-12')}</Text>
      <Text>{t('cookies-use-13')}</Text>
      <Text>{t('cookies-use-14')}</Text>
      <Ul>
        <Li>
          <Text>
            {t('cookies-use-15')}
            <a href="https://support.google.com/accounts/answer/32050" rel="external nofollow noopener noreferrer" target="_blank">https://support.google.com/accounts/answer/32050</a>
          </Text>
        </Li>
        <Li>
          <Text>
            {t('cookies-use-16')}
            <a href="http://support.microsoft.com/kb/278835" rel="external nofollow noopener noreferrer" target="_blank">http://support.microsoft.com/kb/278835</a>
          </Text>
        </Li>
        <Li>
          <Text>
            {t('cookies-use-17')}
            <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" rel="external nofollow noopener noreferrer" target="_blank">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a>
          </Text>
        </Li>
        <Li>
          <Text>
            {t('cookies-use-18')}
            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" rel="external nofollow noopener noreferrer" target="_blank">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a>
          </Text>
        </Li>
      </Ul>
      <Text>{t('cookies-use-19')}</Text>
      <Subtitle2>{t('cookies-use-20')}</Subtitle2>
      <Text>
        {t('cookies-use-21')}
        <a href="https://www.privacypolicies.com/blog/cookies/" target="_blank" rel="noreferrer">¿Qué son las Cookies?</a>
      </Text>
      <Subtitle2>{t('cookies-use-22')}</Subtitle2>
      <Text>{t('cookies-use-23')}</Text>
      <Ul>
        <Strong>help.user.gametrail@gmail.com</Strong>
      </Ul>
    </Container>
  );
};

export default CookiesPolicy;
