import "./ClassesActivities.css";
const activities = [
  {
    title: "Learning Circles",
    description:
      "Small-group learning sessions that make foundational education engaging, consistent, and accessible.",
    activities: [
      "Interactive learning sessions",
      "Group discussions",
      "Doubt-solving and practice",
    ],
  },
  {
    title: "School Partnerships",
    description:
      "Collaborative activities with schools and educators to strengthen classroom learning.",
    activities: [
      "Classroom support",
      "Teacher collaboration",
      "Educational workshops",
    ],
  },
  {
    title: "Future Skills",
    description:
      "Mentorship and creative workshops that help young people develop practical skills for the future.",
    activities: [
      "Skill-building workshops",
      "Mentorship sessions",
      "Creative and practical activities",
    ],
  },
];

function ClassesActivities() {
  return (
    <section className="classes-activities-section">
      <div className="container">
        <p className="eyebrow">Classes & Activities</p>

        <h2>Learning Through Participation</h2>

        <p className="section-intro">
          Our programs combine classroom learning, practical activities,
          mentorship, and collaborative experiences to make learning meaningful.
        </p>

        <div className="activities-grid">
          {activities.map((program) => (
            <article className="activity-card" key={program.title}>
              <h3>{program.title}</h3>

              <p>{program.description}</p>

              <ul>
                {program.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClassesActivities;