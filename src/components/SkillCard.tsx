function SkillCard({ icon, title }:any) {
  return (
    <div className="skill-card">
      <img src={icon} alt={title} />

      <h3>{title}</h3>
    </div>
  );
}

export default SkillCard;