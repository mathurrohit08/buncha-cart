
import { useState, useEffect } from "react";
import { Logo } from "./header/Logo";
import { MobileMenu } from "./header/MobileMenu";
import { SearchBar } from "./header/SearchBar";
import { NavigationMenu } from "./header/NavigationMenu";
import { HeaderActions } from "./header/HeaderActions";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu body overflow
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <MobileMenu 
              isOpen={mobileMenuOpen}
              onClose={() => setMobileMenuOpen(false)}
              onToggle={toggleMobileMenu}
            />
            <Logo />
          </div>

          <NavigationMenu />

          <HeaderActions 
            searchOpen={searchOpen}
            onSearchToggle={() => setSearchOpen(!searchOpen)}
          />
        </div>

        <SearchBar isOpen={searchOpen} />
      </div>
    </header>
  );
};
