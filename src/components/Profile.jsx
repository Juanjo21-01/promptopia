'use client'

import { SessionProvider } from 'next-auth/react';

const Profile = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Profile;
