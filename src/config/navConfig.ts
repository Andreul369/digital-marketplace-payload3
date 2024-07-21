import { Route } from 'next';

export const mobileNav = [
  {
    title: 'Getting Started',
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
      {
        title: 'Typography',
        href: '/docs/components/typography',
        items: [],
      },
      {
        title: 'Figma',
        href: '/docs/figma',
        items: [],
      },
      {
        title: 'Changelog',
        href: '/docs/changelog',
        items: [],
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Accordion',
        href: '/docs/components/accordion',
        items: [],
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
        title: 'Badge',
        href: '/docs/components/badge',
        items: [],
      },
      {
        title: 'Breadcrumb',
        href: '/docs/components/breadcrumb',
        items: [],
      },
      {
        title: 'Button',
        href: '/docs/components/button',
        items: [],
      },
      {
        title: 'Calendar',
        href: '/docs/components/calendar',
        items: [],
      },
      {
        title: 'Card',
        href: '/docs/components/card',
        items: [],
      },
      {
        title: 'Carousel',
        href: '/docs/components/carousel',
        items: [],
      },
      {
        title: 'Chart',
        href: '/docs/components/chart',
        label: 'New',
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
        title: 'Dropdown Menu',
        href: '/docs/components/dropdown-menu',
        items: [],
      },
      {
        title: 'Form',
        href: '/docs/components/form',
        items: [],
      },
      {
        title: 'Hover Card',
        href: '/docs/components/hover-card',
        items: [],
      },
      {
        title: 'Input',
        href: '/docs/components/input',
        items: [],
      },
      {
        title: 'Input OTP',
        href: '/docs/components/input-otp',
        items: [],
      },
      {
        title: 'Label',
        href: '/docs/components/label',
        items: [],
      },
      {
        title: 'Menubar',
        href: '/docs/components/menubar',
        items: [],
      },
      {
        title: 'Navigation Menu',
        href: '/docs/components/navigation-menu',
        items: [],
      },
      {
        title: 'Pagination',
        href: '/docs/components/pagination',
        items: [],
      },
      {
        title: 'Popover',
        href: '/docs/components/popover',
        items: [],
      },
      {
        title: 'Progress',
        href: '/docs/components/progress',
        items: [],
      },
      {
        title: 'Radio Group',
        href: '/docs/components/radio-group',
        items: [],
      },
      {
        title: 'Resizable',
        href: '/docs/components/resizable',
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
        title: 'Skeleton',
        href: '/docs/components/skeleton',
        items: [],
      },
      {
        title: 'Slider',
        href: '/docs/components/slider',
        items: [],
      },
      {
        title: 'Sonner',
        href: '/docs/components/sonner',
        items: [],
      },
      {
        title: 'Switch',
        href: '/docs/components/switch',
        items: [],
      },
      {
        title: 'Table',
        href: '/docs/components/table',
        items: [],
      },
      {
        title: 'Tabs',
        href: '/docs/components/tabs',
        items: [],
      },
      {
        title: 'Textarea',
        href: '/docs/components/textarea',
        items: [],
      },
      {
        title: 'Toast',
        href: '/docs/components/toast',
        items: [],
      },
      {
        title: 'Toggle',
        href: '/docs/components/toggle',
        items: [],
      },
      {
        title: 'Toggle Group',
        href: '/docs/components/toggle-group',
        items: [],
      },
      {
        title: 'Tooltip',
        href: '/docs/components/tooltip',
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
