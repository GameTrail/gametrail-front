import React from 'react';
import Image from 'next/image';

const BrandSection = () => (
  <>
    <Image
      src="/logos/steam-logo.png"
      alt="GameTrail"
      width={48}
      height={48}
    />
    <Image
      src="/logos/nintendo-switch-logo.png"
      alt="GameTrail"
      width={48}
      height={48}
    />
    <Image
      src="/logos/xbox-logo.png"
      alt="GameTrail"
      width={48}
      height={48}
    />
    <Image
      src="/logos/play-station-logo.png"
      alt="GameTrail"
      width={48}
      height={48}
    />
  </>
);

export default BrandSection;
