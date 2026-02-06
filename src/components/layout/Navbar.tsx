"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about", isRoute: false },
  { name: "Projects", href: "/projects", isRoute: true },
  { name: "Services", href: "#services", isRoute: false },
  { name: "Experience", href: "#experience", isRoute: false },
  { name: "Reviews", href: "#reviews", isRoute: false }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (!link.isRoute && !isHomePage) {
      e.preventDefault();
      // Navigate to home page with hash
      window.location.href = "/" + link.href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-glass"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/")}
          >
            {"<Mit />"}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <motion.div key={link.name} whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.name}
                </motion.a>
              )
            ))}
            <Button variant="glow" size="sm" asChild>
              <a href={isHomePage ? "#contact" : "/#contact"}>Contact Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navLinks.filter(link => link.name !== "Contact").map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => {
                    handleNavClick(e, link);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </a>
              )
            ))}
            <Button variant="glow" size="sm" className="w-fit" asChild>
              <a href={isHomePage ? "#contact" : "/#contact"} onClick={() => setIsOpen(false)}>Contact Me</a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
