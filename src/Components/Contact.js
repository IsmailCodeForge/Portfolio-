import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:aliev12ismail@gmail.com">aliev12ismail@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+41798930677">079 893 06 77</a>
          </p>
          <p>
            <strong>Location:</strong>{' '}
            <a
              href="https://www.google.com/maps?q=St.+Gallen,+Switzerland"
              target="_blank"
              rel="noopener noreferrer"
            >
              St. Gallen, Switzerland
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
