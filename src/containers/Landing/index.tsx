import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  AboutSection, MainSection, PricingSection, FAQ,
} from '@/components/Landing';
import { getUserCookie } from '@/utils/login';

const Landing = () => {
  const CONFIRMATION = 'JXs5kgEmZKSDWllXQ40Oga80r0RJSP8CUA35HKyL5cIKP8rHTC';

  const [subscriptionSuccess, setSubscriptionSuccess] = useState<boolean>(false);
  const router = useRouter();
  const userCookie = getUserCookie();

  useEffect(() => {
    if (userCookie === null) return;
    const currentURL = router.asPath;
    if (!currentURL.includes('confirmation')) return;
    const stripeConfirmation = currentURL.split('?')[1].split('=')[1];
    const handleUserSubscription = async () => {
      try {
        const data = {
          userId: userCookie?.id.toString(),
          action: 'SUBSCRIBE',
        };
        const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/sub/', {
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
    if (stripeConfirmation === CONFIRMATION) {
      handleUserSubscription();
    }
  }, [router, userCookie]);
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
