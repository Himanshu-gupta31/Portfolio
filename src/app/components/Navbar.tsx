'use client'
import React from 'react'
import {
    IconBrandGithub,
    IconHome,
  } from "@tabler/icons-react";
import { LinkedinIcon, LucideLaptop, PaperclipIcon, Twitter } from "lucide-react";
import { FloatingDock } from './ui/floating-dock';
function Navbar() {
    const links = [
        {
          title: "Home",
          icon: (
            <IconHome className="text-black dark:text-black" />
          ),
          href: "/",
        },
        {
          title: "Projects",
          icon: (
            <LucideLaptop className="text-black dark:text-black" />
          ),
          href: "/projects",
        },
        {
          title: "Resume",
          icon: (
            <PaperclipIcon className="text-black dark:text-black" />
          ),
          href: "/resume",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="text-black dark:text-black" />
          ),
          href: "https://github.com/Himanshu-gupta31",
        },
        {
          title: "LinkedIn",
          icon: (
            <LinkedinIcon className="text-black dark:text-black" />
          ),
          href: "https://www.linkedin.com/in/himanshu-gupta-431a0722a/",
        },
        {
          title: "Twitter",
          icon: (
            <Twitter className="text-black dark:text-black" />
          ),
          href: "https://x.com/Himanshuu3112",
        },
      ];
  return (
    <div className='flex justify-center items-center pt-8 mt-8'>
      <div className=''>
         <FloatingDock
         mobileClassName="sm:translate-y-0 "
        items={links}
      />
      </div>
    </div>
  )
}

export default Navbar
