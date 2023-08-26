import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
// IMGS
import OrgChart from '../../img/curator/Organigrama.jpg'
import Map_process from '../../img/curator/Mapa-procesos.jpg'
import FlowChart from '../../img/curator/flowchart.png'
import { Button_navigation } from '../../components/button.component';

class Calendar extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    return (
      <div className="Organization container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Calendario de Actividades</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-9">
            <h2 class="text-uppercase text-center pb-2" id='organigrama'>Organigrama {<Button_navigation Iddown={null} Idup={null} />}</h2>
            <hr />
           
          </div>
          <div className='col-lg-11'>
            <h3 class="text-uppercase pb-2 text-center" id="programacion">Calendario de Actividades</h3>
            <table class="table-bordered  table-bordered border-dark" style={{ width: '100%' }}>
              <thead>
                <tr className='text-center' style={{ backgroundColor: '#86a4e8' }}>
                  <th></th>
                  <th style={{width: '23%'}}>7:00am a 8:00am</th>
                  <th style={{width: '23%'}}>8:00am a 12:30pm</th>
                  <th style={{width: '23%'}}>1:30am a 4:00pm</th>
                  <th style={{width: '25%'}}>4:00pm a 5:00pm</th>
                </tr>
              </thead>
              <tbody className='text-start' style={{ backgroundColor: '#d6d6d6' }}>
                <tr>
                  <td>Lunes</td>
                  <td>Cómite de programación</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Trabajo administrativo/ Notificaciones</td>
                </tr>
                <tr>
                  <td>Martes</td>
                  <td>Cómite de Seguridad Trabajo</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Trabajo administrativo/ Notificaciones</td>
                </tr>
                <tr>
                  <td>Miercoles</td>
                  <td>Cómite Archivo</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Trabajo administrativo/ Notificaciones</td>
                </tr>
                <tr>
                  <td>Jueves</td>
                  <td>Trabajo administrativo/ Notificaiones</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Trabajo administrativo/ Notificaciones</td>
                </tr>
                <tr>
                  <td>Viernes</td>
                  <td>Escuela del Curador</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Atención público / Revisón técnica</td>
                  <td>Trabajo administrativo/ Notificaciones</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h3 class="text-uppercase pb-2 text-center" id="programacion">Programación ordinaria del despacho del curador</h3>
            <table class="table-bordered  table-bordered border-dark" style={{ width: '100%' }}>
              <thead>
                <tr className='text-center' style={{ backgroundColor: '#86a4e8' }}>
                  <th rowSpan={2}>Mes</th>
                  <th>Superintendencia Notariado y Registro</th>
                  <th>Secretaria de Planeción Muncipal</th>
                  <th style={{width: '12%'}}>DANE</th>
                  <th style={{width: '12%'}}>CAMACOL</th>
                  <th>MINVIVIENDA</th>
                  <th>CONTRALORIA MUNICIPAL </th>
                  <th>PROCURADURIA GENERAL DE LA NACION </th>
                </tr>
                <tr className='text-center' style={{ backgroundColor: '#86a4e8' }}>
                  <th>Diario</th>
                  <th>Semanal</th>
                  <th>Mensual</th>
                  <th>Mensual</th>
                  <th>Trimestral</th>
                  <th>Anual</th>
                  <th>Anual</th>
                </tr>
              </thead>
              <tbody className='text-start' style={{ backgroundColor: '#d6d6d6' }}>
                <tr>
                  <td>Enero</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td>Octubre/Diciembre</td>
                  <td>Ultimo día habil</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Febrero</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Marzo</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Abril</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td> Enero/Marzo</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Mayo</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Junio</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Julio</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td>Abril/junio</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Agosto</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Septiembre</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Octubre</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td>Julio/Septiembre</td>
                  <td></td>
                  <td>30 de octubre ITA</td>
                </tr>
                <tr>
                  <td>Noviembre</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Diciembre</td>
                  <td>Diario. Maximo 24:00</td>
                  <td>Viernes</td>
                  <td>Primera semana</td>
                  <td>Primera semana</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div >
    );
  }
}

export default Calendar;