import "./SkillGroup.css";

export default function SkillGroup({ category, items }) {
  return (
    <div className="skill-group card">
      <h3>{category}</h3>
      <ul>
        {items.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
