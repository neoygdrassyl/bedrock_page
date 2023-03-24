import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { Panel, PanelGroup, Placeholder, List } from 'rsuite';

export const Open_data = (props) => {
    const { breadCrums } = props;
    const url = "https://curaduria1bucaramanga.com/public_docs/OTHERS/open/"
    return <>
        <div className='container'>
            <div className='row py-4 d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Datos abiertos</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className='col-lg-10'>
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Datos abiertos.</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <PanelGroup accordion defaultActiveKey={1} bordered>
                        <Panel header="7.1 instrumentos de gestión de la información" eventKey={1} id="panel1">
                            <List size="sm" bordered>
                                <List.Item><a className='text-dark' href={url + 'REGISTRO DE ACTIVOS DE INFORMACION.xlsx.pdf'} target="_blank" ><i class="fas fa-caret-right"></i> Registro de activos de información</a></List.Item>
                                <List.Item><a className='text-dark' href={url + 'INDICE INFORMACION CLASIFICADA Y RESERVADA.xlsx.pdf'} target="_blank"><i class="fas fa-caret-right"></i> Índice de información clasificada y reservada</a></List.Item>
                                <List.Item><a className='text-dark' href='#' target="_blank"><i class="fas fa-caret-right"></i> Esquema de publicación</a></List.Item>
                                <List.Item><a className='text-dark' href='#' target="_blank"><i class="fas fa-caret-right"></i>  Programa de gestión documental</a></List.Item>
                                <List.Item><a className='text-dark' href='#' target="_blank"><i class="fas fa-caret-right"></i>  Tablas de retención documental</a></List.Item>
                            </List>
                        </Panel>
                        <Panel header="7.2 sección de datos abiertos" eventKey={2} id="panel2">
                            <List size="sm" bordered>
                                <List.Item><a className='text-dark' href='https://www.datos.gov.co/' target="_blank" ><i class="fas fa-caret-right"></i> Datos abiertos</a></List.Item>
                            </List>
                        </Panel>
                    </PanelGroup>
                </div>
            </div>
        </div>
    </>
}
