import React from 'react';
import { InstaLottie, TwitterLottie, TiktokLottie } from '@/components/Lotties';
import { Container, Social, SocialTwitter } from './styles';

const BrandSection = () => (
  <Container>
    <Social href="https://www.instagram.com/gametrail.app/">
      <InstaLottie />
    </Social>
    <SocialTwitter href="https://twitter.com/GameTrail_Esp">
      <TwitterLottie />
    </SocialTwitter>
    <Social href="https://www.tiktok.com/@gametrail01">
      <TiktokLottie />
    </Social>
  </Container>
);

export default BrandSection;
