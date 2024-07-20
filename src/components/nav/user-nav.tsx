import Link from 'next/link';
import {
  CreditCard,
  LogIn,
  LogOut,
  PlusCircle,
  Settings,
  User,
} from 'lucide-react';

import * as Icons from '@/components/icons';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  buttonVariants,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui';

export const UserNav = async () => {
  const user = false;

  if (!user) {
    return (
      <Link href="/signin" className={buttonVariants({ variant: 'outline' })}>
        Sign In <Icons.ChevronRight className="ml-1 size-4" />
      </Link>
    );
  }

  //   const fullname = `${user.firstName} ${user.lastName}`;
  //   const initials = fullname
  //     .split(' ')
  //     .map((n) => n[0])
  //     .join('');
  //   const email = user.emailAddresses.find(
  //     (e) => e.id === user.primaryEmailAddressId,
  //   )?.emailAddress;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative size-8 rounded-full">
          <Avatar className="size-8">
            <AvatarImage src="/gradient.webp" alt={'demo' ?? ''} />
            {/* <AvatarFallback>{initials}</AvatarFallback> */}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Example Name</p>
            <p className="text-xs leading-none text-muted-foreground">
              example@email.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`#`}>
              <User className="mr-2 size-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={`#`}>
              <CreditCard className="mr-2 size-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <PlusCircle className="mr-2 size-4" />
            <span>New Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/signout">
            <LogOut className="mr-2 size-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
