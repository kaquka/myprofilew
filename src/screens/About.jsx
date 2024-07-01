import React from 'react'
import './css/about.css'

function About() {
  const tech = [
    {
      id: 1,
      name: 'HTML',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
      status: 'Avanzado'
    },
    {
      id: 2,
      name: 'CSS',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      status: 'Intermedio'
    },
    {
      id: 4,
      name: 'Javascript',
      imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
      status: 'Intermedio'
    },
    {
      id: 12,
      name: 'React Native',
      imageUrl: 'https://lucide.dev/framework-logos/react-native.svg',
      status: 'Intermedio'
    },
    {
      id: 15,
      name: 'React',
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      status: 'Intermedio'
    },
    {
      id: 11,
      name: 'Bootstrap',
      imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
      status: 'Intermedio'
    },
    {
      id: 10,
      name: 'Tailwind',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      status: 'Principiante'
    },
    {
      id: 9,
      name: 'Node.js',
      imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-3-1174937.png',
      status: 'Intermedio'
    }
  ]

  const tools = [
    {
      id: 1,
      name: 'Visual Studio Code',
      imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png',
      status: 'IDE'
    },
    {
      id: 2,
      name: 'Git',
      imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      status: 'Version Control'
    },
    {
      id: 3,
      name: 'GitHub',
      imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      status: 'Git Hosting'
    },{
      id: 5,
      name: 'MySQL',
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
      status: 'Database'
    },
    {
      id: 6,
      name: 'AWS',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s',
      status: 'Cloud Services'
    },
    {
      id: 7,
      name: 'Firebase',
      imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png',
      status: 'Cloud Services'
    },
  ]

  return (
    <> 
    <div  class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
      <article data-page="about">
        <header>
          <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            About Me &nbsp;
            <div class="h-[1px] w-32 bg-amber-200 md:w-96"></div>
          </div>
        </header>
        <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
          <div class="flex justify-center">
            <img class="w-9/12 rounded-full mb-3 fadein-up"
              src="/assets/profile2.jpg" alt="Foto"/>
          </div>
          <div class="md:w-7/12">
            <p class="mb-2 md:mb-7 fadein-left fadeins-1">
              &nbsp; &nbsp; &nbsp; ¡Hola! Mi nombre es Luis Angel Avendaño Avalos. Soy un desarrollador Full-stack nacido en Chihuahua, 
              crecido en Veracruz y actualmente vivo en Puebla, un poco revuelto todo. 
              Cuento con más de un año de experiencia en el desarrollo de software y realmente disfruto muchísimo lo que hago.
            </p>
            <p class="mb-2 fadein-left fadeins-2">
              &nbsp; &nbsp; &nbsp; Creo firmemente en la importancia de escuchar y considerar nuevas ideas, así como en la comunicación asertiva y el trabajo 
              en equipo son fundamentales para lograr avances significativos en cualquier proyecto.
              Mi mente está siempre enfocada en la resolución de problemas, lo que me permite adaptarme y contribuir efectivamente a cualquier proyecto.
            </p>
            <p class="mb-3 fadein-left fadeins-2">
              &nbsp; &nbsp; &nbsp; Estoy motivado por la innovación y el desarrollo de tecnologías avanzadas, y siempre busco mejorar en lo que hago y hacer crecer mi conocimiento.
            </p>
          </div>
        </section>
      </article>
    </div>
    
    <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
      <article data-page="about">
        <header>
          <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
              data-aos-duration="600"></div>
            &nbsp; Skills
          </div>
        </header>
        <section>          
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            {tech.map((item) => (
              <div key={item.id}
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    src={item.imageUrl} />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">
                    { item.name }
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    { item.status }
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
            <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
              data-aos-duration="600"></div>
            &nbsp; Herramientas
          </div>
          
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            {tools.map((item) => (
              <div key={item.id}
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    src={item.imageUrl} />
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">
                    { item.name }
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    { item.status }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
    </>
  )
}

export default About