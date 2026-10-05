import { useState } from 'react'

const impactAreas = [
  { value: '12+', label: 'communities reached' },
  { value: '4.8k', label: 'children supported' },
  { value: '86', label: 'active volunteers' },
]

const programs = [
  ['Learning circles', 'Small-group sessions that make foundational learning joyful, consistent, and accessible.'],
  ['School partnerships', 'Long-term collaboration with teachers to strengthen classrooms and share practical resources.'],
  ['Future skills', 'Mentorship and creative workshops that help young people build their next chapter.'],
]
const volunteerRoles = [
  {
    title: 'Teaching Volunteer',
    icon: '📚',
    description: 'Support children with learning activities and basic subjects.',
    tasks: [
      'Help children with basic subjects',
      'Conduct learning activities',
      'Assist teachers during sessions',
    ],
  },
  {
    title: 'Event Volunteer',
    icon: '🎪',
    description: 'Help organise foundation events and community activities.',
    tasks: [
      'Help organise events',
      'Manage participants',
      'Distribute learning and event materials',
    ],
  },
  {
    title: 'Fundraising Volunteer',
    icon: '💛',
    description: 'Support campaigns that help the foundation raise resources.',
    tasks: [
      'Support donation campaigns',
      'Communicate with potential donors',
      'Help promote fundraising activities',
    ],
  },
  {
    title: 'Social Media Volunteer',
    icon: '📱',
    description: 'Help share the foundation’s work through digital platforms.',
    tasks: [
      'Create social media posts',
      'Share campaigns and updates',
      'Promote foundation activities',
    ],
  },
  {
    title: 'Field Volunteer',
    icon: '🤝',
    description: 'Support community visits, surveys and awareness activities.',
    tasks: [
      'Participate in community visits',
      'Assist with surveys',
      'Support awareness drives and distributions',
    ],
  },
  {
    title: 'Content Volunteer',
    icon: '✍️',
    description: 'Help communicate stories and updates through written content.',
    tasks: [
      'Write articles and stories',
      'Create captions',
      'Help prepare reports',
    ],
  },
]
const faqs = [
  ['How can I volunteer?', 'Choose a role that matches your time and skills, then send us the short application below.'],
  ['Where does the foundation work?', 'We partner with children, schools, and local educators in communities where learning support can make a lasting difference.'],
  ['Can my organisation partner with you?', 'Yes. Use the contact form to start a conversation about education, resources, skills, or community programmes.'],
]

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [applicationId, setApplicationId] = useState('')

  function handleVolunteerSubmit(event) {
  event.preventDefault()

  const id = `VOL-${Date.now().toString().slice(-6)}`
  setApplicationId(id)
  setFormSubmitted(true)
}

  return (
    <main className="min-vh-100 bg-sand">
      <nav className="site-nav navbar navbar-expand-md container py-4">
        <a className="brand-mark text-decoration-none" href="#home">Divanshi Foundation</a>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4 mt-3 mt-md-0">
            <a className="nav-link-custom" href="#about">About us</a>
            <a className="nav-link-custom" href="#programs">Programs</a>
            <a className="nav-link-custom" href="#impact">Impact</a>
            <a className="nav-link-custom" href="#contact">Contact</a>
            <a className="btn btn-terracotta px-4" href="#volunteer">Volunteer</a>
          </div>
        </div>
      </nav>

      <section id="home" className="container hero-section py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow mb-3">Community-led. Future-focused.</p>
            <h1 className="display-title mb-4">Small acts can shape a more generous world.</h1>
            <p className="lead-copy mb-4">
              Divanshi Foundation partners with local communities to make education,
              wellbeing, and opportunity easier to reach.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-terracotta btn-lg px-4" href="#programs">Discover our mission</a>
              <a className="btn btn-outline-dark btn-lg px-4" href="#impact">View our impact</a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-art" aria-label="Abstract illustration of a growing community" role="img">
              <div className="sun" />
              <div className="hill hill-back" />
              <div className="hill hill-front" />
              <div className="stem stem-one" />
              <div className="stem stem-two" />
              <div className="leaf leaf-one" />
              <div className="leaf leaf-two" />
              <div className="leaf leaf-three" />
            </div>
          </div>
        </div>
      </section>

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

      <section id="about" className="container section-block py-5">
        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <p className="eyebrow mb-3">About us</p>
            <h2 className="section-title">Education is a door. We help keep it open.</h2>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <p className="body-copy mb-4">We began with a simple belief: every child deserves the support, space, and encouragement to learn with confidence. Today, we work alongside schools and communities to turn that belief into steady, practical action.</p>
            <a className="text-link" href="#story">Read our story <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div id="story" className="story-grid row g-3 mt-4">
          <div className="col-md-4"><article className="story-card story-card-green"><span>Our values</span><h3>Listen deeply. Act kindly. Stay accountable.</h3></article></div>
          <div className="col-md-4"><article className="story-card story-card-yellow"><span>Why education matters</span><h3>Confidence grows when opportunity is shared.</h3></article></div>
          <div className="col-md-4"><article className="story-card story-card-rose"><span>Team & partners</span><h3>Local knowledge makes lasting work possible.</h3></article></div>
        </div>
      </section>

      <section id="programs" className="programs-band py-5">
        <div className="container py-4">
          <p className="eyebrow mb-3">Our programs</p>
          <h2 className="section-title mb-5">Practical support, built around real lives.</h2>
          <div className="row g-3">
            {programs.map(([title, text], index) => <div className="col-lg-4" key={title}><article className="program-card"><span className="program-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a className="text-link" href="#contact">Learn more <span aria-hidden="true">↗</span></a></article></div>)}
          </div>
        </div>
      </section>

      <section id="transparency" className="container section-block py-5"><div className="row g-5 align-items-center"><div className="col-lg-6"><p className="eyebrow mb-3">Reports & transparency</p><h2 className="section-title">Trust is something we practise.</h2><p className="body-copy mt-4">We share the outcomes, lessons, and decisions behind our work so supporters can see where care becomes change.</p><a className="btn btn-outline-dark mt-2" href="#contact">Explore our reports</a></div><div className="col-lg-5 offset-lg-1"><div className="report-note"><span className="report-year">2025</span><strong>Annual impact report</strong><span>Coming soon</span></div></div></div></section>

      <section id="volunteer" className="volunteer-band py-5">
  <div className="container py-4">

    <div className="row g-5">
      <div className="col-lg-5">
        <p className="eyebrow mb-3">Volunteer</p>

        <h2 className="section-title">
          Bring your time. Bring your way of helping.
        </h2>

        <p className="body-copy mt-4">
          Choose an opportunity that matches your interests, skills,
          and availability. Every contribution helps us create
          meaningful change in the community.
        </p>
      </div>

      <div className="col-lg-7">
        <div className="volunteer-system">

          <p className="eyebrow mb-3">
            Volunteer Opportunities
          </p>

          <h3 className="mb-4">
            Choose a role that fits you
          </h3>

          <div className="row g-3 volunteer-opportunities">

            {volunteerRoles.map((role) => (
              <div className="col-md-6" key={role.title}>
                <article
                  className={`volunteer-role-card ${
                    selectedRole?.title === role.title ? 'selected' : ''
                  }`}
                >
                  <div className="role-icon">
                    {role.icon}
                  </div>

                  <h3>{role.title}</h3>

                  <p>{role.description}</p>

                  <button
  type="button"
  className="btn btn-outline-dark"
  onClick={() => {
    setSelectedRole(role)
    setFormSubmitted(false)
  }}
>
  Choose this role
</button>
                </article>
              </div>
            ))}

          </div>

          {selectedRole && (
            <div className="role-details">

              <p className="eyebrow mb-2">
                Selected Role
              </p>

              <h3>{selectedRole.title}</h3>

              <p>
                {selectedRole.description}
              </p>

              <h4 className="mt-4">
                What you will do
              </h4>

              <ul className="role-detail-list">
                {selectedRole.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>

            </div>
          )}

          {selectedRole && !formSubmitted && (
            <div className="volunteer-application">

              <h3>
                Volunteer Application
              </h3>

              <p>
                Apply for the role you selected by providing
                your basic information.
              </p>

              <form
                className="volunteer-form"
                onSubmit={handleVolunteerSubmit}
              >

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Aditi Sharma"
                />

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />

                <label htmlFor="availability">
                  Availability
                </label>

                <select
                  id="availability"
                  name="availability"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select your availability
                  </option>

                  <option>Weekdays</option>
                  <option>Weekends</option>
                  <option>Both weekdays and weekends</option>
                  <option>Flexible</option>
                </select>

                <label htmlFor="skills">
                  Skills / Experience
                </label>

                <textarea
                  id="skills"
                  name="skills"
                  placeholder="Tell us briefly about your skills or experience"
                />

                <button
                  className="btn btn-terracotta btn-lg mt-3"
                  type="submit"
                >
                  Submit Application
                </button>

              </form>

            </div>
          )}

          {formSubmitted && (
            <div className="confirmation">

              <span className="confirmation-mark">
                ✓
              </span>

              <h3>
                Application Submitted!
              </h3>

              <p>
                Thank you for volunteering with Divanshi Foundation.
                We have received your application.
              </p>

              <p>
                Your Application ID is:
              </p>

              <span className="application-id">
                {applicationId}
              </span>

              <div className="next-steps">

                <h4>
                  What happens next?
                </h4>

                <ol>
                  <li>
                    Our team will review your application.
                  </li>

                  <li>
                    We will contact you using the email
                    provided in your application.
                  </li>

                  <li>
                    We will discuss the selected volunteer
                    role and available opportunities.
                  </li>

                  <li>
                    You will receive the next steps for
                    joining the volunteer programme.
                  </li>
                </ol>

              </div>

              <button
                className="btn btn-outline-dark mt-4"
                type="button"
                onClick={() => {
                  setFormSubmitted(false)
                  setSelectedRole(null)
                  setApplicationId('')
                }}
              >
                Apply for Another Role
              </button>

            </div>
          )}

        </div>
      </div>
    </div>

  </div>
</section>
      <section id="contact" className="container section-block py-5"><div className="row g-5"><div className="col-lg-5"><p className="eyebrow mb-3">Contact</p><h2 className="section-title">Let’s make something useful together.</h2><p className="body-copy mt-4">Questions, partnerships, teacher enquiries, feedback: our inbox is open.</p><p className="contact-email mt-4">hello@divanshifoundation.org</p></div><div className="col-lg-6 offset-lg-1"><div className="accordion accordion-flush" id="faq"><p className="eyebrow mb-3">Frequently asked</p>{faqs.map(([question, answer], index) => <div className="accordion-item" key={question}><h3 className="accordion-header"><button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${index}`} aria-expanded={index === 0} aria-controls={`faq-${index}`}>{question}</button></h3><div id={`faq-${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faq"><div className="accordion-body">{answer}</div></div></div>)}</div></div></div></section>

      <section id="press" className="press-band py-5"><div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-4"><div><p className="eyebrow mb-3">Press release</p><h2 className="press-title mb-0">The latest from Divanshi Foundation.</h2></div><a className="btn btn-outline-dark" href="#contact">View updates</a></div></section>
      <footer className="container py-4 d-flex flex-column flex-md-row justify-content-between gap-2"><span className="brand-mark">Divanshi Foundation</span><span className="footer-copy">Learning with dignity, growing together.</span></footer>
    </main>
  )
}

export default App
