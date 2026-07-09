import React, { useEffect, useRef, useState } from "react"
import { profile, projects, skills, education } from "./data.js"

/* ---------- scroll reveal hook ---------- */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in")
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = "", dir = "up" }) {
  const ref = useReveal()
  const dirClass = dir === "left" ? "dir-left" : dir === "right" ? "dir-right" : ""
  return (
    <div ref={ref} className={`reveal ${dirClass} ${className}`}>
      {children}
    </div>
  )
}

/* ---------- nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark"
    return localStorage.getItem("theme") || "dark"
  })
  const links = ["about", "projects", "skills", "education", "contact"]

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"))
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <span className="nav-url">
          <span className="nav-dot" />
          mohitsaini.dev
        </span>
        <div className="nav-right">
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l} href={`#${l}`}>
                /{l}
              </a>
            ))}
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
          >
            {theme === "dark" ? "☀" : "🌙"}
          </button>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>
              /{l}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

/* ---------- hero flow diagram ---------- */
function FlowDiagram() {
  return (
    <svg className="flow" viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Request flow from client to server to database">
      <g className="flow-node">
        <rect x="10" y="10" width="150" height="52" rx="8" />
        <text x="26" y="32">client</text>
        <text className="sub" x="26" y="48">React · Next.js</text>
      </g>
      <g className="flow-node">
        <rect x="90" y="104" width="150" height="52" rx="8" />
        <text x="106" y="126">server</text>
        <text className="sub" x="106" y="142">Node.js · Express</text>
      </g>
      <g className="flow-node">
        <rect x="170" y="198" width="150" height="52" rx="8" />
        <text x="186" y="220">database</text>
        <text className="sub" x="186" y="236">MongoDB</text>
      </g>
      <path className="flow-path" d="M85 62 L165 104" />
      <path className="flow-path" d="M165 156 L245 198" />
    </svg>
  )
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">available for freelance &amp; full-time work</p>
          <h1>
            {profile.name}
            <br />
            <span>{profile.role}</span>
          </h1>
          <p className="hero-sub">{profile.summary}</p>
          <div className="hero-stack">
            {profile.stack.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              view projects →
            </a>
            <a className="btn btn-ghost" href="/public/mohit_saini_resume.pdf" download>
              Resume / CV
            </a>
          </div>
        </div>
        <FlowDiagram />
      </div>
    </section>
  )
}

/* ---------- about ---------- */
function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal dir="left">
          <p className="eyebrow">about</p>
          <div className="about-grid">
            <div className="about-text">
              <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", marginBottom: 16 }}>
                I build the engine, then design the dashboard for it.
              </h2>
              <p>
                I'm a full stack developer from Rajasthan who thinks in both directions — the
                database schema and the pixel on screen. Most of my work starts with a real
                problem: track attendance, manage a school's dues, run payroll — then I design
                the API around it and build an interface that makes the whole thing feel
                effortless to use.
              </p>
              <p>
                I'm currently sharpening that foundation with a BCA at Manipal University Jaipur,
                while shipping production-style projects on the side — admin dashboards,
                authentication systems and management tools built for people who actually use
                them every day, not just for a portfolio.
              </p>
            </div>
            <div className="facts">
              <div className="fact">
                <div className="fact-k">location</div>
                <div className="fact-v">{profile.location}</div>
              </div>
              <div className="fact">
                <div className="fact-k">focus</div>
                <div className="fact-v">MERN Stack</div>
              </div>
              <div className="fact">
                <div className="fact-k">status</div>
                <div className="fact-v">Open to work</div>
              </div>
              <div className="fact">
                <div className="fact-k">education</div>
                <div className="fact-v">BCA, in progress</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- projects ---------- */
function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal dir="right">
          <p className="eyebrow">projects</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>Things I've shipped</h2>
        </Reveal>
        <div className="projects-list">
          {projects.map((p, i) => (
            <Reveal key={p.path} dir={i % 2 === 0 ? "left" : "right"}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
                download={p.link.endsWith(".apk") ? true : undefined}
              >
                <div className="project-head">
                  <span className={`method method-${p.method}`}>{p.method}</span>
                  <span className="project-head-path">{p.path}</span>
                  <span className="status-ok">↗</span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <div className="project-role">{p.role}</div>
                  <p className="project-desc">{p.description}</p>
                  <ul className="project-points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div className="project-tags">
                    {p.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- skills ---------- */
function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal dir="left">
          <p className="eyebrow">skills</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>Toolbox</h2>
        </Reveal>
        <div className="skills-grid">
          {skills.map((block, i) => (
            <Reveal key={block.category} dir={i % 2 === 0 ? "right" : "left"}>
              <div className="skill-block">
                <div className="skill-comment">// {block.category}</div>
                <div className="skill-items">
                  {block.items.map((it) => (
                    <span className="skill-pill" key={it}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- education (git log style) ---------- */
function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal dir="right">
          <p className="eyebrow">education</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>Commit history</h2>
        </Reveal>
        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={e.hash} dir={i % 2 === 0 ? "left" : "right"}>
              <div className="commit">
                <div className="commit-meta">
                  {/* <span className="commit-hash">#{e.hash}</span> */}
                  <span>{e.date}</span>
                  <span>{e.status === "in-progress" ? "◐ in progress" : "✓ merged"}</span>
                </div>
                <div className="commit-title">{e.title}</div>
                <div className="commit-org">{e.org}</div>
                <ul className="commit-points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- contact ---------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal dir="left">
          <p className="eyebrow">contact</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>Let's build something</h2>
          <div className="contact-panel">
            <div className="contact-head">
              <span className="method method-POST">POST</span> /contact
            </div>
            <div className="contact-body">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="email">email</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label htmlFor="message">message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required />
                </div>
                <button className="btn btn-primary" type="submit">
                  send request →
                </button>
              </form>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>built with React · deployed on the web</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}