import React from 'react';
import PricingCard from './PricingCard';
import { Container } from './styles';
import { PricingType } from './types';

const PricingSection = () => (
  <Container>
    <PricingCard
      title={PricingType.Standard}
      price="FREE"
    />
    <PricingCard
      title={PricingType.Premium}
      price="€2.95"
    />
  </Container>
);

export default PricingSection;
