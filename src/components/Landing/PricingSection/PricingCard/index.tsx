import type { FC } from 'react';
import React, { useMemo } from 'react';
import { PricingType } from '../types';
import { Benefits as PricingBenefits } from './constants';
import {
  Bottom, Button, Container, List, ListItem, Price, PriceSpan, Title, Top,
} from './styles';
import type { Props } from './types';

const PricingCard: FC<Props> = ({ price, title }) => {
  const handleRenderBenefits = useMemo(() => {
    const benefits = PricingBenefits[title];
    return benefits.map((benefit: string) => (
      <ListItem key={benefit}>
        {benefit}
      </ListItem>
    ));
  }, [title]);

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
        <Button>
          Comenzar
        </Button>
      </Bottom>
    </Container>
  );
};

export default PricingCard;
