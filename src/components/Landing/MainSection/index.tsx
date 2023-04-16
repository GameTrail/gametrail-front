import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';
import { GamerLottie } from '@/components/Lotties';
import useLanguage from '@/i18n/hooks';
import { getUserCookie } from '@/utils/login';
import BrandSection from '../BrandSection';
import {
  Container, Left, Title, Subtitle, AuthButtons, Button, Right, Bottom,
} from './styles';

type Props = {
  subscriptionSuccess: boolean;
};
const MainSection: FC<Props> = ({ subscriptionSuccess }) => {
  const userCookie = getUserCookie();
  const { t } = useLanguage();
  return (
    <Container>
      <Left>
        <Title>GameTrail</Title>
        <Subtitle>
          {t('about_gametrail')}
        </Subtitle>
        <AuthButtons>
          {subscriptionSuccess && <h2 className="alert-heading" style={{ color: 'orange' }}>{t('welcome_to_premium')}</h2>}
          {userCookie === null
            ? (
              <>
                <Link href="/auth/login">
                  <Button primary>{t('login')}</Button>
                </Link>
                <Link href="/auth/register">
                  <Button animated>{t('register')}</Button>
                </Link>
              </>
            ) : (
              <Link href="/home">
                <Button>{t('go_to_gametrail')}</Button>
              </Link>
            )}
        </AuthButtons>
      </Left>
      <Right>
        <GamerLottie />
      </Right>
      <Bottom>
        <BrandSection />
      </Bottom>
    </Container>
  );
};

export default MainSection;
