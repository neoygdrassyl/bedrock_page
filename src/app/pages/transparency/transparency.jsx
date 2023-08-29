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
                                        <p className='fw-normal'>1.1.  Misión y visión, funciones y deberes</p>
                                        <ul>
                                            <p className='fw-normal'>1.1.1 <Link className='text-info' to={'/mision'}> Misión y visión </Link></p>
                                            <p className='fw-normal'>1.1.2 <Link className='text-info' to={'/duty'}> Funciones y deberes </Link></p>
                                        </ul>
                                        <p className='fw-normal'>1.2. <Link className='text-info' to={'/organization'}> Estructura orgánica - organigrama </Link></p>
                                        <p className='fw-normal'>1.3. <Link className='text-info' to={'/maps'}> Mapas y cartas descriptivas de los procesos</Link></p>
                                        <p className='fw-normal'>1.4. <Link className='text-info' to={'/mailbox'}> Directorio Institucional</Link></p>
                                        <p className='fw-normal'>1.5. <Link className='text-info' to={'/curator'}>  Directorio de servidores públicos, empleados o contratistas</Link></p>
                                        <p className='fw-normal'>1.6. <Link className='text-info' to={'/entities'}>  Directorio de entidades</Link></p>
                                        <p className='fw-normal'>1.7. <Link className='text-info' to={'/minor_entities'}> Directorio de agremiaciones, asociaciones y otros grupos de interés</Link></p>
                                        <p className='fw-normal'>1.8. Servicio al público, normas, formularios y protocolos de atención</p>
                                        <ul>
                                            <p className='fw-normal'>1.8.1 <Link className='text-info' to={'/normogram'}> Normas </Link></p>
                                            <p className='fw-normal'>1.8.2 <Link className='text-info' to={'/file'}> Formularios </Link></p>
                                            <p className='fw-normal'>1.8.3 <Link className='text-info' to={'/atention'}> Protocolos de atención </Link></p>
                                        </ul>

                                        <p className='fw-normal'>1.9. <Link className='text-info' to={'/desitions'}>  Procedimientos que se siguen para tomar decisiones en las diferentes áreas</Link></p>
                                        <p className='fw-normal'>1.10. <Link className='text-info' to={'/pqrs'}>  Mecanismo de presentación directa de solicitudes, quejas y reclamos a disposición del público </Link></p>
                                        <p className='fw-normal'>1.11. <Link className='text-info' to={'/administrative'}>  Información sobre decisiones que pueden afectar al público</Link></p>
                                        <p className='fw-normal'>1.12. <Link className='text-info' to={'/calendar'}>  Calendario de actividades</Link></p>
                                        <p className='fw-normal'>1.13. <Link className='text-info' to={'/entities'}>  Entes y autoridades que lo vigilan</Link></p>
                                        <p className='fw-normal'>1.14. <Link className='text-info' to={'/curator'}>   Publicación de hojas de vida</Link></p>
                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="2. Normatividad " eventKey={2} id="panel4">
                                <ul>
                                    <dl>
                                        <p className='fw-normal'>2.1. <Link className='text-info' to={'/normogram'}> Normativa de la entidad o autoridad </Link></p>
                                        <ul>
                                            <p className='fw-normal'>2.1.1 <Link className='text-info' to={'/laws'}> Leyes </Link></p>
                                            <p className='fw-normal'>2.1.2 <Link className='text-info' to={'/normogram'}> Decreto Único Reglamentario.  </Link></p>
                                            <p className='fw-normal'>2.1.3 <Link className='text-info' to={'/normogram'}> Normativa aplicable </Link></p>
                                            <p className='fw-normal'>2.1.4  Vínculo al Diario o Gaceta Oficial: NO APLICA, aplica para:
                                                1.   Las ordenanzas de la asamblea departamental.
                                                2.   Los actos que expida la asamblea y su mesa directiva para la ejecución de su presupuesto y el manejo del personal a su servicio.
                                                3.   Los decretos y resoluciones del gobernador.
                                                4.   Los actos de la administración central y descentralizada del departamento
                                                que creen situaciones jurídicas impersonales u objetivas o que tengan
                                                alcance e interés general.
                                                Las demás que la ley o la ordenanza señalen que deben publicarse.
                                                Las Asambleas Departamentales deberán implementar mecanismos de consulta
                                                manual o digital de las ordenanzas y demás documentos que deban publicarse,
                                                dispuestos para el público.
                                            </p>
                                            <p className='fw-normal'>2.1.5   Políticas, lineamientos y manuales</p>
                                            <ul>
                                                <p className='fw-normal'>2.1.5.a <Link className='text-info' to={'/policies'}> Políticas y lineamientos sectoriales</Link></p>
                                                <p className='fw-normal'>2.1.5.b <Link className='text-info' to={'/file'}> Manuales </Link></p>
                                                <p className='fw-normal'>2.1.5.b  Otros lineamientos y manuales que le apliqu, NO APLICA</p>
                                            </ul>
                                            <p className='fw-normal'>2.1.6 Agenda Regulatoria, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no le aplican. Acorde con el artículo 2.1.2.1.20 del Decreto 1081 de 2015, modificado por el artículo 3 del Decreto 1273 de 2020, la Agenda regulatoria aplica a Los ministerios y departamentos administrativos cabeza de sector, quienes publicarán en la sección normativa de sus sitios web, o en aquella que haga sus veces, y en cualquier otro medio de que dispongan para el efecto, a más tardar el 31 de octubre de cada año, un proyecto de agenda regulatoria con la lista de los proyectos específicos de regulación que previsiblemente deban expedirse en el sector durante el año siguiente. Los Curadores Urbanos no hacen parte de estos sectores obligados.
                                            </p>
                                        </ul>
                                        <p className='fw-normal'>2.2. <Link className='text-info' to={'/normogram'}> Búsqueda de normas </Link></p>
                                        <p className='fw-normal'>2.3. Proyectos de normas para comentarios, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no le aplican. Los Curadores Urbanos acorde con el Decreto 1077 de 2015, artículo 2.2.6.1.1.3 estudian, trámitan y expiden licencias de urbanización, parcelación, subdivisión y construcción, reconocimiento de edificación existente y otras actuaciones. Dentro de sus competencias, no se encuentra la expedición de proyectos normativos.
                                        </p>

                                    </dl>
                                </ul>
                            </Panel>
                            <Panel header="3. Contratacion" eventKey={3} id="panel2">
                                <ul >
                                    <dl >
                                        <h5>NO APLICA</h5>
                                        <p>El ejercicio del curador urbano está reglamentado en el Decreto 1077/2015 y estos requerimientos no le aplican. Las disposiciones contenidas en la Ley 80 de 1993 se deben atender en los contratos que adelanten las entidades y organismos públicos, no así por las entidades particulares quienes deberán atender la legislación del derecho privado a la hora de adelantar la contratación propia.

                                            Acorde con lo anterior, el CURADOR URBANO para efectos de contratación, se regula por el derecho privado esto el CODIGO SUSTANTIVO DE TRABAJO, y por ende no le es aplicable las normas sobre contratación pública, sobre este el DEPARTAMENTO ADMINISTRATIVO DE LA FUNCION PUBLICA mediante, Concepto 19791 de 2015 Departamento Administrativo de la Función Pública, estableció que “los empleados de las curadurías se rigen por las normas del derecho privado, en ese sentido su relación laboral se sujetan a las disposiciones contenidas en el Código Sustantivo del Trabajo, en consecuencia los documentos exigibles para la suscripción de un contrato individual de trabajo deberán estar consagrados en dicha norma o en el reglamento de trabajo que tenga adoptado la entidad, los cuales guardarán relación con el empleo que se pretende proveer (contador, Certificado de la Junta central de Contadores; abogados, certificado expedido por el Consejo Superior de la Judicatura, etc); en todo caso es preciso indicar que en criterio de esta Dirección Jurídica, la exigencia de los citados documentos obedece a la liberalidad del empleador, en este caso de la curaduría”.
                                        </p>
                                    </dl>
                                </ul>
                            </Panel>

                            <Panel header="4. Planeación" eventKey={4} id="panel5">
                                <ul>
                                    <dl>
                                        <p className='fw-normal'>4.1. Presupuesto general de ingresos, gastos e inversión, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no les aplican. El presupuesto es el instrumento de manejo financiero más importante de la política fiscal, donde se programa y registra el gasto público y su forma de financiación y en el se establecen las reglas para su ejecución, que son lo es aplicable a las entidades públicas que manejan recursos públicos, que reciben recursos del presupuesto general de la nación. La CONTADURIA GENERAL DE LA NACION en el concepto No. CONCEPTO 102888 DE OCTUBRE 22 DE 2007, establece que el régimen de Contabilidad Pública no es de obligatoria aplicación para las personas jurídicas o naturales que tengan a su cargo, a cualquier modo, recursos públicos de manera temporal o permanente, en lo relacionado con estos, y en el caso de los Curadores Urbanos en su calidad de particular, que desarrolla una función pública, para hacer valer sus cuentas, como prueba, debe llevar su contabilidad atendiendo las disposiciones del Decreto 2649 de 1993.
                                        </p>
                                        <p className='fw-normal'>4.2. Ejecución presupuestal, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no les aplican. El presupuesto es el instrumento de manejo financiero más importante de la política fiscal, donde se programa y registra el gasto público y su forma de financiación y en el se establecen las reglas para su ejecución, que son lo es aplicable a las entidades públicas que manejan recursos públicos, que reciben recursos del presupuesto general de la nación. La CONTADURIA GENERAL DE LA NACION en el concepto No. CONCEPTO 102888 DE OCTUBRE 22 DE 2007, establece que el régimen de Contabilidad Pública no es de obligatoria aplicación para las personas jurídicas o naturales que tengan a su cargo, a cualquier modo, recursos públicos de manera temporal o permanente, en lo relacionado con estos, y en el caso de los Curadores Urbanos en su calidad de particular, que desarrolla una función pública, para hacer valer sus cuentas, como prueba, debe llevar su contabilidad atendiendo las disposiciones del Decreto 2649 de 1993.
                                        </p>
                                        <p className='fw-normal'>4.3.  Plan de Acción, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no les aplican. El presupuesto es el instrumento de manejo financiero más importante de la política fiscal, donde se programa y registra el gasto público y su forma de financiación y en el se establecen las reglas para su ejecución, que son lo es aplicable a las entidades públicas que manejan recursos públicos, que reciben recursos del presupuesto general de la nación. La CONTADURIA GENERAL DE LA NACION en el concepto No. CONCEPTO 102888 DE OCTUBRE 22 DE 2007, establece que el régimen de Contabilidad Pública no es de obligatoria aplicación para las personas jurídicas o naturales que tengan a su cargo, a cualquier modo, recursos públicos de manera temporal o permanente, en lo relacionado con estos, y en el caso de los Curadores Urbanos en su calidad de particular, que desarrolla una función pública, para hacer valer sus cuentas, como prueba, debe llevar su contabilidad atendiendo las disposiciones del Decreto 2649 de 1993.
                                        </p>
                                        <p className='fw-normal'>4.4 Proyectos de Inversión, gastos e inversión, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no les aplican. El presupuesto es el instrumento de manejo financiero más importante de la política fiscal, donde se programa y registra el gasto público y su forma de financiación y en el se establecen las reglas para su ejecución, que son lo es aplicable a las entidades públicas que manejan recursos públicos, que reciben recursos del presupuesto general de la nación. La CONTADURIA GENERAL DE LA NACION en el concepto No. CONCEPTO 102888 DE OCTUBRE 22 DE 2007, establece que el régimen de Contabilidad Pública no es de obligatoria aplicación para las personas jurídicas o naturales que tengan a su cargo, a cualquier modo, recursos públicos de manera temporal o permanente, en lo relacionado con estos, y en el caso de los Curadores Urbanos en su calidad de particular, que desarrolla una función pública, para hacer valer sus cuentas, como prueba, debe llevar su contabilidad atendiendo las disposiciones del Decreto 2649 de 1993.
                                        </p>
                                        <p className='fw-normal'>4.5 <Link className='text-info' to={'/reports'}> Informes de empalme </Link></p>
                                        <p className='fw-normal'>4.6 Información pública y/o relevante, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no les aplican. El presupuesto es el instrumento de manejo financiero más importante de la política fiscal, donde se programa y registra el gasto público y su forma de financiación y en el se establecen las reglas para su ejecución, que son lo es aplicable a las entidades públicas que manejan recursos públicos, que reciben recursos del presupuesto general de la nación. La CONTADURIA GENERAL DE LA NACION en el concepto No. CONCEPTO 102888 DE OCTUBRE 22 DE 2007, establece que el régimen de Contabilidad Pública no es de obligatoria aplicación para las personas jurídicas o naturales que tengan a su cargo, a cualquier modo, recursos públicos de manera temporal o permanente, en lo relacionado con estos, y en el caso de los Curadores Urbanos en su calidad de particular, que desarrolla una función pública, para hacer valer sus cuentas, como prueba, debe llevar su contabilidad atendiendo las disposiciones del Decreto 2649 de 1993.
                                        </p>
                                        <p className='fw-normal'>4.7 <Link className='text-info' to={'/reports'}> Informes de gestión, evaluación y auditoría </Link></p>
                                        <p className='fw-normal'>4.8 Informes de la Oficina de Control Interno, NO APLICA: El ejercicio del curador urbano esta reglamentado en el Decreto 1077/2015 y estos requerimientos no les aplican. El presupuesto es el instrumento de manejo financiero más importante de la política fiscal, donde se programa y registra el gasto público y su forma de financiación y en el se establecen las reglas para su ejecución, que son lo es aplicable a las entidades públicas que manejan recursos públicos, que reciben recursos del presupuesto general de la nación. La CONTADURIA GENERAL DE LA NACION en el concepto No. CONCEPTO 102888 DE OCTUBRE 22 DE 2007, establece que el régimen de Contabilidad Pública no es de obligatoria aplicación para las personas jurídicas o naturales que tengan a su cargo, a cualquier modo, recursos públicos de manera temporal o permanente, en lo relacionado con estos, y en el caso de los Curadores Urbanos en su calidad de particular, que desarrolla una función pública, para hacer valer sus cuentas, como prueba, debe llevar su contabilidad atendiendo las disposiciones del Decreto 2649 de 1993.
                                        </p>
                                        <p className='fw-normal'>4.9 <Link className='text-info' to={'/reports'}> Informe sobre Defensa Pública y Prevención del Daño Antijurídico </Link></p>
                                        <p className='fw-normal'>4.10 <Link className='text-info' to={'/reports'}> Informes trimestrales sobre acceso a información, quejas y reclamos </Link></p>
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
                                        <p className='fw-normal'>8.1 Información para  Grupos Específicos</p>
                                        <ul >
                                            <dl >
                                                <p className='fw-normal'>8.1.1. <Link className='text-info' to={'/kids'}>   Información para niños, niñas y adolescentes</Link></p>
                                                <p className='fw-normal'>8.1.2. <Link className='text-info' to={'/inclusivity/#women'}>  Información para Mujeres</Link></p>
                                                <p className='fw-normal'>8.1.3. <Link className='text-info' to={'/inclusivity'}> Otros de grupos de interés</Link></p>
                                            </dl>
                                        </ul>
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
                        </PanelGroup>
                    </div>
                </div>
            </div>
        </>
    )
}