import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane, MDBTypography } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';
import PublishService from '../../services/publish.service'
import DataTable from 'react-data-table-component';
import { PUBLISH_TYPE_ARRAY } from '../../components/vars.global';

// SERVICES
import NomeclatureService from '../../services/nomeclature.service';
import { dateParser } from '../../components/customClasses/typeParse';
import VIZUALIZER from '../../components/vizualizer.component';
import { Panel, PanelGroup } from 'rsuite';
import { FlexboxGrid } from 'rsuite';

class Administrative extends Component {
  constructor(props) {
    super(props);
    this.retrievePublish = this.retrievePublish.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      currentItem: null,
      currentIndex: -1,
      modal: false,
      items_00: [], // Administrative Acts  - LICENCES
      items_01: [], // Replies to neighbours
      items_02: [],
      items_03: [],
      items_04: [],
      items_05: [],
      items_06: [],
      items_07: [],
      items_08: [],
      items_09: [],
      items_10: [], // Administrative Acts  - RESOLUTIONS
      items_11: [],
      items_12: [],
      list_nome: [],
    };
  }
  componentDidMount() {
    this.retrievePublish();
    this.retrieveNomen();
  }
  retrievePublish() {
    PublishService.getAll()
      .then(response => {
        let list_00 = [];
        let list_01 = [];
        let list_02 = [];
        let list_03 = [];
        let list_04 = [];
        let list_05 = [];
        let list_06 = [];
        let list_07 = [];
        let list_08 = [];
        let list_09 = [];
        let list_10 = [];
        let list_11 = [];
        let list_12 = [];
        response.data.map((item, i) => {
          if (item.type == 'lu' || item.type == 'Actos administrativos' || item.type == 'Resoluciones' || item.type == 'res') {
            if (item.publish == true) {
              list_00.push(item);
            }
          }
          if (item.type == 'Otras actuaciones' || item.type == 'oa') {
            if (item.publish == true) {
              list_01.push(item);
            }
          }
          if (item.type == 'mpr' || item.type == 'MPR') {
            if (item.publish == true) {
              list_02.push(item);
            }
          }
          if (item.type == 'nv' || item.type == 'Notificaciones a vecinos') {
            if (item.publish == true) {
              list_03.push(item);
            }
          }
          if (item.type == 'pp' || item.type == 'Publicaciones de prensa') {
            if (item.publish == true) {
              list_04.push(item);
            }
          }
          if (item.type == 'na' || item.type == 'Notificaciones de avisos') {
            if (item.publish == true) {
              list_05.push(item);
            }
          }
          if (item.type == 'rp' || item.type == 'Respuesta de Derecho de Petición' || item.type == 'Respuesta PQRS') {
            if (item.publish == true) {
              list_06.push(item);
            }
          }
          if (item.type == 'res') {
            list_07.push(item);
          }
          if (item.type == PUBLISH_TYPE_ARRAY[8]) {
            list_08.push(item);
          }
          if (item.type == PUBLISH_TYPE_ARRAY[9]) {
            list_09.push(item);
          }
          if (item.type == PUBLISH_TYPE_ARRAY[10]) {
            list_10.push(item);
          }
          if (item.type == PUBLISH_TYPE_ARRAY[11]) {
            list_11.push(item);
          }
          if (item.type == PUBLISH_TYPE_ARRAY[11]) {
            list_12.push(item);
          }
        });
        this.setState({
          items: response.data,
          items_00: list_00,
          items_01: list_01,
          items_02: list_02,
          items_03: list_03,
          items_04: list_04,
          items_05: list_05,
          items_06: list_06,
          items_07: list_07,
          items_08: list_08,
          items_09: list_09,
          items_10: list_10,
          items_11: list_11,
          items_12: list_12,
          isLoaded: true,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  retrieveNomen() {
    NomeclatureService.getAll_public()
      .then(response => {
        this.setState({ list_nome: response.data, load_nome: true })
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrievePublish();
    this.setState({
      currentItem: null,
      currentIndex: -1,
    });
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  getToggle = () => {
    return this.state.modal;
  }
  setItem(item) {
    this.setState({
      currentItem: item,
      modal: !this.state.modal,
    });
  }
  render() {
    const { translation, breadCrums } = this.props;
    const { currentItem, isLoaded, items_00, items_01, items_02, items_03, items_04, items_05,
      items_06, items_07, items_08, items_09, items_10, items_11, items_12 } = this.state;

    // URLS CONVERTER
    let _PARSE_URL = (_path) => {
      var new_path = _path;
      new_path = new_path.toLowerCase();
      new_path = new_path.replace(/ /g, "");
      return new_path;
    }
    let _GET_CURATED_URL_NOME = (row) => {
      let url = row.path + '/' + row.filename;
      url = url.replace("docs/nomenclature/", "");
      return url;
    }

    // COLUMNS
    const columns = [
      {
        name: <h3>ID Publico</h3>,
        selector: row => row.id_publico,
        sortable: true,
        filterable: true,
        minWidth: '100px',
        cell: row => <label>{row.id_publico}</label>
      },
      {
        name: <h3>Fecha</h3>,
        selector: row => row.date,
        sortable: true,
        minWidth: '100px',
        cell: row => <label>{row.date}</label>
      },
      {
        name: <h3>Detalles</h3>,
        minWidth: '600px',
        cell: row => <label className='text-justify'>{row.detail}{row.subdetail == null ? ' ': ', ' + row.subdetail}</label>
      },
      {
        name: <h3>Acción</h3>,
        button: true,
        minWidth: '120px',
        cell: row =>
          <a className="btn btn-sm btn-danger" target="_blank"
            href={process.env.REACT_APP_API_URL + '/files/publish/' + _PARSE_URL(row.type) + '/publish_' + _PARSE_URL(row.type) + '_' + row.pdf_path} ><i class="fas fa-cloud-download-alt"></i> Descargar</a>
        ,
      },
    ]
    const columns_nome = [
      {
        name: <h3 className="text-center">N° de consecutivo</h3>,
        selector: row => row.id_public,
        sortable: true,
        filterable: true,
        minWidth: '250px',
        center: true,
        cell: row => <label>{row.id_public}</label>
      },
      {
        name: <h3 className="text-center">Tipo</h3>,
        selector: row => row.type,
        sortable: true,
        minWidth: '250px',
        center: true,
        cell: row => <label>{row.type}</label>
      },
      {
        name: <h3 className="text-center">Fecha de expedición</h3>,
        selector: row => row.date_end,
        sortable: true,
        center: true,
        cell: row => <label>{dateParser(row.date_end)}</label>
      },
      {
        name: <h3>Detalles</h3>,
        button: true,
        center: true,
        cell: row =>
          <VIZUALIZER url={_GET_CURATED_URL_NOME(row)} apipath={'/files/nomen/'} />
        ,
      },
    ]

    let LIISTS = (datas, ID, altColumns) => {

      const subHeaderComponentMemo = () => {
        return (
          <div class="input-group mb-2">
            <span class="input-group-text bg-info text-white">
              <i class="fas fa-search"></i>
            </span>
            <input type='text' className='form-control' placeholder='Busqueda...' onChange={(e) => this.setState({ [ID]: e.target.value })} />
          </div>
        );
      }

      if (datas.length > 0) return <DataTable
        paginationComponentOptions={{ rowsPerPageText: 'Publicaciones por Pagina:', rangeSeparatorText: 'de' }}
        noDataComponent="No hay publicaciones en estos momentos"
        striped="true"
        columns={altColumns ?? columns}
        data={datas.filter(item => (item.id_publico || item.id_public) && (item.id_publico || item.id_public).toLowerCase().includes((this.state[ID] ?? '').toLowerCase()))}
        highlightOnHover

        pagination
        paginationPerPage={20}
        paginationRowsPerPageOptions={[20, 50, 100]}
        className="data-table-component"
        noHeader
        dense
        defaultSortFieldId={1}
        defaultSortAsc={false}

        progressPending={!isLoaded}
        progressComponent={<label className='fw-normal lead text-muted'>CARGANDO...</label>}

        subHeader
        subHeaderComponent={subHeaderComponentMemo()}
      />
      else return <label className='fw-normal lead text-muted'>NO HAY INFORMACIÓN</label>

    }

    let COLLAPSIBLE_JSX = (title, data, ID, altColumns) => {
      return <>
        <Collapsible className='text-center' openedClassName='text-center' trigger={<><label className="mx-2 text-center"> {title} ({data.length})</label>
          <button className="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Ver Lista</button></>}>
          {LIISTS(data, ID, altColumns)}
        </Collapsible>
      </>
    }
    return (

      <div className="Administrative container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_21}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-11">

            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h2 className='px-2 py-0 fw-normal'>Publicaciones de la Curaduría Urbana N°1 de Bucaramanga</h2>
                </div>
              </div>
            </div>
            <hr />
            <div className="text-center">
              <div className="text-center">

                {/*<div className="show-grid px-2 py-1" style={{ backgroundColor: '#EDEDED' }}>
                  <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={6}>
                      <div class="card text bg-info mb-3" style={{ maxWidth: '15rem' }}>
                        <div class="card-header fw-normal text-white font-weight-bold">Notificaciónes <i class="fas fa-bell"></i></div>
                        <div class="card-body">
                          <h4 class="card-title fw-normal text-white font-weight-bold">Actos administrativos</h4>
                          <p class="card-text text-white">
                            <i class="fas fa-file-alt fa-4x text-white"></i><br></br>
                          </p>
                        </div>
                      </div>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6}>
                      <div class="card text bg-info mb-3" style={{ maxWidth: '15rem' }}>
                        <div class="card-header fw-normal text-white font-weight-bold">Notificaciónes <i class="fas fa-bell"></i></div>
                        <div class="card-body">
                          <h4 class="card-title fw-normal text-white font-weight-bold">Avisos</h4>
                          <p class="card-text text-white">
                            <i class="fas fa-file-alt fa-4x text-white"></i><br></br>
                          </p>
                        </div>
                      </div>
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                </div> 
                <MDBTypography note noteColor='info' className="mt-3 text-grey text-start">
                  <p>Apreciado usuario,esta sesion corresponde a información general sobre todo lo relacionado con las notificaciones de actos administrativos, aqui se podra visualizar los documentos expedidos .
                    <Link to={'/school'}>Link</Link > de la escuela del curador.</p>
                  <p>Si no encuentra respuesta a su petición o solicitud, puede solicitar asistencia directa
                    con los miembros de la curaduría en el siguiente <Link to={'/scheduling'}>Link</Link >.</p>
                  <p>Si no haya respuesta puede tramitar aquí su petición con el siguiente formulario.</p>
                </MDBTypography>
                <hr></hr>
                */}



                <Collapsible className='bg-white border border-info text-center ' openedClassName='bg-light text-center' trigger={<><label className="fw-normal text-dark text-center ">Notificaciones actos administrativos <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button> </label></>}>
                  <div className='text-start'>
                    {COLLAPSIBLE_JSX('Aviso - Art 2.2.6.1.2.3.8 D.1077/2015 y Art 73-69 CPACA', items_00, 'ID00')}
                    {/*
                    {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[7], items_07, 'ID08')}
                    {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[10], items_10, 'ID01')} */}
                  </div>
                </Collapsible>
                
                <Collapsible className='bg-white border border-info text-center' openedClassName='bg-light text-center' trigger={<><label className="fw-normal text-dark text-center">Otros avisos - citaciones - respuestas <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver informacion</button></label></>}>
                  <div className='text-start'>
                    {COLLAPSIBLE_JSX('Aviso vecinos colindantes Art. 2.2.6.1.2.2.1 D.1077/2015', items_03, 'ID04')}
                    {COLLAPSIBLE_JSX('Actos generales y respuestas pqrs Art. 65 y 69 CPACA', items_06, 'ID07')}
                    {COLLAPSIBLE_JSX('Citación para notificación personal Art.68 CPACA', items_04, 'ID05')}
                  </div>
                </Collapsible>
                {/* {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[8], items_08, 'ID09')} 
                --------------------------------------------------------------------------
                */}
                {/*  {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[2], items_02, 'ID03')}
                {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[1], items_01, 'ID02')}
                {COLLAPSIBLE_JSX('Nomenclaturas', this.state.list_nome, 'IDN', columns_nome)}
                {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[5], items_05, 'ID06')} */}
                {/*
                ----------------------------------------------------------------------------
                {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[9], items_09, 'ID10')}
                {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[11], items_11, 'ID11')}
                {COLLAPSIBLE_JSX(PUBLISH_TYPE_ARRAY[12], items_12, 'ID12')}*/}
              </div>
            </div>
          </div >
        </div >
      </div >
    );
  }
}

export default Administrative;