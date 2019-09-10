import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Sobre mí</span>
                    <h2 className="colorlib-heading">Presentación</h2>
                    <div className="author-img" style={{backgroundImage: 'url(images/jsas_CV.jpeg)'}} />
                    <p>Mi nombre es Jorge Ayala Sáenz y estoy en búsqueda de empleo activamente. Con un grado en Ciencias de la Computación y experiencia en desarrollo de aplicativos móviles y web en proyectos para empresas reconocidas de la ciudad de Guayaquil, además de conocimientos en Ingeniería de software, creo tener un perfil adecuado para lo que necesita su organización.</p>
                    <p>En mí podrá encontrar una persona con actitud positiva frente a los retos, que no teme aprender cosas nuevas, ya que como parte de mi formación he desarrollado la habilidad del autoaprendizaje, requisito que fue primordial para cumplir con los proyectos de la universidad. Puedo destacar también mi capacidad de trabajar con equipos multidisciplinarios, de los cuales considero se obtienen los mejores aprendizajes, ya que nos obliga a los ingenieros a ser pragmáticos al momento de buscar soluciones y flexibles a las necesidades de los otros miembros del equipo.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Habilidades</span>
                <h2 className="colorlib-heading">Como habilidades primordiales, puedo destacar las siguientes:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Desarrollo web y móvil </h3>
                    <p>Tengo experiencia en desarrollo de aplicaciones web y para dispositivos móviles, con tecnologías basadas en los lenguajes Javascript y Java (éste último con respecto a Desarrollo para Android SO)</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-bulb"  />
                </span>
                <div className="desc">
                    <h3>Estructuras de datos y algoritmos</h3>
                    <p>Al tener instrucción formal en Ciencias de la computación, tengo conocimientos en la parte teórica de la programación</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Ingeniería de Software</h3>
                    <p>He participado en proyectos para instituciones de la Ciudad de Guayaquil en los que puse en práctica mis conocimientos en análisis de requerimientos y diseño de soluciones en base a las necesidades de los clientes. Puedo decir que también soy capaz de trabajar en equipos multidisciplinarios.</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
