import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Button_navigation } from '../../components/button.component';

class FAQ extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    const homepath = "https://curaduria1bucaramanga.com.co/public_docs/OTHERS/";
    return (
      <div className="FAQ container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_42}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-8">
            <h2 class="text-uppercase text-center pb-2" id='title'>Preguntas Frecuentes {<Button_navigation Iddown={'p1'} Idup={null} />}</h2>
            <hr />
            <h5 className="fw-bold" id='p1'>¿Qué hace un Curador Urbano? {<Button_navigation Iddown={'p2'} Idup={'title'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 artículo 2.2.6.6.1.1: El curador urbano es un particular encargado de estudiar, tramitar y expedir licencias de parcelación, urbanización, construcción y subdivisión de predios, a petición del interesado en adelantar proyectos de esa índole.</p>
            <h5 className="fw-bold" id='p2'>¿Qué es una Curaduría Urbana? {<Button_navigation Iddown={'p3'} Idup={'p1'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 artículo 2.2.6.6.1.4: Es la oficina en donde el curador urbano en el ejercicio de sus funciones verifica el cumplimiento de las normas urbanísticas y de edificación vigentes de los proyectos de subdivisión, parcelación, urbanización, o construcción sometidos a su consideración.</p>
            <h5 className="fw-bold" id='p3'>¿Quién nombra a los curadores y por cuánto tiempo? {<Button_navigation Iddown={'p4'} Idup={'p2'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 artículo. 2.2.6.6.3.1: Los curadores urbanos serán designados por la Superintendencia de Notariado y Registro, previo concurso de méritos, para períodos individuales de cinco (5) años.</p>
            <h5 className="fw-bold" id='p4'>¿Qué servicios específicos prestan los curadores urbanos? {<Button_navigation Iddown={'p5'} Idup={'p3'} />}</h5>
            <ul>
              <li>Orientación sobre aplicación de normas urbanísticas</li>
              <li>Expedición de conceptos de uso y norma</li>
              <li>Estudio, trámite y expedición de licencias urbanísticas</li>
              <li>Ajuste de cotas y áreas</li>
              <li>Aprobación planos propiedad horizontal</li>
              <li>Copia certificada de planos</li>
              <li>Autorización para el movimiento de tierras</li>
              <li>Aprobación de piscinas</li>
              <li>Modificación de Planos Urbanísticos</li>
              <li>Prórrogas y Revalidaciones de licencias urbanísticas</li>
            </ul>
            <h5 className="fw-bold" id='p5'>¿Qué es una Licencia Urbanística? {<Button_navigation Iddown={'p6'} Idup={'p4'} />}</h5>
            <p className="text-justify">Es la autorización previa para adelantar obras de urbanización y parcelación de predios, de construcción y demolición de edificaciones, de intervención y ocupación del espacio público, y para realizar el loteo o subdivisión de predios, expedida por el curador urbano.</p>
            <h5 className="fw-bold" id='p6'>¿Qué clases de licencias expiden los Curadores urbanos? {<Button_navigation Iddown={'p7'} Idup={'p5'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 Art. 2.2.6.1.1.2: Licencia de Urbanización, Parcelación, Subdivisión, Construcción</p>
            <h5 className="fw-bold" id='p7'>¿Quiénes pueden solicitar Licencias Urbanísticas? {<Button_navigation Iddown={'p8'} Idup={'p6'} />}</h5>
            <p className="text-justify">
              <ul>
                <li>Los titulares de derechos reales principales, los propietarios del derecho de dominio a título de fiducia y los fideicomitentes de las mismas fiducias, de los inmuebles objeto de solicitud.</li>
                <li>Los poseedores solo podrán ser titulares de las licencias de construcción y de los actos de reconocimiento de la existencia de edificaciones. (Artículo 2.2.6.1.2.1.5. Decreto 1077 de 2015)</li>
              </ul>
            </p>
            <h5 className="fw-bold" id='p8'>¿Qué debo hacer para solicitar una Licencia Urbanística? {<Button_navigation Iddown={'p9'} Idup={'p7'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 Artículo 2.2.6.1.2.1.7 Realizar la solicitud ente cualquier Curaduría Urbana de Bucaramanga y anexar los siguientes documentos:</p>
            <p className="text-justify">
              <ul>
                <li>Certificado de libertad y tradición del inmueble, cuya fecha de expedición no sea superior a un mes antes de la fecha de la solicitud. Cuando el predio no se haya desenglobado se podrá aportar el certificado del predio de mayor extensión.</li>
                <li>El formulario único nacional para la solicitud de licencias debidamente diligenciado por el solicitante.</li>
                <li>Copia del documento de identidad del solicitante cuando se trate de personas naturales o certificado de existencia y representación legal, cuya fecha de expedición sea inferior a un mes, cuando se trate de personas jurídicas.</li>
                <li>Poder o autorización debidamente otorgado, cuando se actúe mediante apoderado o mandatario, con presentación personal de quien lo otorgue.</li>
                <li>Copia del documento o declaración privada del impuesto predial del último año en relación con el inmueble objeto de la solicitud, donde figure la nomenclatura alfanumérica o identificación del predio.</li>
                <li>a relación de la dirección de los predios colindantes al proyecto objeto de la solicitud. Este requisito no se exigirá cuando se trate de predios rodeados completamente por espacio público o ubicado en zonas rurales no suburbanas.</li>
              </ul>
            </p>
            <h5 className="fw-bold" id='p9'>¿Cuáles son los costos que se deben cancelar por el trámite y expedición de una Licencia Urbanística? {<Button_navigation Iddown={'p10'} Idup={'p8'} />}</h5>
            <p className="text-justify">Toda solicitud de licencia genera un cargo fijo y un cargo variable, el cargo fijo es cancelado en el momento de la radicación de los documentos. El cargo variable se cancela dentro del término de treinta (30) días hábiles, contados a partir del requerimiento de aportar los comprobantes de pago por concepto de impuestos, gravámenes, tasas, contribuciones o participaciones, señalado en el artículo 2.2.6.6.8.2. del Decreto 1077 de 2015.  El costo de estos cargos depende del área y uso del proyecto, valores que son regulados por el Gobierno Nacional.</p>
            <h5 className="fw-bold" id='p10'>¿Cuál es el término para resolver las solicitudes de Licencia? {<Button_navigation Iddown={'p11'} Idup={'p9'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 Artículo. 2.2.6.1.2.3.1. Los curadores urbanos encargados del estudio, trámite y expedición de las licencias, tendrán un plazo máximo de cuarenta y cinco (45) días hábiles para resolver las solicitudes de licencias y de modificación de licencia vigente pronunciándose sobre su viabilidad, negación o desistimiento contados desde la fecha en que la solicitud haya sido radicada en legal y debida forma. Las solicitudes de revalidación de licencias se resolverán en un término máximo de quince (15) días hábiles contados a partir de la fecha de radicación de la solicitud en legal y debida forma.</p>
            <h5 className="fw-bold" id='p11'>¿Cuál es el tiempo de vigencia de una Licencia? {<Button_navigation Iddown={'p12'} Idup={'p10'} />}</h5>
            <p className="text-justify">Decreto 2218 de 2015 Art. 2.2.6.1.2.4.1: Las licencias de urbanización en modalidades de desarrollo y reurbanización, así como las licencias de parcelación y de construcción y las licencias de intervención y ocupación espacio público, tendrán una vigencia veinticuatro (24) meses.</p>
            <h5 className="fw-bold" id='p12'>¿Por qué se niega la solicitud de Licencia? {<Button_navigation Iddown={'p13'} Idup={'p11'} />}</h5>
            <p className="text-justify">El Curador Urbano negará una licencia cuando esta no se ajusta a la normatividad urbanística  y de sismo- resistencia vigente.</p>
            <h5 className="fw-bold" id='p13'>¿En qué momento procede la expedición de la Licencia? {<Button_navigation Iddown={'p14'} Idup={'p12'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 Art. 2.2.6.6.8.2: El Curador Urbano   Está obligado a expedir el acto administrativo que concede la licencia, en un término no superior a cinco (5) días hábiles contados a partir de la entrega de los documentos señalados en el artículo 2.2.6.6.8.2. del Decreto 1077 de 2015 (Comprobantes de pago por concepto de impuestos, gravámenes, tasas, contribuciones o participaciones, expensas)</p>
            <h5 className="fw-bold" id='p14'>¿Cuáles son las causales de desistimiento de un trámite de solicitud de Licencia? {<Button_navigation Iddown={'p15'} Idup={'p13'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 Artículo. 2.2.6.1.2.3.4:
              <ul>
                <li>Radicación Incompleta</li>
                <li>Incumplimiento del Acta de Observaciones</li>
                <li>Por pagos</li>
                <li>Voluntario</li>
              </ul>
            </p>
            <h5 className="fw-bold" id='p15'>¿Qué es una reparación Locativa? {<Button_navigation Iddown={'p16'} Idup={'p14'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 Art. 2.2.6.1.1.10: Se entiende por reparaciones o mejoras locativas aquellas obras que tienen como finalidad mantener el inmueble en las debidas condiciones de higiene y ornato sin afectar su estructura portante, su distribución interior, sus características funcionales, formales y/o volumétricas. No requerirán licencia de construcción las reparaciones o mejoras locativas a que hace referencia el artículo 8 de la Ley 8 10 de 2003 o la norma que lo adicione, modifique o sustituya.</p>
            <p className="text-justify">Es importante recalcar, que frecuentemente la ciudadanía en general tiene un concepto errado sobre lo que son las reparaciones locativas, que como su nombre lo indica solo incluyen labores de mantenimiento y ornato. Las actividades de obra que implique demolición, cambio en el diseño interior y exterior, es decir que estén variando las condiciones arquitectónicas de un inmueble no se consideran reparaciones locativas y en estos casos deben tramitar una licencia de construcción de acuerdo a las normas vigentes.</p>
            <p className="text-justify">No se deje engañar, si su intervención es diferente a obras de mantenimiento del inmueble, debe tramitar una licencia de construcción.</p>
            <p className="text-justify">Los tiempos de expedición de un concepto de reparaciones locativas son máximo 15 días hábiles.</p>
            <p className="text-justify">Infórmese bien acercándose a consultar en una Curaduría Urbana.</p>
            <h5 className="fw-bold" id='p16'>¿A qué entidad pueden dirigirse las personas que se sientan afectadas por la ejecución de una obra? {<Button_navigation Iddown={'p17'} Idup={'p15'}/>}</h5>
            <p className="text-justify">Ante la Alcaldía Municipal.</p>
            <h5 className="fw-bold" id='p17'>¿Dónde se puede solicitar la carta catastral? {<Button_navigation Iddown={'p18'} Idup={'p16'} />}</h5>
            <p className="text-justify">En las instalaciones del Área Metropolitana de Bucaramanga, aportando la dirección exacta del predio.</p>
            <h5 className="fw-bold" id='p18'>¿Qué se debe hacer cuando una construcción no tiene Licencia? {<Button_navigation Iddown={'p19'} Idup={'p17'} />}</h5>
            <p className="text-justify">Se debe legalizar la construcción solicitando ante la Curaduría Urbana, el procedimiento de Reconocimiento de la Existencia de una Edificación, la construcción deberá tener mínimo cinco (05) años de construida.</p>
            <h5 className="fw-bold" id='p19'>¿Cuáles son las sanciones cuando se realiza una construcción sin licencia? {<Button_navigation Iddown={'p20'} Idup={'p18'} />}</h5>
            <p className="text-justify">Se incurre en una infracción urbanística, la cual se sanciona con multas, demolición de lo construido y/o cierre de la obra.</p>
            <h5 className="fw-bold" id='p20'>¿Qué pasa si una persona decide incrementar los pisos de su edificio, pero no solicita Licencia Urbanística con anticipación y qué sanción tiene? {<Button_navigation Iddown={'p21'} Idup={'p19'} />}</h5>
            <p className="text-justify">Una actividad de obra sin la debida autorización mediante una Licencia de Construcción constituye una Infracción Urbanística.</p>
            <p className="text-justify">Corresponde únicamente a las Alcaldías, en el Municipio se delegó esta función a las Inspecciones de control urbano, quienes son los encargados de imponer las sanciones  derivadas de  una infracción urbanística.</p>
            <h5 className="fw-bold" id='p21'>¿Cómo puedo solicitar un concepto de norma para un inmueble? {<Button_navigation Iddown={null} Idup={'p20'} />}</h5>
            <p className="text-justify">Decreto 1077 de 2015 Art. 2.2.6.1.3.1 numeral 2. Puede efectuar a través de la página web Solicitud de Conceptos , y efectuarlo de manera virtual adjuntando los documentos tales como Certificado de Tradición y Libertad del predio objeto de consulta, escritura pública, carta catastral y fotocopia de la cedula del solicitante y con cancelar las expensas correspondientes a dicho concepto, para lo cual se le informará mediante correo el valor a cancelar. Este trámite igualmente se puede hacer de manera presencial en nuestras oficinas.</p>
            <br />



            <table className="table table-bordered table-sm table-hover text-start">
              <tbody>
                {/* <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">RESOLUCIÓN 0462 - 2017 DOCUMENTOS QUE DEBERÁN ACOMPAÑAR LAS SOLICITUDES DE LICENCIAS URBANÍSTICAS</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath+"RESOLUCIÓN 0462 - 2017 DOCUMENTOS QUE DEBERÁN ACOMPAÑAR LAS SOLICITUDES DE LICENCIAS URBANISTICAS.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">CÓDIGOS USOS DEL SUELO</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath+"CODIGOS USOS DEL SUELO.docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
               <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">MANUAL DE ESPACIO PÚBLICO DE BUCARAMANGA MEPB</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath+"MEPB versión1.0.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>*/}
              </tbody>
            </table>

          </div >
        </div >
      </div >
    );
  }
}

export default FAQ;