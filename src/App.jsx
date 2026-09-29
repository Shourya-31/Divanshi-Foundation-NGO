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

const faqs = [
  ['How can I volunteer?', 'Choose a role that matches your time and skills, then send us the short application below.'],
  ['Where does the foundation work?', 'We partner with children, schools, and local educators in communities where learning support can make a lasting difference.'],
  ['Can my organisation partner with you?', 'Yes. Use the contact form to start a conversation about education, resources, skills, or community programmes.'],
]

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  function handleVolunteerSubmit(event) {
    event.preventDefault()
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

      <section id="volunteer" className="volunteer-band py-5"><div className="container py-4"><div className="row g-5"><div className="col-lg-5"><p className="eyebrow mb-3">Volunteer</p><h2 className="section-title">Bring your time. Bring your way of helping.</h2><p className="body-copy mt-4">There is no single kind of volunteer. Tell us what you care about and we will help find a meaningful fit.</p></div><div className="col-lg-6 offset-lg-1">{formSubmitted ? <div className="confirmation"><span className="confirmation-mark">✓</span><h3>Thank you for stepping forward.</h3><p>We have received your interest and will be in touch with the next steps.</p><button className="btn btn-outline-dark" type="button" onClick={() => setFormSubmitted(false)}>Send another response</button></div> : <form className="volunteer-form" onSubmit={handleVolunteerSubmit}><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="e.g. Aditi Sharma" /><label htmlFor="role">I would like to help with</label><select id="role" name="role" defaultValue="" required><option value="" disabled>Choose a role</option><option>Teaching and mentoring</option><option>Events and outreach</option><option>Design, technology, or communications</option><option>Operations and fundraising</option></select><label htmlFor="email">Email address</label><input id="email" name="email" type="email" required placeholder="you@example.com" /><button className="btn btn-terracotta btn-lg mt-2" type="submit">Submit interest</button></form>}</div></div></div></section>

      <section id="contact" className="container section-block py-5"><div className="row g-5"><div className="col-lg-5"><p className="eyebrow mb-3">Contact</p><h2 className="section-title">Let’s make something useful together.</h2><p className="body-copy mt-4">Questions, partnerships, teacher enquiries, feedback: our inbox is open.</p><p className="contact-email mt-4">hello@divanshifoundation.org</p></div><div className="col-lg-6 offset-lg-1"><div className="accordion accordion-flush" id="faq"><p className="eyebrow mb-3">Frequently asked</p>{faqs.map(([question, answer], index) => <div className="accordion-item" key={question}><h3 className="accordion-header"><button className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${index}`} aria-expanded={index === 0} aria-controls={`faq-${index}`}>{question}</button></h3><div id={`faq-${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faq"><div className="accordion-body">{answer}</div></div></div>)}</div></div></div></section>

      <section id="press" className="press-band py-5"><div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-4"><div><p className="eyebrow mb-3">Press release</p><h2 className="press-title mb-0">The latest from Divanshi Foundation.</h2></div><a className="btn btn-outline-dark" href="#contact">View updates</a></div></section>
      <footer className="container py-4 d-flex flex-column flex-md-row justify-content-between gap-2"><span className="brand-mark">Divanshi Foundation</span><span className="footer-copy">Learning with dignity, growing together.</span></footer>
    </main>
  )
}

export default App
