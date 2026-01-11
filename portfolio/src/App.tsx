import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="portfolio-container">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="gradient-orb" style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }}></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">안녕하세요</span>
              <br />
              Frontend Developer
            </h1>
            <p className="hero-subtitle">
              창의적인 아이디어를 현실로 만드는 개발자입니다
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
              <a href="#contact" className="btn btn-secondary">연락하기</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>
      
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="about-content">
            <div className="about-card">
              <div className="card-icon">👨‍💻</div>
              <h3>Passion</h3>
              <p>사용자 경험을 최우선으로 생각하며, 아름답고 직관적인 인터페이스를 만드는 것을 좋아합니다.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>Growth</h3>
              <p>새로운 기술을 배우고 적용하는 것을 즐기며, 지속적으로 성장하고 있습니다.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">✨</div>
              <h3>Innovation</h3>
              <p>최신 트렌드와 기술을 활용하여 혁신적인 솔루션을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Skills</span> & Technologies
          </h2>
          
          {/* Core Tech */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-number">01</span>
              Core Tech <span className="category-subtitle">(주력 기술)</span>
            </h3>
            <p className="category-description">
              가장 자신 있게 다루는 기술이자, 프로젝트 전반에 사용한 스택입니다.
            </p>
            <div className="skills-grid">
              {[
                { name: 'JavaScript / TypeScript (ES6+)', level: 90, description: '비즈니스 로직의 타입 안정성 확보 및 효율적인 코드 작성' },
                { name: 'React', level: 88, description: '컴포넌트 기반 아키텍처 설계 및 상태 관리 최적화' },
                { name: 'Svelte', level: 82, description: '가볍고 빠른 반응형 UI 컴포넌트 개발 경험' },
                { name: 'Node.js (Koa)', level: 85, description: '가벼운 미들웨어 기반의 효율적인 백엔드 API 서버 설계' },
                { name: 'Java (Spring Boot)', level: 83, description: '안정적인 엔터프라이즈급 백엔드 서비스 구축 및 비즈니스 로직 구현' }
              ].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure & DevOps */}
          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-number">02</span>
              Infrastructure & DevOps <span className="category-subtitle">(인프라 및 자동화)</span>
            </h3>
            <p className="category-description">
              2년 차 개발자로서 차별화되는 포인트입니다. 배포 환경을 이해하고 있다는 점을 강조합니다.
            </p>
            <div className="skills-grid">
              {[
                { name: 'Kubernetes (K8s)', level: 60, description: '컨테이너 오케스트레이션을 통한 애플리케이션 배포 및 환경 이해' },
                { name: 'Cloud Service (AWS, NCP)', level: 60, description: '클라우드 인프라를 활용한 서비스 환경 구축 경험' },
              ].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">
              <span className="category-number">03</span>
              Tools & Others
            </h3>
            <div className="skills-grid">
              {[
                { name: 'Git / GitHub', level: 88, description: '협업을 위한 버전 관리 및 워크플로우 활용' },
                { name: 'Docker', level: 80, description: '애플리케이션 컨테이너화' }
              ].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">프로젝트 이미지</div>
              </div>
              <div className="project-info">
                <h3>Project 1</h3>
                <p>프로젝트 설명이 들어갑니다. 기술 스택과 주요 기능을 소개합니다.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">프로젝트 이미지</div>
              </div>
              <div className="project-info">
                <h3>Project 2</h3>
                <p>프로젝트 설명이 들어갑니다. 기술 스택과 주요 기능을 소개합니다.</p>
                <div className="project-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">프로젝트 이미지</div>
              </div>
              <div className="project-info">
                <h3>Project 3</h3>
                <p>프로젝트 설명이 들어갑니다. 기술 스택과 주요 기능을 소개합니다.</p>
                <div className="project-tags">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>Prisma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="contact-content">
            <p className="contact-description">
              프로젝트 협업이나 질문이 있으시면 언제든지 연락주세요!
            </p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">
                <span className="contact-icon">📧</span>
                <span>Email</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">💻</span>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App