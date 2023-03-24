import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { List } from 'rsuite';

export const Data = (props) => {
  const { breadCrums } = props
  return <>
    <div className='container'>
      <div className='row py-4 d-flex justify-content-center'>
        <MDBBreadcrumb className="mx-5">
          <MDBBreadcrumbItem>
            <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Normatividad especial</label></MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <div className='col-lg-10'>
          <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
            <div class="row justify-content-center px-4 mx-2">
              <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                <h2 className='px-2 py-0 fw-normal'>Normatividad especial.</h2>
              </div>
            </div>
          </div>
          <hr />
          <table className='table table-bordered table-sm border-dark'>
            <thead>
              <tr className='text-center table-warning'>
                <th colSpan={2} >Reporte a entidades</th>
              </tr>
              <tr className='text-center table-info'>
                <th>Entidad</th>
                <th>Periodo de Reporte</th>
              </tr>
            </thead>
            <tbody className='text-justify'>
              <tr>
                <td>Secretaria de Planeación</td>
                <td>Semanal</td>
              </tr>
              <tr>
                <td>Superintendencia de Notariado y Registro </td>
                <td>Semanal</td>
              </tr>
              <tr>
                <td>Departamento Nacional de Estadísticas DANE</td>
                <td>Mensual</td>
              </tr>
              <tr>
                <td>CAMACOL</td>
                <td>Mensual</td>
              </tr>
              <tr>
                <td>Ministerio de Vivienda Ciudad y Territorio </td>
                <td>Trimestral</td>
              </tr>
              <tr>
                <td>Contraloría Municipal </td>
                <td>Anual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
}
