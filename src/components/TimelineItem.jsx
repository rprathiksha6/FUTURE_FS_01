import { Briefcase, GraduationCap, Award, Flag } from "lucide-react";
import "./TimelineItem.css";

const ICONS = {
  experience: Briefcase,
  education: GraduationCap,
  certification: Award,
  milestone: Flag,
};

export default function TimelineItem({ entry, isLast }) {
  const Icon = ICONS[entry.type] || Flag;

  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <span className="timeline-icon">
          <Icon size={16} aria-hidden="true" />
        </span>
        {!isLast && <span className="timeline-line" aria-hidden="true" />}
      </div>

      <div className="timeline-content card">
        {entry.period && <span className="timeline-period tag">{entry.period}</span>}
        <h3>{entry.title}</h3>
        {entry.org && <p className="timeline-org">{entry.org}</p>}
        {entry.description && <p className="timeline-description">{entry.description}</p>}
      </div>
    </div>
  );
}
