# snippets
Code snippets from my personal experience, it may or may not be useful to someone else.

## Table of contents
- [Improved UX on `shadcn` Sidebar (Desktop)](https://raw.githubusercontent.com/nullcryptodev/snippets/refs/heads/main/ts/shadcn-sidebar.tsx)
  - This component defines a custom navigation sidebar built on top of shadcn’s Sidebar system, with added behavior to automatically close when clicking outside of it (on desktop only). This “click-outside-to-close” interaction is not included by default in shadcn’s sidebar, but is a common UX expectation.
- [`use-mobile.ts` Hook](https://raw.githubusercontent.com/nullcryptodev/snippets/refs/heads/main/ts/use-mobile.ts)
  - This code defines a custom React hook, useIsMobile, used to determine whether the user is currently on a mobile-sized viewport based on a breakpoint (768px). Although shadcn provides responsive UI primitives, it does not ship with a built-in hook for viewport detection, meaning developers need to implement this logic themselves. This hook fills that gap and becomes especially useful when building responsive behaviors like conditional sidebars, drawers, or layout changes.
