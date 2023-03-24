import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import TITLE_IMG from '../../img/inclusivity/title.jpg'
import MENU_1_IMG from '../../img/inclusivity/menu_1.png'
import MENU_2_IMG from '../../img/inclusivity/menu_2.png'
import MENU_3_IMG from '../../img/inclusivity/menu_3.png'
import MENU_4_IMG from '../../img/inclusivity/menu_4.png'
import MENU_5_IMG from '../../img/inclusivity/menu_5.png'

import TITLE_2_IMG from '../../img/inclusivity/title_2.png'
import { Button_navigation } from '../../components/button.component';

class Inclusivity extends Component {
    render() {
        const { translation, breadCrums } = this.props;
        return (
            <div className="Inclusivity container">
                <div className="row py-4 d-flex justify-content-center">
                    <MDBBreadcrumb className="mx-5">
                        <MDBBreadcrumbItem>
                            <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_17}</label></MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    <div className="col-lg-8">
                        <h2 class="text-uppercase text-center pb-2" id='curaduria'>CURADURÍA INCLUSIVA - LEY 982 DE 2005 {<Button_navigation Iddown={'centro'} Idup={null} />}</h2>
                        <hr />
                        <iframe width="860" height="420" src="https://www.youtube.com/embed/dRj7gyN-G4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <hr />
                        <h3 className="app-p lead fw-bold" id='centro'>Centro de Relevo {<Button_navigation Iddown={'link'} Idup={'curaduria'} />}</h3>
                        <p className="app-p lead text-justify">El Centro de Relevo del Ministerio de las Tecnologías de la Información y las Comunicaciones (MinTIC), está en alianza con la Federación Nacional de Sordos De Colombia (Fenascol), dedicada a la labor de promover el uso de las TIC en beneficio de las personas con discapacidad auditiva de Colombia. </p>
                        <div className="row d-flex justify-content-center">
                            <div className="col-5">
                                <a target="_blank" href="https://centroderelevo.gov.co/632/w3-channel.html">
                                    <img src={TITLE_IMG} class="d-block w-100 mt-2" alt="Centro de Relevo curaduria." /></a>
                            </div>
                        </div>
                        <label className="app-p lead fw-bold" id='link'>Links de Importancia: {<Button_navigation Iddown={'tic'} Idup={'centro'} />}</label>
                        <div class="container-fluid mx-0 px-0 pb-4">
                            <div class="row row-cols-5 text-center">
                                <div class="col">
                                    <img src={MENU_1_IMG} class="d-block w-50 mt-2 mx-auto" alt="Servicio relevo de llamadas" />
                                    <label className="fw-bold">
                                        <a target="_blank" href="https://centroderelevo.gov.co/632/w3-propertyvalue-15253.html">
                                            Servicio relevo de llamadas</a></label>
                                </div>
                                <div class="col">
                                    <img src={MENU_2_IMG} class="d-block w-50 mt-2 mx-auto" alt=" Video mensajes por WhatsApp" />
                                    <label className="fw-bold">
                                        <a target="_blank" href="https://centroderelevo.gov.co/632/w3-propertyvalue-199411.html">
                                            Video mensajes por WhatsApp</a></label>
                                </div>
                                <div class="col">
                                    <img src={MENU_3_IMG} class="d-block w-50 mt-2 mx-auto" alt="Servicio de Interpretación en línea SIEL" />
                                    <label className="fw-bold">
                                        <a target="_blank" href="https://centroderelevo.gov.co/632/w3-propertyvalue-15254.html">
                                            Servicio de Interpretación en línea SIEL</a></label>
                                </div>
                                <div class="col">
                                    <img src={MENU_4_IMG} class="d-block w-50 mt-2 mx-auto" alt="Atención al usuario" />
                                    <label className="fw-bold">
                                        <a target="_blank" href="https://centroderelevo.gov.co/632/w3-propertyvalue-15258.html">
                                            Atención al usuario</a></label>
                                </div>
                                <div class="col">
                                    <img src={MENU_5_IMG} class="d-block w-50 mt-2 mx-auto" alt=" Herramientas" />
                                    <label className="fw-bold">
                                        <a target="_blank" href="https://centroderelevo.gov.co/632/w3-propertyvalue-15255.html">
                                            Herramientas</a></label>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h3 className="app-p lead fw-bold" id='tic'>Conver TIC  {<Button_navigation Iddown={'women'} Idup={'link'} />}</h3>
                        <p className="app-p lead text-justify">ConVerTIC es el proyecto de inclusión del Ministerio TIC creado desde el año 2013 con el fin de promover la inclusión social, educativa, laboral y cultural a través de uso de las tecnologías para las personas ciegas o con baja visión, mediante la entrega y masificación de los software Jaws y ZoomText.</p>
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-5">
                                <a target="_blank" href="https://convertic.gov.co/641/w3-channel.html">
                                    <img src={TITLE_2_IMG} class="d-block w-100 mt-2" alt="Conver TIC curaduria " /></a>
                            </div>
                            <label className="fw-bold"><a target="_blank" href="https://convertic.gov.co/641/w3-propertyvalue-15315.html">
                                página de Contacto</a></label>
                        </div>
                        <hr />
                        <h3 className="app-p lead fw-bold" id='women'>Información para mujeres  {<Button_navigation Iddown={null} Idup={'tic'} />}</h3>
                        <iframe width="860" height="420" src="https://www.youtube.com/embed/cG4j-X-YxXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       

                    </div>
                </div>
            </div >
        );
    }
}

export default Inclusivity;