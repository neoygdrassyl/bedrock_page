import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Button_navigation } from '../../components/button.component';

class Mision extends Component {
  render() {
    const { translation, breadCrums } = this.props;

    return (
      <div className="Mision">
        <div className="row py-4 d-flex justify-content-center"  >
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_11}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-10" >
            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h3 className='fw-normal' id='title'><strong>MISIÓN Y VISIÓN</strong></h3>
                </div>
              </div>
            </div>
            <h2 class="text-uppercase text-center pb-2 py-2" id='mision' >{translation.str_title_1}  {<Button_navigation Iddown={'vision'} Idup={null} />}</h2>
            <hr />
            <p className='text-justify'>Promover el licenciamiento urbanístico como una actividad socialmente respetada y valorada garantizando a los ciudadanos, compradores y demás actores una ciudad formal; asegurando el cumplimento de las normas urbanas, constructivas, la legalidad y la seguridad de los productos inmobiliarios que en ellas se construyen como valor histórico sobre la conformación de la ciudad.
            </p>
            <h2 class="text-uppercase text-center pb-2" id='vision' >{translation.str_title_2} {<Button_navigation Iddown={'valores'} Idup={'mision'} />}</h2>
            <hr />
            <p className='text-justify'>La CUB1 será  referente en el licenciamiento urbanísticos por la correcta aplicación de las normas urbanas y de construcción y garantía del debido proceso, por lo cual sus actos administrativos gozan de seguridad jurídica y confianza social.  En virtud de ello hace parte de su misión ser un centro de:
              <ul>
                <li>Estudio y consulta sobre las aplicación de normas urbanística y de construcción por parte de ciudadanos, profesionales y empresas de construcción.</li>
                <li>Custodia de las dlcencias urbanísticas expedidas que constituyen la memoria constructiva de parte de la ciudad formal.</li>
                <li>Formación pedagógica sobre la aplicación normativa, la función social y ecológica del urbanismo y la responsabilidad profesional de quienes intervienen en los actos de licenciamiento.</li>
              </ul>
            </p>
            <hr />
            <h2 className='text-uppercase text-center pb-2' id='valores'>VALORES {<Button_navigation Iddown={'politica'} Idup={'vision'} />}</h2>
            <p className='text-justify'>
              <ul>
                <li>Transparencia</li>
                <li>Primacía Técnica</li>
                <li>Legalidad</li>
                <li>Servicio /respeto/seriedad</li>
                <li>Pedagógico</li>
                <li>Compromiso</li>
              </ul>
            </p>
            <hr />
            <h2 className='text-uppercase text-center pb-2' id='politica'>POLITICA DE CALIDAD {<Button_navigation Iddown={null} Idup={'valores'} />}</h2>
            <p className='text-justify'>
              Prestar el mejor servicio al usuario en la expedición de licencias urbanísticas y demás actuaciones que le competen al curador urbano, de manera ágil, confiable, efectiva, comprometidos con el mejoramiento continuo y apoyados en un recurso humano altamente competente y la mejor herramienta tecnológica.
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default Mision;