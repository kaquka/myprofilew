import React from 'react'
import './css/contact.css'

function Contact() {
  return (
    <>
      <main className="main-container">
        <div className="text-container">
          <h1 className="title">"Stay hungry, stay foolish." - Steve Jobs</h1>
          <h3 className="subtitle">¡Siéntete libre de contactarme!</h3>
          <h4 className="subtitle">Estas son mis redes:</h4>
          <div className="contact-icons">
            <p className="subtitle">
              <span className="wave">
                <a href="http://www.linkedin.com/in/angel-avendaño-avalos" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="LinkedIn"
                    loading="lazy"
                    decoding="async"
                    className="linkedin-icon drop-shadow-xl rounded"
                    src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
                  />
                </a>
              </span>
              <span className="wave">
                <a href='mailto:avendanoavalos12@gmail.com' target="_blank" rel="noopener noreferrer">
                  <img
                    alt="Correo"
                    loading="lazy"
                    decoding="async"
                    className="linkedin-icon drop-shadow-xl rounded"
                    src="https://static.vecteezy.com/system/resources/previews/022/613/021/original/google-mail-gmail-icon-logo-symbol-free-png.png"
                  />
                </a>
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
