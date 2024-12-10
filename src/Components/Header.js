import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <img
          src="/images/my-photo.jpg"
          alt="Ismail Aliiev"
          // style={{
          //   width: '120px',
          //   height: '120px',
          //   objectFit: 'cover',
          //   borderRadius: '50%',
          // }}
        />
        <h1>Frontend Developer</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
