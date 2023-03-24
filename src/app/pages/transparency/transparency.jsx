import React from 'react'
import { Link } from "react-router-dom";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit';
import { Button_navigation } from '../../components/button.component';
import { Panel, PanelGroup, Placeholder } from 'rsuite';

export const Transparency = (props) => {
    const { breadCrums } = props;
    return (
        <>
            <div className='container py-0'>
                <div className="row my-4 d-flex justify-content-center">
                    <MDBBreadcrumb className="mx-5">
                        <MDBBreadcrumbItem>
                            <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_l14}</label></MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    <div className="col-lg-10 col-md-10">
                        <div className='px-0'>
                            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                                <div class="row justify-content-center px-4 mx-2">
                                    <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                        <h3 className='fw-normal' id='title'><strong>TRANSPARENCIA Y ACCESO A LA INFORMACIÓN PÚBLICA</strong></h3>
                                    </div>
                                </div>
                            </div>
                            <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-dark">
                                <p className="fw-normal py-2 text-justify">En cumplimiento a <strong>la Ley 1712 del 6 de marzo de 2014</strong> la Curaduría Urbana No.1 de Bucaramanga pone a disposición de la ciudadanía la siguiente información.
                                    Adicionalmente se publica la Directiva 006 del 14 de mayo de 2019 de la Procuraduría General de la Nación, dando cumplimiento a la misma.
                                </p>
                            </MDBTypography>
                        </div>
                        <PanelGroup accordion defaultActiveKey={0} bordered >
                            <Panel header="1. Información de la entidad" eventKey={1} id="panel1">
                                <ul>
                                    <dl value="1.1.">
                                        <p className='fw-normal'>1.1. <Link className='text-info' to={'/mision'}> Misión y visión, funciones y deberes </Link></p>
                                        <p className='fw-normal'>1.2. <Link className='text-info' to={'/organization'}> Estructura orgánica - organigrama </Link></p>
                                        <p className='fw-normal'>1.3. <Link className='text-info' to={'/organization'}> Mapas y cartas descriptivas de los procesos</Link></p>
                                        <p className='fw-normal'>1.4. <Link className='text-info' to={'/mailbox'}> Directorio Institucional</Link></p>
                                        <p className='fw-normal'>1.5. <Link className='text-info' to={'/curator'}>  Directorio de servidores públicos, empleados o contratistas</Link></p>
                                        <p className='fw-normal'>1.6. <Link className='text-info' to={'/entities'}>  Directorio de entidades</Link></p>
                                        <p className='fw-normal'>1.7. <Link className='text-info' to={'/entities'}> Directorio de agremiaciones, asociaciones y otros grupos de interés</Link></p>
                                        <p className='fw-normal'>1.8. <Link className='text-info' to={'/file'}> Servicio al público, normas, formularios y protocolos de atención</Link></p>
                                        <p className='fw-normal'>1.9. <Link className='text-info' to={'/organization'}>  Procedimientos que se siguen para tomar decisiones en las diferentes áreas</Link></p>
                                        <p className='fw-normal'>1.10. <Link className='text-info' to={'/pqrs'}>  Mecanismo de presentación directa de solicitudes, quejas y reclamos a disposición del público </Link></p>
                                        <p className='fw-normal'>1.11. <Link className='text-info' to={'/administrative'}>  Información sobre decisiones que pueden afectar al público</Link></p>
                                        <p className='fw-normal'>1.12. <Link className='text-info' to={'/organization'}>  Calendario de actividades</Link></p>
                                        <p className='fw-normal'>1.13. <Link className='text-info' to={'/entities'}>  Entes y autoridades que lo vigilan</Link></p>
                                        <p className='fw-normal'>1.14. <Link className='text-info' to={'/curator'}>   Publicación de hojas de vida</Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="2. Normatividad " eventKey={2} id="panel4">
                                <ul>
                                    <dl>
                                        <p className='fw-normal'>2.1. <Link className='text-info' to={'/normogram'}> Normativa de la entidad o autoridad </Link></p>
                                        <p className='fw-normal'>2.2. <Link className='text-info' to={'/laws'}> Búsqueda de normas </Link></p>
                                        <p className='fw-normal'>2.3. <Link className='text-info' to={'/policies'}> Políticas y lineamientos sectoriales </Link></p>
                                        <p className='fw-normal'>2.4. <Link className='text-info' to={'/file'}> Manuales e instructivos de apoyo </Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="3. Contratacion" eventKey={3} id="panel2">
                                <ul >
                                    <dl >
                                        <h5>No aplica para curadores urbanos.</h5>
                                    </dl>
                                </ul>
                            </Panel>

                            <Panel header="4. Planeación" eventKey={4} id="panel5">
                                <ul>
                                    <dl>
                                        <p className='fw-normal'>4.1. <Link className='text-info' to={'/reports'}> Informes </Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="5. Tramites" eventKey={5} id="panel2">
                                <ul >
                                    <dl >
                                        <p className='fw-normal'>5.1. <Link className='text-info' to={'/normogram'}>  Normatividad que sustenta el trámite</Link></p>
                                        <p className='fw-normal'>5.2. <Link className='text-info' to={'/whatwedo'}>  Procesos</Link></p>
                                        <p className='fw-normal'>5.3. <Link className='text-info' to={'/liquidator'}> Costos asociados</Link></p>
                                        <p className='fw-normal'>5.4. <Link className='text-info' to={'/file'}> Formatos y/o formularios asociados</Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="6. Participa" eventKey={6} id="panel3">
                                <ul >
                                    <dl>
                                    <p className='fw-normal'>6.1. <Link className='text-info' to={'/participate'}>Participa</Link></p>
                                    </dl>
                                </ul>
                            </Panel>

                            <Panel header="7. Datos abiertos." eventKey={7} id="panel7">
                                <ul >
                                    <dl >
                                        <p className='fw-normal'>7.1. <Link className='text-info' to={'/opendata'}> Datos abiertos </Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="8. Información específica para grupos de interés." eventKey={8} id="panel9">
                                <ul>
                                    <dl>
                                        <p className='fw-normal'>8.1 <Link className='text-info' to={'/kids'}> Información para niños, niñas y adolescentes</Link></p>
                                        <p className='fw-normal'>8.2 <Link className='text-info' to={'/inclusivity'}> Otros de grupos de interés</Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="9. Obligación de reporte de información específica por parte de la entidad." eventKey={9} id="panel10">
                                <ul>
                                    <dl >
                                        <p className='fw-normal'>9.1 <Link className='text-info' to={'/data'}> Normatividad Especial</Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="10. Información tributaria en entidades territoriales locales" eventKey={10} id="panel11">
                                <ul>
                                    <dl>
                                        <h5>No aplica para curadores urbanos</h5>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="11. Menú atención y servicios a la ciudadanía" eventKey={11} id="panel12">
                                <ul>
                                    <dl>
                                        <p className="fw-normal">11.1. <Link className='text-info' to={'/old'}>Trámites, Otros Procedimientos Administrativos y consultas de acceso a información pública</Link>
                                        </p>
                                        <p className="fw-normal">11.2. <Link className='text-info' to={'/scheduling'}>Canales de atención y pida una cita</Link>
                                        </p>
                                        <p className="fw-normal">11.3. <Link className='text-info' to={'/pqrs'}>Pqrsd</Link>
                                        </p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="12. Sesión de noticias" eventKey={12} id="panel13">
                                <ul>
                                    <dl>
                                        <p className="fw-normal">12.1. <Link className='text-info' to={'/news'}>Noticias y anuncios</Link>
                                        </p>
                                    </dl>
                                </ul>
                            </Panel>
                        </PanelGroup>
                    </div>
                </div>
            </div>
        </>
    )
}