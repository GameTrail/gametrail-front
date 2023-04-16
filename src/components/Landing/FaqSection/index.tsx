import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import {
  Container, QuestionAnswer, Questions, QuestionTitle,
} from './styles';

const FaqSection = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>FAQ</h1>
      <Questions>
        <QuestionTitle>{t('what_is_a_trail')}</QuestionTitle>
        <QuestionAnswer>
          <Trans>{t('answer_what_is_a_trail')}</Trans>
        </QuestionAnswer>

        <QuestionTitle>{t('can_I_keep_a_record_of_my_games')}</QuestionTitle>
        <QuestionAnswer>
          {t('answer_can_I_keep_a_record_of_my_games')}
        </QuestionAnswer>

        <QuestionTitle>{t('how_can_I_interact_with_other_users')}</QuestionTitle>
        <QuestionAnswer>
          {t('answer_how_can_I_interact_with_other_users')}
        </QuestionAnswer>

        <QuestionTitle>{t('can_I_join_any_trail')}</QuestionTitle>
        <QuestionAnswer>
          {t('answer_can_I_join_any_trail')}
        </QuestionAnswer>

        <QuestionTitle>{t('can_I_leave_a_trail')}</QuestionTitle>
        <QuestionAnswer>
          {t('answer_can_I_leave_a_trail')}
        </QuestionAnswer>

      </Questions>
    </Container>
  );
};

export default FaqSection;
