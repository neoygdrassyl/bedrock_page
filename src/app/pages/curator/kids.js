import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { List } from 'rsuite';
export const Kids = (props) => {
  const { breadCrums } = props;
  return <>
    <div className='container'>
      <div className='row py-4 d-flex justify-content-center'>
        <MDBBreadcrumb className="mx-5">
          <MDBBreadcrumbItem>
            <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Informacion niñ@s</label></MDBBreadcrumbItem>
        </MDBBreadcrumb>
        <div className="col-lg-10">
          <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
            <div class="row justify-content-center px-4 mx-2">
              <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                <h2 className='px-2 py-0 fw-normal'>Información para niños, niñas y adolescentes.</h2>
              </div>
            </div>
          </div>
          <hr />
          <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-dark">
            <p className="fw-normal py-2 text-justify">Esta sección tiene como finalidad mostrar a los niños, niñas y adolescentes un poco de la historia de nuestra ciudad y como ha evolucionado atreves de la historia, como se muestra en los siguientes videos.<br></br>
              <b>Nota:</b> para mirar el video hacer clic en el nombre del video.<br />
              <b>creditos de los siguientes videos:</b> Instituto de Cultura y Turismo de Bucaramanga
            </p>
          </MDBTypography>
          <List size="sm" bordered>
            <List.Item><a className='text-dark' href='https://www.youtube.com/watch?v=lb2YqdLc0QE' target="_blank"><i class="fab fa-youtube"></i> Historia de Bucaramanga parte 1 "surgió el pueblo de indios"</a></List.Item>

            <List.Item><a className='text-dark' href='https://www.youtube.com/watch?v=JzpeLNfA0rk' target="_blank"><i class="fab fa-youtube"></i>  Historia de Bucaramanga parte 2 "con los mestizos somos parroquia"</a></List.Item>
            <List.Item><a className='text-dark' href='https://www.youtube.com/watch?v=Q6uJ2WQX_9c' target="_blank"><i class="fab fa-youtube"></i>  Historia de Bucaramanga parte 3 "nos vamos creciendo de villa a ciudad"</a></List.Item>
          </List>
        </div>
      </div>
    </div>
  </>
}