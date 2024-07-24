import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { List } from 'rsuite';

export const Reports = (props) => {
    const { breadCrums } = props;

    const baseURL = 'https://curaduria1bucaramanga.com/public_docs/OTHERS/reports';
    const months = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    const quaters = ['1° TRIMESTRE', '2° TRIMESTRE', '3° TRIMESTRE', '4° TRIMESTRE'];

    const reports = [
        // ADD NEW ONES HERE {year: 20xx, reports: {}},
        {
            year: 2022, reports: {
                camacol: [
                    '/2022/CAMACOL/Reporte ENERO 2022.xlsx',
                    '/2022/CAMACOL/Reporte FEBERERO 2022.xlsx',
                    '/2022/CAMACOL/Reporte MARZO 2022.xlsx',
                    '/2022/CAMACOL/Reporte ABRIL 2022.xlsx',
                    '/2022/CAMACOL/Reporte MAYO 2022.xlsx',
                    '/2022/CAMACOL/Reporte JUNIO 2022.xlsx',
                    '/2022/CAMACOL/Reporte JULIO 2022.xlsx',
                    '/2022/CAMACOL/Reporte AGOSTO 2022.xlsx',
                    '/2022/CAMACOL/Reporte SEPTIEMBRE 2022.xlsx',
                    '/2022/CAMACOL/Reporte OCTUBRE 2022.xlsx',
                    '/2022/CAMACOL/Reporte NOVIEMBRE 2022.xlsx',
                    '/2022/CAMACOL/Reporte DICIEMBRE 2022.xlsx',
                ],
                dane: [
                    '/2022/DANE/MES DE ENERO 2022.xlsx',
                    '/2022/DANE/MES DE FEBRERO 2022.xlsx',
                    '/2022/DANE/MES DE MARZO 2022.xlsx',
                    '/2022/DANE/MES DE ABRIL 2022.xlsx',
                    '/2022/DANE/MES DE MAYO 2022.xlsx',
                    '/2022/DANE/MES DE JUNIO 2022.xlsx',
                    '/2022/DANE/MES DE JULIO 2022.xlsx',
                    '/2022/DANE/MES DE AGOSTO 2022.xlsx',
                    '/2022/DANE/MES DE SEPTIEMBRE 2022.xlsx',
                    '/2022/DANE/MES DE OCTUBRE 2022.xlsx',
                    '/2022/DANE/MES DE NOVIEMBRE 2022.xlsx',
                    false,
                ],
                minvivienda: [
                    '/2022/MINVIVIENDA/Reporte Q1 2022(1).xlsm',
                    '/2022/MINVIVIENDA/Plantilla Carga Masiva(2).xlsm',
                    '/2022/MINVIVIENDA/Plantilla Carga Masiva.xlsm',
                    false,
                ],
                contralria: '/2022/INFORME CONTRALORIA AÑO 2022.xlsx',
                planeacion: '/2022/SEC PLANEACION 2022.xlsx',
            },
        },
        {
            year: 2023, reports: {
                camacol: '/2023/Reporte General CAMACOL 2023.xlsx',
                dane: '/2023/INFORME GENERAL DANE 2023.xlsx',
                planeacion: '/2023/INFORME GENERAL PLANEACIÓN 2023.ods',
                minvivienda: [
                    '/2023/Plantilla Carga Masiva20231206.xlsm',
                    '/2023/Plantilla Carga Masiva Q2-2023.xlsm',
                    '/2023/Plantilla Carga Masiva Q3.xlsm',
                    false,
                ],

            },
        },
    ]
    return <>
        <div className='container'>
            <div className='row py-4 d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Informes</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className="col-lg-10">
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Informes importantes de la entidad.</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-dark">
                        <p className="fw-normal py-2 text-justify">Esta sección tiene como finalidad mostrar los informes de la curaduría urbana 1 de Bucaramanga.
                        </p>
                    </MDBTypography>
                    <List size="sm" bordered>
                        <List.Item><a className='text-dark' href='/reports_enpalme'><i class="fas fa-caret-right"></i> Informes de empalme: </a></List.Item>
                        <List.Item><a className='text-dark' href='/reports_control'><i class="fas fa-caret-right"></i> Informes de gestión, evaluación y auditoría</a></List.Item>
                        <List.Item><a className='text-dark' href='/reports_defence'><i class="fas fa-caret-right"></i> Informe sobre Defensa Pública y Prevención del Daño Antijurídico</a></List.Item>
                        <List.Item><a className='text-dark' href='/reports_pqrs'><i class="fas fa-caret-right"></i> Informes trimestrales sobre acceso a información, quejas y reclamos</a></List.Item>
                        <List.Item><i class="fas fa-caret-right"></i>  Planes de mejoramiento: <br /><b>“No se han solicitado por los entes de control o auditoría.”</b></List.Item>
                        <List.Item><i class="fas fa-caret-right"></i> Informes a Entidades de control
                            <div>
                                {reports.map(r =>
                                    <table className="table table-bordered table-sm table-hover text-center my-2">
                                        <thead className='table-info'>
                                            <tr>
                                                <th scope="col" colSpan={2}><h3>AÑO {r.year}</h3></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='table-warning'>
                                                <th colSpan={2}>CAMACOL</th>
                                            </tr>
                                            {Array.isArray(r.reports.camacol) ?
                                                <>
                                                    {r.reports.camacol?.map((item, i) =>
                                                        <tr>
                                                            <td>{months[i]}</td>
                                                            <td>{item ? <a href={baseURL + item} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                                        </tr>)}
                                                </>
                                                :
                                                <tr>
                                                    <td>ANUAL</td>
                                                    <td>{r.reports.camacol ? <a href={baseURL + r.reports.camacol} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                                </tr>
                                            }

                                            <tr className='table-warning'>
                                                <th colSpan={2}>DANE</th>
                                            </tr>
                                            {Array.isArray(r.reports.dane) ?
                                                <>
                                                    {r.reports.dane?.map((item, i) =>
                                                        <tr>
                                                            <td>{months[i]}</td>
                                                            <td>{item ? <a href={baseURL + item} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                                        </tr>)}
                                                </>
                                                :
                                                <tr>
                                                    <td>ANUAL</td>
                                                    <td>{r.reports.dane ? <a href={baseURL + r.reports.dane} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                                </tr>
                                            }


                                            <tr className='table-warning'>
                                                <th colSpan={2}>MINISTERIO DE VIVIENDA</th>
                                            </tr>
                                            {Array.isArray(r.reports.minvivienda) ?
                                                <>
                                                    {r.reports.minvivienda?.map((item, i) =>
                                                        <tr>
                                                            <td>{quaters[i]}</td>
                                                            <td>{item ? <a href={baseURL + item} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                                        </tr>)}
                                                </>
                                                :
                                                <tr>
                                                    <td>ANUAL</td>
                                                    <td>{r.reports.minvivienda ? <a href={baseURL + r.reports.minvivienda} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                                </tr>
                                            }

                                            <tr className='table-warning'>
                                                <th colSpan={2}>CONTRALORIA</th>
                                            </tr>
                                            <tr>
                                                <td>ANUAL</td>
                                                <td>{r.reports.contralria ? <a href={baseURL + r.reports.contralria} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                            </tr>

                                            <tr className='table-warning'>
                                                <th colSpan={2}>SECRETARIA DE PLANEACIÓN</th>
                                            </tr>
                                            <tr>
                                                <td>ANUAL</td>
                                                <td>{r.reports.planeacion ? <a href={baseURL + r.reports.planeacion} target="_blank" className='btn btn-sm btn-danger' ><i class="fas fa-cloud-download-alt"></i> DESCARGAR</a> : 'SIN EXPEDIR'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </List.Item>

                    </List>
                </div>
            </div>
        </div>
    </>
}


