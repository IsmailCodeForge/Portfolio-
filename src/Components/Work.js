import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <section id="work">
      <div className="work-header">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
      </div>
      <div className="projects">
        <div className="project">
          <div className="project-header">
            <i className="project-icon fas fa-code"></i>
            <span>Portfolio</span>
          </div>
          <p>A responsive website built with React, HTML and CSS.</p>
          <a
            href="https://github.com/yourusername/webstudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <div className="project">
          <div className="project-header">
            <i className="project-icon fas fa-code"></i>
            <span>Web Studio</span>
          </div>
          <p>A responsive website built with HTML and CSS.</p>
          <a
            href="https://github.com/yourusername/webstudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Work
