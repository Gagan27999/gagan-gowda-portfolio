import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu,
  X, Code2, Database, BrainCircuit, FileText, GraduationCap, Layers3,
  Sparkles, ExternalLink, Terminal, Download, Send, CheckCircle2
} from "lucide-react";

// Add your real profile URLs here when you have them.
// Leave a value as an empty string until you have the correct link.
const LINKS = {
  github: "",
  linkedin: "",
  resume: "/Gagan-Gowda-Resume.pdf"
};

const skills = [
  { name: "Python", category: "Programming", icon: Code2, level: "Learning & building" },
  { name: "HTML", category: "Web", icon: Layers3, level: "Foundational" },
  { name: "MySQL", category: "Database", icon: Database, level: "Learning & querying" },
  { name: "VS Code", category: "Tools", icon: Terminal, level: "Daily development" },
];

const projects = [
  {
    number: "01",
    name: "Fire & Smoke Detector",
    type: "AI PROJECT",
    description: "An AI-focused project concept for identifying fire and smoke from visual input. Add your model, dataset, detection approach and measured results as the project develops.",
    stack: ["Artificial Intelligence", "Computer Vision", "Project details to add"],
    accent: "orange",
    status: "Project showcase"
  },
  {
    number: "02",
    name: "Data Cleaning",
    type: "DATA PROJECT",
    description: "A data preparation project focused on making raw datasets more consistent and useful for analysis. Add the dataset, cleaning steps and before/after results.",
    stack: ["Data Preparation", "Python (if used)", "Project details to add"],
    accent: "violet",
    status: "Project showcase"
  }
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "gagan8217389688@gmail.com";
  const navItems = ["About", "Education", "Skills", "Projects", "Contact"];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Gagan Gowda TM home">
          <span className="brand-mark">G<span>.</span></span>
          <span className="brand-name">GAGAN GOWDA <b>TM</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="availability">
              <span className="pulse-dot" /> OPEN TO LEARNING & OPPORTUNITIES
            </motion.div>
            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>HELLO, I'M</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.75 }}>
              Gagan Gowda <span className="gradient-text">TM.</span>
            </motion.h1>
            <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <span className="role-line" /> ASPIRING DATA SCIENTIST
            </motion.div>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Curious about data, intelligent systems, and the ideas that turn information into insight. I’m building my foundation in Python, databases, and practical projects.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
              <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Contact me <Mail size={16} /></a>
            </motion.div>
            <div className="hero-meta">
              <span><GraduationCap size={16} /> B.E. · 5th Semester</span>
              <span className="meta-divider" />
              <span><Sparkles size={15} /> Curious by nature</span>
            </div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="data-core">
              <div className="core-icon"><BrainCircuit size={48} strokeWidth={1.2} /></div>
              <span className="core-label">DATA / IDEAS / IMPACT</span>
              <span className="core-caption">Turning curiosity<br />into capability.</span>
            </div>
            <div className="float-chip chip-python"><Code2 size={15} /> PYTHON</div>
            <div className="float-chip chip-sql"><Database size={15} /> SQL</div>
            <div className="visual-index">FIG. 001 <span>— PORTFOLIO</span></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>A curious mind.<br /><span className="muted-title">A data-driven direction.</span></>} />
          <div className="about-grid">
            <motion.div className="about-lead" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="large-copy">I’m <strong>Gagan Gowda TM</strong>, a Bachelor of Engineering student working towards a career in data science.</p>
              <p className="body-copy">I’m interested in how data can reveal patterns, support better decisions, and power useful intelligent applications. I’m currently strengthening my programming and database fundamentals while exploring projects in AI and data preparation.</p>
              <p className="body-copy">My focus is to keep learning, build practical work, and grow into a thoughtful data professional.</p>
              <a className="text-link" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={16} /></a>
            </motion.div>
            <motion.div className="about-facts" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="fact-card"><span className="fact-label">CURRENT FOCUS</span><strong>Data Science</strong><span>Learning through practical projects</span></div>
              <div className="fact-card"><span className="fact-label">DEGREE</span><strong>B.E.</strong><span>5th semester · Expected 2027–28</span></div>
              <div className="fact-card"><span className="fact-label">ACADEMIC SCORE</span><strong>8.2 <small>/ 10</small></strong><span>CGPA</span></div>
            </motion.div>
          </div>
        </section>

        <section className="section-wrap education-section" id="education">
          <SectionHeading eyebrow="02 / EDUCATION" title="The learning journey." description="Academic foundation and the next milestone." />
          <motion.div className="timeline" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="timeline-item">
              <div className="timeline-marker"><GraduationCap size={18} /></div>
              <div className="timeline-content">
                <div className="timeline-top"><span className="eyebrow">BACHELOR'S DEGREE</span><span className="timeline-date">2024 — 2027/28</span></div>
                <h3>Bachelor of Engineering</h3>
                <p className="timeline-school">Atria Institute of Technology · Computer Science and Design</p>
                <div className="timeline-tags"><span>5th Semester</span><span>CGPA: 8.2 / 10</span></div>
              </div>
            </div>
          </motion.div>
          <p className="small-note">Please verify the degree dates and branch details before publishing.</p>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading eyebrow="03 / TOOLKIT" title={<>Building my <span className="muted-title">technical foundation.</span></>} description="The tools and technologies I’m currently learning and using." />
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return <motion.div className="skill-card" key={skill.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="skill-icon"><Icon size={22} /></div>
                <div><span className="skill-category">{skill.category}</span><h3>{skill.name}</h3><p>{skill.level}</p></div>
                <ArrowUpRight className="skill-arrow" size={17} />
              </motion.div>;
            })}
          </div>
          <div className="skills-footnote"><span className="pulse-dot" /> Skills are presented honestly as a developing foundation.</div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="04 / SELECTED WORK" title={<>Projects in <span className="muted-title">progress & practice.</span></>} description="A look at the problems I’m exploring. More technical details and demos will be added as the work develops." />
          <div className="projects-grid">
            {projects.map((project, i) => <motion.article className={`project-card ${project.accent}`} key={project.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
              <div className="project-art">
                <span className="project-number">{project.number} / 02</span>
                {project.accent === "orange" ? <div className="fire-graphic"><div className="fire-ring"><BrainCircuit size={54} strokeWidth={1} /></div><span>VISION SYSTEM</span></div> : <div className="clean-graphic"><div className="data-bars"><i /><i /><i /><i /><i /><i /><i /></div><span>RAW DATA → INSIGHT</span></div>}
                <span className="project-type">{project.type}</span>
              </div>
              <div className="project-info">
                <div className="project-status"><span className="status-dot" /> {project.status}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href="#contact">Ask me about this project <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>)}
          </div>
          <p className="small-note">Project descriptions are starter copy. Replace them with your actual implementation, tools, GitHub repositories and results.</p>
        </section>

        <section className="section-wrap next-section">
          <div className="next-card">
            <div><span className="eyebrow">05 / WHAT'S NEXT</span><h2>Learning today.<br /><span className="gradient-text">Building for tomorrow.</span></h2><p>I’m looking forward to growing through real-world problems, collaboration, and consistent hands-on practice.</p></div>
            <div className="next-symbol"><BrainCircuit size={72} strokeWidth={0.8} /><span>KEEP<br />EXPLORING</span></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <SectionHeading eyebrow="06 / CONTACT" title={<>Have an idea?<br /><span className="muted-title">Let's connect.</span></>} description="For opportunities, collaboration, or a conversation about data and technology." />
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="large-copy">I’m always open to learning from new people and exploring meaningful opportunities.</p>
              <button className="email-copy" onClick={copyEmail}><Mail size={19} /><span>{email}</span>{copied ? <CheckCircle2 size={17} /> : <ArrowUpRight size={17} />}</button>
              <span className="copy-hint">{copied ? "Email copied to clipboard" : "Click to copy email address"}</span>
            </div>
            <div className="contact-links">
              <a href={`mailto:${email}`}><span className="contact-link-icon"><Mail size={19} /></span><span><small>EMAIL</small><strong>Send me a message</strong></span><ArrowUpRight size={18} /></a>
              {LINKS.github && <a href={LINKS.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={19} /></span><span><small>GITHUB</small><strong>View my repositories</strong></span><ArrowUpRight size={18} /></a>}
              {LINKS.linkedin && <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={19} /></span><span><small>LINKEDIN</small><strong>Connect professionally</strong></span><ArrowUpRight size={18} /></a>}
              {!LINKS.github && !LINKS.linkedin && <div className="social-placeholder"><span className="contact-link-icon"><Github size={19} /></span><span><small>SOCIAL PROFILES</small><strong>GitHub & LinkedIn links to be added</strong></span></div>}
            </div>
          </div>
          <div className="contact-cta"><span>HAVE A PROJECT OR OPPORTUNITY?</span><a href={`mailto:${email}`}>Let's start a conversation <ArrowUpRight size={17} /></a></div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">G<span>.</span></span><span className="brand-name">GAGAN GOWDA <b>TM</b></span></a>
        <span className="footer-note">Designed & built with curiosity.</span>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} Gagan Gowda TM</span>
      </footer>
    </div>
  );
}

export default App;
