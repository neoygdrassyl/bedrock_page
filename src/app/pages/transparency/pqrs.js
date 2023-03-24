import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MDBTypography, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import PQRS_PUBLIC_NEW from './pqrs_newPublic.component';
import { Pqrs_info } from './pqrs_info';

class PQRS extends Component {
  render() {
    const { translation, swaMsg, globals, translation_form, breadCrums } = this.props;
    return (
      <div className="PQRS container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_41}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-10">
            <h2 class="text-uppercase text-center pb-2">PETICIONES, QUEJAS, RECLAMOS, SUGERENCIAS Y DENUNCIAS</h2>
            <hr />
            <div class="container text-center">
              <div class="row align-items-start">
                <div class="col-lg-9">
                  <p>Nota: Señor usuario dando click en el siguiente botón podrá encontrar más información sobre las pqrs.</p>
                </div>
                <div class="col-lg-2">
                  <Pqrs_info
                    translation={translation}
                    swaMsg={swaMsg}
                    globals={globals}
                    translation_form={translation_form}
                  />
                </div>
              </div>
            </div>

            <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-dark">
              <p>Apreciado usuario, si su petición o solicitud corresponde a información general sobre el proceso de licenciamiento y o trámites de la curaduría, puede dirigirse al siguiente
                <Link to={'/school'}>Link</Link > de la escuela del curador.<br></br>
                Si no encuentra respuesta a su petición o solicitud, puede solicitar asistencia directa
                con los miembros de la curaduría en el siguiente <Link to={'/scheduling'}>Link</Link >.<br></br>
                Si no haya respuesta puede tramitar aquí su petición con el siguiente formulario.<br />
                Si tiene problemas a la hora de cargar los documentos, por favor comuníquese con nosotros por medio de nuestros canales de atención, ya sea vía WhatsApp, telefónica o correo electrónico.</p>
            </MDBTypography>

          </div >
        </div >
        <div className="row d-flex justify-content-center">
          <h3 class="text-uppercase text-center">RADIQUE SU PETICIÓN</h3>
          <div className="col-10">
            <hr />
            <PQRS_PUBLIC_NEW
              translation={translation}
              swaMsg={swaMsg}
              globals={globals}
              translation_form={translation_form}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default PQRS;