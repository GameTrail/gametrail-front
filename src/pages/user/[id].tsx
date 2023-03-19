/* eslint-disable linebreak-style */
import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { UserDetails } from '@/containers';
import type { User as UserDetailsProps } from '@/models/User/types';

export type Props = {
  data: UserDetailsProps;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id as string;
  const response = await fetch(`https://gametrail-backend-production.up.railway.app/api/user/${id}/`);
  console.log(response);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const User: FC<Props> = ({ data }) => <UserDetails userData={data} />;

export default User;
