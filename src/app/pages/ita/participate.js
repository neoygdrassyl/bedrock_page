import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { Panel, PanelGroup, List } from 'rsuite';

export const Participate = (props) => {
    const { breadCrums } = props;
    return <>
        <div className='container'>
            <div className='row py-4 d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">PARTICIPA</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className="col-lg-10">
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Participa.</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <PanelGroup accordion defaultActiveKey={0} bordered >
                        <Panel header="1. Consulta Ciudadana" eventKey={1} id="panel1">
                            <ul>
                                <dl>
                                    1.1 <Link to={'/policies#form'}><label>Tema de consulta (normas, políticas, programas o proyectos)</label></Link>
                                </dl>
                                <dl> 1.2 Canales de consulta y caja de herramientas:
                                    <ul>
                                        <li><Link to={'/normogram#form'}><label>Radicación de PQRS</label></Link></li>
                                        <li><Link to={'/normogram#form'}><label>Agendamiento de citas</label></Link></li>
                                        <li><Link to={'/normogram#form'}><label>Consulta de procesos y licencias</label></Link></li>
                                    </ul>
                                </dl>
                                <dl> 1.3 observaciones y comentarios y las respuestas de proyectos normativos. <b>No se han presentado observaciones y comentarios y las respuestas de proyectos normativos.</b></dl>
                                <dl> 1.4 <Link to={'/normogram#form'}><label>Seccion normativa</label></Link></dl>
                            </ul>
                        </Panel>
                        <Panel header="2. Rendición de cuentas" eventKey={2} id="panel2">
                            <ul>
                                <dl>2.1 <Link to={'/mailbox#form'}><i class="fas fa-envelope-open-text"></i> <label>Postule una temática</label></Link></dl>
                            </ul>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        </div>
    </>
}
