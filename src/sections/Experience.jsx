import { timeline } from "../data/portfolioData.js";
import TimelineItem from "../components/TimelineItem.jsx";
import Reveal from "../components/Reveal.jsx";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <Reveal>
          <p className="eyebrow">// 04. experience</p>
          <h2 className="section-heading">Experience &amp; education</h2>
        </Reveal>

        <ol className="timeline">
          {timeline.map((entry, index) => (
            <Reveal key={`${entry.title}-${entry.org}`} as="li" delay={index + 1} className="timeline-reveal">
              <TimelineItem entry={entry} isLast={index === timeline.length - 1} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
