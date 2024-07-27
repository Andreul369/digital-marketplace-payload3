import React from 'react';

const AccountPage = ({ params }: { params: { id: string } }) => {
  const userId = params.id;

  console.log(userId);

  return <div>AccountPage</div>;
};

export default AccountPage;
