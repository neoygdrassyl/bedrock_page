import React, { Component } from 'react';
import IMG from '../../img/ita.gif'
// Logos Carousel
import CarouselLogos from '../carousel.component'
import LGOG8 from '../../img/contacts/Colombia.png'
import moment from 'moment';
import './footerStyle.css'

class Footer extends Component {
  render() {
    const { translation } = this.props;
    const FOOTER_URL = 'https://www.curaduria1bucaramanga.com/public_docs/OTHERS/footer/'
    return (


      <div className="Footer" style={{ backgroundColor: '#313131', color: '#e5e5e5' }}>
        <footer class="">
          <h2 class="text-uppercase text-center pb-2 py-2">CURADOR UNO DE BUCARAMANGA - LUIS CARLOS PARRA SALAZAR</h2>
          <h3 class="text-uppercase text-center pb-2" >Información general de Contacto</h3>
          <div className="footer-main-div row px-5 py-1 mb-2 d-flex justify-content-evenly fs-6">
            <div className="footer-div-1 col-lg-5 col-md-6  mb-6 mb-md-0 mx-0 w-25">
              <ul class="list-unstyled mb-0">
                <li>
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-map-marked-alt text-light"></i>
                  </span>
                  <b class="text-light p-0 m-0 ">
                    Localización
                  </b>
                  <ul class="list-unstyled mb-0">
                    <li><p class="text-break">
                      {translation.str_item_1}</p>
                    </li>
                  </ul>
                </li>


                <li>
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-phone-alt text-light"></i>
                  </span>
                  <b class="text-light p-0 m-0">
                    Teléfonos
                  </b>
                  <ul class="list-unstyled mb-0">
                    <li><p>
                      Linea de servicio a la ciudadanía: {translation.str_item_2}
                    </p></li>
                    <li><p>
                      Linea anticorrupción: {translation.str_item_2}
                    </p></li>
                  </ul>

                </li>


              </ul>
            </div>

            <div className="footer-div-1 col-lg-5 col-md-6 mb-6 mb-md-0 mx-0 w-25">
              <ul class="list-unstyled mb-0">
                <li>
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-mobile-alt text-light"></i>
                  </span>
                  <b class="text-light p-0 m-0 ">
                    Celular
                  </b>
                  <ul class="list-unstyled mb-0">
                    <li><p>
                      {translation.str_item_3}</p>
                    </li>
                  </ul>
                </li>

                <li>
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-envelope text-light"></i>
                  </span>
                  <b class="text-light p-0 m-0 ">
                    Correo de notificaciones judiciales
                  </b>
                  <ul class="list-unstyled mb-0">
                    <li><p>
                      {translation.str_item_4}</p>
                    </li>
                  </ul>
                </li>

                <li>
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-clock text-light"></i>
                  </span>
                  <b class="text-light p-0 m-0 ">
                    Horario de atención al publico
                  </b>
                  <ul class="list-unstyled mb-0">
                    <li><p>
                      {translation.str_item_5}</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="footer-div-1 col-lg-5 col-md-12 mb-6 mb-md-0 mx-0 w-33">
              <ul class="list-unstyled mb-0 ">
                {/* <li>
                  <img src={IMG} autoPlay height='75px' />
                </li> */}

                <li class="mb-2">
                  <b>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-map-marked-alt text-light"></i>
                    </span>
                    <a className="text-white" href="https://www.curaduria1bucaramanga.com/search/">Mapa del sitio</a>
                  </b></li>

                <li class="mb-2">
                  <b>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-book text-light"></i>
                    </span>
                    <a className="text-white" href="https://www.curaduria1bucaramanga.com/entities">Directorio de entidades</a>
                  </b></li>

                <li class="mb-2">
                  <b>
                    <span class="fa-stack fa-lg">
                      <i class="fab fa-whatsapp fa-1.5x text-light"></i>
                    </span>
                    <a className="text-white" target="_blank" href="https://web.whatsapp.com/send?phone=+573162795010">{translation.str_p_2}</a>
                  </b>
                </li>
                <li>
                  <p>{translation.str_p_1}</p>
                </li>

              </ul>
            </div>
          </div >
          <hr></hr>
          <div className="footer-politicas text-center py-1 pt-0 mt-0 mb-0 d-flex justify-content-evenly" style={{ fontSize: '14px' }}>
            <p style={{ marginTop: '8px' }}>
              <i class="far fa-file-alt px-2"></i>
              <a className="text-white" target="_blank" href={`${FOOTER_URL}POLÍTICA DE SEGURIDAD DE LA INFORMACIÓN (1).pdf`}>Política general de seguridad de la información</a>
            </p>

            <p >
              <i class="far fa-file-alt px-2"></i>
              <a className="text-white" target="_blank" href={`${FOOTER_URL}POLITICA DE DATOS PERSONALES.pdf`}>Política tratamiento de datos personales</a>
            </p>

            <p>
              <i class="far fa-file-alt px-2"></i>
              <a className="text-white" target="_blank" href={`${FOOTER_URL}POLITICA DE TERMINOS Y CONDICIONES.pdf`}>Política Términos y Condiciones</a>

            </p>
            <p>
              <i class="far fa-file-alt px-2"></i>
              <a className="text-white" target="_blank" href={`${FOOTER_URL}POLÍTICA DE DERECHOS DE AUTOR Y.pdf`}>Política Derechos de autor</a>
            </p>
            <p>
              <i class="far fa-file-alt px-2"></i>
              <a className="text-white" target="_blank" href={`${FOOTER_URL}Otras politicas POLÍTICA DE PUBLICACION REPOSITORIO DE LICENCIAS URBANISTICAS.pdf`}>Otras políticas</a>
            </p>
          </div>

          <div className='row m-0 py-0' style={{ backgroundColor: '#3366CC' }}>
            <div className='col-12 mx-0 px-0 py-0'>
              <div className='ps-4 py-0 my-0'>
                <p className="py-0 my-0">
                  <span class="fa-stack fa-lg">
                    <img src={LGOG8} alt="PaisCO" height={35} />
                  </span>  <a className="text-white" href="http://www.colombia.co/">País Colombia</a>
                </p>
              </div>

            </div>
          </div>

          <div class="text-center p-1">
            © {moment().format('YYYY')} Curaduría Urbana No.1 de Bucaramanga. Desarrollado por
            <a target="_blank" href="//devnatriana.com" className="text-white"> Nestor Triana</a>
          </div>
        </footer >
      </div >
    );
  }
}

export default Footer;