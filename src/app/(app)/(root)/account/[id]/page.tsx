import React from 'react';

import { getUser } from '@/lib/actions/orders';

const AccountPage = async ({ params }: { params: { id: string } }) => {
  const userId = params.id;

  const user = await getUser();
  console.log(user);

  return <div>AccountPage</div>;
};

export default AccountPage;
