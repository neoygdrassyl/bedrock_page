import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Button_navigation } from '../../components/button.component';

class Curator extends Component {
  render() {
    const { translation, breadCrums } = this.props;

    const PROFESIONALS = [
      {
        name: 'LUIS CARLOS PARRA SALAZAR - CURADOR',
        studies: 'ARQUITECTO, ESPECIALISTA TECNOLÓGICA EN SISTEMAS DE INFORMACIÓN GEOGRÁFICA, ESPECIALISTA EN DERECHO URBANO, ESPECIALISTA EN GESTIÓN DE LA PLANIFICACIÓN URBANA Y REGIONAL',
        exp: 'Veintisiete (27) años y dos (2) meses',
        role: 'Curador',
        email: 'curador@curaduria1bucaramanga.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: 'Bucaramanga, Santander'
      },
      {
        name: 'MARIA MARGARITA JEREZ ARIAS - ABOGADA',
        studies: 'Abogado, Especialista en Derecho Administrativo, Especialista en derecho Urbano',
        exp: 'Doce (12) años',
        role: 'Abogada Revisora',
        email: 'abogada@curaduria1bucaramanga.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
      {
        name: 'CARLOS ARTURO ULLOA CUERVO - INGENIERO',
        studies: 'Ingeniero Civil, Especialista en Geotecnia ambiental',
        exp: 'Veinticuatro (24) años y cinco (5) meses',
        role: 'Ingeniero revisor',
        email: 'ingeniero@curaduria1bucaramanga.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
      {
        name: 'JAVIER FERNANDO PARRA VILLALBA - INGENIERO',
        studies: 'Ingeniero Industrial',
        exp: 'Cinco (5) años y tres (3) meses',
        role: 'Administrador de la curaduria',
        email: 'curaduriaurbana1@gmail.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
      {
        name: 'JOSE DANIEL TRIANA RESTREPO - ARQUITECTO',
        studies: 'Arquitecto',
        exp: 'Seis (6) años',
        role: 'Arquitecto revisor',
        email: 'curaduriaurbana1@gmail.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
      {
        name: 'NÉSTOR ALBERTO TRIANA RESTREPO - INGENIERO',
        studies: 'Tecnólogo en Desarrollo de Sistemas informáticos, Ingeniero de Sistemas',
        exp: 'Cuatro (4) años',
        role: 'Ingeniero de sistemas',
        email: 'ing.natriana@gmail.com',
        phone: '(+57) 316 3431 119',
        birth: false
      },
      {
        name: 'OLGA PATRICIA ARDILA DÍAZ - ADMINISTRATIVA',
        studies: 'Bachiller académico, 5 semestre de contaduría publica',
        exp: 'Veinte (20) años en areas administrativas y contable',
        role: 'Auxiliar administrativa y contable',
        email: 'Curaduriaurbana1@gmail.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
      {
        name: 'ADRIANA SUÁREZ ROJAS - ADMINISTRATIVA',
        studies: 'Técnica en archivo',
        exp: 'Cuatro (4) años',
        role: 'Auxiliar de archivo y administrativa',
        email: 'adminsuarez@curaduria1bucaramanga.com',
        phone: '(+57)318 6756972',
        birth: false
      },
      {
        name: 'MARGUY STEFANNY GÓMEZ DELGADO - ABOGADA',
        studies: 'Abogada, especialista en Derecho Administrativo/Administradora Pública',
        exp: 'Cinco (5) años',
        role: 'Abogada Revisora',
        email: 'Curaduriaurbana1@gmail.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
      {
        name: 'XIMENA FLOREZ JAIMES - ARQUITECTA',
        studies: 'Arquitecta',
        exp: 'Dos (2) años',
        role: 'Arquitecta revisora',
        email: 'Curaduriaurbana1@gmail.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
      {
        name: 'ANTONIO JOSE GRANADOS VILLAMIZAR - INGENIERO',
        studies: 'Ingeniero',
        exp: 'Diecinueve (19) años',
        role: 'Ingeniero revisor',
        email: 'Curaduriaurbana1@gmail.com',
        phone: '(607)680 3596 - (+57)316 279 5010',
        birth: false
      },
    ]

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
            {PROFESIONALS.map(item =>
              <Collapsible className='border border-info text-center bg-light' openedClassName='border border-info text-center bg-light' trigger={<> <label className='text-dark text-center'>{item.name} <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label> </>}>
                <table class="table table-hover text-start">
                  <thead class="container-secondary ">
                    <tr>
                      <th scope="col" colspan="2" className="text-center"><h3>HOJA DE VIDA</h3></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Formación académica</th>
                      <td>{item.studies}</td>
                    </tr>
                    <tr>
                      <th scope="row">Experiencia laboral y profesional</th>
                      <td>{item.exp}</td>
                    </tr>
                    <tr>
                      <th scope="row">Empleo o Cargo que desarrolla</th>
                      <td>{item.role}</td>
                    </tr>
                    <tr>
                      <th scope="row">Dirección de correo institucional</th>
                      <td>{item.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Teléfono institucional</th>
                      <td>{item.phone}</td>
                    </tr>
                    {item.birth ?
                      <tr>
                        <th scope="row">Lugar de Nacimiento</th>
                        <td>{item.birth}</td>
                      </tr>
                      : null}

                  </tbody>
                </table>
              </Collapsible>)}

          </div>
        </div>
      </div >
    );
  }
}

export default Curator;