import React from 'react'
import { Button, ButtonToolbar } from 'rsuite';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
export const Payments = (props) => {
    const { breadCrums } = props;
    return <>
        <div className='container'>
            <div className='row py-4 d-flex justify-content-center'>
                <MDBBreadcrumb className="mx-5">
                    <MDBBreadcrumbItem>
                        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Pagos pse</label></MDBBreadcrumbItem>
                </MDBBreadcrumb>
                <div className='col-lg-10'>
                    <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                        <div class="row justify-content-center px-4 mx-2">
                            <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                <h2 className='px-2 py-0 fw-normal'>Pagos pse.</h2>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-dark">
                        <p className="fw-normal py-2 text-justify">Esta sección se podran realizar pagos electronicos por medio de PSE, para realizar un pago solo debe de dar click en el boton de <b>PAGAR PSE</b> y llenar la información requerida para realizar el pago electrónico.<br></br>
                        <b>Indicaciones: </b>Señor usuario tenga a la mano la siguiente información que será requerida:<br></br>
                        <ul>
                            <li>Numero de cedula o nit.</li>
                            <li>Valor a pagar.</li>
                            <li>Descripción del pago, puede realizar una breve descripción del pago que está realizando.</li>
                            <li>Correo electronico.</li>
                            <li>Numero celuar.</li>
                        </ul>
                        </p>
                    </MDBTypography>
                    <div className='text-center'>
                        <ButtonToolbar>
                            <a className='text-white' href='https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=8422&searchedCategoryId=&searchedAgreementName=LUIS%20CARLOS%20PARRA%20SALAZAR'  target="_blank">
                                <Button size="lg" color="blue" appearance="primary">
                                    <i class="fab fa-cc-mastercard"></i> PAGAR PSE
                                </Button>
                            </a>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        </div>
    </>
}
