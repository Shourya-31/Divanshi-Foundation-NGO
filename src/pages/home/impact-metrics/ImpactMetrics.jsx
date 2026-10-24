
const impactAreas = [
  { value: '12+', label: 'communities reached' },
  { value: '4.8k', label: 'children supported' },
  { value: '86', label: 'active volunteers' },
];

function ImpactMetrics() {
  return (
    <section id="impact" className="container py-5">
      <div className="impact-strip row g-0">
        {impactAreas.map((item) => (
          <div className="col-md-4 impact-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImpactMetrics;
