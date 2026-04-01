/**
* This component defines a custom navigation sidebar built on top of shadcn’s Sidebar system,
* with added behavior to automatically close when clicking outside of it (on desktop only).
* This “click-outside-to-close” interaction is not included by default in shadcn’s sidebar,
* but is a common UX expectation.
*/

"use client"
import { FC, useEffect, useRef } from "react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, useSidebar } from "@/components/ui/sidebar";

const NavigationSidebar: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isMobile, open, setOpen } = useSidebar();

  useEffect(() => {
    if (isMobile) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && open) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, [isMobile, open, setOpen]);

  return (
    <div ref={ref}>
      <Sidebar side="right">
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </div>
  );
};

export default NavigationSidebar;
