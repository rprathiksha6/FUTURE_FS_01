import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "../data/portfolioData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            {personalInfo.name === "[MY NAME]" ? "yourname" : personalInfo.name}
          </span>
          <p>Building things for the web, one commit at a time.</p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          {personalInfo.github && (
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} />
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </a>
          )}
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} aria-label="Send an email">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} {personalInfo.name === "[MY NAME]" ? "[MY NAME]" : personalInfo.name}. All rights reserved.</p>
        <a href="#home" className="footer-top">
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
