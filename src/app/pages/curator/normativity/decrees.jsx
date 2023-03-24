import React from 'react'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { _decrees } from '../../../components/jsons/_decree'

export const Decrees_nationals = (props) => {
    const { breadCrums } = props
    return <>
        <div className='container py-4'>
            <div className='row d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem >
                        <Link to={'/normogram'}><i class="far fa-bookmark"></i> <label className="text-uppercase">Normatividad</label></Link></MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="fas fa-clipboard-list"></i> <label className="text-uppercase">Decretos nacionales</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className='col-lg-10'>
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>DECRETOS NACIONALES</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className='col-lg-11 align-items-center '>
                    <div className="row ">
                        {_decrees.map(function (value) {
                            return <>
                                <div className='col-lg-4 px-4 py-2'>
                                    <div className="card text-center" style={{ width: '23rem', backgroundColor: '#eaeaea', color: '#1b4489' }}>
                                        <div className="card-body">
                                            <h4 className="card-title">{value.title}</h4>
                                            <hr />
                                            <p className="fw-normal">{value.contents}</p>
                                            <a href={value.link} className="btn btn text-white" target="_blank" style={{ backgroundColor: '#1b4489' }}>Ver norma</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
}