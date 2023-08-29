import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
// IMGS
import OrgChart from '../../img/curator/Organigrama.jpg'
import Map_process from '../../img/curator/Mapa-procesos.jpg'
import FlowChart from '../../img/curator/flowchart.png'
import { Button_navigation } from '../../components/button.component';

class Maps extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    const homepath = "https://curaduria1bucaramanga.com/public_docs/OTHERS/map/";
    return (
      <div className="Organization container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Mapas y cartas descriptivas de los procesos</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-9">
            <h2 class="text-uppercase text-center pb-2" id='organigrama'>Mapas y cartas descriptivas de los procesos {<Button_navigation Iddown={'mapa'} Idup={null} />}</h2>
            <hr />

            <h2 class="text-uppercase text-center p-3 pt-4" id='mapa'>Mapa de procesos{<Button_navigation Iddown={'carts'} Idup={'organigrama'} />}</h2>
            
            <img src={Map_process} class="d-block w-100 pt-3" alt="Organigrama de la curaduria" />
            <div className='text-center'>
              <a className='btn btn-danger my-2' href={Map_process} target='_blank'>DESCARGAR</a>
            </div>  

            <hr />
            <h2 class="text-uppercase text-center py-2" id='carts'>cartas descriptivas de los procesos {<Button_navigation Iddown={'mapa'} Idup={null} />}</h2>
            <table className="table table-bordered table-sm table-hover text-start">
            <tbody>
              <tr>
                <td><label className="app-p lead text-justify fw-normal text-uppercase">MANUAL DE PROCEDIMIENTO NORMA URBANA</label></td>
                <td><a className="btn btn-danger"
                  href={homepath + "MANUAL DE PROCEDIMIENTO NORMA URBANA.pdf"} target="_blank">
                  <i class="fas fa-cloud-download-alt"></i> Descargar
                </a>
                </td>
              </tr>

              <tr>
                <td><label className="app-p lead text-justify fw-normal text-uppercase">PROCESO DE REVISION DEL EXPEDIENTE DEL PROYECTO</label></td>
                <td><a className="btn btn-danger"
                  href={homepath + "PROCESO DE REVISION DEL EXPEDIENTE DEL PROYECTO 2021 (1) (1).pdf"} target="_blank">
                  <i class="fas fa-cloud-download-alt"></i> Descargar
                </a>
                </td>
              </tr>

              <tr>
                <td><label className="app-p lead text-justify fw-normal text-uppercase">PROCESO DE APROBACION DE LOS PLANOS DE PROPIEDAD HORIZONTAL</label></td>
                <td><a className="btn btn-danger"
                  href={homepath + "PROCESO DE APROBACION DE LOS PLANOS DE PROPIEDAD HORIZONTAL 2021 (1).pdf"} target="_blank">
                  <i class="fas fa-cloud-download-alt"></i> Descargar
                </a>
                </td>
              </tr>

            </tbody>
          </table>
          </div>

        

        </div>
      </div >
    );
  }
}

export default Maps;