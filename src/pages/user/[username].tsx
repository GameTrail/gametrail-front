import type { FC } from 'react';
import React from 'react';

import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import type { UserDetails as UserDetailProps } from '@/models/User/types';

interface Props {
  data: UserDetailProps;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const users = [
    { username: 'jvegax' },
  ];

  const paths = users.map((user) => ({
    params: { username: user.username },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {
  const username = context.params?.username as string;
  const response = await fetch(`http://127.0.0.1:3000/api/user/${username}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const UserDetails: FC<Props> = ({ data }) => (
  <div>
    <h1>{data.username}</h1>
    <h1>
      {data.rating[0].rating}
      {' '}
      -
      {' '}
      {data.rating[0].ratingType}
    </h1>
  </div>
);

export default UserDetails;
