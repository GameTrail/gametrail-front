import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  AboutSection, MainSection, PricingSection, FAQ,
} from '@/components/Landing';
import { getUserCookie } from '@/utils/login';

const STRIPE_CONFIRMATION_KEY = '';

const Landing = () => {
  const [subscriptionSuccess, setSubscriptionSuccess] = useState<boolean>(false);
  const router = useRouter();
  const userCookie = getUserCookie();
  const handleUserSubscription = async () => {
    try {
      const data = {
        userId: userCookie?.id.toString(),
        action: 'SUBSCRIBE',
      };
      const res = await fetch('https://gametrail-backend-production.up.railway.app/api/sub/', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${userCookie?.token}`,
        },
      });
      if (!res.ok) {
        setSubscriptionSuccess(false);
        throw new Error(res.statusText);
      }

      setSubscriptionSuccess(true);
    } catch (err) {
      setSubscriptionSuccess(false);
    }
  };
  useEffect(() => {
    if (userCookie === null) return;
    const currentURL = router.asPath;
    if (!currentURL.includes('confirmation')) return;
    const stripeConfirmation = currentURL.split('?')[1].split('=')[1];
    if (stripeConfirmation === STRIPE_CONFIRMATION_KEY) {
      handleUserSubscription();
      router.push('/home');
    }
  }, []);
  return (
    <>
      <MainSection subscriptionSuccess={subscriptionSuccess} />
      <AboutSection />
      <FAQ />
      <PricingSection />
    </>
  );
};

export default Landing;
