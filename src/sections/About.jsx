import { about, highlights } from "../data/portfolioData.js";
import Reveal from "../components/Reveal.jsx";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">// 01. about</p>
          <h2 className="section-heading">A little about me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={1} className="about-bio">
            <p>{about.bio}</p>

            <dl className="about-facts">
              <div>
                <dt>Education</dt>
                <dd>{about.education}</dd>
              </div>
              <div>
                <dt>Currently learning</dt>
                <dd>{about.currentlyLearning}</dd>
              </div>
              <div>
                <dt>Goals</dt>
                <dd>{about.goals}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={2} as="div" className="about-highlights">
            {highlights.map((item) => (
              <div key={item.label} className="about-highlight card">
                <span className="about-highlight-value">{item.value}</span>
                <span className="about-highlight-label">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
