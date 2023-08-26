import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { Panel, PanelGroup, List } from 'rsuite';

export const MinorEntities = (props) => {
    const { breadCrums } = props;
    return <>
        <div className='container'>
            <div className='row py-4 d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Directorio de otros grupos de interés</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className="col-lg-10">
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Directorio de otros grupos de interés</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className=''>
                        <h3 className='text-center py-2'>Directorio de agremiaciones, asociaciones y otros grupos de interés</h3>
                        <List size="sm" bordered>
                            <List.Item><a className='text-dark' href='https://camacol.co/' target="_blank"><i class="fas fa-caret-right"></i> camacol</a></List.Item>
                            <List.Item><a className='text-dark' href='http://www.cdmb.gov.co/' target="_blank"><i class="fas fa-caret-right"></i> Corporación Autónoma Regional para la Defensa de la Meseta de Bucaramanga –CDMB</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.minvivienda.gov.co/' target="_blank"><i class="fas fa-caret-right"></i> Ministerio de vivienda</a></List.Item>
                            <List.Item><a className='text-dark' href='https://gobiernodigital.mintic.gov.co/portal/' target="_blank"><i class="fas fa-caret-right"></i> Gobierno digital</a></List.Item>
                            <List.Item><a className='text-dark' href='https://puc.com.co/' target="_blank"><i class="fas fa-caret-right"></i> Plan Único de Cuentas</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.supernotariado.gov.co/' target="_blank"><i class="fas fa-caret-right"></i> Superintendencia de Notariado y Registro</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.arcgis.com/apps/webappviewer/index.html?id=5c32765bb4d544d1a20182ca13fc16b1' target="_blank"><i class="fas fa-caret-right"></i> POT Bucaramanga</a></List.Item>
                            <List.Item><a className='text-dark' href='https://asosismica.org.co/' target="_blank"><i class="fas fa-caret-right"></i> Asociacion colombiana de ingenieria sismica</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.colombia.co/' target="_blank"><i class="fas fa-caret-right"></i> Marca pais colombia</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.copnia.gov.co/' target="_blank"><i class="fas fa-caret-right"></i> Copnia</a></List.Item>
                            <List.Item><a className='text-dark' href='https://sci.org.co/' target="_blank"><i class="fas fa-caret-right"></i> Sociedad Colombiana de Ingenieros</a></List.Item>
                            <List.Item><a className='text-dark' href='https://curadoresurbanos.org/' target="_blank"><i class="fas fa-caret-right"></i> Colegio nacional curadores urbanos</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.essa.com.co/site/clientes/' target="_blank"><i class="fas fa-caret-right"></i> Essa</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.amb.com.co/amb/' target="_blank"><i class="fas fa-caret-right"></i> AMB</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.grupovanti.com/' target="_blank"><i class="fas fa-caret-right"></i> Vanti</a></List.Item>
                            <List.Item><a className='text-dark' href='https://www.amb.gov.co/' target="_blank"><i class="fas fa-caret-right"></i> Área Metropolitana de Bucaramanga</a></List.Item>
                        </List>
                    </div>
                </div>
            </div>
        </div>
    </>
}
