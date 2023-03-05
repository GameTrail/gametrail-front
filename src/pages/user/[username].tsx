import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import type { UserDetails as UserDetailProps } from '@/models/User/types';

export type Props = {
  userDetails: UserDetailProps;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) => {
  const username = context.params?.username as string;
  const response = await fetch(`http://127.0.0.1:3000/api/user/${username}`);
  const data = await response.json();

  return {
    props: {
      userDetails: data,
    },
  };
};

const User: FC<Props> = ({ userDetails }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
    }}
  >
    <h1>{userDetails.username}</h1>
  </div>
);

export default User;
