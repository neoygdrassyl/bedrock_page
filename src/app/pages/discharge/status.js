import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBDropdown, MDBDropdownDivider, MDBDropdownItem, MDBDropdownLink, MDBDropdownMenu, MDBDropdownToggle, MDBInput, MDBInputGroup, MDBInputGroupElement } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CustomService from '../../services/custom.service';
import { addDecimalPoints, dateParser, dateParser_finalDate, formsParser1 } from '../../components/customClasses/typeParse';
import VIZUALIZER from '../../components/vizualizer.component';
import { Timeline } from 'rsuite';
import CheckRoundIcon from '@rsuite/icons/CheckRound';

const MySwal = withReactContent(Swal);
class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      object: null,
      type: null,
      objectID: [],
      id_number: null,
    };
  }
  componentDidMount() {
    let urlParams = this._CHECL_FOR_URL_PARAMS();
    if (urlParams) this.checkStatus(urlParams)
  }

  _CHECL_FOR_URL_PARAMS = () => {
    if (this.props.urlParams == undefined) return "";
    else return this.props.urlParams
  }

  _IDENTIFY_PROCESS_TYPE = (_doc) => {
    if (this.regexCheck_PQRS(_doc)) return "JUR"
    if (this.regexCheck_LICENCE(_doc)) return "LIC"
    if (this.regexCheck_NOMENCLATURE(_doc)) return "NOR"
    if (this.regexCheck_OA(_doc)) return "OA"
    if (this.regexCheck_IdNumber(_doc)) return "ID"
    if (this.regexCheck_VR(_doc)) return "VR"
    else return false
  }
  _IDENTIFY_PROCESS_NAME = (_doc) => {
    if (this.regexCheck_PQRS(_doc)) return "Petición"
    if (this.regexCheck_LICENCE(_doc)) return "Licencia"
    if (this.regexCheck_NOMENCLATURE(_doc)) return "Nomenclatura"
    if (this.regexCheck_OA(_doc)) return "Otra Actuación"
    if (this.regexCheck_VR(_doc)) return "Proceso"
    else return false
  }

  regexCheck_PQRS = (input) => {
    let regex = /^JUR\d\d-\d\d\d\d$/i;
    return regex.test(input);
  }
  regexCheck_LICENCE = (input) => {
    let regex = /^68001-1-\d\d-\d\d\d\d$/i;
    return regex.test(input);
  }
  regexCheck_OA = (input) => {
    let regex = /^OA\d\d-\d\d\d\d$/i;
    return regex.test(input);
  }
  regexCheck_IdNumber = (input) => {
    let regex = /^([0-9]{1,3}(.|,)){1}((([0-9]{3}(.|,)))*)[0-9]{3}$/i;
    let regex2 = /^[0-9]*$/i;
    let condition = regex.test(input) || regex2.test(input);
    return condition;
  }
  regexCheck_NOMENCLATURE = (input) => {
    let regex = /^N\d\d-\d\d\d\d$/i;
    return regex.test(input);
  }
  regexCheck_VR = (input) => {
    let regex = /^VR\d\d-\d\d\d\d$/i;
    return regex.test(input);
  }
  // FUNCTIONS & APIS
  checkStatus = (_value) => {
    this.setState({ object: "LOADING" });
    if (!_value.length) this.setState({ object: null })
    else {
      let doc_type = this._IDENTIFY_PROCESS_TYPE(_value);
      if (doc_type == "OA") {
        CustomService.checkStatus_Lc(_value)
          .then(response => {
            if (response.data[0]) {
              this.setState({
                object: response.data[0],
                type: "OA"
              })
            } else {
              MySwal.fire({
                title: "NO SE ENCONTRÓ INFORMACIÓN",
                text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
                icon: 'error',
                confirmButtonText: this.props.swaMsg.text_btn,
              });
              this.setState({ object: null })
            }
          })
          .catch(e => {
            console.log(e);
            MySwal.fire({
              title: "NO SE ENCONTRÓ INFORMACIÓN",
              text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
              icon: 'error',
              confirmButtonText: this.props.swaMsg.text_btn,
            });
            this.setState({ object: null })
          });
      }
      if (doc_type == "LIC") {
        CustomService.checkStatus_Lc(_value)
          .then(response => {
            if (response.data[0]) {
              this.setState({
                object: response.data[0],
                type: "LIC"
              })
            } else {
              MySwal.fire({
                title: "NO SE ENCONTRÓ INFORMACIÓN",
                text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
                icon: 'error',
                confirmButtonText: this.props.swaMsg.text_btn,
              });
              this.setState({ object: null })
            }
          })
          .catch(e => {
            console.log(e);
            MySwal.fire({
              title: "NO SE ENCONTRÓ INFORMACIÓN",
              text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
              icon: 'error',
              confirmButtonText: this.props.swaMsg.text_btn,
            });
            this.setState({ object: null })
          });
      }
      if (doc_type == "NOR") {
        CustomService.checkStatus_Nr(_value)
          .then(response => {
            if (response.data[0]) {
              this.setState({
                object: response.data[0],
                type: "NOR"
              })
            } else {
              MySwal.fire({
                title: "NO SE ENCONTRÓ INFORMACIÓN",
                text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
                icon: 'error',
                confirmButtonText: this.props.swaMsg.text_btn,
              });
              this.setState({ object: null })
            }
          })
          .catch(e => {
            console.log(e);
            MySwal.fire({
              title: "NO SE ENCONTRÓ INFORMACIÓN",
              text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
              icon: 'error',
              confirmButtonText: this.props.swaMsg.text_btn,
            });
            this.setState({ object: null })
          });
      }
      if (doc_type == "VR") {
        CustomService.checkStatus_Jur(_value)
          .then(response => {
            if (response.data[0]) {
              this.setState({
                object: response.data[0],
                type: "VR"
              })
            } else {
              MySwal.fire({
                title: "NO SE ENCONTRÓ INFORMACIÓN",
                text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
                icon: 'error',
                confirmButtonText: this.props.swaMsg.text_btn,
              });
              this.setState({ object: null })
            }
          })
          .catch(e => {
            console.log(e);
            MySwal.fire({
              title: "NO SE ENCONTRÓ INFORMACIÓN",
              text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
              icon: 'error',
              confirmButtonText: this.props.swaMsg.text_btn,
            });
            this.setState({ object: null })
          });
      }
      if (doc_type == "ID") {
        var idCurated = _value;
        let regex2 = /^[0-9]*$/i;
        let regex = /^([0-9]{1,3}(.|,)){1}((([0-9]{3}(.|,)))*)[0-9]{3}$/i;
        if (regex2.test(_value)) idCurated = addDecimalPoints(_value);
        else if (regex.test(_value)) idCurated = _value.replaceAll(',', '.');

        CustomService.checkStatus_In(idCurated)
          .then(response => {
            var list = response;
            if (response.data) {
              this.setState({
                objectID: list,
                object: 'SELECTID',
                id_number: _value,
                type: "ID"
              })
            } else {
              MySwal.fire({
                title: "NO SE ENCONTRÓ INFORMACIÓN",
                text: "No se encontró ningún proceso o documento expedido con el documento de identidad " + _value + ", asegúrese de que el valor sea correcto.",
                icon: 'error',
                confirmButtonText: this.props.swaMsg.text_btn,
              });
              this.setState({ objectID: null })
            }
          })
          .catch(e => {
            console.log(e);
            MySwal.fire({
              title: "NO SE ENCONTRÓ INFORMACIÓN",
              text: "No se encontró ningún proceso o documento expedido con el documento de identidad " + _value + ", asegúrese de que el valor sea correcto.",
              icon: 'error',
              confirmButtonText: this.props.swaMsg.text_btn,
            });
            this.setState({ objectID: null })
          });
      }
      //if (doc_type == "VR") {
      if (false) {
        CustomService.checkStatus_vr(_value)
          .then(response => {
            if (response.data[0]) {
              if (response.data[0].tramite != undefined) {
                this.setState({
                  object: response.data[0],
                  type: "OA"
                })
              } else {
                this.setState({
                  object: response.data[0],
                  type: "JUR"
                })
              }

            } else {
              MySwal.fire({
                title: "NO SE ENCONTRÓ INFORMACIÓN",
                text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
                icon: 'error',
                confirmButtonText: this.props.swaMsg.text_btn,
              });
              this.setState({ object: null })
            }
          })
          .catch(e => {
            console.log(e);
            MySwal.fire({
              title: "NO SE ENCONTRÓ INFORMACIÓN",
              text: "No se encontró ningún proceso o documento expedido con el consecutivo " + _value + ", asegúrese de que el valor sea correcto.",
              icon: 'error',
              confirmButtonText: this.props.swaMsg.text_btn,
            });
            this.setState({ object: null })
          });
      }
      if (!doc_type) this.setState({ object: null })
    }
  }

  render() {
    const { translation, swaMsg, breadCrums, urlParams } = this.props;

    let _PARSE_URL = (_path) => {
      var new_path = _path;
      new_path = new_path.toLowerCase();
      new_path = new_path.replace(/ /g, "");
      return new_path;
    }
    // DATA CONVERTERS
    let _CHECK_STATUS = () => {
      let searchValue = this.inputSearch.value;
      this.checkStatus(searchValue);
    }
    let _GET_CURATED_URL_NOME = (row) => {
      let url = row.path + '/' + row.filename;
      url = url.replace("docs/nomenclature/", "");
      return url;
    }
    let _GET_REPORTS = (c_asign, c_rev, c_rev_c, c_not, c_desc) => {
      let asigns = c_asign ? c_asign.split(';') : [];
      let rev = c_rev ? c_rev.split(';') : [];
      let rev_c = c_rev_c ? c_rev_c.split(';') : [];
      let not = c_not ? c_not.split(';') : [];
      let desc = c_desc ? c_desc.split(';') : [];

      let reports = [];

      for (let i = 0; i < 4; i++) {
        if (asigns[i] || rev[i] || rev_c[i] || not[i]) reports.push({
          asign: asigns[i] || 'POR ASIGNAR', rev: rev[i] || 'POR ASIGNAR', rev_c: rev_c[i], not: not[i] || 'POR ASIGNAR', desc: desc[i] || false
        })
      }

      if (reports.length == 0) reports.push({ asign: 'POR ASIGNAR', rev: 'POR ASIGNAR', rev_c: '-1', not: 'POR ASIGNAR', desc: false })

      return reports;
    }

    let _GET_REVIEW = (rev) => {
      if (rev == 0) return <i class="fas fa-times text-danger mx-1"></i>
      if (rev == 1) return <i class="fas fa-check text-success mx-1"></i>
      //if (rev == 2) return <i class="fas fa-circle text-warning mx-1"></i>
      if (rev == 2) return '';
      return <i class="fas fa-minus mx-1"></i>
    }

    // COMPONEN JSX
    let _SEARCH_COMPONENT = () => {
      return <>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <MDBInputGroup className='mb-3'>
            <MDBDropdown>
              <MDBDropdownToggle style={{ backgroundColor: '#107ABC' }}>TIPO DE PROCESO</MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={() => this.inputSearch.value = '68001-1-aa-0000'}>LICENCIA</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={() => this.inputSearch.value = 'OAaa-0000'}>OTRA ACTUACIÓN</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={() => this.inputSearch.value = 'VRaa-0000'}>PETICIÓN PQRS</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={() => this.inputSearch.value = 'VRaa-0000'}>NUMERO DE VENTANILLA ÚNICA (VR)</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={() => this.inputSearch.value = 'Naa-0000'}>NOMENCLATURA</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink onClick={() => this.inputSearch.value = ''}>BUSCAR POR CEDULA</MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBInputGroupElement type='text' inputRef={ref => this.inputSearch = ref} defaultValue={this._CHECL_FOR_URL_PARAMS()} />
            <MDBBtn style={{ backgroundColor: '#107ABC' }} onClick={() => _CHECK_STATUS()}>BUSCAR</MDBBtn>
          </MDBInputGroup>


        </div>
      </>
    }
    let _PROCESS_LINKS = (object, type) => {
      return object.map(value => {
        if (this._IDENTIFY_PROCESS_TYPE(value.id_public) == type) return <>
          <MDBBtn onClick={() => { this.inputSearch.value = value.id_public; _CHECK_STATUS() }}
            color='primary' size='sm' outline className='mt-1'>{value.id_public}</MDBBtn><br />
        </>
      })
    }
    let _RESULTS_COMPONENT = () => {
      let searchObject = this.state.object;
      let type = this.state.type;
      if (!searchObject) {
        return <h5 className="lead fw-bold">INGRESE UN IDENTIFICADOR VÁLIDO EN LA CAJA DE BÚSQUEDA</h5>
      }
      if (searchObject === "LOADING") {
        return <h5 className="lead fw-bold">BUSCANDO...</h5>
      }
      if (searchObject === "SELECTID") {
        return <h5 className="lead fw-bold">SELECCIONE PROCESO PARA VER MAS DETALLES</h5>
      }
      if (searchObject && type == 'VR') {
        return _RESULT_JUR(searchObject)
      }
      if (searchObject && type == 'NOR') {
        return _RESULT_NOR(searchObject)
      }
      if (searchObject && type == 'LIC') {
        return _RESULT_LIC(searchObject)
      }
      if (searchObject && type == 'OA') {
        return _RESULT_OA(searchObject)
      }
    }
    let _LIST_COMPONENT = () => {
      let IDS = this.state.objectID.data || [];
      if (IDS.length > 0) return <>
        <div className="border border-info p-2 my-3">

          <did className="row text-center">
            <div className="row ms-2 mt-4 pe-4">
              <div className="col text-center border bg-info text-white">
                <h5 className='fw-bold align-center mt-2'>PROCESOS ASOCIADOS A LA CÉDULA: {this.state.id_number}</h5>
              </div>
            </div>
            <div className="row row ms-2 pe-4 ">
              <div className="col text-center border bg-info text-light">
                <h5 className='fw-bold mt-1'>LICENCIAS</h5>
              </div>
              <div className="col text-center border bg-info text-light">
                <h5 className='fw-bold mt-1'>OTRAS ACTUACIONES</h5>
              </div>
              <div className="col text-center border bg-info text-light">
                <h5 className='fw-bold mt-1'>PETICIONES PQRS</h5>
              </div>
              <div className="col text-center border bg-info text-light">
                <h5 className='fw-bold mt-1'>NOMENCLATURAS</h5>
              </div>
            </div>

            <div className="row row ms-2 pe-4">
              <div className="col text-center border">
                <h5 className='fw-bold mt-1'>{_PROCESS_LINKS(IDS, 'LIC')}</h5>
              </div>
              <div className="col text-center border">
                <h5 className='fw-bold mt-1'>{_PROCESS_LINKS(IDS, 'OA')}</h5>
              </div>
              <div className="col text-center border">
                <h5 className='fw-bold mt-1'>{_PROCESS_LINKS(IDS, 'VR')}</h5>
              </div>
              <div className="col text-center border">
                <h5 className='fw-bold mt-1'>{_PROCESS_LINKS(IDS, 'NOR')}</h5>
              </div>
            </div>

          </did>
        </div>
      </>
    }
    let _RESULT_JUR = (data) => {
      return <>
        <div className="row">
          <div className="col">
            {data.status
              ? <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x icon-background  text-info"></i>
                <i class="fas fa-check fa-stack-1x text-light"></i>
              </span>
              : <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x icon-background  text-info"></i>
                <i class="fas fa-pen-fancy fa-stack-1x text-light"></i>
              </span>}

            <p className="lead text-justify fw-normal ms-2 mt-2"> Esta Petición  se encuentra actualmente {data.status
              ? <h5 className="text-success"> RESUELTA</h5>
              : <h5 className="text-danger"> EN PROCESO</h5>}
            </p>
            <p className="lead text-justify fw-normal ms-2 mt-2">
              <h5>Profesionales asignados a esta petición: {data.worker_names ?? ''}</h5>
              {data.status
                ? <h5>Para mayor información sobre esta solicitud, puede dirigirse a la <Link to='/administrative'>Página de Publicaciones</Link> de la Curaduría.</h5>
                : <h5>Se espera que esta Petición pueda ser respondida para antes del {dateParser(dateParser_finalDate(data.legal, data.time))}</h5>}
            </p>
          </div>
        </div>
      </>

    }

    let _RESULT_NOR = (data) => {
      return <>
        <div className="row">
          <div className="col">
            {data.path && data.filename
              ? <div className="row">

                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x icon-background  text-info"></i>
                  <i class="fas fa-check fa-stack-1x text-light"></i>
                </span>

                <p className="lead text-justify fw-normal ms-2 mt-2"> Esta Nomenclatura ya se encuentra expedida por la Curaduría urbana
                  N°1 de Bucaramanga.
                </p>
                <div className="d-flex flex-column bd-highlight mb-3">
                  <di className="row py-2">
                    <div className="col-2"></div>
                    <div className="col-4"><h3 lassName="lead fw-light">N° de Consecutivo: </h3></div>
                    <div className="col-4"><h3 lassName="lead fw-bold">{data.id_public}</h3></div>
                  </di>
                  <di className="row  py-2">
                    <div className="col-2"></div>
                    <div className="col-4"><h3 lassName="lead fw-light">Tipo de Norma: </h3></div>
                    <div className="col-4"><h3 lassName="lead fw-bold">{data.type}</h3></div>
                  </di>
                  <di className="row  py-2">
                    <div className="col-2"></div>
                    <div className="col-4"><h3 lassName="lead fw-light">Fecha de Expedicion: </h3></div>
                    <div className="col-4"><h3 lassName="lead fw-bold">{dateParser(data.date_end)}</h3></div>
                  </di>
                  <di className="row  py-2">
                    <div className="col-2"></div>
                    <div className="col-4"><h3 lassName="lead fw-light">Consultar Documento: </h3></div>
                    <div className="col-4"><h3 lassName="lead fw-bold"> <VIZUALIZER url={_GET_CURATED_URL_NOME(data)} apipath={'/files/nomen/'} /></h3></div>
                  </di>
                </div>

              </div>
              : <>
                <span class="fa-stack fa-4x">
                  <i class="fa fa-circle fa-stack-2x icon-background  text-info"></i>
                  <i class="fas fa-pen-fancy fa-stack-1x text-light"></i>
                </span>
                <p className="lead text-justify fw-normal ms-2 mt-2"> Esta Nomenclatura se encuentra en proceso de expedición,
                  en cuanto sea expedida podrá ser consultada en la <Link to="/administrative">Página de Publicaciones</Link>.
                </p></>}
          </div>
        </div>
      </>

    }

    let LIC_LIST_1 = (data) => {
      var currentState = -1;
      if (data.clock_payment) currentState = 0;
      //if (data.clock_legal) currentState = 1;
      if (data.clock_record_p1) currentState = 1;
      if (data.clock_record_p1) currentState = 2;
      if (data.clock_pay2) currentState = 3;
      if (data.clock_resolution) currentState = 4;
      if (data.clock_resolution_not_1 || data.clock_resolution_not_2) currentState = 5;
      if (data.clock_ejecutoria) currentState = 6;
      if (data.clock_license) currentState = 7;
      const currentStateBg = '#ffa985'
      const backgroundColor = (i) => { return { backgroundColor: i == currentState ? currentStateBg : '' } }
      const resContext = (
        data.clock_resolution_c == 'CONCEDE' ? <label className='text-success fw-bold'>CONCEDE</label> :
          data.clock_resolution_c == 'NIEGA' ? <label className='text-danger fw-bold'>NIEGA</label> :
            data.clock_resolution_c == 'DESISTE' ? <label className='text-danger fw-bold'>DESISTE</label> : ''
      )
      const state = data.state == -1 || data.state == 1 ? <h5 className='fw-normal'>Incompleto</h5> :
        data.state >= 5 ? <h5 className='fw-normal'>Legal y debida forma</h5> : ''
      const reviewers = (review, isRequired) => {
        if (isRequired == 1) return 'NO APLICA'
        return <>
          <div className='row'><h5 className='fw-normal ms-3'>Revisores: </h5></div>
          <ul>
            <li><h5 className='fw-normal'>Jurídico: {data.jur_worker}</h5></li>
            <li><h5 className='fw-normal'>Arquitectónico: {data.arc_worker}</h5></li>
            <li><h5 className='fw-normal'>Estructural: {data.eng_worker} </h5></li>
          </ul>
          <div className='row'><h5 className='fw-bold ms-3'>Resultado: {review == 1 ? <i class="fas fa-check text-success"></i> :
            review == 0 ? <i class="fas fa-times text-danger"></i> : ''}</h5></div>
        </>
      };
      var mapInfo = [
        { date: data.clock_payment, title: 'RADICACIÓN', info: state },
        //{ date: data.clock_legal, title: 'RADICACIÓN', info: state },
        { date: data.clock_record_p1, title: 'ACTA DE OBSERVACIONES', info: reviewers(data.rec_review, 0) },
        { date: data.clock_record_p2, title: 'ACTA DE CORRECIONES', info: reviewers(data.rec_review_2, data.rec_review) },
        { date: data.clock_pay2, title: 'ACTO DE TRAMITE DE VIABILIDAD', info: 'Se expide el acto de tramite de viabilidad del Acta.' },
        { date: data.clock_resolution, title: 'RESOLUCIÓN', info: <h5 className='fw-normal'>Se {resContext} la licencia</h5> },
        { date: data.clock_resolution_not_1 || data.clock_resolution_not_2, title: 'NOTIFICACIÓN DE RESOLUCIÓN', info: <>Se notifica al responsable de la solicitud</> },
        { date: data.clock_ejecutoria, title: 'EJECUTORIA', info: <>Se expide la ejecutoria de la licencia</> },
        { date: data.clock_license, title: 'EXPEDICIÓN DE LICENCIA', info: 'Se expide la Licencia', publication: data.publication_path },
      ];

      return <>

        <div className="row row ms-2 pe-4">
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold'>ESTADO</h5>
          </div>
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold'>INFORMACIÓN</h5>
          </div>
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold'>FECHA</h5>
          </div>
          <div className="col-2 text-center border bg-info text-white">
            <h5 className='fw-bold'>UBICACIÓN</h5>
          </div>
        </div>
        {mapInfo.map((value, i) => {
          return <>
            <div className="row row ms-2 pe-4">
              <div className="col text-center border" style={backgroundColor(i)}>
                <h5 className='fw-bold'>{value.title}</h5>
              </div>
              <div className="col text-start border" style={backgroundColor(i)}>
                <h5 className='fw-normal'>{value.info}</h5>
              </div>
              <div className="col text-center border" style={backgroundColor(i)}>
                <h5 className='fw-normal'> {dateParser(value.date)}</h5>
              </div>
              <div className="col-2 text-center border" style={backgroundColor(i)}>
                {i == currentState ?
                  value.publication ?
                    <>
                      <a className="btn btn-sm btn-danger" target="_blank"
                        href={process.env.REACT_APP_API_URL + '/files/publish/' + _PARSE_URL(data.publication_type) + '/publish_' + _PARSE_URL(data.publication_type) + '_' + value.publication} >
                        <i class="fas fa-cloud-download-alt"></i> VER</a>
                    </>
                    : <h5 className='fw-bold'>AQUÍ</h5> : ''}
              </div>
            </div>

            <hr />
          </>
        })}
      </>

    }

    let LIC_LIST_2 = (data) => {
      let NF = <label className='text-danger'>POR ASIGNAR</label>
      return <>
        <Timeline className="custom-timeline">
          <p className='fw-bold my-3 text-center'>RADICACIÓN {data.state < 5 ? <label className='text-primary fb-bold'>-FASE ACTUAL-</label> : ''}</p>
          <Timeline.Item time={data.clock_payment || NF}><>Pago expensas fijas</></Timeline.Item>
          {data.state < 5 && data.clock_payment ?
            <Timeline.Item time={dateParser_finalDate(data.clock_payment, 30)}><label className='text-danger'>Fecha limite para legal y debida forma</label></Timeline.Item>
            : <Timeline.Item time={data.clock_legal || NF}><>Legal y debida forma</></Timeline.Item>}

          <p className='fw-bold my-3 text-center'>EVALUACIÓN DEL PROYECTO {data.state == 5 && !data.clock_record_p1 ? <label className='text-primary fb-bold'>-FASE ACTUAL-</label> : ''}</p>
          <div className='row'>
            <div className='col'>
              <p className='fw-bold my-1 text-center'>JURÍDICO</p>
              <p className='my-1 text-center'>Revisor: <label className='fw-bold'>{data.jur_worker}</label></p>

              {_GET_REPORTS(data.clock_law_asign, data.clock_law_rev, data.clock_law_rev_c, data.clock_law_inf).map((report, i) => {
                return <>
                  <Timeline.Item time={report.asign}><>Asignación ({i + 1})</></Timeline.Item>
                  <Timeline.Item time={report.rev}><>Evaluación  ({i + 1}): {_GET_REVIEW(report.rev_c)}</></Timeline.Item>
                  <Timeline.Item time={report.not}><>Notificación  ({i + 1})</></Timeline.Item>
                </>
              })}

            </div>
            <div className='col'>
              <p className='fw-bold my-1 text-center'>ARQUITECTÓNICO</p>
              <p className='my-1 text-center'>Revisor: <label className='fw-bold'>{data.arc_worker}</label></p>

              {_GET_REPORTS(data.clock_arc_asign, data.clock_arc_rev, data.clock_arc_rev_c, data.clock_arc_inf).map((report, i) => {
                return <>
                  <Timeline.Item time={report.asign}><>Asignación ({i + 1})</></Timeline.Item>
                  <Timeline.Item time={report.rev}><>Evaluación  ({i + 1}): {_GET_REVIEW(report.rev_c)}</></Timeline.Item>
                  <Timeline.Item time={report.not}><>Notificación  ({i + 1})</></Timeline.Item>
                </>
              })}

            </div>
            <div className='col'>
              <p className='fw-bold my-1 text-center'>ESTRUCTURAL</p>
              <p className='my-1 text-center'>Revisor: <label className='fw-bold'>{data.eng_worker}</label></p>

              {_GET_REPORTS(data.clock_eng_asign, data.clock_eng_rev, data.clock_eng_rev_c, data.clock_eng_inf, data.clock_eng_desc).map((report, i) => {
                return <>
                  <Timeline.Item time={report.asign}><>Asignación ({i + 1})</></Timeline.Item>
                  <Timeline.Item time={report.rev}><>Evaluación  ({i + 1}): {report.rev_c ? report.rev_c.split(',').map((r, j) => {
                    let desc = report.desc ? report.desc.split('&&')[j] || false : false;
                    console.log(desc, report.desc)
                    if (r == 2) return '';
                    return <>{desc ? desc + ' - ' : ''} {_GET_REVIEW(r)}<br /></>
                  }): ''}</></Timeline.Item>
                  <Timeline.Item time={report.not}><>Notificación  ({i + 1})</></Timeline.Item>
                </>
              })}

            </div>
          </div>
          <p className='fw-bold my-3 text-center'>ACTA DE OBSERVACIONES Y CORRECCIONES {data.state == 5 && data.clock_record_p1 ? <label className='text-primary fb-bold'>-FASE ACTUAL-</label> : ''}</p>
          <Timeline.Item time={data.clock_record_p1 || NF}><>Acta de Observaciones: {_GET_REVIEW(data.rec_review)}</></Timeline.Item>
          {data.rec_review == '0' ?
            <>
              <>
                {data.clock_record_postpone
                  ? <Timeline.Item time={data.clock_record_postpone || NF}><>Presentación De Prórroga</></Timeline.Item>
                  : <Timeline.Item time={dateParser_finalDate(data.clock_not_1 || data.clock_not_2 || data.clock_record_p1, 30) || NF}><label className='text-danger'>Limite Presentación De Prórroga</label></Timeline.Item>
                }
              </>
              <>
                {data.clock_corrections
                  ? <Timeline.Item time={data.clock_corrections || NF}><>Presentación De Correcciones</></Timeline.Item>
                  : <Timeline.Item time={dateParser_finalDate(data.clock_not_1 || data.clock_not_2 || data.clock_record_p1, data.clock_record_postpone ? 45 : 30) || NF}><label className='text-danger'>Limite Presentación De Correcciones</label></Timeline.Item>
                }
              </>
            </>
            : ''}
          {data.rec_review == '0' ? <Timeline.Item time={data.clock_record_p2 || NF}><>Acta de Correcciones: {_GET_REVIEW(data.rec_review_2)}</></Timeline.Item> : ''}
          <Timeline.Item time={data.clock_not_0 || NF}><>Citación</></Timeline.Item>
          <Timeline.Item time={data.clock_not_1 || data.clock_not_2 || NF}><>Notificación</></Timeline.Item>

          <p className='fw-bold my-3 text-center'>ACTA DE VIABILIDAD Y PAGOS {data.state == 50 ? <label className='text-primary fb-bold'>-FASE ACTUAL-</label> : ''}</p>
          <Timeline.Item time={data.clock_pay2 || NF}><>Acto de viabilidad</></Timeline.Item>
          <Timeline.Item time={data.clock_payments || NF}><>Pagos de expensas variables</></Timeline.Item>
          {!data.clock_payments && data.clock_pay2 ?
            <Timeline.Item time={dateParser_finalDate(data.clock_pay2, 30) || NF}><label className='text-danger'>Limite Pagos de expensas variables</label></Timeline.Item>
            : ''}
          <p className='fw-bold my-3 text-center'>EXPEDICIÓN DE LA LICENCIA {data.state > 50 ? <label className='text-primary fb-bold'>-FASE ACTUAL-</label> : ''}</p>
          <Timeline.Item time={data.clock_resolution || NF}><>Resolución</></Timeline.Item>
          <Timeline.Item time={data.clock_resolution_not_1 || data.clock_resolution_not_2 || NF}><>Notificación</></Timeline.Item>
          <Timeline.Item time={data.clock_ejecutoria || NF}><>Ejecutoria</></Timeline.Item>
          <Timeline.Item time={data.clock_license || NF}><>Licencia</></Timeline.Item>
          <p className='my-1 text-center'>Resultado: <label className='fw-bold'>{data.clock_resolution_c}</label></p>
          {data.publication_path ?
            <a className="btn btn-sm btn-danger" target="_blank"
              href={process.env.REACT_APP_API_URL + '/files/publish/' + _PARSE_URL(data.publication_type) + '/publish_' + _PARSE_URL(data.publication_type) + '_' + data.publication_path} >
              <i class="fas fa-cloud-download-alt"></i> VER LICENCIA</a>
            : ''}
        </Timeline>
      </>
    }
    let _RESULT_LIC = (data) => {
      return <>
        <div className="row">
          <div className="col text-center">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x icon-background  text-info"></i>
              <i class="fas fa-file-signature fa-stack-1x text-light"></i>
            </span>
          </div>
        </div>
        <div className="row ms-2 mt-4 pe-4">
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold align-center mt-2'>LICENCIA {data.id_public}</h5>
          </div>
        </div>
        <div className="row ms-2 pe-4">
          <div className="col border py-2">
            <h5 className='fw-normal'>{formsParser1(data, true)}</h5>
          </div>
        </div>
        {LIC_LIST_2(data)}
      </>

    }
    let _RESULT_OA = (data) => {
      var currentState = -1;
      if (data.clock_payment) currentState = 0;
      //if (data.clock_legal) currentState = 1;
      if (data.ph_date_arc) currentState = 1;
      const currentStateBg = '#ffa985'
      const backgroundColor = (i) => { return { backgroundColor: i == currentState ? currentStateBg : '' } }
      const resContext = (
        data.ph_review == 1 ? <h5 className='text-success fw-bold'>APROBADO</h5> :
          data.ph_review == 0 ? <h5 className='text-danger fw-bold'>NO APROBADO</h5> : ''
      )
      const state = data.state == -1 || data.state == 1 ? <h5 className='fw-normal'>Incompleto</h5> :
        data.state >= 5 ? <h5 className='fw-normal'>Legal y debida forma</h5> : ''
      var mapInfo = [
        { date: data.clock_payment, title: 'RADICACIÓN', info: state },
        //{ date: data.clock_legal, title: 'RADICACIÓN', info: 'Fecha de inicio la evaluación de la solicitud' },
        { date: data.ph_date_arc, title: 'EXPEDICIÓN DE DOCUMENTO', info: <>Se expide la actuación con finalidad: {resContext}</>, publication: data.publication_path },
      ]
      return <>
        <div className="row">
          <div className="col text-center">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x icon-background  text-info"></i>
              <i class="fas fa-file-alt fa-stack-1x text-light"></i>
            </span>
          </div>
        </div>
        <div className="row ms-2 mt-4 pe-4">
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold align-center mt-2'>OTRAS ACTUACIONES {data.id_public}</h5>
          </div>
        </div>
        <div className="row ms-2 pe-4">
          <div className="col border py-2">
            <h5 className='fw-normal '>{formsParser1(data, true)}</h5>
          </div>
        </div>
        <div className="row row ms-2 pe-4">
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold'>ESTADO</h5>
          </div>
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold'>INFORMACIÓN</h5>
          </div>
          <div className="col text-center border bg-info text-white">
            <h5 className='fw-bold'>FECHA</h5>
          </div>
          <div className="col-2 text-center border bg-info text-white">
            <h5 className='fw-bold'>UBICACIÓN</h5>
          </div>
        </div>
        {mapInfo.map((value, i) => {
          return <>
            <div className="row row ms-2 pe-4">
              <div className="col text-center border" style={backgroundColor(i)}>
                <h5 className='fw-bold'>{value.title}</h5>
              </div>
              <div className="col text-start border" style={backgroundColor(i)}>
                <h5 className='fw-normal'>{value.info}</h5>
              </div>
              <div className="col text-center border" style={backgroundColor(i)}>
                <h5 className='fw-normal'> {dateParser(value.date)}</h5>
              </div>
              <div className="col-2 text-center border" style={backgroundColor(i)}>
                {i == currentState ?
                  value.publication ?
                    <>
                      <a className="btn btn-sm btn-danger" target="_blank"
                        href={process.env.REACT_APP_API_URL + '/files/publish/' + _PARSE_URL(data.publication_type) + '/publish_' + _PARSE_URL(data.publication_type) + '_' + value.publication} >
                        <i class="fas fa-cloud-download-alt"></i> VER</a>
                    </>
                    : <h5 className='fw-bold'>AQUÍ</h5> : ''}
              </div>
            </div>
          </>
        })}
      </>

    }


    return (
      <div className="Status container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <h5 className="text-uppercase">{breadCrums.bc_01}</h5></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <h5 className="text-uppercase">{breadCrums.bc_32}</h5></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-8">
            <h2 class="text-uppercase text-center pb-2">Ver Estado</h2>
            <hr />
            <p class="lead mb-4 text-justify">La curaduría urbana no.1 de Bucaramanga coloca a su disposición esta herramienta,
              con el fin de dar seguimiento a su petición, así mismo puede consultar el estado del trámite de su solicitud.</p>
            <p class="lead mb-4 text-justify">Por favor diligenciar el número de radicado de la petición o solicitud.</p>
            {_SEARCH_COMPONENT()}
            <p class=""><h5>aa = los dos últimos dígitos del año del proceso, 0000 = consecutivo del proceso</h5></p>


            {_LIST_COMPONENT()}


            <div className="border border-info p-2 my-3">
              <did className="row text-center">
                {_RESULTS_COMPONENT()}
              </did>
            </div>
          </div >
        </div >
      </div >
    );
  }
}

export default Status;