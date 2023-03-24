import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Button_navigation } from '../../components/button.component';

class Curator extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    return (
      <div className="Curator container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_12}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-10">
            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h2 className='px-2 py-0 fw-normal'>LA CURADURIA</h2>
                </div>
              </div>
            </div>
            <br />
            <h3 class="text-uppercase text-center pb-2" id='curador' >El Curador {<Button_navigation Iddown={'alcance'} Idup={null} />}</h3>
            <h4>CURADURIA URBANA No.1 DE BUCARAMANGA - ARQ. LUIS CARLOS PARRA</h4>
            <p className="text-justify">El Curador Urbano es un particular encargado de estudiar, tramitar y expedir licencias urbanísticas a petición del interesado en adelantar proyectos de esta índole.  Debe verificar y comprobar que los proyectos sometidos a su consideración, cumplan con las normas urbanísticas y de sismo resistencia vigente, solamente cuando la solicitud se ajuste a dichas normas se expedirá la correspondiente licencia.</p>
            <p className="text-justify">La figura de curador Urbano nace mediante el decreto extraordinario 2150 de 1995 y es retomada por las leyes 388 de 1997 y 810 de 2003. Corresponde a la Superintendencia de Notariado y Registro, efectuar la coordinación y el seguimiento de los curadores urbanos, con el objetivo de orientar y apoyar su adecuada implantación al interior de las administraciones locales. Actualmente, la figura, se encuentra reglamentada en el Decreto compilatorio 1077 de 2015.</p>
            <br />
            <Collapsible className='border border-info text-start bg-light' openedClassName='border border-info text-start bg-light' trigger={<> <label className='text-dark text-start fw-bold' id='alcance'>Alcance del Curador Urbano <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <p>Ser referente en el Área Metropolitana  de Bucaramanga, como una organización enfocada a la calidad de sus servicios y la satisfacción del usuario generando bienestar y seguridad en la comunidad.</p>
              <div className="d-flex justify-content-start">
                <ul>
                  <li><p className="text-justify">El curador no realiza trabajos de campo o de verificación material en tomo a los proyectos que se presentan a su consideración. Su papel se limita a verificar que los proyectos contenidos en los planos y documentos legalmente exigidos cumplan con las especificaciones sobre usos del suelo y alineamientos establecidos en los estatutos urbanísticos que integran los planes de ordenamiento territorial de los respectivos municipios o distritos.</p></li>
                  <li><p className="text-justify">La decisión sobre la solicitud de licencia no conlleva pronunciamiento alguno acerca de la titularidad de los derechos reales ni de posesión sobre el o los inmuebles objeto de ella. El otorgamiento de la licencia constituye un acto administrativo reglado y no discrecional, de manera que la decisión del curador se limita a otorgarla, en los casos en los que se verifique que el proyecto cumple con las exigencias urbanísticas, y negarla en caso contrario. La decisión del curador no puede estar amparada en criterios de conveniencia o equidad que vulneren el ordenamiento vigente.</p></li>
                  <li><p className="text-justify">Los requisitos y el procedimiento para el otorgamiento de licencias se encuentran definidos en el Decreto Nacional 1469 de 2010 compilado en el Decreto Único Reglamentario 1077 de 2015 y demás disposiciones que lo complementan o modifican. De la misma manera que el curador debe cumplir el procedimiento establecido, debe exigir que los solicitantes aporten los requisitos legales. La violación de uno u otro trae corno consecuencia la nulidad del acto administrativo por vicios de procedimiento.</p></li>
                  <li><p className="text-justify">El curador no ejerce funciones de control urbano, pues éstas son atribuciones que corresponde exclusivamente a los alcaldes municipales o las autoridades en quien éstos deleguen Articulo artículo 2.2.6.1.4.11 del Decreto Nacional 1077  de 2015. En este sentido, el artículo 2° de la Ley 810 de 2003 señala que «Las infracciones urbanísticas darán lugar a la aplicación de las sanciones a los responsables que a continuación se determina, por parte de los alcaldes municipales y distritales, el gobernador del Departamento de San Andrés y Providencia o el funcionario que reciba la delegación, quienes la graduarán de acuerdo con la gravedad y magnitud de la infracción y la reiteración o reincidencia en la falta, ...»</p></li>
                  <li><p className="text-justify">Los curadores no pueden otorgar licencias sobre la ocupación del espacio público, pues, «La competencia para la expedición de licencias para todo tipo de intervención y ocupación del espacio público, es exclusivamente de las oficinas de planeación municipal o distrital o la autoridad municipal o distrital que cumpla sus funciones».</p></li>
                </ul>
              </div>
            </Collapsible>
            <h3 class="text-uppercase text-center m-3 " id='talento'>Talento Humano de la Curaduria {<Button_navigation Iddown={null} Idup={'alcance'} />}</h3>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>LUIS CARLOS PARRA SALAZAR - CURADOR  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary ">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>ARQUITECTO, ESPECIALISTA TECNOLÓGICA EN SISTEMAS DE INFORMACIÓN GEOGRÁFICA, ESPECIALISTA EN DERECHO URBANO, ESPECIALISTA EN GESTIÓN DE LA PLANIFICACIÓN URBANA Y REGIONAL</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia laboral y profesional</th>
                    <td>Veintisiete (27) años y dos (2) meses</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Curador</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>curador@curaduria1bucaramanga.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                  <tr>
                    <th scope="row">Lugar de nacimiento</th>
                    <td>Bucaramanga, Santander</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>MARIA MARGARITA JEREZ ARIAS - ABOGADA <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Abogado, Especialista en Derecho Administrativo, Especialista en derecho Urbano</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia laboral y profesional</th>
                    <td>Doce (12) años</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o cargo que desarrolla</th>
                    <td>Abogada Revisora</td>
                  </tr>
                  <tr>
                    <th scope="row">Direccion de correo institucional</th>
                    <td>abogada@curaduria1bucaramanga.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>LINDA JULIETH PAEZ CARDENAS - ABOGADA  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Abogada</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia laboral y profesional</th>
                    <td>Cuatro (4) años</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o cargo que desarrolla</th>
                    <td>Abogada Asistente</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>abogadapaez@curaduria1bucaramanga.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>

            {/** 
             * 
             * <Collapsible trigger="MAYRA ANDREA CEPEDA GÓMEZ - ARQUITECTA">
            <table class="table table-hover">
              <thead class="container-secondary"> 
                <tr>
                  <th scope="col"  colspan="2" className="text-center"><h3>HOJA DE VIDA MAYRA ANDREA CEPEDA GÓMEZ</h3></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Nombre y Apellidos</th>
                  <td>Mayra Andrea Cepeda Gómez</td>
                </tr>
                <tr>
                  <th scope="row">Lugar de nacimiento</th>
                  <td>Colombia, Santander y Bucaramanga</td>
                </tr>
                <tr>
                  <th scope="row">Formación académica</th>
                  <td>Arquitecta, Interventoria y supervisión de la construcción, Diseño de interior y decoración de espacios, técnica en catastro</td>
                </tr>
                <tr>
                  <th scope="row">Experiencia laboral y profesional</th>
                  <td>Ocho (8) años y dieciséis (16) meses</td>
                </tr>
                <tr>
                  <th scope="row">Empleo o cargo que desarrolla</th>
                  <td>Arquitecta revisora</td>
                </tr>
                <tr>
                  <th scope="row">Dependencia en la que presta servicios</th>
                  <td>Curaduría 1 de Bucaramanga, Arquitectura</td>
                </tr>
                <tr>
                  <th scope="row">Dirección de correo institucional</th>
                  <td>arquitecta@curaduria1bucaramanga.com</td>
                </tr>
                <tr>
                  <th scope="row">Teléfono institucional</th>
                  <td>680 3596 - 316 279 5010</td>
                </tr>
              </tbody>
            </table>
            </Collapsible>
             * 
            */
            }
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>CARLOS ARTURO ULLOA CUERVO - INGENIERO  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Ingeniero Civil, Especialista en Geotecnia ambiental</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Veinticuatro (24) años y cinco (5) meses</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Ingeniero revisor</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>ingeniero@curaduria1bucaramanga.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>JAVIER FERNANDO PARRA VILLALBA - INGENIERO  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA </h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Ingeniero Industrial</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Cinco (5) años y tres (3) meses</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Administrador de la curaduria</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>curaduriaurbana1@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>JOSE DANIEL TRIANA RESTREPO - ARQUITECTO  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Arquitecto</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Seis (6) años</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Arquitecto revisor</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>curaduriaurbana1@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>NATHALIA ANDREA PARRA TORRES - ARQUITECTA  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA</h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Arquitecta</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Doce (12) años</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Arquitecto revisor</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>arquitectaparra@curaduria1bucaramanga.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>NÉSTOR ALBERTO TRIANA RESTREPO - INGENIERO  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA </h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Tecnólogo en Desarrollo de Sistemas informáticos, Ingeniero de Sistemas.</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Un (1) año</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Ingeniero de sistemas</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>ing.natriana@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(+57)3163431119</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>DANIEL DAVID BELTRÁN CABARCAS - INGENIERO  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA </h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Tecnólogo en Desarrollo de Sistemas informáticos, Ingeniero de Sistemas.</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Un (1) año</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Ingeniero de sistemas.</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>ddbeltran1914@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(+57)311 6450929</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>OLGA PATRICIA ARDILA DÍAZ - ADMINISTRATIVA  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA </h3></th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Bachiller académico, 5 semestre de contaduría publica.</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Veinte (20) años en areas administrativas y contable.</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Auxiliar administrativa y contable.</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>Curaduriaurbana1@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(607)680 3596 - (+57)316 279 5010</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
            <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>ADRIANA SUÁREZ ROJAS - ADMINISTRATIVA  <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
              <table class="table table-hover text-start">
                <thead class="container-secondary">
                  <tr>
                    <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA </h3></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Formación académica</th>
                    <td>Técnica en archivo.</td>
                  </tr>
                  <tr>
                    <th scope="row">Experiencia Laboral y Profesional</th>
                    <td>Cuatro (4) años.</td>
                  </tr>
                  <tr>
                    <th scope="row">Empleo o Cargo que desarrolla</th>
                    <td>Auxiliar de archivo y administrativa.</td>
                  </tr>
                  <tr>
                    <th scope="row">Dirección de correo institucional</th>
                    <td>adminsuarez@curaduria1bucaramanga.com</td>
                  </tr>
                  <tr>
                    <th scope="row">Teléfono institucional</th>
                    <td>(+57)318 6756972</td>
                  </tr>
                </tbody>
              </table>
            </Collapsible>
          </div>
        </div>
      </div >
    );
  }
}

export default Curator;