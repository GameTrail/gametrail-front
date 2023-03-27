import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';
import type { Props } from './types';

const LottieComponent: FC<Props> = ({ path }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path,
      });

      return () => animation.destroy();
    }
    return undefined;
  }, [lottie, path]);
  return (
    <div ref={ref} />
  );
};

export default LottieComponent;
