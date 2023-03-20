import type { FC } from 'react';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { PricingType } from '../types';
import { Benefits as PricingBenefits } from './constants';
import {
  Bottom, Button, Container, List, ListItem, Price, PriceSpan, Title, Top,
} from './styles';
import type { Props } from './types';

const PricingCard: FC<Props> = ({ price, title }) => {
  const router = useRouter();

  const handleRenderBenefits = useMemo(() => {
    const benefits = PricingBenefits[title];
    return benefits.map((benefit: string) => (
      <ListItem key={benefit}>
        {benefit}
      </ListItem>
    ));
  }, [title]);

  const navigateTo = () => {
    if (title === PricingType.Standard) router.push('/auth/login');
    if (title === PricingType.Premium) window.location.href = 'https://buy.stripe.com/test_5kAdQYdU059Des06oo';
    return null;
  };

  return (
    <Container>
      <Top>
        <Title>{title}</Title>
        <Price>
          {price}
          <PriceSpan>{title === PricingType.Standard ? '' : '/mes'}</PriceSpan>
        </Price>
      </Top>
      <Bottom>
        <List>
          {handleRenderBenefits}
        </List>
        <Button onClick={navigateTo}>
          Comenzar
        </Button>
      </Bottom>
    </Container>
  );
};

export default PricingCard;
