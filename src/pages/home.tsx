// import type { FC } from 'react';
// import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
// import { Home, Home as HomeComponent } from '@/containers';
// import { TrailGang } from '@/models/Trail/types';

// export type Props = {
//   data: TrailGang;
// };

// export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
//   const response = await fetch('http://127.0.0.1:3000/api/trail/');
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// const TrailGang: FC<Props> = ({ data }) => <HomeComponent trailGang={data} />;

// export default Home;

import { Home as HomeComponent } from '@/containers';

const Home = () => <HomeComponent />;

export default Home;
