
import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { List } from 'rsuite';

export const ReportsDefence = (props) => {
    const { breadCrums } = props;
    return <>
        <div className='container'>
            <div className='row py-4 d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                        <Link to={'/reports'}><i class="far fa-bookmark"></i> <label className="text-uppercase">INFORMES</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Informe sobre Defensa Pública y Prevención del Daño Antijurídico</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className="col-lg-10">
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Informe sobre Defensa Pública y Prevención del Daño Antijurídico</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <List size="sm" bordered>
                        <List.Item><i class="fas fa-caret-right"></i> Informe sobre Defensa Pública y Prevención del Daño Antijurídico:  <br /><b>“El Curador Urbano uno de Bucaramanga Arq. LUIS CARLOS PARRA SALAZAR, no ha sido objeto de procesos judiciales en el ejercicio como Curador urbano del Municipio de Bucaramanga.”</b></List.Item>
                    </List>
                </div>
            </div>
        </div>
    </>
}
