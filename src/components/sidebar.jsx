import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/HelloMate.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jorge Ayala</a></h1>
              <span className="email"><i className="icon-mail"></i> ayalasaenzjorge@gmail.com</span>
              <p className="email"> Ingeniero de software</p>
              
            </div>
            <div className="text-center"></div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  
                  <li><a href="#about" data-nav-section="about">Sobre mí</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#education" data-nav-section="education">Educación</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Experiencia</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/jorge-santiago-ayala-s%C3%A1enz-61914742/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/AyalaSaenzJorge" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
            
              <p><small>
                  Template perteneciente a <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </small></p>
              <p><small>
                ¡En construcción!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
