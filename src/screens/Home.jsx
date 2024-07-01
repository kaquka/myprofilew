import React, { useEffect, useRef, useState } from 'react'
import './css/home.css'

const Home = () => {
    const toRotate = ["Full-stack Developer", "Estudiante de Ciencias de la Computación", "Persona amable (cuando sí como)"]
    const period = 2000
    const [text, setText] = useState('')
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const typewriterRef = useRef(null)
  
    useEffect(() => {
      const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
  
        setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))
  
        let delta = 200 - Math.random() * 100
  
        if (isDeleting) {
          delta /= 2
        }
  
        if (!isDeleting && text === fullText) {
          delta = period
          setTimeout(() => setIsDeleting(true), period)
        } else if (isDeleting && text === '') {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
          delta = 50;
        }
  
        typewriterRef.current = setTimeout(tick, delta)
      }
  
      typewriterRef.current = setTimeout(tick, 50)
  
      return () => clearTimeout(typewriterRef.current)
    }, [text, isDeleting, loopNum, toRotate])

  return (
    <main className="main-container">
      <div className="text-container">
        <p className="highlight-text">Hola Mundo, soy</p>
        <h1 className="title">Luis Angel Avendaño Avalos</h1>
        <div>
          <h1 className="typewriter-text" ref={typewriterRef}>
            <span className="wrap">{text}</span>
          </h1>
        </div>
        <p className="subtitle">
          Bienvenido a mi presentación. <span className="wave">👋🏼</span>
        </p>
      </div>
      <div className="image-container">
        <img
          alt="avatar"
          fetchpriority="high"
          width="300"
          height="300"
          decoding="async"
          data-nimg="1"
          src="/assets/perfil.png"
        />
      </div>
    </main>
  )
}

export default Home
