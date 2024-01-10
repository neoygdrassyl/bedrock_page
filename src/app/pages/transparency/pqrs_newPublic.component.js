import React, { Component } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PQRS_Service from '../../services/pqrs_main.service';
import HolyDays from '../../components/holydays.list.json'
import ReCAPTCHA from "react-google-recaptcha";
import COLOMBIA_JSON from '../../components/jsons/colombia.json'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdb-react-ui-kit';

const moment = require('moment');
const momentB = require('moment-business-days');
const MySwal = withReactContent(Swal);
const recaptchaRef = React.createRef();

class PQRS_PUBLIC_NEW extends Component {
    constructor(props) {
        super(props);
        this.GET_LAST_ID = this.GET_LAST_ID.bind(this);
        this.inputRef = React.createRef();
        this.state = {
            solicitors: 1,
            contacts: 1,
            licence: false,
            attachs: 0,
            files: 0,
        };
    }
    componentDidMount() {
        this.set_State_List();
        this.set_County_List();
    }
    componentDidUpdate(prevState) {
        if (this.state.contacts != prevState.contacts) {
            this.set_New_Selects(this.state.contacts - 1)
        }
    }
    set_State_List(_object) {
        let _STATE_SELECTS = document.getElementsByName('pqrs_public_3_5');
        let _SELECT = _STATE_SELECTS[0];
        for (var i = 0; i < COLOMBIA_JSON.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = COLOMBIA_JSON[i].departamento;
            if (COLOMBIA_JSON[i].departamento == "Santander") opt.selected = true;
            _SELECT.appendChild(opt);
        }
    }
    set_County_List(_object) {
        let _COUNTY_SELECTS = document.getElementsByName('pqrs_public_3_6');
        let _SELECT = _COUNTY_SELECTS[0]
        let COUNTIES = COLOMBIA_JSON[26].ciudades;

        if (_object) {
            let id = _object.target.id.split('_')[1];
            _SELECT = _COUNTY_SELECTS[id];
            var index = COLOMBIA_JSON.findIndex(function (item, i) {
                return item.departamento === _object.target.value
            });
            COUNTIES = COLOMBIA_JSON[index].ciudades;
        }

        _SELECT.innerHTML = ""
        for (var i = 0; i < COUNTIES.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = COUNTIES[i];
            if (COUNTIES[i] == "Bucaramanga") opt.selected = true;
            _SELECT.appendChild(opt);
        }
    }
    set_New_Selects(id) {
        let _STATE_SELECT = document.getElementById('STATE_' + id);
        for (var i = 0; i < COLOMBIA_JSON.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = COLOMBIA_JSON[i].departamento;
            if (COLOMBIA_JSON[i].departamento == "Santander") opt.selected = true;
            _STATE_SELECT.appendChild(opt);
        }

        let _COUNTY_SELECT = document.getElementById('COUNTY_' + id);
        let COUNTIES = COLOMBIA_JSON[26].ciudades;

        _COUNTY_SELECT.innerHTML = ""
        for (var i = 0; i < COUNTIES.length; i++) {
            var opt = document.createElement('option');
            opt.innerHTML = COUNTIES[i];
            if (COUNTIES[i] == "Bucaramanga") opt.selected = true;
            _COUNTY_SELECT.appendChild(opt);
        }
    }
    addSolicitor() {
        this.setState({ solicitors: this.state.solicitors + 1 })
    }
    minusSolicitor() {
        this.setState({ solicitors: this.state.solicitors - 1 })
    }
    addContact() {
        this.setState({ contacts: this.state.contacts + 1 });
    }
    minusContact() {
        this.setState({ contacts: this.state.contacts - 1 })
    }
    addAttach() {
        this.setState({ attachs: this.state.attachs + 1 })
    }
    minusAttach() {
        this.setState({ attachs: this.state.attachs - 1 })
    }
    toggleLicense() {
        this.setState({
            licence: !this.state.licence
        });
    }

    async GET_LAST_ID(e) {
        try {
            e.preventDefault();

            
            const recaptchaValue = recaptchaRef.current ? recaptchaRef.current.getValue() : true;

            if (!recaptchaValue) {
            // if (false) {
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
            this.generatePQRS()
            MySwal.fire({
                title: this.props.swaMsg.title_wait,
                text: this.props.swaMsg.text_wait,
                icon: 'info',
                showConfirmButton: false,
            });
        } catch (e) {
            MySwal.fire({
                title: this.props.swaMsg.generic_eror_title,
                text: this.props.swaMsg.generic_error_text,
                icon: 'warning',
                confirmButtonText: this.props.swaMsg.text_btn,
            });
            console.log(e)
        }
    }

    async generatePQRS() {
        var formData = new FormData();

        let array_form = [];
        let array_html = [];


        // GET DATA OF MASTER
        let master_content = document.getElementById("pqrs_public_1_2").value;
        formData.set('master_content', master_content);
        let master_type = document.getElementById("pqrs_public_1_1").value;
        formData.set('master_type', master_type);
        let info_radication_chanel = "Canal Electrónico (Formulario Página Web)";
        formData.set('info_radication_chanel', info_radication_chanel);


        // GET DATA OF TIME
        let time_creation = moment().format('YYYY-MM-DD HH:mm');
        formData.set('time_creation', time_creation);
        let time_legal = moment(time_creation, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD');
        let time = moment(time_creation, 'YYYY-MM-DD HH:mm').format('H');
        if (time > 16) {
            time_legal = this._GET_NEXT_BUSSINESS_DAY(time_creation);
        }
        formData.set('time_legal', time_legal);

        let time_time = 15;
        if (master_type == "Peticion General") time_time = 15;
        if (master_type == "Peticion de documentos y de información") time_time = 10;
        if (master_type == "Peticion de consulta") time_time = 30;
        formData.set('time_time', time_time);


        // GET DATA OF SOLICITORS
        formData.set('solicitors_length', this.state.solicitors);
        array_html = document.getElementsByName("pqrs_public_2_1");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('solicitor_name', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_2_2");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('solicitor_type', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_2_3");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('solicitor_id_number', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_2_4");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('solicitor_type_id', array_form);
        array_form = [];
        array_html = [];



        // GET DATA OF CONTACTS
        formData.set('contacts_length', this.state.contacts);
        array_html = document.getElementsByName("pqrs_public_3_1");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('contact_address', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_3_2");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('contact_neighbour', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_3_3");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('contact_phone', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_3_4");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('contact_email', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_3_5");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('contact_state', array_form);
        array_form = [];
        array_html = [];

        array_html = document.getElementsByName("pqrs_public_3_6");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('contact_county', array_form);
        array_form = [];
        array_html = [];



        array_html = document.getElementsByName("pqrs_public_3_7");
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].checked)
        }
        formData.set('contact_check', array_form);
        array_form = [];
        array_html = [];

        // GET DATA OF 
        let fun_id_public = document.getElementById("pqrs_public_4_1").value;
        formData.set('fun_id_public', fun_id_public);
        let fun_catastral = document.getElementById("pqrs_public_4_2").value;
        formData.set('fun_catastral', fun_catastral);
        let fun_person = document.getElementById("pqrs_public_4_3").value;
        formData.set('fun_person', fun_person);


        // GET DATA OF ATTACHS
        let files = document.getElementsByName("files") ? document.getElementsByName("files") : [];
        //if (this.files.length <= 0) return;
        formData.set('attachs_length', this.state.attachs);
        for (var i = 0; i < this.state.attachs; i++) {
            if (files[i].enctype != 'jpg' || files[i].enctype != 'jpeg' || files[i].enctype != 'png' || files[i].enctype != 'pdf' || files[i].enctype != 'pln' || files[i].enctype != 'dwg' || files[i].enctype != 'rvp') {
                MySwal.fire({
                    toast: true,
                    position: 'center-center',
                    timer: 3000,
                    timerProgressBar: true,
                    title: "ARCHIVO ANEXO NO ADMITIDO",
                    text: "Uno o más de los archivos anexos no es un tipo de archivo permitido.",
                    icon: 'warning',
                    showConfirmButton: false,
                });
                return 1;
            }
            if (files[i].files[0].length < 10485760) {
                formData.append('file', files[i].files[0], "pqrs_" + files[i].files[0].name)
            } else {
                return MySwal.fire({
                    title: this.props.swaMsg.generic_eror_title,
                    text: 'El archivo pesa mas de 10MB',
                    icon: 'warning',
                    confirmButtonText: this.props.swaMsg.text_btn,
                });
            }
        }
        array_html = document.getElementsByName("files_names") ? document.getElementsByName("files_names") : [];
        for (var i = 0; i < array_html.length; i++) {
            array_form.push(array_html[i].value)
        }
        formData.set('files_names', array_form);
        array_form = [];
        array_html = [];



        await PQRS_Service.create_public(formData)
            .then(response => {
                if (response.data === 'OK') {
                    MySwal.fire({
                        title: "FORMULARIO ENVIADO CON EXITO",
                        text: "Se ha procesado con éxito la formulación de una nueva Petición, en las próximas 24 horas recibirá un correo de Confirmación por parte del equipo técnico de la Curaduría.",
                        icon: 'success',
                        confirmButtonText: this.props.swaMsg.text_btn,
                    });
                    document.getElementById('app_form_pqrs_public_new').reset()
                }
                else {
                    MySwal.fire({
                        title: this.props.swaMsg.generic_eror_title,
                        text: this.props.swaMsg.generic_error_text,
                        icon: 'warning',
                        confirmButtonText: this.props.swaMsg.text_btn,
                    });
                }

            })
            .catch(e => {
                console.log(e);
                MySwal.fire({
                    title: this.props.swaMsg.generic_eror_title,
                    text: this.props.swaMsg.generic_error_text,
                    icon: 'warning',
                    confirmButtonText: this.props.swaMsg.text_btn,
                });
            });
    };

    _GET_NEXT_BUSSINESS_DAY = (_date) => {
        let date = _date;
        date = momentB(date).nextBusinessDay();
        let _year = moment(date).format('YYYY');
        let _month = moment(date).format('MM') - 1;
        let _day = moment(date).format('D');
        if (HolyDays[_year][_month][_day]) return this._GET_NEXT_BUSSINESS_DAY(date)
        return moment(date).format('YYYY-MM-DD');
    }


    render() {
        const { translation, swaMsg, globals, translation_form, } = this.props;
        const { solicitors, contacts, licence, attachs } = this.state;

        // DATA GETTER

        // JSX COMPONENT
        let _INFO_COMPONENT = () => {
            return <>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <label>Clasificación de la Petición</label> <label className='text-danger'> * </label>
                        <div class="input-group mb-3">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-check-square"></i>
                            </span>
                            <select class="form-select" id="pqrs_public_1_1" required>
                                <option>Petición General</option>
                                <option>Petición de documentos y de información</option>
                                <option>Petición de consulta</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-6">
                        <label>Tipo de la Petición:</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-check-square"></i>
                            </span>
                            <select class="form-select">
                                <option>Petición</option>
                                <option>Queja / Reclamo</option>
                                <option>Solicitud de Información</option>
                                <option>Denuncia</option>
                                <option>Sugerencia / Propuesta</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col">
                        <label>Descripción de la Petición (Maximo 2000 Caracteres)</label> <strong className='text-danger'>*</strong>
                        <textarea class="form-control mb-3" rows="3" maxlength="2000" id="pqrs_public_1_2" required></textarea>
                    </div>
                </div>
            </>
        }

        let _SOLICITORS_COMPONENT = () => {
            var _COMPONENT = [];
            for (var i = 0; i < solicitors; i++) {
                _COMPONENT.push(<>

                    <div className="row">

                        <label className="app-p lead text-start fw-normal text-uppercase">SOLICITANTE N° {i + 1}</label>
                        <div className="col-6">
                            <label>Nombre completo </label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="fas fa-user"></i>
                                </span>
                                <input type="text" class="form-control" maxlength="100" name="pqrs_public_2_1" />
                            </div>
                        </div>

                        <div className="col-6">
                            <label>Tipo de solicitante</label>
                            <div class="input-group my-1">

                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="fas fa-user"></i>
                                </span>
                                <select class="form-select" name="pqrs_public_2_2">
                                    <option>NATURAL</option>
                                    <option>JURÍDICO</option>
                                    <option>ESTABLECIMIENTO DE COMERCIO</option>
                                    <option>MENOR DE EDAD/ADOLECENTE</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-6">
                            <label>Número de documento</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="far fa-id-card"></i>
                                </span>
                                <input type="text" class="form-control" maxlength="100" name="pqrs_public_2_3" />
                            </div>
                        </div>

                        <div className="col-6">
                            <label>Tipo de documento</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="far fa-id-card"></i>
                                </span>
                                <select class="form-select" name="pqrs_public_2_4">
                                    <option>CÉDULA DE CIUDADANÍA</option>
                                    <option>CÉDULA DE EXTRANJERÍA</option>
                                    <option>PASAPORTE</option>
                                    <option>NIT</option>
                                    <option>REGISTRO CIVIL</option>
                                    <option>TARJETA DE IDENTIDAD</option>
                                    <option>NÚMERO DE OFICIO EXTERNO</option>
                                    <option>DNI - DOCUMENTO NACIONAL DE IDENTIDAD</option>
                                    <option>PEP - PERMISO ESPECIAL DE PERMANENCIA</option>
                                    <option>CERTIFICADO ELECTORAL</option>
                                    <option>PERMISO DE PROTECCIÓN TEMPORAL</option>
                                    <option>OTRO</option>
                                </select>
                            </div>
                        </div>
                    </div>


                </>)
            }

            return <div>{_COMPONENT}</div>;
        }

        let _SOLICITORS_COMPONENT_ANON = () => {
            return <>
                <div className="row">

                    <label className="app-p lead text-start fw-normal text-uppercase">SOLICITANTE ANONIMO</label>
                    <div className="col-6">
                        <label>Nombre completo </label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-user"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" name="pqrs_public_2_1" value={'ANONIMO'} disabled />
                        </div>
                    </div>

                    <div className="col-6">
                        <label>Tipo de solicitante</label>
                        <div class="input-group my-1">

                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-user"></i>
                            </span>
                            <select class="form-select" name="pqrs_public_2_2" disabled>
                                <option>ANONIMO</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-6">
                        <label>Número de documento</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="far fa-id-card"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" name="pqrs_public_2_3" disabled />
                        </div>
                    </div>

                    <div className="col-6">
                        <label>Tipo de documento</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="far fa-id-card"></i>
                            </span>
                            <select class="form-select" name="pqrs_public_2_4" disabled>
                                <option>OTRO</option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        }

        let _CONTACTS_COMPONENT = () => {
            var _COMPONENT = [];
            for (var i = 0; i < contacts; i++) {
                _COMPONENT.push(<>
                    <div className="row">

                        <label className="app-p lead text-start fw-normal text-uppercase">DATOS PARA NOTIFICACIÓN N° {i + 1}</label>

                        <div className="col-6">
                            <label>Dirección física</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="fas fa-map-signs"></i>
                                </span>
                                <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_1" />
                            </div>
                        </div>

                        <div className="col-6">
                            <label>Barrio</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="fas fa-map-marked-alt"></i>
                                </span>
                                <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_2" />
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-6">
                            <label>Número de contacto</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="fas fa-phone-alt"></i>
                                </span>
                                <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_3" />
                            </div>
                        </div>

                        <div className="col-6">
                            <label>Correo electrónico</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="far fa-envelope"></i>
                                </span>
                                <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_4" />
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-6">
                            <label>Departamento</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="fas fa-globe-americas"></i>
                                </span>
                                <select class="form-select" onChange={(e) => this.set_County_List(e)}
                                    name="pqrs_public_3_5" id={'STATE_' + i} >
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <label>Municipio</label>
                            <div class="input-group my-1">
                                <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                    <i class="fas fa-globe-americas"></i>
                                </span>
                                <select class="form-select" name="pqrs_public_3_6" id={'COUNTY_' + i}>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12">
                            <div class="form-check mx-5 my-3">
                                <input class="form-check-input" type="checkbox" value="" name="pqrs_public_3_7" />
                                <p className="app-p mb-2 text-justify" > <small> Certifico que el correo electrónico ingresado en mis datos personales se encuentra vigente, de igual manera autorizo a la Curaduría N°1 de Bucaramanga para la Gestión de Peticiones ciudadanas para el envío de la respuesta a mi petición por este medio.</small></p>
                            </div>
                        </div>
                    </div>
                </>)
            }

            return <div>{_COMPONENT}</div>;
        }
        let _CONTACTS_COMPONENT_ANON = () => {
            return <>
                <div className="row">

                    <div className="col-6">
                        <label>Dirección física</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-map-signs"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_1" disabled />
                        </div>
                    </div>

                    <div className="col-6">
                        <label>Barrio</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-map-marked-alt"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_2" disabled />
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-6">
                        <label>Número de contacto</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-phone-alt"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_3" disabled />
                        </div>
                    </div>

                    <div className="col-6">
                        <label>Correo electrónico</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="far fa-envelope"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" name="pqrs_public_3_4" disabled />
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-6">
                        <label>Departamento</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-globe-americas"></i>
                            </span>
                            <select class="form-select" disabled
                                name="pqrs_public_3_5" id={'STATE_' + 0} >
                                <option>OTRO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <label>Municipio</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-globe-americas"></i>
                            </span>
                            <select class="form-select" name="pqrs_public_3_6" id={'COUNTY_' + 0} disabled>
                                <option>OTRO</option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        }

        let _ATTACHS_COMPONENT = () => {
            var _COMPONENT = [];
            for (var i = 0; i < attachs; i++) {
                _COMPONENT.push(<div className="row d-flex justify-content-center my-2">
                    <div className="col-lg-8 col-md-8 ">
                        <label className="app-p lead text-start fw-normal text-uppercase">DOCUMENTO ANEXO N° {i + 1}</label>
                        <div class="input-group">
                            <span class="input-group-text text-white" id="name" style={{ backgroundColor: '#107ABC' }}><i class="fas fa-paperclip"></i></span>
                            <input type="file" class="form-control" name="files" accept=".png, .jpeg, .pdf, .pln, .dwg, .rvp" />
                        </div>
                        <div class="input-group">
                            <span class="input-group-text text-white" id="name" style={{ backgroundColor: '#107ABC' }}><i class="fas fa-paperclip"></i></span>
                            <input type="text" class="form-control" name="files_names" placeholder="Nombre documento (nombre o corta descripcion)" />
                        </div>
                    </div>
                </div>)
            }

            return <div>{_COMPONENT}</div>;
        }
        let _LICENCE_COMPONENT = () => {
            return <>
                <p className="app-p mb-2"><small>Si su petición tiene que ver con una actuación o licencia de la Curaduría N°1 de Bucaramanga, u otra Curaduría, diligencie la siguiente información.</small></p>
                <div className="row">

                    <div className="col-6">
                        <label>Número de Radicación</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-map-signs"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" id="pqrs_public_4_1" />
                        </div>
                    </div>
                    <div className="col-6">
                        <label>N° Predial / Catastral</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-map-marked-alt"></i>
                            </span>
                            <input type="text" class="form-control" maxlength="100" id="pqrs_public_4_2" />
                        </div>

                    </div>
                </div>
                <div className="row">

                    <div className="col-6">
                        <label>Frente al documento, usted es:</label>
                        <div class="input-group my-1">
                            <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                                <i class="fas fa-user"></i>
                            </span>
                            <select class="form-select" id="pqrs_public_4_3">
                                <option>TITULAR DE LA ACTUACIÓN</option>
                                <option>INSTITUCIÓN DE CONTROL</option>
                                <option>VECINO COLINDANTE</option>
                                <option>INTERESADO</option>
                                <option>OTRO</option>
                            </select>
                        </div>
                    </div>
                </div>

            </>
        }
        let _AUTH_COMPONENT = () => {
            return <>
                <div className="row text-center">
                    <div className="col-12">
                        <div class="form-check mx-5 my-3">
                            <input class="form-check-input" type="checkbox" value="" name="pqrs_public_3_7" required />
                            <p className="app-p mb-2 text-justify" ><small> <label className='text-danger'>*</label> Acepto los Términos y Condiciones de tratamiento de datos  basada en Ley Estatutaria del Habeas Data (Ley 1581 del 2012)</small></p>
                        </div>
                    </div>
                </div>
                {process.env.REACT_APP_API_URL != 'https://dev.curaduria1bucaramanga.com.co/api' ?
                    <div className="row d-flex justify-content-center">
                        <div className="col-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_HTML}
                            />
                        </div>
                    </div>

                    : ''}

            </>
        }
        /*
        sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_HTML}
        */
        // FUNCTIONS & APIS  
        return (
            <div>
                <form onSubmit={this.GET_LAST_ID} id="app_form_pqrs_public_new" enctype="multipart/form-data">

                    <div className="border border-info p-3 mb-2">
                        <label className="app-p lead text-start fw-bold text-uppercase my-2">1. Descripción General / Objeto</label>
                        {_INFO_COMPONENT()}
                    </div>

                    <div className="border border-info p-3 mb-2">
                        <label className="app-p lead text-start fw-bold text-uppercase my-2">2. IDENTIFICACIóN DEL PETICIONARIO</label>

                        <div className="row text-center">
                            <div className="col-12">
                                <div class="form-check mx-5 my-3">
                                    <input class="form-check-input" type="checkbox" onChange={(e) => this.setState({ isAnon: e.target.checked })} />
                                    <p className="app-p mb-2 text-justify" ><small> Esta es una petición anonima</small></p>
                                </div>
                            </div>
                        </div>
                        {this.state.isAnon ?
                            _SOLICITORS_COMPONENT_ANON()
                            : <>
                                <p className="app-p mb-2"><small>Señor usuario tenga en cuenta que puede anexar más peticionarios en caso de que sea necesario, puede dar clic sobre el botón, <b>añadir otro</b>.</small></p>


                                <div className="text-start m-3">
                                    <MDBBtn className="btn btn-secondary" onClick={() => this.addSolicitor()}><i class="fas fa-plus-circle"></i> AÑADIR OTRO </MDBBtn>
                                    {solicitors > 1
                                        ? <MDBBtn className="btn btn-secondary mx-3" onClick={() => this.minusSolicitor()}><i class="fas fa-minus-circle"></i> REMOVER ULTIMO </MDBBtn>
                                        : ""}
                                </div>
                                {_SOLICITORS_COMPONENT()}
                            </>}

                    </div>

                    <div className="border border-info p-3 mb-2">
                        <label className="app-p lead text-start fw-bold text-uppercase">3. DATOS PARA NOTIFICACIÓN</label>
                        {this.state.isAnon ?
                            _CONTACTS_COMPONENT_ANON()
                            : <>
                                <div className="text-start m-3">
                                    <MDBBtn className="btn btn-secondary" onClick={() => this.addContact()}><i class="fas fa-plus-circle"></i> AÑADIR OTRO </MDBBtn>
                                    {contacts > 1
                                        ? <MDBBtn className="btn btn-secondary mx-3" onClick={() => this.minusContact()}><i class="fas fa-minus-circle"></i> REMOVER ULTIMO </MDBBtn>
                                        : ""}
                                </div>
                                {_CONTACTS_COMPONENT()}
                            </>
                        }



                    </div>

                    <div className="border border-info p-3 mb-2">
                        <label className="app-p lead text-start fw-bold text-uppercase">4. LA PQRS ESTÁ RELACIONADA CON ALGUNA ACTUACIÓN Y/O SOLICITUD URBANÍSTICA</label>
                        {_LICENCE_COMPONENT()}
                    </div>


                    <div className="border border-info p-3 mb-2">
                        <label className="app-p lead text-start fw-bold text-uppercase">5. DOCUMENTOS ANEXOS</label>
                        <p className="app-p mb-2"><small>Si posee imágenes o documentos que soporten su petición, deben ser anexados.
                            El sistema solo recibirá imágenes y documentos en formatos jpg, jpeg, png, pdf, pln, dwg y rvp.</small></p>
                        <p className="app-p mb-2"><small>Tenga en cuenta que el archivo no debe superar un tomaño mayor a 10MB, y en caso de que supere el tamaño por favor enviar el archivo al correo curaduriaurbana1@gmail.com.</small></p>
                        <div className="text-start m-3">
                            <MDBBtn className="btn btn-secondary" onClick={() => this.addAttach()}><i class="fas fa-plus-circle"></i> AÑADIR </MDBBtn>
                            {attachs > 0
                                ? <MDBBtn className="btn btn-secondary mx-3" onClick={() => this.minusAttach()}><i class="fas fa-minus-circle"></i> REMOVER ULTIMO </MDBBtn>
                                : ""}
                        </div>
                        {_ATTACHS_COMPONENT()}
                    </div>

                    <div className="border border-info p-3 mb-2">
                        <label className="app-p lead text-start fw-bold text-uppercase">6. TÉRMINOS Y CONDICIONES</label>
                        {_AUTH_COMPONENT()}


                        <div className="row text-center">
                            <div className="col-12">
                                <div class="form-check mx-5 my-3">
                                    <button class="btn  btn-lg text-white" style={{ backgroundColor: '#2651A8' }}>GENERAR PETICIÓN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default PQRS_PUBLIC_NEW;