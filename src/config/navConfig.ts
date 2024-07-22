import { Route } from 'next';

export const mobileNav = [
  {
    title: 'UI Kits',
    items: [
      {
        title: 'Introduction',
        href: '/docs',
        items: [],
      },
      {
        title: 'Installation',
        href: '/docs/installation',
        items: [],
      },
      {
        title: 'components.json',
        href: '/docs/components-json',
        items: [],
      },
      {
        title: 'Theming',
        href: '/docs/theming',
        items: [],
      },
      {
        title: 'Dark mode',
        href: '/docs/dark-mode',
        items: [],
      },
      {
        title: 'CLI',
        href: '/docs/cli',
        items: [],
      },
    ],
  },
  {
    title: 'Icons',
    items: [
      {
        title: 'Accordion',
        href: '/docs/components/accordion',
        items: [
          {
            title: 'Alert',
            href: '/docs/components/alert',
            items: [],
          },
          {
            title: 'Alert Dialog',
            href: '/docs/components/alert-dialog',
            items: [],
          },
        ],
      },
      {
        title: 'Alert',
        href: '/docs/components/alert',
        items: [],
      },
      {
        title: 'Alert Dialog',
        href: '/docs/components/alert-dialog',
        items: [],
      },
      {
        title: 'Aspect Ratio',
        href: '/docs/components/aspect-ratio',
        items: [],
      },
      {
        title: 'Avatar',
        href: '/docs/components/avatar',
        items: [],
      },
      {
        title: 'Checkbox',
        href: '/docs/components/checkbox',
        items: [],
      },
      {
        title: 'Collapsible',
        href: '/docs/components/collapsible',
        items: [],
      },
      {
        title: 'Combobox',
        href: '/docs/components/combobox',
        items: [],
      },
      {
        title: 'Command',
        href: '/docs/components/command',
        items: [],
      },
      {
        title: 'Context Menu',
        href: '/docs/components/context-menu',
        items: [],
      },
      {
        title: 'Data Table',
        href: '/docs/components/data-table',
        items: [],
      },
      {
        title: 'Date Picker',
        href: '/docs/components/date-picker',
        items: [],
      },
      {
        title: 'Dialog',
        href: '/docs/components/dialog',
        items: [],
      },
      {
        title: 'Drawer',
        href: '/docs/components/drawer',
        items: [],
      },
      {
        title: 'Scroll Area',
        href: '/docs/components/scroll-area',
        items: [],
      },
      {
        title: 'Select',
        href: '/docs/components/select',
        items: [],
      },
      {
        title: 'Separator',
        href: '/docs/components/separator',
        items: [],
      },
      {
        title: 'Sheet',
        href: '/docs/components/sheet',
        items: [],
      },
      {
        title: 'Zskeleton',
        href: '/docs/components/skeleton',
        items: [],
      },
    ],
  },
];

export const desktopNav: { title: string; href: Route; description: string }[] =
  [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description:
        'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
  ];
