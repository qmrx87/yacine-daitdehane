import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  Image,
  Button,
  Badge,
} from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFilePdf,
  FaExternalLinkAlt,
  FaArrowRight,
  FaRocket,
  FaCode,
  FaBrain,
  FaTools,
  FaChartLine,
  FaDatabase,
  FaAward,
} from "react-icons/fa";
import "./App.css";
import profilePic from "./assets/pfp.png";
import paperly_logo from "./assets/paperly_logo.png";
import profynd_logo from "./assets/profynd_logo.jpg";
import es3_logo from "./assets/es3_logo.png";
import drug_logo from "./assets/drug_prescription_mining.png";
const PROJECTS = [
  {
    title: "Paperly — AI Research Summarizer",
    desc: "OCR + LLM summarizer using GraphRAG & AgenticRAG. Deployed with Neo4j and RAG-driven search tailored to academic queries.",
    href: "https://github.com/ADHAYA-Technos/Automated-Information-Retrieval-and-Summarization-for-Academic-Research-Articles",
    img: paperly_logo,
    badge: "NLP · RAG · PyTorch",
    icon: <FaBrain className="project-icon" />,
    featured: true,
  },
  {
    title: "ProFynd — Geo-Smart Tutor Finder",
    desc: "Mobile app to find tutors nearby with real-time matching and geolocation. Built with Android + Firebase.",
    href: "https://github.com/qmrx87/ProFynd-1.1",
    img: profynd_logo,
    badge: "Android · Firebase",
    icon: <FaRocket className="project-icon" />,
    featured: true,
  },
  {
    title: "Drug Prescription Mining",
    desc: "Pattern-mining pipeline (ECLAT / FP-Growth) on 239K prescriptions with anomaly detection and Streamlit dashboard.",
    href: "https://github.com/ADHAYA-Technos/drug-prescription-pattern-mining",
    img: drug_logo,
    badge: "Python · Data Mining",
    icon: <FaCode className="project-icon" />,
    featured: false,
  },
  {
    title: "ESI Smart Store",
    desc: "Full-stack inventory and store-management web app using React, Express and Firebase real-time updates.",
    href: "https://github.com/ADHAYA-Technos/magasin-esi",
    img: es3_logo,
    badge: "React · Full-stack",
    icon: <FaCode className="project-icon" />,
    featured: false,
  },
];

const SKILLS = [
  { name: "Python & PyTorch", level: 80, category: "AI/ML" },
  { name: "NLP & Transformers", level: 75, category: "AI/ML" },
  { name: "RAG Systems", level: 85, category: "AI/ML" },
  { name: "React & Frontend", level: 70, category: "Engineering" },
  { name: "Data Engineering", level: 75, category: "Data" },
  { name: "Cloud & DevOps", level: 60, category: "Engineering" },
  { name: "System Architecture", level: 85, category: "Engineering" },
  { name: "Big Data Processing", level: 75, category: "Data" },
];

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar
        bg="transparent"
        expand="lg"
        fixed="top"
        className="navbar-glass"
        aria-label="Main navigation"
      >
        <Container>
          <Navbar.Brand href="#hero" className="brand">
            <span className="brand-highlight">YD</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#bio" className="nav-link-custom">About</Nav.Link>
              <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
              <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
              <Nav.Link href="#experience" className="nav-link-custom">Experience</Nav.Link>
              <Nav.Link href="#connect" className="nav-link-custom">Connect</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <header
        className="hero section-padding"
        role="banner"
        aria-label="Hero section"
        id="hero"
      >
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <Badge bg="primary" className="hero-badge mb-3">
                AI & Data Scientist
              </Badge>
              <h1 className="hero-title">
                Building Intelligent Systems with{" "}
                <span className="text-gradient">Scalable AI</span>
              </h1>
              <p className="hero-subtitle">
                Master's student specializing in NLP, RAG systems, and production-ready 
                machine learning applications. Passionate about transforming complex data 
                into actionable intelligence.
              </p>
              <div className="hero-ctas mt-4">
                <a
                  href="#projects"
                  className="btn btn-primary me-3"
                  aria-label="View projects"
                >
                  View My Work
                  <FaArrowRight className="ms-2" />
                </a>
                <a
                  href="/resume.pdf"
                  className="btn btn-outline-light"
                  aria-label="Download resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFilePdf className="me-2" />
                  Download CV
                </a>
              </div>
              <div className="hero-stats mt-5">
                <Row>
                  <Col xs={4} className="text-center">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Projects</div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Years</div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Technologies</div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="hero-image-container">
                <Image
                  src={profilePic}
                  roundedCircle
                  className="profile-img"
                  alt="Yacine Dait Dehane"
                  width={320}
                  height={320}
                />
                <div className="floating-elements">
                  <div className="floating-element element-1">🤖 AI</div>
                  <div className="floating-element element-2">🧠 NLP</div>
                  <div className="floating-element element-3">🚀 ML</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* About Section */}
      <section id="bio" className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="section-title mb-4">About Me</h2>
              <p className="lead mb-4">
                I'm a Master's student in Computer Science (AI & Data Science) at ESI-SBA, 
                passionate about building intelligent systems that solve real-world problems. 
                My expertise spans from data pipelines and model development to deploying 
                scalable AI applications.
              </p>
              <Row className="mt-5">
                <Col md={4} className="mb-4">
                  <div className="feature-card">
                    <FaBrain className="feature-icon" />
                    <h5>AI Research</h5>
                    <p>Advanced NLP, RAG systems, and model fine-tuning</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="feature-card">
                    <FaCode className="feature-icon" />
                    <h5>Engineering</h5>
                    <p>Production-ready ML systems and full-stack development</p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="feature-card">
                    <FaRocket className="feature-icon" />
                    <h5>Innovation</h5>
                    <p>Cutting-edge solutions with modern tech stacks</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

 {/* Skills Section */}
<section id="skills" className="section-padding bg-light">
  <Container>
    <h2 className="section-title text-center mb-5">Technical Skills</h2>
    
    {/* Skills Overview Cards */}
    <Row className="mb-5">
      <Col md={4} className="mb-4">
        <div className="skill-category-card">
          <div className="skill-category-icon ai-icon">
            <FaBrain />
          </div>
          <h5>AI & Machine Learning</h5>
          <p>NLP, Deep Learning, Model Training & Fine-tuning</p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="skill-category-card">
          <div className="skill-category-icon eng-icon">
            <FaCode />
          </div>
          <h5>Engineering</h5>
          <p>Full-stack Development, System Design, DevOps</p>
        </div>
      </Col>
      <Col md={4} className="mb-4">
        <div className="skill-category-card">
          <div className="skill-category-icon data-icon">
            <FaDatabase />
          </div>
          <h5>Data & Analytics</h5>
          <p>Data Engineering, Analytics, Big Data Processing</p>
        </div>
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
        <Card className="skills-progress-card mb-4">
          <Card.Body>
            <h5 className="card-title-with-icon">
              <FaChartLine className="me-2" />
              Core Competencies
            </h5>
            {SKILLS.map((skill, index) => (
              <div key={skill.name} className="skill-item mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>
      </Col>
      
      <Col lg={6}>
        <Card className="tech-highlights-card mb-4">
          <Card.Body>
            <h5 className="card-title-with-icon">
              <FaTools className="me-2" />
              Technologies & Tools
            </h5>
            <Row>
              <Col md={6}>
                <div className="tech-category">
                  <h6>AI/ML & Data Science</h6>
                  <ul className="tech-list">
                    <li>Python & PyTorch</li>
                    <li>Hugging Face Transformers</li>
                    <li>Scikit-learn & Pandas</li>
                    <li>Apache Spark</li>
                    <li>MLflow & Weights & Biases</li>
                  </ul>
                </div>
                
                <div className="tech-category">
                  <h6>Backend & Databases</h6>
                  <ul className="tech-list">
                    <li>FastAPI & Flask</li>
                    <li>Node.js & Express</li>
                    <li>Neo4j & ChromaDB</li>
                    
                  </ul>
                </div>
              </Col>
              
              <Col md={6}>
                <div className="tech-category">
                  <h6>Frontend & Mobile</h6>
                  <ul className="tech-list">
                    <li>React & Next.js</li>
                    <li>TypeScript & JavaScript</li>
                    <li>Bootstrap & Tailwind</li>
                    <li>Android Development</li>
                  </ul>
                </div>
                
                <div className="tech-category">
                  <h6>DevOps & Cloud</h6>
                  <ul className="tech-list">
                    <li>Docker & Kubernetes</li>
                    <li>Linux & Bash</li>
                    <li>Firebase & Supabase</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
{/*
    {/* Certifications & Badges 
    <Row className="mt-5">
      <Col>
        <Card className="certifications-card">
          <Card.Body>
            <h5 className="text-center mb-4">
              <FaAward className="me-2" />
              Certifications & Specializations
            </h5>
            <Row className="text-center">
              <Col md={3} className="mb-3">
                <div className="certification-item">
                  <div className="cert-badge">NLP</div>
                  <small>Advanced Natural Language Processing</small>
                </div>
              </Col>
              <Col md={3} className="mb-3">
                <div className="certification-item">
                  <div className="cert-badge">ML</div>
                  <small>Machine Learning Engineering</small>
                </div>
              </Col>
              <Col md={3} className="mb-3">
                <div className="certification-item">
                  <div className="cert-badge">Cloud</div>
                  <small>AWS Cloud Practitioner</small>
                </div>
              </Col>
              <Col md={3} className="mb-3">
                <div className="certification-item">
                  <div className="cert-badge">Data</div>
                  <small>Data Engineering Fundamentals</small>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  
*/}
</Container>
</section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <Container>
          <h2 className="section-title text-center mb-5">Featured Projects</h2>
          <Row>
            {PROJECTS.map((project) => (
              <Col lg={6} className="mb-4" key={project.title}>
                <Card className="project-card h-100">
                  <div className="project-media">
                    <Card.Img
                      variant="top"
                      src={project.img}
                      alt={`${project.title} screenshot`}
                    />
                    <div className="project-overlay">
                      {project.icon}
                    </div>
                  </div>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Card.Title className="project-title">{project.title}</Card.Title>
                      <Badge bg="outline-primary" className="project-badge">
                        {project.badge}
                      </Badge>
                    </div>
                    <Card.Text className="project-description">{project.desc}</Card.Text>
                    <div className="project-actions">
                      <a
                        href={project.href}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <FaExternalLinkAlt className="ms-2" />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
{/* Experience Section */}
<section id="experience" className="section-padding bg-light">
  <Container>
    <h2 className="section-title text-center mb-5">Experience & Leadership</h2>
    <Row className="justify-content-center">
      <Col lg={8}>
        <div className="timeline">
          {/* Leadership Roles */}
          <div className="timeline-category">Leadership & Entrepreneurship</div>
          
       <div className="timeline-item">
  <div className="timeline-date">2021 – Present</div>
  <div className="timeline-content">
    <h5>Founder & Marketing Director</h5>
    <span className="company">
      <a 
        href="https://instagram.com/tisharwatt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="company-link"
      >
        Tisharwatt
      </a>
    </span>
    <p>
      Founded and managed an online clothing store, leading market research, branding, and customer engagement
strategies to build a loyal base through organic marketing.
    </p>
  </div>
</div>
          <div className="timeline-item">
            <div className="timeline-date">2023 – Present</div>
            <div className="timeline-content">
              <h5>Co-Founder & Team Lead</h5>
              <span className="company">ADHAYA Technos</span>
              <p>
                Co-founded startup focusing on secure, scalable solutions. 
                Led architecture design and ML model integration for client projects.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2021 – 2023</div>
            <div className="timeline-content">
              <h5>Finance Member</h5>
              <span className="company">Ingeniums Scientific Club</span>
              <p>
                Assisted in financial planning and budgeting to optimize resource allocation 
                for technical and scientific initiatives.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="timeline-category">Professional Experience</div>

          <div className="timeline-item">
            <div className="timeline-date">Jun -Sep 2023</div>
            <div className="timeline-content">
              <h5>Database Administration Intern</h5>
              <span className="company">CNAS El Bayadh</span>
              <p>
                Optimized database performance and helped improve data security procedures 
                for enhanced system reliability and protection.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">July 2025</div>
            <div className="timeline-content">
              <h5>Cybersecurity Trainer</h5>
              <span className="company">CNFE El Bayadh</span>
              <p>
                Delivered a comprehensive 3-day training program for administrative staff 
                covering threat awareness and secure practices.
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

      {/* Contact Section */}
      <section id="connect" className="section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-4">Let's Connect</h2>
              <p className="lead mb-5">
                Interested in collaboration, research opportunities, or AI/ML roles? 
                I'm always open to discussing innovative projects and ideas.
              </p>
              
              <div className="social-links mb-5">
                <a
                  href="https://www.linkedin.com/in/dait-dehane-yacine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/qmrx87"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com/yacine_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
                <a
                  href="mailto:y.daitdehane@esi-sba.dz"
                  aria-label="Email"
                  className="social-link"
                >
                  <FaEnvelope />
                </a>
              </div>

              <div className="contact-actions">
                <a
                  href="mailto:y.daitdehane@esi-sba.dz"
                  className="btn btn-primary me-3"
                >
                  <FaEnvelope className="me-2" />
                  Send Email
                </a>
                <a
                  href="tel:+213797719072"
                  className="btn btn-outline-primary"
                >
                  <FaPhone className="me-2" />
                  Schedule Call
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Yacine Dait Dehane. Crafted with passion.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <a
                href="https://github.com/qmrx87"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link me-3"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dait-dehane-yacine/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;