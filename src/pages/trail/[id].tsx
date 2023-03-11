import type { FC } from 'react';
import React from 'react';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import TrailDetails from '@/containers/TrailDetails';
import type { Trail as TrailData } from '@/models/Trail/types';
import type { TrailUser } from '@/models/TrailUser/types';
import type { UserDetails as UserData } from '@/models/User/types';

export type Props = {
  data: TrailData;
  users: UserData[];
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const trail = context.params?.id as string;
  const response = await fetch(`http://127.0.0.1:3000/api/trail/${trail}`);
  const data = await response.json();

  const responsePlayers = await fetch(`http://127.0.0.1:3000/api/trail/users/${trail}`);
  const dataPlayers = await responsePlayers.json();
  const users: UserData[] = dataPlayers.map((trailUser: TrailUser) => trailUser.user);

  return {
    props: {
      data,
      users,
    },
  };
};

const Trail: FC<Props> = ({ data, users }) => <TrailDetails trailData={data} usersData={users} />;
export default Trail;
