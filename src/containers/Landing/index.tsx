import React from 'react';
import { AboutSection, MainSection, PricingSection } from '@/components/Landing';
import Layout from '@/components/Layout';

const Landing = () => (
  <Layout>
    <MainSection />
    <AboutSection />
    <PricingSection />
  </Layout>
);

export default Landing;
