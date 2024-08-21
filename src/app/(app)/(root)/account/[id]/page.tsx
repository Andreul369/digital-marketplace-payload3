import React from 'react';

import { createClient } from '@/lib/supabase/server';

const AccountPage = async ({ params }: { params: { id: string } }) => {
  const userId = params.id;
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  console.log(user);

  return <div>AccountPage</div>;
};

export default AccountPage;
