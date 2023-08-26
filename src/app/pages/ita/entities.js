import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { Panel, PanelGroup, List } from 'rsuite';

export const Entities = (props) => {
    const { breadCrums } = props;
    return <>
        <div className='container'>
            <div className='row py-4 d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Direcctorio de entidades</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className="col-lg-10">
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Directorio de entidades.</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className=''>
                        <h3 className='text-center'>Directorio de entidades que vigilan.</h3>
                        <PanelGroup accordion defaultActiveKey={1} bordered>
                            <Panel header=" Procuraduría general de la nación - CONTROL DISCIPLINARIO" eventKey={1} id="panel1">
                                <p className='text-justify'>
                                    <b>Sitio Web:</b> <a className='text-info' href='https://www.procuraduria.gov.co/Pages/Inicio.aspx' target="_blank">Dando click aqui</a><br></br>
                                    <b>Dirección:</b>  Carrera 5 # 15-80, Bogotá D.C., Colombia, código postal: 11032<br></br>
                                    <b>PBX:</b> +57 1 587 8750<br></br>
                                    <b>línea gratuita nacional:</b> 01 8000 940 808 <br></br>
                                    <b>Sede electrónica para PQRS: </b> <a className='text-info' href='https://www.procuraduria.gov.co/portal/pqrsdf.page' target="_blank">Dando click aqui</a> <br />
                                    <b>Correo de contacto: </b> procesosjudiciales@procuraduria.gov.co <br />
                                </p>
                            </Panel>
                            <Panel header="Superintendencia de notariado y registro - CONTROL DISCIPLINARIO" eventKey={2} id="panel2">
                                <p className='fw-normal text-justify'>
                                    <b>Sitio Web:</b> <a className='text-info' href='https://www.supernotariado.gov.co/' target="_blank">Dando click aqui</a><br></br>
                                    <b>Superintendente:</b> Rubén Silva Gómez <br></br>
                                    <b>Dirección:</b>  Calle 26 No. 13-49 Interior 201 Bogotá D.C. Colombia<br></br>
                                    <b>Conmutador:</b> 57+(1) 328 2121<br></br>
                                    <b>línea gratuita nacional:</b> 01 8000 940 808<br></br>
                                    <b>Sede electrónica para PQRS:</b> <a className='text-info' href='https://servicios.supernotariado.gov.co/login/' target="_blank"> Dando click aqui</a> <br />
                                    <b>Correo de contacto:</b>correspondencia@supernotariado.gov.co Y notificaciones.juridica@supernotariado.gov.co <br />

                                </p>
                            </Panel>
                            <Panel header="Contraloria municipal de bucaramanga - CONTROL FISCAL" eventKey={3} id="panel3">
                                <p className='fw-normal text-justify'>
                                    <b>Sitio Web:</b> <a className='text-info' href='https://www.contraloria.gov.co/' target="_blank">Dando click aqui</a><br></br>
                                    <b>Dirección:</b> Carrera 11 # 34 - 52, Piso 4 Edificio de la Alcaldía Fase 2 Bucaramanga - Colombia<br></br>
                                    <b>Teléfono:</b> +57 (7) 6522777<br></br>
                                    <b>Fax:</b> +57 (7) 6522777<br></br>
                                    <b>Correo:</b>  contactenos@contraloriabga.gov.co<br></br>
                                    <b>Notificaciones Judiciales:</b>  juridica@contraloriabga.gov.co <br />
                                </p>
                            </Panel>
                        </PanelGroup>
                    </div>
                </div>
            </div>
        </div>
    </>
}
