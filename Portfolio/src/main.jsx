import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import projects from './data/projects.json';

function Hero() {
  const letters = 'SAURABH'.split('');
  return <section className="hero" id="top">
    <div className="hero-top"><span>PORTFOLIO / 2026</span><span>INDIA</span></div>
    <h1 className="name">{letters.map((l, i) => <span key={i}>{l}</span>)}</h1>
    <div className="hero-bottom">
      <div><p className="eyebrow"><div className="add"><span>ARTIST </span>· <span>DESIGNER </span>· <span>DEVELOPER</span></div></p><p className="intro">I design visuals, build interfaces, and turn ideas into working digital experiences.</p></div>
      <a className="circle-link" href="#work">↓</a>
    </div>
  </section>
}
function Nav() { return <nav><a className="nav-logo" href="#top">S.</a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div><a className="resume" href="#contact">Resume ↗</a></nav> }
function ProjectCard({ p, onOpen }) { return <article className={'project ' + (p.featured ? 'featured' : '')}><div className="project-media" onClick={() => onOpen(p)}><div className="media-inner"><span>{p.mediaLabel}</span></div><div className="project-index">{p.index}</div></div><div className="project-info"><div><span className="project-cat">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p></div><div className="project-actions"><button onClick={() => onOpen(p)}>View project ↗</button>{p.github && <a href={p.github} target="_blank">GitHub ↗</a>}</div></div></article> }
function LiveModal({ p, onClose }) { if (!p) return null; return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={e => e.stopPropagation()}><div className="modal-head"><div><span>{p.category}</span><h2>{p.name}</h2></div><button onClick={onClose}>Close ×</button></div><div className="preview"><div className="browser"><div className="dots">● ● ●</div><div className="address">{p.live || 'Live URL not configured'}</div></div>{p.live ? <iframe title={p.name} src={p.live} /> : <div className="empty-preview">Add a live URL in <code>src/data/projects.json</code> to enable the live preview.</div>}</div><div className="modal-foot"><p>{p.description}</p>{p.live && <a href={p.live} target="_blank">Open live site ↗</a>}{p.github && <a href={p.github} target="_blank">GitHub ↗</a>}</div></div></div> }
function LetterWord({ text, className = '' }) {
  return <span className={'word ' + className}>
    {Array.from(text).map((letter, index) => <span key={index}>{letter}</span>)}
  </span>
}

function App() {
  const [selected, setSelected] = useState(null);
  return <><Nav /><main><Hero />
    <section className="about section" id="about"><div className="section-label">01 / ABOUT</div><div className="about-copy"><h2 className="about-phrase"><LetterWord text="Somewhere" /><LetterWord text="between" /><LetterWord text="pixels" className="accent" /><LetterWord text="and" /><LetterWord text="code." className="accent" /></h2><p>I'm Saurabh Maurya — an artist, graphic designer, and developer who enjoys turning ideas into visual experiences and functional web applications.</p><p>I work across design and development, combining Photoshop and CorelDRAW with React, Vite, and the MERN stack. From creative visuals to complete web applications, I like building things from the idea stage to a working product.</p></div></section>
    <section className="work section" id="work"><div className="section-label">02 / SELECTED WORK</div><div className="work-head"><h2 className="work-phrase"><LetterWord text="Things" /><LetterWord text="I've" /><LetterWord text="built." /></h2><span>{projects.length.toString().padStart(2, '0')} PROJECTS</span></div><div className="projects">{projects.map(p => <ProjectCard key={p.id} p={p} onOpen={setSelected} />)}</div></section>
    <section className="skills section" id="skills"><div className="section-label">03 / TOOLKIT</div><div className="skill-grid"><div><h3>Development</h3><p>React · Vite · JavaScript · HTML · CSS · Node.js · Express · MongoDB · REST APIs</p></div><div><h3>Design</h3><p>CorelDRAW · Adobe Photoshop · Graphic Design · Visual Design · Image Editing</p></div><div><h3>Tools</h3><p>Git · GitHub · VS Code · Vercel · Modern Web Applications</p></div></div></section>
    <section className="contact section" id="contact"><div className="section-label">04 / CONTACT</div><div className="contact-inner"><h2 className="contact-phrase"><LetterWord text="Let's" /><LetterWord text="build" /><LetterWord text="something." className="accent" /></h2><div className="socials"><a href="https://github.com/SaurabhArt111" target="_blank">GitHub</a><a href="https://www.linkedin.com/in/saurabh-maurya-55a66433b/" target="_blank">LinkedIn</a><a href="https://www.instagram.com/saurabh_art__111/" target="_blank">Instagram</a></div></div></section>
  </main><footer><span>SAURABH MAURYA</span><div className="add"><span>ARTIST </span>· <span>DESIGNER </span>· <span>DEVELOPER</span></div><span>© 2026</span></footer>{selected && <LiveModal p={selected} onClose={() => setSelected(null)} />}</>
}
createRoot(document.getElementById('root')).render(<App />);