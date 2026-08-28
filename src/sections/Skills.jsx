import { skills } from "../data/portfolioData.js";
import SkillGroup from "../components/SkillGroup.jsx";
import Reveal from "../components/Reveal.jsx";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">// 02. skills</p>
          <h2 className="section-heading">What I work with</h2>
          <p className="section-lede">
            Technologies I've used in coursework and personal projects — nothing here I can't
            speak to.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index + 1}>
              <SkillGroup category={group.category} items={group.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
