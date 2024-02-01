import React, { Component } from 'react';
import IMG from '../img/ita.gif'
// Logos Carousel
import CarouselLogos from '../components/carousel.component'
import LGOG8 from '../img/contacts/Colombia.png'
import moment from 'moment';

class Footer extends Component {
  render() {
    const { translation } = this.props;
    const FOOTER_URL = 'https://www.curaduria1bucaramanga.com/public_docs/OTHERS/footer/'
    return (
      
     
      <div className="Footer" style={{ backgroundColor: '#7A7A7A', color: '#e5e5e5' }}>
        <footer class="">
          <div class="container pt-3">
            <h2 class="text-uppercase text-center pb-2">CURADOR UNO DE BUCARAMANGA - LUIS CARLOS PARRA SALAZAR</h2>
            <h3 class="text-uppercase text-center pb-2" >Información general de Contacto</h3>
            <div class="row justify-content-md-center">
              <div class="col-lg-5 col-md-12 mb-6 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-map-marked-alt"></i>
                    </span> 
                    Localización de la entidad: {translation.str_item_1}</p>
                  </li>
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-phone-alt"></i>
                    </span>
                    Linea de servicio a la ciudadanía: {translation.str_item_2}
                  </p></li>
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-phone-alt"></i>
                    </span>
                    Linea anticorrupción: {translation.str_item_2}
                  </p></li>
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-mobile-alt"></i>
                    </span>
                    Linea de servicio a la ciudadanía: {translation.str_item_3}</p>
                  </li>
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-envelope"></i>
                    </span>
                    Correo de notificaciones judiciales: {translation.str_item_4}</p>
                  </li>
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-clock"></i>
                    </span>
                    Horario de atención al publico: {translation.str_item_5}</p>
                  </li>
                </ul>
              </div>
              <div class="col-lg-5 col-md-12 mb-6 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <img src={IMG} autoPlay height='106px' />
                  </li>
                  <li>
                    <p>{translation.str_p_1}</p>
                  </li>
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-map-marked-alt"></i>
                    </span>
                    <a className="text-white" href="https://www.curaduria1bucaramanga.com/search/">Mapa del sitio</a>
                  </p></li>
                  <li><p>
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-book"></i>
                    </span>
                    <a className="text-white" href="https://www.curaduria1bucaramanga.com/entities">Directorio de entidades</a>
                  </p></li>

                  <li><p className="pt-3">
                    <span class="fa-stack fa-lg">
                      <i class="fab fa-whatsapp fa-2x"></i>
                    </span>  {translation.str_p_2}
                    <a className="btn btn-success mt-3" target="_blank" href="https://web.whatsapp.com/send?phone=+573162795010">{translation.str_btn}</a></p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <p className="pt-0">
              <i class="far fa-file-alt"></i> <a className="text-white" target="_blank" href={`${FOOTER_URL}POLÍTICA DE SEGURIDAD DE LA INFORMACIÓN (1).pdf`}>Política general de seguridad de la información</a>
              / <i class="far fa-file-alt"></i> <a className="text-white" target="_blank" href={`${FOOTER_URL}POLITICA DE DATOS PERSONALES.pdf`}>Política tratamiento de datos personales</a>
              / <i class="far fa-file-alt"></i> <a className="text-white" target="_blank" href={`${FOOTER_URL}POLITICA DE TERMINOS Y CONDICIONES.pdf`}>Política Términos y Condiciones</a>
            </p>
            <p className="pt-0">
              <i class="far fa-file-alt"></i> <a className="text-white" target="_blank" href={`${FOOTER_URL}POLÍTICA DE DERECHOS DE AUTOR Y.pdf`}>Política Derechos de autor</a>
              / <i class="far fa-file-alt"></i> <a className="text-white" target="_blank" href={`${FOOTER_URL}Otras politicas POLÍTICA DE PUBLICACION REPOSITORIO DE LICENCIAS URBANISTICAS.pdf`}>Otras políticas</a>
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
        </footer>
      </div >
    );
  }
}

export default Footer;