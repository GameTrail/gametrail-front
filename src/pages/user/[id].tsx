import type { FC } from 'react';
import React from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import NotFound from '@/components/NotFound';
import { UserDetails } from '@/containers';
import type { User as UserDetailsProps } from '@/models/User/types';

export type Props = {
  data: UserDetailsProps;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id as string;
  const response = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/user/${id}/`);
  const data = await response.json();
  if (data.detail === 'Not found.') {
    return {
      props: {
        data: null,
      },
    };
  }
  return {
    props: {
      data,
    },
  };
};

const User: FC<Props> = ({ data }) => {
  if (!data) return <NotFound />;
  return <UserDetails userData={data} />;
};

export default User;
