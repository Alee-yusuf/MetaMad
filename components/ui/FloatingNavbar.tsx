"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image"; // Import Image component from Next.js

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu toggle

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex items-center fixed z-[5000] top-10 inset-x-0 mx-auto px-4 py-3 sm:px-6 sm:py-5 rounded-lg border border-black/.1 shadow-md max-w-xl justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <a href="#hero">
            <Image
              src="/assets/logo.png" // Path to the logo image
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto"
              width={48} // Width of the logo
              height={48} // Height of the logo
            />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex items-center text-neutral-600 dark:text-neutral-50 hover:text-neutral-500"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links (Large Screens) */}
        <div className="hidden sm:flex space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-sm dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 !cursor-pointer"
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {/* Dropdown Menu (Small Screens) */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[rgb(4,7,29)] shadow-lg rounded-lg mt-2 sm:hidden flex flex-col items-start p-4 space-y-3"
          >
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`dropdown-link=${idx}`}
                href={navItem.link}
                className="block text-sm text-neutral-200 hover:text-neutral-400 w-full py-2 px-4 rounded-md hover:bg-neutral-800"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {navItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
