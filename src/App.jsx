import './App.css';
import './Testimonial.css';
import TestimonialSlider from './TestimonialSlider';

function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Naitik Shrivastawa</h1>
          <h2 className="hero-role">Full Stack Web Developer & upcoming Data Scientist</h2>
          <p className="hero-desc">I’m a Full Stack Web Developer and aspiring Data Scientist who loves bringing ideas to life through clean, functional, and visually engaging web applications. With a strong foundation in both frontend and backend development, I create seamless user experiences backed by solid, scalable systems. Now, I’m diving deeper into the world of data — learning to analyze, predict, and build intelligent solutions that solve real-world problems. My goal is to merge creativity, code, and data to craft products that truly make an impact.</p>
          <a href="#contact" className="hero-contact-btn">Hire me</a>
          <a href="#contact" className="hero-contact-btn-2">Contact</a>
        </div>
        <div className="hero-image-container">
          <div className="hero-image" />
          <div className="hero-socials">
            <a href="https://www.instagram.com/naman_naitik34/" target="_blank" rel="noopener" className="hero-social-link insta" title="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM18 6.5C18.5523 6.5 19 6.94772 19 7.5C19 8.05228 18.5523 8.5 18 8.5C17.4477 8.5 17 8.05228 17 7.5C17 6.94772 17.4477 6.5 18 6.5Z" fill="currentColor"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/namannaitik34/" target="_blank" rel="noopener" className="hero-social-link linkedin" title="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.5 17V10.5H6V17H8.5ZM7.25 9.25A1.25 1.25 0 1 0 7.25 6.75A1.25 1.25 0 0 0 7.25 9.25ZM18 17V13.25C18 11.4551 16.5449 10 14.75 10C13.9551 10 13.25 10.4551 12.75 11.125V10.5H10.5V17H13V13.25C13 12.8358 13.3358 12.5 13.75 12.5C14.1642 12.5 14.5 12.8358 14.5 13.25V17H18Z" fill="currentColor"/></svg>
            </a>
            <a href="https://github.com/namannaitik34" target="_blank" rel="noopener" className="hero-social-link github" title="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 5.438 20.166 9.905 21.234C10.405 21.316 10.605 21.045 10.605 20.813C10.605 20.609 10.595 20.019 10.59 19.219C7.728 19.844 7.14 17.978 7.14 17.978C6.682 16.818 6.045 16.5 6.045 16.5C5.145 15.884 6.115 15.897 6.115 15.897C7.115 15.978 7.635 16.938 7.635 16.938C8.525 18.438 10.025 17.978 10.605 17.75C10.685 17.125 10.945 16.75 11.235 16.531C8.985 16.312 6.635 15.344 6.635 11.5C6.635 10.406 7.045 9.531 7.715 8.844C7.615 8.625 7.265 7.625 7.815 6.344C7.815 6.344 8.635 6.094 10.595 7.313C11.375 7.094 12.205 6.984 13.035 6.984C13.865 6.984 14.695 7.094 15.475 7.313C17.435 6.094 18.255 6.344 18.255 6.344C18.805 7.625 18.455 8.625 18.355 8.844C19.025 9.531 19.435 10.406 19.435 11.5C19.435 15.359 17.085 16.312 14.835 16.531C15.185 16.812 15.495 17.375 15.495 18.219C15.495 19.344 15.485 20.469 15.485 20.813C15.485 21.045 15.685 21.316 16.185 21.234C20.652 20.166 24.09 16.418 24.09 12C24.09 6.477 19.523 2 14.09 2H12Z" fill="currentColor"/></svg>
            </a>
            <a href="https://peerlist.io" target="_blank" rel="noopener" className="hero-social-link peerlist" title="Peerlist">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="2" fill="none"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#2563eb">P</text></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h3>Languages</h3>
        <div className="skills-list">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" title="Kotlin" height="38" />
        </div>
        <h3 style={{marginTop: '2rem'}}>Tools & Frameworks</h3>
        <div className="skills-list">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" title="Express" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" title="Firebase" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" title="Git" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" title="GitHub" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" title="Docker" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" title="Figma" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" title="Photoshop" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" alt="Android" title="Android" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" title="Flutter" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" height="38" />
          <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind CSS" title="Tailwind CSS" height="38" style={{background: 'transparent'}} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" title="Next.js" height="38" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" title="AWS" height="38" style={{background: 'transparent'}} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" title="Azure" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" title="Django" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" title="Flask" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" title="PyTorch" height="38" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" title="TensorFlow" height="38" />
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects-section">
        <h3 className="recent-projects-title">Recent Projects</h3>
        <div className="recent-projects-list">
          <div className="recent-project-card">
            <img src="/images/mocktopus.png" alt="Recent Project 1" className="recent-project-img" />
            <div className="recent-project-details">
              <h4 className="recent-project-name">Mocktopus</h4>
              <p className="recent-project-desc">Mocktopus is an intelligent AI chatbot with a built-in personality switch. Get straightforward, helpful answers by default, or activate Sarcastic Mode for clever, witty comebacks. Whether you need support or sass, Mocktopus adapts instantly — with tentacles full of attitude.</p>
              <div className="recent-project-links">
                <a href="https://github.com/namannaitik34/mocktopus" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'transform 0.2s'}} />
                </a>
                <a href="https://mocktopus-pearl.vercel.app/" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
          </div>
          <div className="recent-project-card">
            <img src="/images/datalens.png" alt="Recent Project 2" className="recent-project-img" />
            <div className="recent-project-details">
              <h4 className="recent-project-name">DataLens</h4>
              <p className="recent-project-desc">DataLens is a modern data analytics and visualization platform that empowers users to transform raw datasets into meaningful insights. Upload spreadsheets, explore patterns through interactive dashboards, track key metrics, and export detailed reports with ease.</p>
              <div className="recent-project-links">
                <a href="https://github.com/namannaitik34/datalens" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle'}} />
                </a>
                <a href="https://datalens-nine.vercel.app/" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
          </div>
          <div className="recent-project-card">
            <img src="/images/buildmycv.png" alt="Recent Project 2" className="recent-project-img" />
            <div className="recent-project-details">
              <h4 className="recent-project-name">buildmyCV</h4>
              <p className="recent-project-desc">BuildMyCV is an AI-powered resume builder that helps users create ATS-friendly CVs with smart content suggestions. It streamlines the resume-making process by offering personalized guidance and allows users to easily export their final CVs in multiple formats.</p>
              <div className="recent-project-links">
                <a href="https://github.com/namannaitik34/buildmyCV" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle'}} />
                </a>
                <a href="https://studio--buildmycv-x7de6.us-central1.hosted.app/" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h3>Projects</h3>
        <div className="projects-scroll-container">
          <div className="projects-grid horizontal-scroll">
            {/* Example project cards, replace with your actual project details/images/links */}
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Portfolio" className="project-img" />
              <h4>Portfolio Website</h4>
              <p>Personal site showcasing my work, skills, and contact info. Built with React & Vite.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://yourportfolio.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="E-commerce" className="project-img" />
              <h4>E-commerce Platform</h4>
              <p>Full stack MERN app for online shopping, with custom design and secure payments.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/ecommerce" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://ecommerce.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Design System" className="project-img" />
              <h4>Design System</h4>
              <p>Custom UI kit for rapid prototyping and consistent design across projects.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/design-system" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://designsystem.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="E-commerce" className="project-img" />
              <h4>Blog Platform</h4>
              <p>Modern blog platform with markdown support, comments, and user authentication.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/blog-platform" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://blogplatform.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Task Manager" className="project-img" />
              <h4>Task Manager</h4>
              <p>Productivity app for managing tasks, deadlines, and reminders with notifications.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://taskmanager.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Chat App" className="project-img" />
              <h4>Chat App</h4>
              <p>Real-time chat application with group messaging, emojis, and media sharing bhkjghkhkhhl.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/chat-app" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://chatapp.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="E-commerce" className="project-img" />
              <h4>Analytics Dashboard</h4>
              <p>Interactive dashboard for visualizing business metrics and KPIs with charts.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/analytics-dashboard" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://analyticsdashboard.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Portfolio v2" className="project-img" />
              <h4>Portfolio v2</h4>
              <p>Second version of my portfolio with new design, animations, and improved UX.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/portfolio-v2" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://portfolio2.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Portfolio v2" className="project-img" />
              <h4>Portfolio v2</h4>
              <p>Second version of my portfolio with new design, animations, and improved UX.</p>
              <div className="project-links">
                <a href="https://github.com/yourusername/portfolio-v2" target="_blank" rel="noopener" className="github-logo-link">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: '40px', verticalAlign: 'middle', transition: 'filter 0.2s'}} />
                </a>
                <a href="https://portfolio2.com" target="_blank" rel="noopener" className="visit-link">Visit <span className="visit-arrow" style={{display: 'inline-block', verticalAlign: 'middle'}}><svg width="18" height="18" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 10.53a1 1 0 0 0 .23 1.93l8.34.73.73 8.34a1 1 0 0 0 1.93.23L21 3z"/></svg></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h3 style={{textAlign: 'center', marginBottom: '32px', color: '#000000ff', fontSize: '2rem'}}>Testimonials</h3>
        <TestimonialSlider />
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-split">
            <img src="/images/contact.svg" alt="Contact" className="contact-image" />
          <div className="contact-form-container">
            <h3 className='text-black'>Contact Me</h3>
            <p className="contact-desc">From concept to creation—tell me your idea, I’ll handle the rest.</p>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required />
              <button type="submit" className="discovery-btn">Send Message</button>
            </form>
            <p className="shy-text">Or email me directly at <a href="mailto:kumarnaitik7970@gmail.com">kumarnaitik7970@gmail.com</a></p>
          </div>
        </div>
      </section>

      {/* Footer remains unchanged */}
      <footer className="portfolio-footer">
        <div className="footer-quick-links">
          <a href="#" className="footer-quick-link">Home</a>
          <a href="#projects-section" className="footer-quick-link">Projects</a>
          <a href="#contact" className="footer-quick-link">Contact</a>
          <a href="/resume.pdf" target="_blank" className="footer-quick-link">Resume</a>
        </div>
        <div className="footer-links">
          <a href="https://linkedin.com/namannaitik34" target="_blank" className="footer-btn">Linkedin <span className="arrow">↗</span></a>
          <a href="https://instagram.com/naman_naitik34" target="_blank" className="footer-btn">Instagram <span className="arrow">↗</span></a>
        </div>
        <div className="footer-title">Talk2Me</div>
        <div className="footer-meta">
          <span>© 2025</span>
          <span>Made with love, jokes, and lots of braincells ;)</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
