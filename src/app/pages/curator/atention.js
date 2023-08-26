import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Button_navigation } from '../../components/button.component';

class Atention extends Component {
  render() {
    const { translation, breadCrums } = this.props;

    return (
      <div className="Mision">
        <div className="row py-4 d-flex justify-content-center"  >
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">PROTOCOLOS DE ATENCIÓN</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-10" >
            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h3 className='fw-normal' id='title'><strong>PROTOCOLOS DE ATENCIÓN</strong></h3>
                </div>
              </div>
            </div>
            <hr />
            <p className='text-justify'>
              La atención se realiza de manera presencial y virtual a través de nuestros canales de atención. Es
              importante mencionar que contamos con el sistema de agendamiento de citas al cual puede
              acceder a través de este <a href='https://www.curaduria1bucaramanga.com/scheduling'>link</a>, dejando a salvo
              que no es requisito para ser atendido tener una cita.
              Respecto de la documentación radicada a las solicitudes de licencias, actos de reconocimiento,
              otras actuaciones; así como las PQRS, se radican a través de la ventanilla única de radicación,
              generando un numero de radicado con el cual puede hacer seguimiento a través de nuestra
              página.
              La atención se realiza según el orden de llegada y radicación, salvo los sujetos de especial
              protección constitucional, así como la respuesta requerida en las acciones constitucionales y
              demás peticiones que tienen un término especial.
            </p>
          </div>
        </div>
      </div >
    );
  }
}

export default Atention;