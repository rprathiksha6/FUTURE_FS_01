import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData.js";
import { useActiveSection } from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";
import "./Navbar.css";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  // Close the mobile menu automatically if the viewport grows back to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <span className="navbar-logo-dot" aria-hidden="true" />
          {personalInfo.name === "[MY NAME]" ? "yourname" : personalInfo.name}
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeId === link.href.replace("#", "") ? "is-active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="navbar-menu-btn"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar-mobile ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile"
        hidden={!isMenuOpen}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
