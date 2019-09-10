import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">EXPERIENCIA</span>
                <h2 className="colorlib-heading animate-box">EXPERIENCIA LABORAL</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="http://www.naportec.com.ec/" target="_blank">NAPORTEC</a> <span>2018-2019</span></h2>
                        <p>Desarrollo de proyecto: “DESARROLLO DE UN APLICATIVO PARA SOPORTAR LAS OPERACIONES EN GARITA DE NAPORTEC
ORIENTADO A PUERTO DIGITAL”. Como resultado se desarrolló un aplicativo web y móvil para dar soporte a procesos dentro del terminal portuario.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="http://educate.org.ec/" target="_blank" >FUNDACIÓN EDÚCATE</a> <span>2018</span></h2>
                        <p>Refuerzo al programa Más Tecnología de la Fundación E-dúcate de la Ciudad De Guayaquil, voluntariado Universitario: Innovación Social para el Desarrollo Sostenible. Participé en el desarrollo de un aplicativo web y móvil para coordinar visitas de inspectores de la fundación a escuelas de escasos recursos.</p>
                      </div>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
