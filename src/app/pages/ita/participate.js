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
                    <br />
                    <p className='text-justify'>El Menú Participa, es un menú destacado o principal, que debe ir alojada en la página inicial de los sitios webs de las entidades públicas a fin de garantizarles a los ciudadanos la información sobre los mecanismos que ofrece cada entidad pública, para una participación efectiva, por tanto, esto es un nuevo impulso para el ejercicio ciudadano participativo.</p>
                    <p className='text-justify'>El Curador Urbano es un particular encargado de estudiar, tramitar y expedir licencias urbanísticas en sus distintas modalidades  y de que trata el artículo 2.2.6.1.1.2 y siguientes del decreto 1077 de 2015; reconocimiento de edificaciones que regula el artículo 2.2.6.4.1.1 y siguientes del decreto y otras disposiciones relacionadas con la expedición de licencias señaladas en el artículo 2.2.6.1.3.1 del mencionado decreto 1077; esto conforme a las normas urbanísticas vigentes de ordena nacional, municipal, al igual que las normas de sismoresistencia.</p>
                    <p className='text-justify'>Estas actuaciones administrativas se realizan en cumplimiento del debido proceso, estableciéndose en el Decreto 1077 de 2015, el procedimiento para ello, tales como, comunicación a vecinos colindantes personalmente o mediante publicación de periódico de amplia circulación y pagina web, publicación de valla informativa para intervención de terceros en los predios objeto de tramites, publicación de los actos administrativos que resuelvan las diferentes solicitudes que realizan los titulares tramites los cuales se notifican personalmente a quienes se hayan hecho parte de la actuación, así como por periódico de amplia circulación y pagina web. De la misma forma, los Curadores Urbanos, cuentan con un repositorio de licencias urbanística y otras actuaciones para ser consultado por los ciudadanos y entidades públicas.</p>
                    <br />
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
