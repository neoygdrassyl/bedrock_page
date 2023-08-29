import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBRow, MDBCol, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';
import FunService from '../../services/fun.service';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReCAPTCHA from "react-google-recaptcha";
import { infoCud } from '../../components/jsons/vars';
import { Button_navigation } from '../../components/button.component';

const recaptchaRef = React.createRef();
const MySwal = withReactContent(Swal);
class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
    }
  }
  render() {
    const { translation, breadCrums, swaMsg } = this.props;
    const homepath = "https://curaduria1bucaramanga.com/public_docs/OTHERS/";
    const types = [
      "Licencia de Construcción Obra Nueva",
      "Licencia de Construcción, Demolición Obra Nueva",
      "Licencia de Construcción Demolición, Cerramiento",
      "Licencia de Construcción, Ampliación",
      "Licencia de Construcción, Modificación",
      "Licencia de Construcción, Adecuación",
      "Licencia de Construcción Reforzamiento Estructura",
      "Licencia de Construcción, Restauración",
      "Licencia de Construcción, Cerramiento",
      "Licencia de Construcción, Modalidad Ampliación, Modificación",
      "Licencia de Construcción Modalidad Adecuación, Modificación",
      "Licencia de Construcción Modalidad Adecuación, Ampliación",
      "Licencia de Construcción, Modalidad  Ampliación Reforzamiento EstructuraL",
      "Licencia de Construcción, Modalidad Adecuación, Modificación, Reforzamiento Estructural",
      "Licencia de Construcción, Modalidad Adecuación, Ampliación, Reforzamiento Estructural",
      "Licencia de Construcción, Modalidad Ampliación, Demolición",
      "Licencia de Construcción, Modalidad Adecuación, Modificación, Demolición",
      "Licencia de Construcción Modalidad Adecuación, Ampliación, Demolición",
      "Licencia de Construcción, Modalidad Ampliación, Reforzamiento Estructural, Demolición",
      "Licencia de Construcción Modalidad Adecuación, Modificación, Reforzamiento Estructural, Demolición",
      "Licencia de Construcción, Modalidad Adecuación, Ampliación, Reforzamiento Estructural, Demolición",
      "Licencia de Construcción, Modalidad Ampliación, Adecuación, Modificación",
      "Licencia de Construcción, Modalidad Modificación, Reforzamiento Estructural, Demolición",
      "Licencia de Construcción, Modalidad Modificación, Ampliación, Adecuación, Reforzamiento Estructural",
      "Licencia de Construcción, Modalidad Modificación, Ampliación, Adecuación, Demolición",
      "Licencia de Construcción, Modalidad Modificación, Ampliación, Reforzamiento Estructural",
      "Licencia de Construcción, Modalidad Modificación, Ampliación, Reforzamiento Estructural, Demolición",
      "Licencia de Construcción, Modalidad Modificación, Ampliación, Demolición",
      "Licencia de Construcción, Modalidad Modificación, Ampliación, Adecuación, Reforzamiento estructural,  Demolición parcial",

      "Licencia Urbanización de Desarrollo",
      "Licencia Urbanización de Saneamiento",
      "Licencia de Urbanización de Reurbanización",
      "Licencia de Parcelación",
      "Licencia de Subdivisión Urbana",
      "Licencia de Subdivisión Rural",
      "Licencia de Subdivisión Reloteo",
      "Licencia de Intervención y Ocupación Espacio Público",

      "Reconocimiento de edificación, Modificación",
      "Reconocimiento de edificación, Ampliación",
      "Reconocimiento de edificación, Adecuación",
      "Reconocimiento de edificación, Reforzamiento Estructural",
      "Reconocimiento de edificación, Demolición Parcial",
      "Reconocimiento de edificación, Modificación, Demolición Parcial",
      "Reconocimiento de edificación, Modificación, Ampliación, Adecuación,  Reforzamiento Estructural, Demolición Parcial",
      "Reconocimiento de edificación, Ampliación, Reforzamiento Estructural",
      "Reconocimiento de edificación, Modificación, Reforzamiento Estructural",
      "Reconocimiento de edificación, Adecuación, reforzamiento Estructural",
      "Reconocimiento de edificación, Ampliación Demolición Parcial",
      "Reconocimiento de edificación, Adecuación, Demolición Parcial",
      "Reconocimiento de edificación, Ampliación, Modificación",
      "Reconocimiento de edificación, Modificación, Adecuación",
      "Reconocimiento de edificación, Ampliación, Adecuación",
      "Reconocimiento de edificación, Ampliación, Modificación, Reforzamiento Estructural",
      "Reconocimiento de edificación, Modificación, Reforzamiento Estructural, Demolición Parcial",
      "Reconocimiento de edificación, Ampliación, Adecuación, Modificación",
      "Reconocimiento de edificación, Ampliación, Adecuación, Modificación, Demolición Parcial",
      "Reconocimiento de edificación, Modificación, Reforzamiento Estructural, Demolición Parcial, Adecuación",
      "Reconocimiento de edificación, Ampliación, Modificación, Demolición Parcial",
      "Reconocimiento de edificación, Ampliación, Modificación, Demolición Parcial, Reforzamiento Estructural ",
      "Reconocimiento de edificación, Modificación, Demolición Parcial, Adecuación ",
    ]

    // FUNCTIONS & APIS
    var formData = new FormData();

    let generate_pdf = (e) => {
      e.preventDefault()
      const recaptchaValue = recaptchaRef.current.getValue();
      if (false) {
        return MySwal.fire({
          toast: true,
          position: 'center-center',
          timer: 4000,
          timerProgressBar: true,
          title: "Información Incompleta",
          text: "Asegurese que de usted no sea un robot <[O.O]>",
          icon: 'warning',
          showConfirmButton: false,
        });
      }
      MySwal.fire({
        title: swaMsg.title_wait,
        text: swaMsg.text_wait,
        icon: 'info',
        showConfirmButton: false,
      });
      formData = new FormData();
      let id_public = document.getElementById("sign_pdf_1").value
      formData.set('id_public', id_public);
      let type = document.getElementById("sign_pdf_2").value
      formData.set('type', type);
      let solicitor = document.getElementById("sign_pdf_3").value
      formData.set('solicitor', solicitor);
      let address = document.getElementById("sign_pdf_4").value
      formData.set('address', address);
      let height = document.getElementById("sign_pdf_5").value
      height += ' piso(s)';
      formData.set('height', height);
      let date = document.getElementById("sign_pdf_6").value
      formData.set('date', date);
      let daten = 1;
      formData.set('daten', daten);
      let size = document.getElementById("sign_pdf_7").value
      formData.set('size', size);
      let use = document.getElementById("sign_pdf_8").value
      formData.set('use', use);
      formData.set('text', infoCud.sign.text);
      formData.set('color', 'gold');

      formData.set('sign_type', 1);

      size == '1' ? size = "1m x 70cm" : size = "50cm x 30cm";

      FunService.gen_doc_sign(formData)
        .then(response => {
          if (response.data === 'OK') {
            MySwal.close();
            window.open(process.env.REACT_APP_API_URL + "/pdf/sign/" + "Valla " + id_public + " tamaño " + size + ".pdf");
            MySwal.close();
          } else {

          }
        })
        .catch(e => {
          console.log(e);
        });
    };
    const handleCheck = (e) => {
      console.log(e.target.checked)
      this.setState({ selectedValue: e.target.checked })
    }
    const Selected = () => {
      if (this.state.selectedValue == true) {
        return <>
          <option value="2">50cm x 30cm</option>
        </>
      } else if (this.state.selectedValue == false) {
        return <>
          <option value="1">1m x 70cm</option>
        </>
      }
    }
    // JSX COMPONENTS

    let signForm = <form onSubmit={generate_pdf} id="app_form_sign_pdf">
      <div className="row justify-content-start text-start">
        <div className=" col-6">
          <label>No. Radicación</label>
          <div class="input-group mb-3">
            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="fas fa-hashtag"></i>
            </span>
            <input type="text" class="form-control" id="sign_pdf_1" required />
          </div>
        </div>
        <div className=" col-5">
          <div class="form-check py-4">
            <input class="form-check-input" defaultChecked={false} type="checkbox" value="" id="flexCheckDefault" onChange={(e) => handleCheck(e)} />
            <label class="form-check-label"> ¿SUJETO A PROPIEDAD HORIZONTAL? </label>
          </div>
        </div>
        <div className=" col-12 ">
          <label className='text-start'>Tipo de Solicitud</label>
          <div class="input-group mb-3">
            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="far fa-check-square"></i>
            </span>
            <select className='form-select' id="sign_pdf_2" required >
              {types.map(value => <option>{value}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className=" col">
          <label>Solicitante</label>
          <div class="input-group mb-3">
            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="far fa-user"></i>
            </span>
            <input type="text" class="form-control" id="sign_pdf_3" required />
          </div>
        </div>

        <div className=" col">
          <label>Dirección Predio</label>
          <div class="input-group mb-3">
            <span class="input-group-text  text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="fas fa-home"></i>
            </span>
            <input type="text" class="form-control" id="sign_pdf_4" required />
          </div>
        </div>

        <div className=" col">
          <label>Uso</label>
          <div class="input-group mb-3">
            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="fas fa-list-ul"></i>
            </span>
            <input type="text" class="form-control" id="sign_pdf_8" required />
          </div>
        </div>
      </div>

      <div className="row">
        <div className=" col-3">
          <label>No. Pisos</label>
          <div class="input-group mb-3">
            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="fas fa-ruler-vertical"></i>
            </span>
            <input type="number" min={0} step={1} class="form-control" id="sign_pdf_5" required />
          </div>
        </div>

        <div className=" col-3">
          <label>Medida / Dimensión</label>
          <div class="input-group mb-3">
            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="fas fa-ruler-combined"></i>
            </span>
            <select className='form-select' id="sign_pdf_7" required>
              {Selected()}
            </select>
          </div>
        </div>

        <div className=" col-6">
          <label>Fecha de Radicación</label>
          <div class="input-group mb-3">
            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
              <i class="far fa-calendar-alt"></i>
            </span>
            <input type="date" class="form-control" id="sign_pdf_6" required />
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="Col-4"></div>
        <div className="Col-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_HTML}
          />
        </div>
      </div>

      <div className="row">
        <div className="Col-12">
          <div className="text-center py-4 mt-3">
            <button className="btn btn-danger"><i class="far fa-file-pdf"></i> GENERAR DOCUMENTO </button>
          </div>
        </div>
      </div>
    </form>

    return (
      <div className="File container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">Informacion de apoyo</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-8">
            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h2 className='px-2 py-0 fw-normal'>Documentos de apoyo</h2>
                </div>
              </div>
            </div>
            <h2 class="text-uppercase text-center pb-2 py-2" id='title'>FORMATOS {<Button_navigation Iddown={'herramientas'} Idup={null} />}</h2>
            <hr />

            <table className="table table-bordered table-sm table-hover text-start">
              <tbody>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">FORMULARIO ÚNICO NACIONAL</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Formulario único nacional_2022.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>

                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">FORMATO OTRAS ACTUACIONES</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "FORMATO OTRAS ACTUACIONES.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>

                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">Poder Licencia Urbanística Persona Jurídica</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Poder Licencia Urbanistica Persona Juridica (F-PJ-017).docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">Poder Licencia Urbanística Persona Natural</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Poder Licencia Urbanistica Persona Natural (F-PN-018).docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">DECLARACIÓN DE ANTIGÜEDAD DE LA CONSTRUCCIÓN</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "DECLARACION DE ANTIGÜEDAD DE LA PROPIEDAD (F-DAC-012).docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">RETIE</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "RETIE.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>

                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">MANUAL DE ESPACIO PÚBLICO DE BUCARAMANGA MEPB</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "MEPB versión1.0.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">INFORME DE DEMOLICIÓN</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Informe de demolicion.docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">FORMATO VALLA / <b>AVISO INFORMATIVO</b> </label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "FORMATO VALLA INFORMATIVA.docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">OFICIO RADICACIÓN VALLA INFORMATIVA </label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "OFICIO RADICACIÓN VALLA INFORMATIVA.docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">EDIFICIO PROPIEDAD HORIZONTAL </label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "EDIFICIO PROPIEDAD HORIZONTAL (F-PH-013) (2).docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>

                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">GUÍA ACTA DE ASAMBLEA</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "EDIFICIO PROPIEDAD HORIZONTAL (F-PH-013).docx"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>

                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">Autorización notificación por correo electrónico</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Autorización notificación por correo electrónico.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table className="table table-bordered table-sm table-hover text-start">
              <tbody>
                <tr className="app-p lead text-center fw-bold text-uppercase">
                  <td colSpan={'2'}> <label className='text-justify fw-normal ' id='norms'><b>GUIAS</b> {<Button_navigation Iddown={'aviso'} Idup={'herramientas'} />}</label></td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">MANUAL ESPACIO PUBLICO BUCARAMANGA</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "MEPB versión1.0.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">NORMAS DE ACCESIBILIDAD, REQUISITOS SUPERINTENDENCIA</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "CARTILLA SENTENCIA 333.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">Códigos de uso del suelo asociados a normas urbanas</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "CODIGO DE USOS - CONSULTAS NORMA URBANISTICA.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <table className="table table-bordered table-sm table-hover text-start">
              <tbody>
                <tr className="app-p lead text-center fw-bold text-uppercase">
                  <td colSpan={'2'}> <label className='text-justify fw-normal fw-bold ' id='aviso'>PROCEDIMIENTOS {<Button_navigation Iddown={null} Idup={'norms'} />}</label></td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">PROPIEDAD HORIZONTAL EJEMPLO 1</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Plano 1.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">PROPIEDAD HORIZONTAL EJEMPLO 2</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Plano 2.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>
                <tr>
                  <td><label className="app-p lead text-justify fw-normal text-uppercase">GUÍA FORMATO PLANO DE GEOREFERENCIACIÓN EJEMPLO</label></td>
                  <td><a className="btn btn-danger"
                    href={homepath + "Plano de localizacion.pdf"} target="_blank">
                    <i class="fas fa-cloud-download-alt"></i> Descargar
                  </a>
                  </td>
                </tr>

              </tbody>
            </table>
            <Collapsible className='text-center' openedClassName='text-center' trigger={<><label className="m-2 fw-normal text-center" id='vaya'>GENERAR VALLA / <b>AVISO INFORMATIVO</b></label> <button className="btn btn-warning btn-sm my-2 text-center"><i class="fas fa-plus"></i> GENERAR</button></>}>
              {signForm}
            </Collapsible>

            <MDBTypography note style={{ backgroundColor: '#EDEDED' }}>
              <p className="text-justify text-dark">Nota: En solicitudes de proyectos de Parcelación, Urbanización, y construcción en cualquiera de sus modalidades, el peticionario de la licencia deberá instalar una valla resistente a la intemperie de fondo amarillo y letras negras con una dimensión mínima de un metro (1.00 m) por setenta (70) centímetros. Tratándose  de  solicitudes  de  licencia  de construcción  individual  de  vivienda  de  interés social, se instalara un aviso de treinta (30) centímetros por (50) centímetros en lugar visible desde la vía pública.</p>
              <p className="text-justify text-dark">Cuando se solicite licencia para el desarrollo de obras de construcción en las modalidades de Ampliación, Adecuación, Restauración o demolición en edificios o conjunto sometidos al  régimen de  propiedad horizontal, se instalara un  aviso de treinta (30)  centímetros por cincuenta (50) centímetros en la cartelera principal del edificio o conjunto, o en lugar de amplia circulación que determine la administración.</p>
            </MDBTypography>

            <MDBTypography note style={{ backgroundColor: '#EDEDED' }}>
              <h3 className="text-justify text-dark">Documentos de información y de consulta</h3>
              <p className="text-justify text-dark">Para conocer más sobre los requisitos de radicación u otros tipos de consulta documental, diríjase al siguiente <Link to={{ pathname: "/faq", hash: "#documents", }}>Link</Link > en la sección de preguntas frecuentes de la Curaduría No. 1 de Bucaramanga.</p>
            </MDBTypography>
          </div >
        </div >
      </div >
    );
  }
}

export default File;