import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import TrailCreation from '@/containers/Trail/TrailCreation';
import type { User } from '@/models/User/types';

export type Props = {
  userData: User;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const user = context.params?.username as string;
  const response = await fetch(`http://127.0.0.1:3000/api/user/${user}`);
  const userData = await response.json();

  return {
    props: {
      userData,
    },
  };
};

const CreateTrail: FC<Props> = ({ userData }) => <TrailCreation userData={userData} />;

export default CreateTrail;
