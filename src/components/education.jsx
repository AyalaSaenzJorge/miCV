import React, { Component } from 'react'
import Image from 'react-image-resizer';


export default class Education extends Component {

    render(){
        return(
            <div>
       <section class="colorlib-education" data-section="education">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">Educación</span>
							<h2 class="colorlib-heading animate-box">Educación</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div class="fancy-collapse-panel">
								<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingOne">
									        <h4 class="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Estudios universitarios
									            </a>
									        </h4>
									    </div>
									    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									         <div class="panel-body">
									            <div class="row">
										      		<div class="col-md-3">
                                                      <Image
                                                            src="http://www.espol.edu.ec/sites/default/files/nuevaespol/logo_negro.png"
                                                            width={200}
                                                            height={50}
                                                           
                                                            />
                                                      
										      		</div>
										      		<div class="col-md-9">
                                                         <p><strong>Escuela Superior Politécnica del Litoral</strong></p> 
										      			<p>Ingeniería en Ciencias de la Computación</p>
										      		</div>
										      	</div>
									         </div>
									    </div>
									</div>
									<div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingTwo">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Idiomas
									            </a>
									        </h4>
									    </div>
									    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
									        <div class="panel-body">
                                            <div class="row">
										      		<div class="col-md-3">
                                                      
                                                      <Image
                                                            src="images/cen.png"
                                                            width={200}
                                                            height={100}
                                                           
                                                            />
                                                    
										      		</div>
										      		<div class="col-md-9">
                                                      <p><strong>Certificate of Competency in English</strong></p>
										      			<p>Centro Ecuatoriano Norteamericano CEN</p>
										      		</div>
										      	</div>
                                                  
									        </div>
									    </div>
									</div>
                                    <div class="panel panel-default">
									    <div class="panel-heading" role="tab" id="headingThree">
									        <h4 class="panel-title">
									            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Certificaciones
									            </a>
									        </h4>
									    </div>
									    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
									         <div class="panel-body">
                                             <div class="row">
										      		<div class="col-md-3">

                                                      <Image
                                                            src="images/michigan_logo.jpg"
                                                            width={300}
                                                            height={100}
                                                           
                                                            />
                                                      
										      		</div>
										      		<div class="col-md-9">
                                                      <p><strong>Examination for Certificate of Competency in English</strong></p>
										      			<p>University of Michigan</p>
										      		</div>
										      	</div>
									         </div>
									    </div>
									</div>
									
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