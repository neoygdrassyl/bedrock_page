import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button_navigation } from '../../components/button.component';
import { Panel, PanelGroup, Placeholder } from 'rsuite';
import { Button, ButtonToolbar, ButtonGroup, IconButton } from 'rsuite';
import StarIcon from '@rsuite/icons/legacy/Star';
class Whatwedo extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    return (
      <div className="Whatwedo container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_13}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-10">
            <h2 class="text-uppercase text-center pb-2" id='title'>Lo que hacemos (Trámites) {<Button_navigation Iddown={'licencias'} Idup={null} />}</h2>
            <hr />
            <br />
            <h4 id='licencias'>Licencias y Trámites  {<Button_navigation Iddown={'requisitos'} Idup={'title'} />}</h4>
            <p className="text-justify">En la página usted encontrará todo lo referente a los servicios que brindamos a la comunidad información de trámites y consultas, orientación sobre la aplicación de normas urbanísticas, expedición de conceptos de uso y norma aplicable a un predio, información sobre solicitudes radicadas y costos de licencias urbanísticas, estudio, trámite y expedición de licencias urbanísticas.</p>
            <br />
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'> <button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> Licencia de Urbanización. (Ver Art 2.2.6.1.1.4 D1077/2015)   </label> </>}>

              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la autorización previa para ejecutar en uno o varios predios localizados en suelo urbano, la creación de espacios públicos y privados, así como las vías públicas y la ejecución de obras de infraestructura de servicios públicos domiciliarios que permitan la adecuación, dotación y subdivisión de estos terrenos para la futura construcción de edificaciones con destino a usos urbanos, de conformidad con el Plan de Ordenamiento Territorial, los instrumentos que lo desarrollen y complementen, las leyes y demás reglamentaciones que expida el Gobierno Nacional.<br />
                    Son modalidades de la licencia de urbanización las siguientes:
                  </p>
                </Panel>
                <Panel header={<label><b>Modalidades de la licencia de urbanización  <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button></b></label>} eventKey={2} id="modalidades">
                  <ul>
                    <li><p className='text-justify'><b>Desarrollo: </b>Es la autorización para adelantar obras de urbanización en uno o varios predios urbanizables no urbanizados en los cuáles se permiten las actuaciones de urbanización, o que aun cuando contaron con licencia urbanística no ejecutaron las obras de urbanización aprobadas en la misma. Se otorgan aplicando las normas del tratamiento de desarrollo.</p></li>
                    <li><p className='text-justify'><b>Saneamiento: </b>Es la autorización para ejecutar vías, parques, infraestructura de servicios públicos domiciliarios y demás zonas de cesión aprobadas en licencias urbanísticas vencidas, con el único fin que se culmine la construcción y dotación de las zonas de cesión pública, y/o el proceso de entrega y escrituración a favor del municipio o distrito. Sólo procede cuando las obras de urbanismo faltantes por ejecutar no superen el 20% del área total de las cesiones definidas para la respectiva urbanización o cuando habiéndose ejecutado la totalidad de las obras, el proceso de entrega material y/o jurídica se encuentre pendiente.</p></li>
                    <li><p className='text-justify'><b>Reurbanización :</b>Es la autorización concedida sobre uno o varios predios incluidos total o parcialmente en licencias de urbanización o en actos administrativos de legalización que estén delimitados por áreas consolidadas o urbanizadas, o por predios que tengan licencias de urbanización vigentes, en los cuáles se requiera adelantar un nuevo proceso de urbanización o modificar el existente dentro del marco del tratamiento de renovación urbana. Esta modalidad permite la reconfiguración de espacios públicos en sectores desarrollados siempre y cuando se autorice previamente por parte del concejo municipal o distrital, en los términos del artículo 6 de la Ley 9 de 1989.</p></li>
                  </ul>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> Licencia de Parcelación. (Ver Art. 2.2.6.1.1.5 D1077/2015)  </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la autorización previa para ejecutar en uno o varios predios localizados en suelo rural y suburbano, la creación de espacios públicos y privados, y la ejecución de obras para vías públicas que permitan destinar los predios resultantes a los usos permitidos por el Plan de Ordenamiento Territorial, los instrumentos que lo desarrollen y complementen y la normatividad ambiental aplicable a esta clase de suelo. Estas licencias se podrán otorgar acreditando la auto prestación de servicios públicos, con la obtención de los permisos, autorizaciones y concesiones respectivas otorgadas por las autoridades competentes.<br />
                    En ningún caso se podrán autorizar obras o intervenciones sobre las áreas útiles del proyecto original ni cambiar la modalidad de cumplimiento de las obligaciones urbanísticas o compensarlas en dinero.<br></br>
                    (Par. Modificado por el Art. 8 del Decreto 1783 de 2021).(Decreto 1469 de 2010, artículo 5; Parágrafo adicionado por el Decreto 1197 de 2016, art. 1)
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm">Ver informacion <i class="fas fa-plus"></i> </button> Licencia de Subdivisión y sus modalidades. (Ver Art. 2.2.6.1.1.6 D1077/2015)   </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la autorización previa para dividir uno o varios predios, ubicados en suelo rural, urbano o de expansión urbana, de conformidad con lo dispuesto en el Plan de Ordenamiento Territorial, los instrumentos que lo desarrollen y complementen y demás normatividad vigente aplicable a las anteriores clases de suelo.<br></br>
                    Cuando la subdivisión de predios para urbanizar o parcelar haya sido aprobada mediante la respectiva licencia de urbanización o parcelación, no se requerirá adicionalmente de la licencia de subdivisión.
                    Son modalidades de la licencia de subdivisión:
                  </p>
                </Panel>
                <Panel header={<label><b>modalidades de la licencia de subdivisión <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Modalidades">
                  <ul>
                    <li><p className='text-justify'><b>Subdivisión en suelo rural y de expansión urbana: </b>Es la autorización previa para dividir materialmente uno o varios predios ubicados en suelo rural o de expansión urbana de conformidad con el Plan de Ordenamiento Territorial y la normatividad agraria, cultural y ambiental aplicables a estas clases de suelo, garantizando la accesibilidad a cada uno de los predios resultantes.  Mientras no se adopte el respectivo plan parcial, los predios urbanizables no urbanizados en suelo de expansión urbana no podrán subdividirse por debajo de la extensión mínima de la unidad agrícola familiar -UAF-, salvo los casos previstos en el artículo 45 de la Ley 160 de 1994. </p></li>
                    <li><p className='text-justify'><b>Subdivisión en suelo urbano:</b> Es la autorización para dividir materialmente uno o varios predios urbanizables no urbanizados ubicados en suelo urbano. <br></br>
                      Para efectos de lo dispuesto en el artículo 2.2.2.1.4.1.4 del presente decreto, solamente se podrá expedir esta modalidad de licencia cuando se presente alguna de las siguientes situaciones:<br></br>
                      a)	Se pretenda dividir la parte del predio que esté ubicada en suelo urbano de la parte que se localice en suelo de expansión urbana o en suelo rural;<br></br>
                      b)	Existan reglas especiales para subdivisión previa al proceso de urbanización contenidas en el plan de ordenamiento territorial o los instrumentos que lo desarrollen o complementen.<br></br>
                      c)	Se pretenda dividir el área urbanizable no urbanizada de un predio urbano, del área clasificada cómo suelo de protección ambiental o de aquellas que se encuentren afectadas en virtud de lo dispuesto en el artículo 37 de la Ley 9 de 1989, dentro del mismo predio.
                    </p></li>
                    <li><p className='text-justify'><b>Reloteo: </b>Es la autorización para dividir, redistribuir o modificar el loteo de uno o más predios previamente urbanizados o legalizados, de conformidad con las normas urbanísticas que para el efecto establezcan el Plan de Ordenamiento Territorial y los instrumentos que lo desarrollen y complementen. En esta modalidad de licencia se podrá hacer redistribución de los espacios privados.</p></li>
                  </ul>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion<i class="fas fa-plus"></i></button> Licencia de Construcción y sus modalidades. (Ver Art. 2.2.6.1.1.7 D1077/2015)   </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify text-justify'>Es la autorización previa para desarrollar edificaciones, áreas de circulación y zonas comunales en uno o varios predios, de conformidad con lo previsto en el Plan de Ordenamiento Territorial, los instrumentos que lo desarrollen y complementen, los Planes Especiales de Manejo y Protección de Bienes de Interés Cultural, y demás normatividad que regule la materia. En las licencias de construcción se concretarán de manera específica los usos, edificabilidad, volumetría, accesibilidad y demás aspectos técnicos aprobados para la respectiva edificación. </p>
                </Panel>
                <Panel header={<label><b>Tipos licencias de construcción <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Tipos">
                  <ul>
                    <li><p className='text-justify'><b>Obra Nueva: </b>Es la autorización para adelantar obras de edificación en predios no construidos o cuya área esté libre por autorización de demolición total.</p></li>
                    <li><p className='text-justify'><b>Ampliación: </b>Es la autorización para incrementar el área construida de una edificación existente, entendiéndose por área construida la parte edificada que corresponde a la suma de las superficies de los pisos, excluyendo azoteas y áreas sin cubrir o techar. La edificación que incremente el área construida podrá aprobarse adosada o aislada de la construcción existente, pero en todo caso, la sumatoria de ambas debe circunscribirse al potencial de construcción permitido para el predio o predios objeto de la licencia según lo definido en las normas urbanísticas.</p></li>
                    <li><p className='text-justify'><b>Adecuación: </b>Es la autorización para cambiar el uso de una edificación o parte de ella, garantizando la permanencia total o parcial del inmueble original.</p></li>
                    <li><p className='text-justify'><b>Modificación: </b>Es la autorización para variar el diseño arquitectónico o estructural de una edificación existente, sin incrementar su área construida.</p></li>
                    <li><p className='text-justify'><b>Restauración: </b>Es la autorización para adelantar las obras tendientes a recuperar y adaptar un inmueble o parte de este, con el fin de conservar y revelar sus valores estéticos, históricos y simbólicos. Se fundamenta en el respeto por su integridad y autenticidad. Esta modalidad de licencia incluirá las liberaciones o demoliciones parciales de agregados de los bienes de interés cultural aprobadas por parte de la autoridad competente en los anteproyectos que autoricen su intervención.</p></li>
                    <li><p className='text-justify'><b>Reforzamiento Estructural: </b>Es la autorización para intervenir o reforzar la estructura de uno o varios inmuebles, con el objeto de acondicionarlos a niveles adecuados de seguridad sismo resistente de acuerdo con los requisitos de la Ley 400 de 1997, sus decretos reglamentarios, o las normas que los adicionen, modifiquen o sustituyan y el Reglamento colombiano de construcción sismo resistente y la norma que lo adicione, modifique o sustituya. Esta modalidad de licencia se podrá otorgar sin perjuicio del posterior cumplimiento de las normas urbanísticas vigentes, actos de legalización y/o el reconocimiento de edificaciones construidas sin licencia, siempre y cuando en este último caso la edificación se haya concluido cómo mínimo cinco (5) años antes de la solicitud de reforzamiento y no se encuentre en ninguna de las situaciones previstas en el artículo 2.2.6.4.1.2 del presente decreto. Cuando se trámite sin incluir ninguna otra modalidad de licencia, su expedición no implicará aprobación de usos ni autorización para ejecutar obras diferentes a las del reforzamiento estructural.</p></li>
                    <li><p className='text-justify'><b>Demolición: </b>Es la autorización para derribar total o parcialmente una o varias edificaciones existentes en uno o varios predios y deberá concederse de manera simultánea con cualquiera otra modalidad de licencia de construcción.</p></li>
                    <li><p className='text-justify'><b>Reconstrucción: </b>Es la autorización que se otorga para volver a construir edificaciones que contaban con licencia o con acto de reconocimiento y que fueron afectadas por la ocurrencia de algún siniestro. Esta modalidad de licencia se limitará a autorizar la reconstrucción de la edificación en las mismas condiciones aprobadas por la licencia original, los actos de reconocimientos y sus modificaciones. En la reconstrucción e deberá dar cumplimiento a las normas de sismo resistencia y accesibilidad, y se efectuará sin perjuicio de las disposiciones de conservación de bienes de interés cultural.</p></li>
                    <li><p className='text-justify'><b>Cerramiento: </b>Es la autorización para encerrar de manera permanente un predio de propiedad privada.</p></li>
                  </ul>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> Reconocimiento de la existencia de una edificación  </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className=' text-justify text-justify'>
                    Procederá respecto de desarrollos arquitectónicos que se ejecutaron sin obtener la respectiva licencia. se podrá adelantar (i) siempre que se cumpla con el uso previsto por las normas urbanísticas vigentes y, (ii) que la edificación se haya concluido cómo mínimo cinco (5) años antes de la entrada en vigencia de la Ley 1848 de 2017. Este término no aplicará en aquellos casos en que el solicitante deba obtener el reconocimiento por orden judicial o administrativa (Art. 2.2.6.4.1.1. D1077/2015)<br />
                    <br />
                    No procederá el reconocimiento de edificaciones o la parte de ellas que se encuentren localizados en:<br />
                    <br />
                    1.	Las áreas o zonas de protección ambiental y el suelo clasificado cómo de protección de conformidad con el artículo 35 de la Ley 388 de 1997 en el Plan de Ordenamiento Territorial o en los instrumentos que lo desarrollen y complementen, salvo que se trate de zonas sometidas a medidas de manejo especial ambiental para la armonización y/o normalización de las edificaciones preexistentes a su interior.<br />
                    2.	Las zonas declaradas cómo de alto riesgo no mitigable identificadas en el Plan de Ordenamiento Territorial o los instrumentos que lo desarrollen y complementen.<br />
                    3.	Los inmuebles de propiedad privada afectados en los términos del artículo 37 de la Ley 9 de 1989 o la norma que lo adicione, modifique o sustituya, o que ocupen total o parcialmente el espacio público.
                    Parágrafo. El reconocimiento de la existencia de edificaciones no se adelantará en los predios que se encuentren en litigio, hasta que se resuelvan.
                  </p>
                </Panel>
                <Panel header={<label><b>Requisitos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='fw-normal text-justify'>
                    D1077/2015. Art. 2.2.6.4.2.2<br />
                    <br />
                    1.	El Formulario Único Nacional para la solicitud de licencias urbanísticas y el reconocimiento de edificaciones.<br />
                    2.	Plano de levantamiento arquitectónico de .la construcción existente, firmado por un arquitecto quién se hará responsable legalmente de la veracidad de la información contenida en este.<br />
                    3.	Copia del peritaje técnico que sirva para determinar la estabilidad de la construcción y las intervenciones y obras a realizar que lleven progresiva o definitivamente a disminuir la vulnerabilidad sísmica de la edificación, cuando a ello hubiere lugar. El peritaje técnico estará firmado por un Ingeniero Civil matriculado y facultado para este fin, quién se hará responsable legalmente de los resultados del estudio técnico.<br />
                    4.	La declaración de la antigüedad de la construcción. Esta declaración se hará bajo la gravedad .de juramento que se entenderá prestada por la presentación de la solicitud.<br />
                    <br />
                    Resolución 1025 de 2021. Ministerio de Vivienda Ciudad y Territorio.<br></br>
                    <br />
                    45 días hábiles para pronunciarse contados al día siguiente de la radicación de la solicitud, prorrogables hasta 22 días hábiles.
                  </p>
                </Panel>
                <Panel header={<label><b>Autoridad <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Autoridad">
                  <p className='fw-normal text-justify'>
                    Curador urbano o la autoridad municipal o distrital competente para expedir licencias.
                  </p>
                </Panel>
                <Panel header={<label><b>Tiempo para resolver la solicitud <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Tiempo">
                  <p className='fw-normal text-justify'>
                    45 días hábiles para pronunciarse contados al día siguiente de la radicación de la solicitud, prorrogables hasta 22 días hábiles.
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <div>
              <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> Vigencia de las licencias  </label> </>}>
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-lg">
                      <h3 className='text-center'>VIGENCIA DE LAS LICENCIAS</h3>
                      <table class="table-bordered  table-bordered border-dark" style={{ width: '100%' }}>
                        <thead>
                          <tr>
                            <th style={{ backgroundColor: '#add4ff' }} className='text-center' colspan="6" >Vigencia de las licencias (en meses) ART. 2.2.6.1.2.4.1. Decreto 1077/2015 Contada a partir de la firmeza del acto administrativo</th>
                          </tr>
                        </thead>
                        <tbody class="table-group-divider">
                          <tr>
                            <th className='text-center' style={{ backgroundColor: '#a7a7a7' }} colspan={6} >ACTOS DE LICENCIAMIENTO INDIVIDUAL</th>
                          </tr>
                          <tr className='text-center fw-bold' style={{ backgroundColor: '#e2e2e2' }}>
                            <td rowSpan={2}>Tipo de Licencia </td>
                            <td rowSpan={2}>Modalidad</td>
                            <td colSpan={2}>Licencia</td>
                            <td colSpan={2}>Revalidación</td>
                          </tr>
                          <tr className='text-center fw-bold' style={{ backgroundColor: '#e2e2e2' }}>
                            <td>Inicial</td>
                            <td>Prorroga</td>
                            <td>Inicial</td>
                            <td>Prorroga</td>
                          </tr>
                          <tr className='text-center'>
                            <td rowSpan={3}><p>Urbanización</p></td>
                            <td className='text-start'>Desarrollo</td>
                            <td rowSpan={2}>36</td>
                            <td rowSpan={2}>12</td>
                            <td rowSpan={2}>36</td>
                            <td rowSpan={2}>12</td>
                          </tr>
                          <tr className='text-center'>
                            <td className='text-start'>Reurbanización</td>
                          </tr>
                          <tr className='text-center'>
                            <td className='text-start'>Saneamiento</td>
                            <td>12</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                          </tr>
                          <tr className='text-center'>
                            <td rowSpan={2}>Parcelación</td>
                            <td className='text-start'>Parcelación</td>
                            <td>36</td>
                            <td>12</td>
                            <td>36</td>
                            <td>12</td>
                          </tr>
                          <tr className='text-center'>
                            <td className='text-start'>Saneamiento</td>
                            <td>12</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                          </tr>
                          <tr className='text-center'>
                            <td rowSpan={2}>Construcción</td>
                            <td className='text-start'>Obra nueva</td>
                            <td>36</td>
                            <td>12</td>
                            <td>36</td>
                            <td>12</td>
                          </tr>
                          <tr className='text-center'>
                            <td className='text-start'>Otras modalidades</td>
                            <td>24</td>
                            <td>12</td>
                            <td>24</td>
                            <td>12</td>
                          </tr>
                          <tr className='text-center'>
                            <td rowSpan={3}>Subdivisión</td>
                            <td className='text-start'>Urbana</td>
                            <td rowSpan={3}>12</td>
                            <td rowSpan={3}>NA</td>
                            <td rowSpan={3}>NA</td>
                            <td rowSpan={3}>NA</td>
                          </tr>
                          <tr className='text-center'>
                            <td className='text-start'>Rural</td>
                          </tr>
                          <tr className='text-center'>
                            <td className='text-start'>Loteo/reloteo</td>
                          </tr>
                          <tr className='text-start'>
                            <td colSpan={6}><p className='px-2'><b>IMPORTANTE: </b><br />
                              Las revalidaciones tendrán el mismo término de vigencia de la licencia objeto de la revalidación (Artículo 2.2.6.1.2.4.3. decreto 1077 de 2015).<br />
                              Los actos de reconocimiento de la existencia de edificación no tienen vigencia, pero cuando se concede con una licencia de construcción, se otorga el término de vigencia a la licencia (24 meses).<br /></p> </td>
                          </tr>
                          <tr>
                            <td colSpan={6}><br></br></td>
                          </tr>
                          <tr>
                            <th style={{ backgroundColor: '#a7a7a7' }} className='text-center' colspan="6" > ACTOS DE LICENCIAMIENTO QUE COMBINA ACTUACIONES URBANISTICAS</th>
                          </tr>
                          <tr className='text-center fw-bold' style={{ backgroundColor: '#e2e2e2' }}>
                            <td rowSpan={2}>Tipo de Licencia </td>
                            <td rowSpan={2}>Modalidad</td>
                            <td colSpan={2}>Licencia</td>
                            <td colSpan={2}>Revalidación</td>
                          </tr>
                          <tr className='text-center fw-bold' style={{ backgroundColor: '#e2e2e2' }}>
                            <td>Inicial</td>
                            <td>Prorroga</td>
                            <td>Inicial</td>
                            <td>Prorroga</td>
                          </tr>
                          <tr className='text-center'>
                            <td rowSpan={2}>Urbanización y Construcción</td>
                            <td>Desarrollo o Reurbanización + Obra nueva / Cerramiento</td>
                            <td>48</td>
                            <td>12</td>
                            <td>48</td>
                            <td>12</td>
                          </tr>
                          <tr className='text-center'>
                            <td>Desarrollo o Reurbanización + Otras Modalidades de Construcción</td>
                            <td>36</td>
                            <td>12</td>
                            <td>36</td>
                            <td>12</td>
                          </tr>
                          <tr className='text-center'>
                            <td rowSpan={2}>Parcelación y Construcción </td>
                            <td>Parcelación + Obra nueva / Cerramiento</td>
                            <td>48</td>
                            <td>12</td>
                            <td>48</td>
                            <td>12</td>
                          </tr>
                          <tr className='text-center'>
                            <td>Parcelación + Otras Modalidades de Construcción</td>
                            <td>36</td>
                            <td>12</td>
                            <td>36</td>
                            <td>12</td>
                          </tr>
                          <tr>
                            <td colSpan={6}><br></br></td>
                          </tr>
                          <tr>
                            <th style={{ backgroundColor: '#a7a7a7' }} className='text-center' colspan="6" > CONIDICION LICENCIAS EN URBANIZACIONES POR ETAPAS Y PROYECTO URBANÍSTICO GENERAL</th>
                          </tr>
                          <tr className='text-center'>
                            <td>Nueva Etapa</td>
                            <td colSpan={5}>Solicitar (45) días hábiles ANTES del vencimiento de la licencia de la etapa anterior.</td>
                          </tr>
                          <tr>
                            <td colSpan={6}><br></br></td>
                          </tr>
                          <tr>
                            <th style={{ backgroundColor: '#a7a7a7' }} className='text-center' colspan="6" > CONDICIONES PARA SOLICITAR PRORROGAS Y REVALIDACIONES en DIAS HABILES</th>
                          </tr>
                          <tr className='text-center'>
                            <td>Prórroga Licencia</td>
                            <td colSpan={5} className='text-start'>Radicarse a más tardar treinta (30) días hábiles ANTES del vencimiento de la respectiva licencia.
                              Documentación completa y acompañarse de la manifestación bajo la gravedad del juramento de la
                              iniciación de obra por parte del urbanizador o constructor responsable/director de la construcción.</td>
                          </tr>
                          <tr className='text-center'>
                            <td>Revalidación de Licencia Urbanística</td>
                            <td colSpan={5} className='text-start'>Aplica por <b>UNA SOLA VEZ</b> a las licencias que perdieron vigencia, siempre y cuando la solicite en un término <b>NO MAYOR A DOS (2) MESES</b> desde el vencimiento.<br></br>
                              Deberán radicarse los documentos generales / comunes y la certificación del urbanizador o constructor
                              responsable/director de la construcción con el respectivo cuadro de áreas en el que se identifique lo
                              ejecutado durante la licencia vencida así cómo lo que se ejecutará durante la revalidación y manifieste bajo
                              la gravedad del juramento que el inmueble se encuentra en cualquiera de las situaciones de que trata el
                              artículo 2.2.6.1.2.4.3. del decreto 1077 de 2015.
                            </td>
                          </tr>
                          <tr className='text-center'>
                            <td>Prórroga de Revalidación</td>
                            <td colSpan={5} className='text-start' >Solicitar a más tardar treinta (30) días hábiles ANTES de su vencimiento y su expedición procede con la sola presentación de la solicitud por parte del interesado.</td>
                          </tr>
                          <tr className='text-start'>
                            <td colSpan={6}>Nota: Las prórrogas de licencias urbanísticas o de sus revalidaciones no serán objeto de acta de observaciones o correcciones (Parágrafo 3 Art. 2.2.6.1.2.4.2 D1077/2015).</td>
                          </tr>
                          <tr>
                            <td colSpan={6}><br></br></td>
                          </tr>
                          <tr>
                            <th style={{ backgroundColor: '#a7a7a7' }} className='text-center' colspan="6" > EXCEPCIONES EN LA APLICACIÓN DE LAS VIGENCIAS</th>
                          </tr>
                          <tr className='text-center'>
                            <td>Segunda Prórroga Decreto 1019 de 2021</td>
                            <td colSpan={5} className='text-start'>Las licencias urbanísticas que estuvieren vigentes en virtud de una primera prórroga en la fecha de entrada
                              en vigencia del presente parágrafo <b>(27 de agosto de 2021)</b> podrán solicitar una segunda prórroga por un
                              plazo adicional de doce (12) meses contados a partir de la fecha de vencimiento de la primera prórroga.<br />
                              La solicitud de segunda prórroga deberá formularse <b>antes</b> del vencimiento de la primera prórroga, y su
                              expedición procederá con la presentación de la solicitud por parte del titular.<br />
                              Las revalidaciones que estuvieren vigentes en virtud de una primera prórroga en la fecha de entrada en
                              vigencia del presente parágrafo <b>(27 de agosto de 2021)</b> podrán solicitar una segunda prórroga por un
                              plazo adicional de doce (12) meses contados a partir de la fecha de vencimiento de la primera prórroga.<br />
                              La solicitud de segunda prórroga deberá formularse antes del vencimiento de la primera prórroga de la
                              revalidación, y su expedición procederá con la presentación de la solicitud por parte del titular".</td>
                          </tr>
                          <tr className='text-center'>
                            <td>Prorroga Automática Decreto 691 de 2020</td>
                            <td colSpan={5} className='text-start'><b>APLICA A TODAS LA LICENCIAS</b> urbanísticas vigentes al 12 de marzo de 2020, ampliando de forma automática por un término de nueve (9) meses su vigencia.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Collapsible>
            </div>
            <h4 className="my-4" id='requisitos'>Otras Actuaciones y Requisitos {<Button_navigation Iddown={'tramites'} Idup={'licencias'} />}</h4>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> Otras Actuaciones  </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definicion">
                  <p className='text-justify'>Se entiende por otras actuaciones relacionadas con la expedición de las licencias, aquellas vinculadas con el desarrollo de proyectos urbanísticos o arquitectónicos, que se pueden ejecutar independientemente o con ocasión de la expedición de una licencia (Art. 2.2.6.1.3.1. D1077/2015)</p>
                </Panel>
                <Panel header={<label><b>Autoridad  <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Autoridad">
                  <p className='text-justify'>Curador urbano o la autoridad municipal o distrital competente para expedir licencias.</p>
                </Panel>
                <Panel header={<label><b>Requisitos  <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Requisitos">
                  <p className='text-justify'>D1077/2015. Art. 2.2.6.1.2.1.7.<br />
                    Resolución 1025 de 2021. Ministerio de Vivienda Ciudad y Territorio.<br />
                    Art. 1. 	Numeral 1. Copia del certificado de libertad y tradición del inmueble o inmuebles objeto de la solicitud, cuya fecha de expedición no sea superior a un mes calendario al momento de presentación de la solicitud. Cuando el predio no se haya desenglobado o se encuentre en trámite el otorgamiento o registro de la escritura pública de protocolización de la licencia de subdivisión, se podrá aportar el certificado del predio de mayor extensión.<br />
                    Numeral 3. Copia del documento de identidad del solicitante cuando se trate de personas naturales o certificado de existencia y representación legal, cuya fecha de expedición no sea superior a un mes calendario al momento de presentación de la solicitud, cuando se trate de personas jurídicas.<br />
                    Numeral 4. Poder especial debidamente otorgado ante la autoridad competente, cuando se actúe mediante apoderado o mandatario, con la correspondiente presentación personal.<br />
                    Art.8-A	Documentos para la solicitud de otras actuaciones.
                  </p>
                </Panel>
                <Panel header={<label><b>Tiempo  <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Tiempo">
                  <p className='text-justify'>Numerales: 1, 2, 3, 4, 5, 6, 7 y 9 tienen 15 días hábiles para pronunciarse contados al día siguiente de la radicación de la solicitud.<br />
                    Numerales 8 y 10 tienen 30 días hábiles para pronunciarse contados al día siguiente de la radicación de la solicitud.
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 1.	Ajuste de Cotas y áreas </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  Autorización para incorporar en los planos urbanísticos previamente aprobados por el curador urbano o la autoridad municipal o distrital competente para expedir licencias, la corrección técnica de cotas y áreas de un predio o predios determinados cuya urbanización haya sido ejecutada en su totalidad.
                </Panel>
                <Panel header={<label><b>Requisitos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'> R.1025/2021 Art. 8-A<br />
                    Copia del plano correspondiente
                  </p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>
                    D1077/2015. Art. 2.2.6.6.8.15 Expensa única en UVT según estrato socioeconómico. <Link to={'/liquidator'}>Consultar tabla.</Link>
                  </p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>
                    No está limitada en el tiempo por cuando no conllevan autorización de ejecución de obras sino la actualización, acreditación, conceptualización o certificación de situaciones urbanísticas.
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 2.	Concepto de norma urbanística </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>Dictamen escrito informa al interesado sobre las normas urbanísticas y demás vigentes aplicables a un predio que va a ser construido o intervenido La expedición de estos conceptos no otorga derechos ni obligaciones a su peticionario y no modifica los derechos conferidos mediante licencias que estén vigentes o que hayan sido ejecutadas.</p>
                </Panel>
                <Panel header={<label><b>Requisitos R.1025/2021 Art. 8-A <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'>a)	Dirección oficial del predio o su ubicación si se encuentra en suelo rural. <br />
                    b)	Antecedentes urbanísticos como licencias y demás, en caso de existir.
                  </p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>D1077/2015. Art. 2.2.6.6.8.15 Expensa única en UVT por cada concepto <Link to={'/liquidator'}>Consultar tabla</Link>.</p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>No está limitada en el tiempo por cuando no conllevan autorización de ejecución de obras sino la actualización, acreditación, conceptualización o certificación de situaciones urbanísticas.</p>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 3. Concepto de uso del suelo </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es el dictamen escrito por medio del cual se informa al interesado sobre el uso o usos permitidos en un predio o edificación, de conformidad con las normas urbanísticas del Plan de Ordenamiento Territorial y los instrumentos que lo desarrollen. La expedición de estos conceptos no otorga derechos ni obligaciones a su peticionario y no modifica los derechos conferidos mediante licencias que estén vigentes o que hayan sido ejecutadas.
                  </p>
                </Panel>
                <Panel header={<label><b>Requisitos R.1025/2021 Art. 8-A <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'>
                    a)	Dirección oficial del predio o su ubicación si se encuentra en suelo rural.<br />
                    b)	Antecedentes urbanísticos como licencias y demás, en caso de existir.
                  </p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>
                    D1077/2015. Art. 2.2.6.6.8.15 Expensa única en UVT por cada concepto <Link to={'/liquidator'}>Consultar tabla.</Link>
                  </p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>
                    No está limitada en el tiempo por cuando no conllevan autorización de ejecución de obras sino la actualización, acreditación, conceptualización o certificación de situaciones urbanísticas.
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 4. Copia certificada de planos </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la certificación de que la copia adicional de los planos es idéntica a los planos que se aprobaron en la respectiva licencia urbanística
                  </p>
                </Panel>
                <Panel header={<label><b>Requisitos R.1025/2021 Art. 8-A <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'>Ninguno</p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>
                    D1077/2015. Art. 2.2.6.6.8.15 Expensa única en UVT por cada plano. <Link to={'/liquidator'}>Consultar tabla.</Link>
                  </p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>
                    No está limitada en el tiempo por cuando no conllevan autorización de ejecución de obras sino la actualización, acreditación, conceptualización o certificación de situaciones urbanísticas.
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>

            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 5. Aprobación de los Planos de Propiedad Horizontal. </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la aprobación a los planos de alinderamiento, cuadros de áreas o al proyecto de división entre bienes privados y bienes comunes de la propiedad horizontal exigidos por la Ley 675 de 2001, los cuáles deben corresponder fielmente al proyecto de parcelación, urbanización o construcción aprobado mediante licencias urbanísticas o el aprobado por la autoridad competente cuando se trate de bienes de interés cultural. Estos deben señalar la localización, linderos, nomenclatura, áreas de cada una de las unidades privadas y las áreas y bienes de uso común.
                  </p>
                </Panel>
                <Panel header={<label><b>Requisitos R.1025/2021 Art. 8-A <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'>
                    c)	Planos de alinderamiento.<br />
                    d)	Cuadro de áreas o proyecto de división.<br />
                    e)	Cuando la solicitud se presente ante una autoridad distinta a la que otorgó la licencia, se deberá aportar copia de la licencia y de los planos correspondientes.<br />
                    f)	Para licencias urbanísticas que hayan perdido su vigencia, se deberá aportar una manifestación expresa presentada bajo la gravedad de juramento en la que conste que la obra aprobada está construida en su totalidad.<br />
                    g)	Cuando se trate de un bien de interés cultural, se deberá aportar el anteproyecto o autorización de intervención aprobada.<br />
                  </p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>
                    D1077/2015. Art. 2.2.6.6.8.15 Expensa única en UVT según área construida. <Link to={'/liquidator'}>Consultar tabla.</Link>
                  </p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>
                    No está limitada en el tiempo por cuando no conllevan autorización de ejecución de obras sino la actualización, acreditación, conceptualización o certificación de situaciones urbanísticas
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>

            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 6. Autorización para movimiento de tierras </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la aprobación correspondiente al conjunto de trabajos a realizar en un terreno para dejarlo despejado y nivelado, cómo fase preparatoria de futuras obras de parcelación, urbanización y/o construcción.<br />

                    Se otorga a solicitud del interesado, con fundamento en estudios geotécnicos que garanticen la protección de vías, instalaciones de servicios públicos, predios aledaños y construcciones vecinas.<br />

                    En caso de no haber tramitado la presente autorización de manera previa a la solicitud de licencia de urbanización o construcción en suelo urbano, se deberá requerir en el marco de dicha solicitud.<br />

                    En el escenario de suelo rural y rural suburbano, el movimiento de tierras para parcelar o edificar sólo podrá autorizarse en la respectiva licencia de parcelación o construcción, de conformidad con lo establecido en el artículo 2.2.6.2.6 del presente decreto.

                  </p>
                </Panel>
                <Panel header={<label><b>Requisitos R.1025/2021 Art. 8-A <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'>
                    a)	Estudios de suelos y geotécnicos. Para tales efectos, se deberán aportar los estudios de suelos y geotécnicos de conformidad con la Ley 400 de 1997
                  </p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>
                    D1077/2015. Art. 2.2.6.6.8.15 Expensa única en UVT según m3. <Link to={'/liquidator'}>Consultar tabla.</Link>
                  </p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>
                    18 meses no prorrogables.
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>

            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 7. Aprobación de piscinas </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la autorización que otorga el curador urbano, o la autoridad municipal o distrital competente para el estudio, trámite y expedición de las licencias, para la intervención del terreno destinado a la construcción de piscinas en que se verifica el cumplimiento de las normas técnicas y de seguridad definidas por la normatividad vigente.
                  </p>
                </Panel>
                <Panel header={<label><b>Requisitos R.1025/2021 Art. 8-A <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'>
                    a)	Planos de diseño y arquitectónicos.<br />
                    b)	Estudios de suelos y geotécnicos.
                  </p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>
                    D1077/2015. Art. 2.2.6.6.8.15 Expensa única en UVT según m3. <Link to={'/liquidator'}>Consultar tabla.</Link>
                  </p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>
                    18 meses no prorrogables
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>

            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 8. Modificación de planos urbanísticos, de legalización y demás planos que aprobaron  </label> </>}>
              <p className='text-justify'>
                No es una actuación del curador urbano
              </p>
            </Collapsible>

            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 9. Bienes destinados a uso público o con vocación de uso público.   </label> </>}>
              <p className='text-justify'>
                No es una actuación del curador urbano
              </p>
            </Collapsible>

            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start'><button className="btn btn-warning btn-sm"> Ver informacion <i class="fas fa-plus"></i></button> 10. Revisión independiente de los diseños estructurales por parte de los Curadores Urbanos. </label> </>}>
              <PanelGroup accordion defaultActiveKey={1} bordered>
                <Panel header={<label><b>Definición <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={1} id="Definición">
                  <p className='text-justify'>
                    Es la revisión independiente de los diseños estructurales que adelanta el curador urbano en los términos del apéndice A-6 del Reglamento Colombiano de Construcción Sismo Resistente NSR-10, en la cual constata que el diseño estructural propuesto en el proyecto cumple con la norma sismo resistente. El alcance y trámite de la revisión de los diseños estructurales se adelantará conforme a lo establecido en la Resolución 0015 de 2015 expedida por la Comisión Asesora Permanente para el Régimen de Construcciones Sismo Resistentes, o la norma que la adicione, modifique o sustituya.<br />
                    La revisión independiente de los diseños estructurales que realiza el curador urbano estará vigente mientras no se modifique la Norma Sismo Resistente. Esta revisión sólo podrá ser adelantada por el curador urbano del municipio más cercano del mismo departamento, en aquellos municipios y distritos donde no se cuente con la figura de curador urbano.
                  </p>
                </Panel>
                <Panel header={<label><b>Requisitos R.1025/2021 Art. 8-A <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={2} id="Requisitos">
                  <p className='text-justify'>
                    Anexar planos.
                  </p>
                </Panel>
                <Panel header={<label><b>Costos <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={3} id="Costos">
                  <p className='text-justify'>
                    Expensa única equivalente al 30% del valor total de aplicar la fórmula del cargo variable de una licencia de construcción.
                  </p>
                </Panel>
                <Panel header={<label><b>Vigencia <Button color="cyan" appearance="primary" size="sm">Ver <i class="fas fa-plus"></i></Button> </b></label>} eventKey={4} id="Vigencia">
                  <p className='text-justify'>
                    No está limitada en el tiempo por cuando no conllevan autorización de ejecución de obras sino la actualización, acreditación, conceptualización o certificación de situaciones urbanísticas.
                  </p>
                </Panel>
              </PanelGroup>
            </Collapsible>
            <div className='py-2'>
              <h4 className="my-4" id='tramites'>Otros Trámites {<Button_navigation Iddown={null} Idup={'requisitos'} />}</h4>
              <MDBContainer >
                <MDBListGroup>
                  <MDBListGroupItem>Boletín de Nomenclatura</MDBListGroupItem>
                  <MDBListGroupItem> Concepto de Curador (Reparaciones Locativas)</MDBListGroupItem>
                </MDBListGroup>
              </MDBContainer>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default Whatwedo;