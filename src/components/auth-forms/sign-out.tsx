import { redirect } from 'next/navigation';

import * as Icons from '@/components/icons';
import { Button } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';

export default function SignOut() {
  const signOut = async () => {
    'use server';

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect('/');
  };

  return (
    <form action={signOut} className="w-full px-0 py-0">
      <Button
        variant={'ghost'}
        className="h-8 w-full flex-1 justify-start px-0 text-sm font-[400]"
      >
        <Icons.LogOut className="ml-0.5 mr-1.5 size-4" />
        <span>Log out</span>
      </Button>
    </form>
  );
}
