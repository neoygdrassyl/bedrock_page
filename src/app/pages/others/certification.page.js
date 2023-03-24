import React, { useEffect, useState } from 'react';
import { addDecimalPoints, formsParser1 } from '../../components/customClasses/typeParse';
import UsersService from '../../services/users.service';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment';
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
let esLocale = require('moment/locale/es');
export default function CERTIFICATE_WORKER(props) {
    const translation = props.translation
    const swaMsg = props.swaMsg
    const MySwal = withReactContent(Swal);
    var formData = new FormData();
    var [method, setMethod] = useState(1);
    var [loadTable, setLoadTable] = useState(false)
    var [data, setData] = useState([]);
    var [title, setTitle] = useState('')
    var [subjectNumer, setNumber] = useState('')
    var [subjectRegistration, setRegistration] = useState('')
    var [id, setId] = useState('')

    useEffect(() => {
        if (data.length > 0) {
            setTitle((data[0].name + " " + data[0].surname).toUpperCase());
            setNumber(data[0].id_number);
            setRegistration(data[0].registration);
            var rad = document.getElementById('id_number').value
            setId(moment(`20${rad[0]}${rad[1]}-${rad[3]}${rad[4]}-${rad[5]}${rad[6]}`))
            setLoadTable(true);
        }
        if (data.length == 0) setLoadTable(false)
    }, [data]);

    // *********************** TABLE FUNCTIONS ************************** // 
    let getFun1 = (element) => {
        var type = element.fun_1 ? element.fun_1.split('&') : [];
        var suType = type[type.length - 1] ? type[type.length - 1].split(';') : [];
        var typeObject = {
            tipo: suType[0],
            tramite: suType[1],
            m_urb: suType[2],
            m_sub: suType[3],
            m_lic: suType[4]
        }

        return formsParser1(typeObject);
    }

    let getDates = (element) => {
        var state = element.states ? element.states.split(',') : [];
        var date = element.dates ? element.dates.split(',') : [];
        var date_start = '';
        var date_end = '';
        if (state.length) {
            if (state.includes('-1')) {
                var indexOf = state.indexOf('-1');
                date_start = date[indexOf];
            }
            if (state.includes('3')) {
                var indexOf = state.indexOf('3');
                date_start = date[indexOf];
            }
            if (state.includes('5')) {
                var indexOf = state.indexOf('5');
                date_start = date[indexOf];
            }
            if (state.includes('100')) {
                var indexOf = state.indexOf('100');
                date_end = date[indexOf]
            }
        }
        return [date_start, date_end]
    }
    // ******************************* APIS **************************** // 

    let handleSubmit = (e) => {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
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
        formData = new FormData();
        let id_number = document.getElementById('id_number').value;
        if (method == 1) id_number = addDecimalPoints(id_number);
        let _method = document.getElementById('method').value;
        MySwal.fire({
            title: swaMsg.title_wait,
            text: swaMsg.text_wait,
            icon: 'info',
            showConfirmButton: false,
        });
        UsersService.getCertificate(id_number, _method)
            .then(response => {
                if (method == '1' && response.data === 'NO2') {
                    setLoadTable(false)
                    return MySwal.fire({
                        title: 'NO SE ENCONTRÓ PROFESIONAL',
                        text: 'No hay profesional con este número de documento, verifique el numero de documento enviado.',
                        icon: 'warning',
                        confirmButtonText: swaMsg.text_btn,
                    });
                }

                else if (method == '1' && response.data === 'OK') {
                    MySwal.close();
                    window.open(process.env.REACT_APP_API_URL + "/pdf/certificate/" + "Certificacion Curaduria 1 Bucaramanga.pdf");
                }
                else if (method == '2' && response.data == 'NO2') {
                    setLoadTable(false)
                    return MySwal.fire({
                        title: 'NO SE ENCONTRÓ CERTIFICACIÓN',
                        text: 'No hay certificación con este número de serial, verifique el numero de serial enviado.',
                        icon: 'warning',
                        confirmButtonText: swaMsg.text_btn,
                    });
                }
                else if (method == '2' && response.data.content) {
                    setData(JSON.parse(JSON.parse(response.data.content)));
                    MySwal.close();
                }
                else {
                    MySwal.fire({
                        title: swaMsg.generic_eror_title,
                        text: swaMsg.generic_error_text,
                        icon: 'warning',
                        confirmButtonText: swaMsg.text_btn,
                    });
                }
            })
            .catch(e => {
                console.log(e);
                MySwal.fire({
                    title: swaMsg.generic_eror_title,
                    text: swaMsg.generic_error_text,
                    icon: 'warning',
                    confirmButtonText: swaMsg.text_btn,
                });
            });
    }

    return (
        <div>
            <div className="row my-4 d-flex justify-content-center">
                <div className="col-lg-8 col-md-12">
                    <h2 className="text-center my-4">CERTIFICACIÓN CURADURÍA 1 DE BUCARAMANGA</h2>
                    <br />
                    <p className="app-p lead text-justify">Para la expedición del certificado deberá ingresar el número de identificación (cédula) y la opción de generar certificación.</p>
                    <p className="app-p lead text-justify">Para verificar la integridad e inalterabilidad de la certificación digite el número de certificado que se encuentra en la esquina superior del documento y la opción verificar certificacion.</p>
                    <div className="d-flex justify-content-center">
                        <div className="bg-card w-50">
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    {method == 1 ?
                                        <div class="mb-3">
                                            <label for="number" class="form-label">{translation.str_id}</label>
                                            <input type="number" class="form-control" id="id_number" />
                                        </div>
                                        : <div class="mb-3">
                                            <label for="text" class="form-label">{translation.str_id2}</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend bg-info ">
                                                    <span class="input-group-text text-light" id="basic-addon1">OC</span>
                                                </div>
                                                <input type="text" class="form-control" id="id_number" />
                                            </div>

                                        </div>}
                                    <div class="mb-3">
                                        <label for="password" class="form-label">{translation.str_cert}</label>
                                        <select class="form-select me-1" id={"method"} onChange={e => setMethod(e.target.value)}>
                                            <option value="1">{translation.str_btn2}</option>
                                            <option value="2">{translation.str_btn4}</option>
                                        </select>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_HTML}
                                            />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <button type="submit" class="btn btn-info ">{translation.str_btn3}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loadTable ? <>
                <div className='d-flex justify-content-center my-3'>
                    <div className='col-10'>
                        <div className='row text-center'>
                            <h3 className='fw-bold'> EL CURADOR URBANO UNO DE BUCARAMANGA </h3>
                        </div>
                        <p className='text-justify'>En uso de sus facultades legales otorgadas por el Decreto Municipal No. 0070 del 4 de Junio de
                            2021 y el Acta de Posesión No 0125 del 7 de Junio de 2021, ley 400 de 1997, el Decreto 1077 de
                            2015 del Ministerio de Vivienda, Ciudad y Territorio y La Resolución número 0015 de 15 de
                            octubre de 2015 de la Comisión Asesora Permanente del régimen de construcciones Sismo
                            resistentes,</p>
                        <div className='row text-center'>
                            <h3 className='fw-bold'>CERTIFICA QUE:</h3>
                        </div>
                        <p className='text-justify'>Consultada la base de datos de la Curaduría urbana uno de Bucaramanga el señor {title} identificado
                            con la cédula de ciudadanía número {subjectNumer}, en su calidad de arquitecto/ingeniero con matrícula profesional {subjectRegistration},
                            figura como profesional en la(s) siguiente(s) solicitud(es) de actuacion(es) urbanística(s),</p>

                        <div className='row text-center'>
                            <h3 className='fw-bold'> CERTIFICACIÓN PROFESIONAL : {title} </h3>
                        </div>
                        <div className='row text-center border border-black py-2' style={{ backgroundColor: 'lightgray' }}>
                            <div className='col-2'>
                                <label className='fw-bol'>SOLICITUD</label>
                            </div>
                            <div className='col'>
                                <label className='fw-bol'>ACTUACION URBANISTICA</label>
                            </div>
                            <div className='col-2'>
                                <label className='fw-bol'>FECHA RADICACIÓN</label>
                            </div>
                            <div className='col-2'>
                                <label className='fw-bol'>FECHA EXPEDICIÓN</label>
                            </div>
                            <div className='col'>
                                <label className='fw-bol'>EN CALIDAD DE:</label>
                            </div>
                        </div>
                        {data.map((value, index) => <div className='row text-center border border-black py-2'>
                            <div className='col-2'>
                                <label>{value.id_public}</label>
                            </div>
                            <div className='col'>
                                <label>{getFun1(value)}</label>
                            </div>
                            <div className='col-2'>
                                <label>{getDates(value)[0]}</label>
                            </div>
                            <div className='col-2'>
                                <label>{getDates(value)[1]}</label>
                            </div>
                            <div className='col' >
                                <label >{value.roles}</label>
                            </div>
                        </div>
                        )}
                        <p className='text-justify'>El alcance de esta certificación corresponde a señalar que el profesional participó en el proceso de licenciamiento urbanístico y
                            su nombre, matricula profesional y firma está consignada en el formulario único nacional con el cual se tramitó la solicitud y es el
                            responsable de los documentos técnicos propios de la calidad en que actúa y de la información contenido en ellos.</p>
                        <p className='text-justify'>Se advierte que la presente certificación no crea ningún tipo de obligación laboral o civil frente al profesional,
                            ni frente a terceros, por parte del suscrito.</p>
                        <p>{`Dada en Bucaramanga a la ${moment(id).format('D')} días del mes de ${moment(id).locale('es', esLocale).format('MMMM')} del año ${moment(id).format('yyyy')}.`}</p>
                    </div>
                </div>

            </> : ""}
        </div >
    );
}
