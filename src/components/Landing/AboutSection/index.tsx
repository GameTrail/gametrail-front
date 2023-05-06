import React from 'react';
import LanguagesSelector from '@/components/LanguagesSelector';
import { PlayersLottie, TodoListLottie } from '@/components/Lotties';
import useLanguage from '@/i18n/hooks';
import {
  Container, Description, About, Title,
} from './styles';

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <About>
        <div>
          <Title>{t('custom_trails')}</Title>
          <Description>
            {t('custom_trails_description')}
          </Description>
        </div>
        <PlayersLottie />
      </About>
      <About>
        <div>
          <Title>{t('save_your_progress')}</Title>
          <Description>
            {t('save_your_progress_description')}
          </Description>
        </div>
        <TodoListLottie />
      </About>
      <About>
        <div>
          <Title>{t('feel_at_home')}</Title>
          <Description>
            {t('feel_at_home_description')}
          </Description>
        </div>
        <LanguagesSelector isNavbar={false} />
      </About>
    </Container>
  );
};

export default AboutSection;
