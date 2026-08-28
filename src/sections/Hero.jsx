import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData.js";
import "./Hero.css";

// Split the name into first token(s) for the editor "file name" treatment,
// e.g. "Prathiksha R" -> "prathiksha-r.jsx"
function slugifyName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function Hero() {
  const fileName = `${slugifyName(personalInfo.name) || "your-name"}.jsx`;

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">Hi, my name is</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}.</h2>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <p className="hero-availability">{personalInfo.availability}</p>

          <div className="hero-social" aria-label="Social links">
            {personalInfo.github && personalInfo.github !== "[MY GITHUB URL]" && (
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            )}
            {personalInfo.linkedin && personalInfo.linkedin !== "[MY LINKEDIN URL]" && (
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            )}
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Signature element: a stylised code-editor window standing in for
            a traditional headshot frame. If a real photo is provided via
            personalInfo.avatarUrl, it renders inside the "preview pane". */}
        <div className="hero-visual" aria-hidden="true">
          <div className="editor-window">
            <div className="editor-titlebar">
              <span className="editor-dot editor-dot-red" />
              <span className="editor-dot editor-dot-yellow" />
              <span className="editor-dot editor-dot-green" />
              <span className="editor-filename">{fileName}</span>
            </div>
            <div className="editor-body">
              {personalInfo.avatarUrl ? (
                <img
                  src={personalInfo.avatarUrl}
                  alt={`Portrait of ${personalInfo.name}`}
                  className="editor-photo"
                />
              ) : (
                <pre className="editor-code">
{`const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  stack: ["HTML", "CSS", "JavaScript"],
  learning: ["DSA", "DBMS"],
  status: "open to internships",
};`}
                </pre>
              )}
            </div>
            <div className="editor-statusbar">
              <span className="editor-status-branch">⎇ main</span>
              <span>UTF-8</span>
              <span>{personalInfo.avatarUrl ? "portrait.jpg" : "JavaScript"}</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
