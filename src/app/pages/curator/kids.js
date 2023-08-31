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
            <List.Item><i class="fab fa-youtube"></i> Historia de Bucaramanga parte 1 "surgió el pueblo de indios"</List.Item>
            <iframe width="1519" height="542" src="https://www.youtube.com/embed/lb2YqdLc0QE" title="HISTORIA DE BUCARAMANGA PARTE 1 &quot;SURGIÓ EL PUEBLO DE INDIOS&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <List.Item><i class="fab fa-youtube"></i>  Historia de Bucaramanga parte 2 "con los mestizos somos parroquia"</List.Item>
            <iframe width="1519" height="542" src="https://www.youtube.com/embed/JzpeLNfA0rk" title="HISTORIA DE BUCARAMANGA PARTE 2 &quot;CON LOS MESTIZOS SOMOS PARROQUIA&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <List.Item><i class="fab fa-youtube"></i>  Historia de Bucaramanga parte 3 "nos vamos creciendo de villa a ciudad"</List.Item>
            <iframe width="1519" height="542" src="https://www.youtube.com/embed/Q6uJ2WQX_9c" title="HISTORIA DE BUCARAMANGA PARTE  5 &quot;NOS VAMOS CRECIENDO DE VILLA A CIUDAD&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </List>
        </div>
      </div>
    </div>
  </>
}