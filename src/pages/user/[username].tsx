import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { UserDetails } from '@/containers';
import type { User as UserDetailsProps } from '@/models/User/types';

export type Props = {
  data: UserDetailsProps;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const username = context.params?.username as string;
  const response = await fetch(`http://127.0.0.1:3000/api/user/${username}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const User: FC<Props> = ({ data }) => <UserDetails userData={data} />;

export default User;
