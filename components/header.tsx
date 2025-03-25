
"use client";

import React from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1B161D]/80 border-b border-white/10 px-3 py-2">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white font-bold text-xs md:text-xl ">
            Git Github Workshop
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                  )}>
                    Participants
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                  )}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
            <Button variant="ghost" size="icon" asChild className="bg-black text-white hover:bg-black/80"></Button>
          <Button variant="ghost" size="icon" asChild className="bg-black text-white hover:bg-black/80">
            <a href="https://github.com/vAbdullh/git-github-workshop-Challenge" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-white" />
              <span className="sr-only">GitHub Repository</span>
            </a>
            </Button>
        </div>
      </div>
    </div>
  );
}
