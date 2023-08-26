import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

class Duty extends Component {
  render() {
    const { translation, breadCrums } = this.props;

    return (
      <div className="Mision">
        <div className="row py-4 d-flex justify-content-center"  >
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">FUNCIONES Y DEBERES</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-10" >
            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h3 className='fw-normal' id='title'><strong>FUNCIONES Y DEBERES</strong></h3>
                </div>
              </div>
            </div>
            <hr />
            <p className='text-justify'>
              Seung el Decreto 1077 de 2015 artículo 2.2.6.6.1.1: El curador urbano es un particular encargado de estudiar, tramitar y expedir licencias de parcelación, urbanización, construcción y subdivisión de predios, a petición del interesado en adelantar proyectos de esa índole.
              El Curador debe asistir en las siguientes funciones:
              <ul>
                <li>Orientación sobre aplicación de normas urbanísticas</li>
                <li>Expedición de conceptos de uso y norma</li>
                <li>Estudio, trámite y expedición de licencias urbanísticas</li>
                <li>Ajuste de cotas y áreas</li>
                <li>Aprobación planos propiedad horizontal</li>
                <li>Copia certificada de planos</li>
                <li>Autorización para el movimiento de tierras</li>
                <li>Aprobación de piscinas</li>
                <li>Modificación de Planos Urbanísticos</li>
                <li>Prórrogas y Revalidaciones de licencias urbanísticas</li>
              </ul>
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default Duty;