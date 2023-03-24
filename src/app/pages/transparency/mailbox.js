import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Map from '../../components/map'
import MailboxService from '../../services/mailbox.service'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReCAPTCHA from "react-google-recaptcha";
import IMG_MAP from '../../img/cur/cur_mapa.png'


const recaptchaRef = React.createRef();
class Mailbox extends Component {
  render() {
    const { translation, swaMsg, breadCrums } = this.props;
    const MySwal = withReactContent(Swal);
    var formData = new FormData();

    let handleSubmit = (event) => {
      event.preventDefault();

      const recaptchaValue = recaptchaRef.current.getValue();

      if (!recaptchaValue) {
        MySwal.fire({
          toast: true,
          position: 'center-center',
          timer: 4000,
          timerProgressBar: true,
          title: "Información Incompleta",
          text: "Asegurese que de usted no sea un robot <[O.O]>",
          icon: 'warning',
          showConfirmButton: false,
        });
        return 1;
      }


      MySwal.fire({
        title: swaMsg.title_wait,
        text: swaMsg.text_wait,
        icon: 'info',
        showConfirmButton: false,
      });
      MailboxService.create(formData)
        .then(response => {
          if (response.data === 'OK') {
            MySwal.fire({
              title: swaMsg.mailbox_success_title,
              text: swaMsg.mailbox_success_text,
              footer: swaMsg.text_footer,
              icon: 'success',
              confirmButtonText: swaMsg.text_btn,
            });
            document.getElementById("app-form").reset();
            formData = new FormData();
          }
        })
        .catch(e => {
          console.log(e);
        });
    };

    return (
      <div className="Mailbox container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_44}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-12">
            <h2 class="text-uppercase text-center pb-2">{translation.title}</h2>
            <hr />
            <MDBContainer>

              <MDBRow className='mb-3'>
                <MDBCol sm="24" md="12" lg="6">
                  <h3 class="text-uppercase text-center pb-2">{translation.subTitle_5}</h3>
                  <MDBCard className="bg-card">
                    <MDBCardBody>
                      <MDBCardText>
                        <div>

                          <ul>
                            <li><b>CONSULTA CON EL CURADOR URBANO: </b>lunes a viernes de 7 a.m. a 12:30 p.m.</li>
                            <li><b>ATENCIÓN A VECINOS / TERCEROS INTERESADOS:</b> lunes a viernes de 7 a.m. a 12:30 p.m.</li>
                            <li><b>ENTREGA DE PLANOS PARA COPIAS Y EJECUTORIAS:</b> martes y jueves de 7 a.m. a 12:30 p.m.</li>
                            <li><b>ASISTENCIA TÉCNICA CON REVISOR ESTRUCTURAL / REVISORA JURÍDICA:</b> miércoles y viernes de 2:00 p.m. a 4:00 p.m.</li>
                            <li><b>ASISTENCIA TÉCNICA CON ARQUITECTO REVISOR (PROYECTOS RADICADOS):</b> lunes, miércoles y viernes de 7:00 a.m. a 12:30 p.m.</li>
                            <li><b>ASISTENCIA TÉCNICA CON ARQUITECTO REVISOR (PREVIO A RADICACIÓN):</b> martes y jueves de 7:00 a.m. a 12:30 p.m.</li>
                          </ul>

                        </div>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>



                <MDBCol sm="24" md="12" lg="6">
                  <h3 class="text-uppercase text-center pb-2">INFORMACIÓN DE CONTACTO</h3>
                  <MDBCard className="bg-card">
                    <MDBCardBody>
                      <MDBCardText>
                        <table className="table table-borderless">
                          <tbody className="fw-bold">
                            <tr>
                              <th><i class="far fa-calendar-alt fa-2x"></i></th>
                              <td><p>Para agendamiento de citas hacer click <Link to={'/scheduling'}>Aqui.</Link></p> </td>
                            </tr>
                            <tr>
                              <th><i class="fab fa-wpforms fa-2x"></i></th>
                              <td><p>Para radicación de PQRS hacer click <Link to={'/pqrs'}>Aqui.</Link></p></td>
                            </tr>
                            <tr>
                              <th> <i class="fas fa-user-tie fa-2x"></i></th>
                              <td><p>Para información del curador y talento humano hacer click <Link to={'/curator'}>Aqui.</Link></p></td>
                            </tr>
                            <tr>
                              <th><i class="fas fa-info fa-2x"></i></th>
                              <td><p>Para mas información de la curaduria hacer click <Link to={'/organization'}>Aqui.</Link></p></td>
                            </tr>
                          </tbody>
                        </table>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>

              <MDBRow className='mb-3'>
                <MDBCol sm="24" md="12" lg="6">
                  <h3 class="text-uppercase text-center pb-2">{translation.subTitle_1}</h3>
                  <MDBCard className="bg-card">
                    <MDBCardBody>
                      <MDBCardText>
                        <table className="table table-borderless">
                          <tbody className="fw-bold">
                            <tr>
                              <th><i class="fas fa-map-marked-alt fa-2x"></i></th>
                              <td><p>{translation.text_11}</p> </td>
                            </tr>
                            <tr>
                              <th><i class="fas fa-building fa-2x"></i></th>
                              <td><p>{translation.text_12}</p></td>
                            </tr>
                            <tr>
                              <th> <i class="fas fa-clock fa-2x"></i></th>
                              <td><p>{translation.text_13}</p></td>
                            </tr>
                            <tr>
                              <th><i class="fas fa-map-marked-alt fa-2x"></i></th>
                              <td><p>{translation.text_14}</p></td>
                            </tr>
                          </tbody>
                        </table>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol sm="24" md="12" lg="6">
                  <h3 class="text-uppercase text-center mb-3">{translation.subTitle_2}</h3>
                  <MDBCard className="bg-card">
                    <MDBCardBody>
                      <MDBCardText>
                        <table className="table table-borderless">
                          <tbody className="fw-bold">
                            <tr>
                              <th> <i class="fas fa-mobile-alt fa-2x"></i></th>
                              <td><p>{translation.text_21}</p> </td>
                            </tr>
                            <tr>
                              <th><i class="fas fa-phone-alt fa-2x"></i></th>
                              <td><p>{translation.text_22}</p></td>
                            </tr>
                            <tr>
                              <th><i class="fas fa-envelope fa-2x"></i></th>
                              <td><p>{translation.text_23}</p></td>
                            </tr>
                            <tr>
                              <th><i class="fab fa-whatsapp fa-2x"></i></th>
                              <td><p><a target="_blank" href="/">{translation.text_24}</a></p></td>
                            </tr>
                          </tbody>
                        </table>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>

              <MDBRow className='mb-3'>
                <MDBCol md="24" lg="24">
                  <h3 class="text-uppercase text-center pb-3">{translation.subTitle_3}</h3>
                  <MDBCard className="bg-card">
                    <MDBCardBody>
                      <img src={IMG_MAP} width="100%" />
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <MDBRow className='mb-3'>
                <MDBCol md="24" lg="24">
                  <h3 class="text-uppercase text-center pb-3" id="form">{translation.subTitle_4}</h3>
                  <MDBCard className="bg-card">
                    <MDBCardBody>
                      <MDBCardTitle className="mb-3"><h4>{translation.text_41}</h4></MDBCardTitle>
                      <form onSubmit={handleSubmit} id="app-form">
                        <div class="input-group mb-3">
                          <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                            <i class="fas fa-file-signature"></i>
                          </span>
                          <input type="text" class="form-control" placeholder={translation.form_name}
                            required onChange={(e) => formData.set('name', e.target.value)} />
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                            <i class="fas fa-envelope"></i>
                          </span>
                          <input type="email" class="form-control" placeholder={translation.form_email}
                            onChange={(e) => formData.set('email', e.target.value)} />
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                            <i class="fas fa-mobile-alt"></i>
                          </span>
                          <input type="text" class="form-control" placeholder={translation.form_number}
                            onChange={(e) => formData.set('number', e.target.value)} />
                        </div>

                        <div class="input-group mb-3">
                          <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                            <i class="fas fa-paper-plane"></i>
                          </span>
                          <input type="text" class="form-control" placeholder={translation.form_subject}
                            required onChange={(e) => formData.set('subject', e.target.value)} />
                        </div>

                        <div class="input-group mb-1">
                          <span class="input-group-text text-white" id="message" style={{ backgroundColor: '#107ABC' }}><i class="fas fa-comment-alt"></i></span>
                          <input type="text" class="form-control" placeholder={translation.form_message} disabled />
                        </div>
                        <textarea class="form-control" rows="3"
                          required onChange={(e) => formData.set('message', e.target.value)}></textarea>

                        <div className="row d-flex justify-content-center">
                          <div className="col mt-3 ms-3">
                            <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_HTML}
                            />
                          </div>
                        </div>

                        <div className="text-center py-4 mt-3">
                          <button className="btn btn-lg btn-info" type="submit"> {translation.form_btn} </button>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div >
        </div >
      </div >
    );
  }
}

export default Mailbox;