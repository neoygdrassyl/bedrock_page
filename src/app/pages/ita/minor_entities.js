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
                        <PanelGroup accordion defaultActiveKey={1} bordered>
                            <Panel header="MINISTERIO DE VIVIENDA, CIUDAD Y TERRITORIO DE COLOMBIA" eventKey={1} id="panel1">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Línea gratuita 018000413664 y fija +57 (1) 4197099</li>
                                        <li>Sede Atención al Usuario y de Correspondencia: Calle 18 No. 7-59, Bogotá, Colombia – Código Postal # 110321</li>
                                        <li>Sede Administrativa «La Botica»: Carrera 6 # 8-77, Bogotá, Colombia – Código Postal # 111711</li>
                                        <li>Página web: http://www.minvivienda.gov.co/ </li>
                                        <li>Correo Institucional: correspondencia@minvivienda.gov.co </li>
                                        <li>Notificaciones Judiciales: notificacionesjudici@minvivienda.gov.co </li>
                                        <li>Notificaciones FONVIVIENDA: Notificacionesfonviv@minvivienda.gov.co</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="SUPERINTENDENCIA DE NOTARIADO Y REGISTRO" eventKey={2} id="panel2">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Calle 26 No. 13-49 Interior 201 Bogotá D.C. Colombia.</li>
                                        <li>Conmutador: 57+(1) 328 2121</li>
                                        <li>Código postal: # 110311 – 110311000</li>
                                        <li>Correo: oficinaatencionalciudadano@supernotariado.gov.co</li>
                                        <li>Notificaciones Judiciales: notificaciones.juridica@supernotariado.gov.co</li>
                                        <li>Página web: https://www.supernotariado.gov.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="DANE" eventKey={3} id="panel3">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Carrera 59 No. 26-70 Interior I – CAN</li>
                                        <li>Código postal: 111321</li>
                                        <li>Apartado aéreo: 80043</li>
                                        <li>Conmutador: (+57 1) 597 8300 ó (+57 1) 597 8398</li>
                                        <li>Línea gratuita de atención: 01 8000 91200</li>
                                        <li>Correo electrónico: contacto@dane.gov.co</li>
                                        <li>Correo electrónico: notjudicialesdf@dane.gov.co</li>
                                        <li>Página web: https://www.dane.gov.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="ALCALDÍA DE BUCARAMANGA" eventKey={4} id="panel4">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Fase I: Calle 35 # 10-43.</li>
                                        <li>Fase II: Carrera 11 # 34-52.</li>
                                        <li>Bucaramanga, Santander, Colombia.</li>
                                        <li>Código Postal: 680006. Código Dane: 68001</li>
                                        <li>Conmutador: (57+7) 633 70 00</li>
                                        <li>Atención a la Ciudadanía: (57+7) 652 55 55</li>
                                        <li>Fax: (57+7) 652 17 77</li>
                                        <li>Correo Institucional: contactenos@bucaramanga.gov.co </li>
                                        <li>Notificaciones judiciales: notificaciones@bucaramanga.gov.co</li>
                                        <li>Página web: https://www.bucaramanga.gov.co/Inicio/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="ÁREA METROPOLITANA DE BUCARAMANGA" eventKey={5} id="panel5">
                                <p className='text-justify'>
                                    <ul>
                                        <li>TEL. 6440311 – 6440316 EXT.123</li>
                                        <li>Dirección: Avenida Los Samanes No. 9-280, Ciudadela Real de Minas</li>
                                        <li>Correo: info@amb.gov.co</li>
                                        <li>Notificaciones Judiciales: notificaciones.judiciales@amb.gov.co</li>
                                        <li>Página web: www.amb.gov.co</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="CORPORACIÓN AUTÓNOMA REGIONAL PARA LA DEFENSA DE LA MESETA DE BUCARAMANGA – CDMB" eventKey={6} id="panel6">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Carrera 23 # 37 – 63 Bucaramanga, Santander, Colombia</li>
                                        <li>PBX (57) 7 6346100 – Línea Gratuita 01-8000-917300</li>
                                        <li>Correo: info@cdmb.gov.co</li>
                                        <li>Notificaciones judiciales solo se reciben al correo notificaciones.judiciales@cdmb.gov.co</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="EMPAS" eventKey={7} id="panel7">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Oficina de Atención al Usuario: Bucaramanga</li>
                                        <li>Calle 24 # 23-68 y Calle 22 # 23-67</li>
                                        <li>Barrio Alarcón</li>
                                        <li>PBX (57) 7 6059370 Ext. 133 y 113</li>
                                        <li>Línea Móvil: 3006010042</li>
                                        <li>email: contactenos@empas.gov.co</li>
                                        <li>Notificaciones Judiciales: notificacionesjudiciales@empas.gov.co</li>
                                        <li>Página web:  https://www.empas.gov.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="ESSA – GRUPO EPM" eventKey={8} id="panel8">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Conmutador: 633 97 67 Pbx: 630 33 33</li>
                                        <li>Dirección: Carrera 19 No. 24 – 56 Bucaramanga, Santander.</li>
                                        <li>Código postal: 680011</li>
                                        <li>Notificaciones Judiciales: notificacionesjudicialesessa@essa.com.co</li>
                                        <li>Página web: https://www.essa.com.co/site/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="ACUEDUCTO METROPOLITANO DE BUCARAMANGA-AMB" eventKey={9} id="panel9">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Diagonal 32 No. 30A – 51 – Parque del Agua – Bucaramanga – Colombia</li>
                                        <li>Código Postal: 680002.</li>
                                        <li>Código Dane: 68001.</li>
                                        <li>Teléfono: (+57) 6320220</li>
                                        <li>Centro De Atención Telefónica: (+57) 6322000</li>
                                        <li>Peticiones Quejas y Reclamos: http://201.221.133.219/pqr/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="CONSEJO PROFESIONAL NACIONAL DE ARQUITECTURA Y SUS PROFESIONES AUXILIARES – CPNAA" eventKey={10} id="pane10">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Carrera 6 No. 26 B – 85 – Oficina 201 – Bogotá D.C.- Colombia.</li>
                                        <li>Línea de atención al usuario: 3502700 ext. 1101 y ext. 1106</li>
                                        <li>Línea de atención procesos disciplinarios: 3502700 ext. 1102</li>
                                        <li>Correo electrónico: info@cpnaa.gov.co</li>
                                        <li>Correo electrónico para notificaciones judiciales: notificacionesjudiciales@cpnaa.gov.co</li>
                                        <li>Página web: https://cpnaa.gov.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="CONSEJO PROFESIONAL NACIONAL DE INGENIERÍA – COPNIA" eventKey={11} id="panel11">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Sede administrativa: calle 78 # 9-57 Bogotá</li>
                                        <li>Seccional Cundinamarca: calle 93 # 11A-28 oficina 404 Bogotá Teléfono: (57-1) 3220191</li>
                                        <li>Correo: contactenos@copnia.gov.co</li>
                                        <li>Línea gratuita nacional: 018000 116590</li>
                                        <li>Notificaciones judiciales: notificacionesjudiciales@copnia.gov.co</li>
                                        <li>Red Institucional de Transparencia: soytransparente@copnia.gov.co</li>
                                        <li>Página web: https://www.copnia.gov.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="CONSEJO PROFESIONAL NACIONAL DE TOPOGRAFÍA" eventKey={12} id="panel12">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Calle 42 # 8A – 69 Oficina 601</li>
                                        <li>Bogotá D.C. – Colombia</li>
                                        <li>Línea de atención telefónica en Bogotá – (57-1) 2881490 – 2451694 – 305 783 7625</li>
                                        <li>Correo electrónico: info@cpnt.gov.co</li>
                                        <li>Página web: https://www.cpnt.gov.co/index.php</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="COLEGIO NACIONAL DE CURADORES URBANOS" eventKey={13} id="panel13">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Cra. 13 A No. 28 – 38 Of. 204, Bogotá D.C, Colombia</li>
                                        <li>Tel: (+57) 601 2431762 – 3023418739</li>
                                        <li>correo: colegio@curadoresurbanos.org</li>
                                        <li>Página web: www.curadoresurbanos.org</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="CAMACOL SANTANDER" eventKey={14} id="panel14">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Cr.19 36-20 Of.905, Bucaramanga, Santander, Colombia</li>
                                        <li>Teléfono: 57-7-6428358</li>
                                        <li>Correo: camacolsantander@gmail.com</li>
                                        <li>Página web: www.camacolsantander.org.co</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="ASOCIACIÓN COLOMBIANA DE INGENIEROS ACIEM" eventKey={15} id="panel15">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: CR 19 35 02 OF 244, Bucaramanga, Santander, Colombia</li>
                                        <li>Teléfono: 57-7-6700543</li>
                                        <li>Correo: aciemsantander@aciem.org</li>
                                        <li>Página web: www.aciemnacional.org</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="SOCIEDAD SANTANDEREANA DE INGENIEROS" eventKey={16} id="panel16">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Cr 19 36 20, Of. 904 Edificio Cámara de Comercio</li>
                                        <li>Teléfono: +(57) 76422685    +(57) 76301365</li>
                                        <li>Correo: direccionejecutiva@ssi.org.co</li>
                                        <li>Página web: https://www.ssi.org.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="SOCIEDAD COLOMBIANA DE ARQUITECTOS DE SANTANDER" eventKey={17} id="panel17">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Calle 35 N. 17-77 Oficina 10-01,</li>
                                        <li>Edificio Bancoquia, Bucaramanga, Santander Colombia</li>
                                        <li>Teléfono: 6302663 – 3166023654</li>
                                        <li>Correo: scasantander@gmail.com</li>
                                        <li>pscasantander@gmail.com</li>
                                        <li>Página web: https://scasantander.org/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="SOCIEDAD COLOMBIANA DE ARQUITECTOS" eventKey={18} id="panel18">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Carrera 6 No. 26b-85 / Piso 11 – Bogotá, D.C.</li>
                                        <li>Teléfono: (571) 350 9922</li>
                                        <li>Fax: (571) 350 9994</li>
                                        <li>Página web: http://sociedadcolombianadearquitectos.org/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="ASOCIACIÓN COLOMBIANA DE INGENIERÍA SÍSMICA" eventKey={19} id="panel19">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Carrera 19 A No. 84-14, Oficina 502. Bogotá, D.C., Colombia</li>
                                        <li>Teléfono: +57 1 530 0826</li>
                                        <li>Contacto: https://www.asosismica.org.co/contacto/</li>
                                        <li>Página web: https://www.asosismica.org.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="ICONTEC" eventKey={20} id="panel20">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Carrera 37 N.º 52 – 95 Bogotá – Colombia</li>
                                        <li>Teléfonos: (571) 607 88 88 – Línea de atención al cliente: 01 8000 94 9000</li>
                                        <li>Página web: http://www.icontec.org/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="SERVICIO GEOLÓGICO COLOMBIANO" eventKey={21} id="panel21">
                                <p className='text-justify'>
                                    <ul>
                                        <li>DIRECCIÓN: Diagonal 53 N0. 34 – 53 – Bogotá D.C. Colombia</li>
                                        <li>Teléfonos: (571) 220 0200 – 220 0100 – 222 1811</li>
                                        <li>Línea de Atención al Ciudadano y Denuncias: (571) 01 – 8000 – 110842</li>
                                        <li>Fáx: (571) 222 07 97</li>
                                        <li>Correo Institucional: cliente@sgc.gov.co</li>
                                        <li>Correo de notificaciones judiciales: notificacionesjudiciales@sgc.gov.co</li>
                                        <li>Página web: https://www.sgc.gov.co/</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="SOCIEDAD COLOMBIANA DE TOPÓGRAFOS" eventKey={22} id="panel22">
                                <p className='text-justify'>
                                    <ul>
                                        <li>Dirección: Calle 31 No. 13 A 51 Torre. 2 Of. 342</li>
                                        <li>Edificio Panorama – Bogotá</li>
                                        <li>Teléfonos: (+57) 300 3531445; (+57) 314 2978337</li>
                                        <li>Correo: info@colombiasct.org</li>
                                        <li>Página web: https://www.colombiasct.org/index.php/normas-tecnicas-sectoriales</li>
                                    </ul>
                                </p>
                            </Panel>

                        </PanelGroup>
                    </div>
                </div>
            </div>
        </div>
    </>
}
