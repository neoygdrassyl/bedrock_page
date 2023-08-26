import React, { Component } from 'react';
import NormogramaIMG from '../../img/normativity/piramidlaw.jpg'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { FlexboxGrid, List } from 'rsuite';
import '../curator/index.css'
import Normas from '../../img/Normatividad.jpg'


/**
 * <a className="btn btn-danger btn-lg"
                href={process.env.REACT_APP_API_URL + '/files/docs/normograma.xlsx'} target="_blank">
                <label><i class="fas fa-cloud-download-alt"></i> Descargar Normograma</label>
              </a>
 * 
 */
class Normogram extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    return (
      <div className="Normogram container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_15}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-11">
            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h2 className='px-2 py-0 fw-normal'>NORMATIVIDAD</h2>
                </div>
              </div>
            </div>
            <hr></hr>
            <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-grey">
              <p><b>Nota: </b>Apreciado usuario, esta sesión corresponde a información de todas las normas urbanísticas y constructivas.<br />Podra realizar consultas por categorias.<br></br>
                Consulta gaceta  <a className='text-info' href='http://svrpubindc.imprenta.gov.co/senado/' target="_blank">Dando click aqui</a> <br />
                Consulta Sistema Único de Información Normativa – SUIN <a className='text-info' href='https://www.suin-juriscol.gov.co/' target="_blank">Dando click aqui</a>
              </p>
            </MDBTypography>
            <hr />
            <div className='col-lg-11 align-items-center '>
              <div className="row ">

                <div className='col-lg-4 px-4 py-2'>
                  <Link to={'/laws'} style={{ textDecoration: 'none' }}>
                    <div className="card text-center" style={{ backgroundColor: '#eaeaea', color: '#1b4489' }}>
                      <div className="card-body">
                        <h4 className="card-title">LEYES</h4>
                        <hr />
                        <p className="fw-normal">  <i class="fas fa-file-invoice fa-3x py-1"></i></p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className='col-lg-4 px-4 py-2'>
                  <Link to={'/decreesn'} style={{ textDecoration: 'none' }}>
                    <div className="card text-center" style={{ backgroundColor: '#eaeaea', color: '#1b4489' }}>
                      <div className="card-body">
                        <h4 className="card-title">DECRETOS NACIONALES</h4>
                        <hr />
                        <p className="fw-normal">  <i class="fas fa-file-invoice fa-3x py-1"></i></p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className='col-lg-4 px-4 py-2'>
                  <Link to={'/resolutions'} style={{ textDecoration: 'none' }}>
                    <div className="card text-center" style={{ backgroundColor: '#eaeaea', color: '#1b4489' }}>
                      <div className="card-body">
                        <h4 className="card-title">RESOLUCIONES</h4>
                        <hr />
                        <p className="fw-normal">  <i class="fas fa-file-invoice fa-3x py-1"></i></p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className='col-lg-4 px-4 py-2'>
                  <Link to={'/decreesm'} style={{ textDecoration: 'none' }}>
                    <div className="card text-center" style={{ backgroundColor: '#eaeaea', color: '#1b4489' }}>
                      <div className="card-body">
                        <h4 className="card-title">DECRETOS MUNICIPALES</h4>
                        <hr />
                        <p className="fw-normal">  <i class="fas fa-file-invoice fa-3x py-1"></i></p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className='col-lg-4 px-4 py-2'>
                  <Link to={'/policies'} style={{ textDecoration: 'none' }}>
                    <div className="card text-center" style={{ backgroundColor: '#eaeaea', color: '#1b4489' }}>
                      <div className="card-body">
                        <h4 className="card-title">POLÍTICAS Y LINEAMIENTOS SECTORIALES</h4>
                        <hr />
                        <p className="fw-normal">  <i class="fas fa-file-invoice fa-3x py-1"></i></p>
                      </div>
                    </div>
                  </Link>
                </div>

              </div>
            </div>

           
            <hr></hr>

            <div className="text-center">

              {/*<img src={NormogramaIMG} class="d-block w-100 my-4" alt="..." /> */}


              {/*   
            
              */}
              {/* <img src={NormogramaIMG} class="d-block w-100 my-4" alt="..." style={{ height: '480px', width: '50px' }} />
              
              <a className="btn btn-danger btn-lg"
                href={process.env.REACT_APP_API_URL + '/files/docs/normograma.xlsx'} target="_blank">
                <label><i class="fas fa-cloud-download-alt"></i> Descargar Normograma</label>
              </a>
              */}

            </div>
          </div >
        </div >

      </div >

    );
  }
}

export default Normogram;