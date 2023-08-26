import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
// IMGS
import OrgChart from '../../img/curator/Organigrama.jpg'
import Map_process from '../../img/curator/Mapa-procesos.jpg'
import FlowChart from '../../img/curator/flowchart.png'
import { Button_navigation } from '../../components/button.component';

class Desitions extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    return (
      <div className="Organization container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Procedimientos que se siguen para tomar decisiones en las diferentes áreas</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-9">
            <h2 class="text-uppercase text-center pb-2" id='organigrama'>Procedimientos que se siguen para tomar decisiones en las diferentes áreas</h2>
            <hr />
           
            <h3 class="text-uppercase pb-2" id="procesos">Procedimiento para la expedición licencias urbanísticas</h3>
            <img src={FlowChart} class="d-block w-100 my-3" alt="Pocesos y procedimientos que se llevan acabo en la curaduria" />
            <div className='text-center'>
              <a className='btn btn-danger my-2' href={FlowChart} target='_blank'>DESCARGAR</a>
            </div>

          </div>
        
        </div>
      </div >
    );
  }
}

export default Desitions;