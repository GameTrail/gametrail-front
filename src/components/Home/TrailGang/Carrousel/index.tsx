import React from 'react';
import Image from 'next/image';
import Imagen1 from 'src/assets/AtomicHeart.jpg';

const Carrousel = () => (
  <Image src={Imagen1} alt="Atomic Heart" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
);

export default Carrousel;
