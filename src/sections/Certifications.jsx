import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolioData.js";
import Reveal from "../components/Reveal.jsx";
import "./Certifications.css";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="section certifications">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">// 06. certifications</p>
          <h2 className="section-heading">Certifications &amp; achievements</h2>
        </Reveal>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index + 1} className="certification-card card">
              <Award size={20} className="certification-icon" aria-hidden="true" />
              <div className="certification-info">
                <h3>{cert.title}</h3>
                <p>
                  {cert.issuer}
                  {cert.date ? ` · ${cert.date}` : ""}
                </p>
              </div>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noreferrer" aria-label={`View ${cert.title}`}>
                  <ExternalLink size={16} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
