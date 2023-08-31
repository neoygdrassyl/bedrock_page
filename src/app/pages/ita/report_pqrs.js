
import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { List } from 'rsuite';

export const ReportsPQRS = (props) => {
    const { breadCrums } = props;

    const baseURL = 'https://curaduria1bucaramanga.com/public_docs/OTHERS/reports/pqrs/';

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
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Informes trimestrales sobre acceso a información, quejas y reclamos</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className="col-lg-10">
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Informes trimestrales sobre acceso a información, quejas y reclamos</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <List size="sm" bordered>
                        <List.Item><a className='text-dark' href={`${baseURL}AÑO 2022.pdf`} target="_blank"><i class="fas fa-caret-right"></i> AÑO 2022</a></List.Item>
                        <List.Item><a className='text-dark' href={`${baseURL}AÑO 2023.pdf`} target="_blank"><i class="fas fa-caret-right"></i> AÑO 2023</a></List.Item>
                    </List>
                </div>
            </div>
        </div>
    </>
}
