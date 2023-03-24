import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBRow, MDBCol, MDBTypography, MDBBtn, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';
import customService from '../../services/custom.service';
import publishService from '../../services/publish.service';
import DataTable from 'react-data-table-component';
import { Lists } from '../../components/jsons/lists_submit';
import { Button_navigation } from '../../components/button.component';
import { ARRAY } from './old_repository';
const moment = require('moment');

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: ARRAY,
      isloaded: true,
      lista: [],
      fillActive: '0',
      fillActive2: {},
      Open: false,
    };
  }
   componentDidMount() {
    this.repositoryList();
    {/* 
    const HOMEPATH = 'https://www.curaduria1bucaramanga.com'
    const url = HOMEPATH + "/public_docs/repositorio.json";
    customService.getRepositoryList()
      .then(response => {
        console.log(ARRAT)
        response.data.map((value) => {
          return this.setState({
            json: ARRAT,
            isloaded: true,
          });
        })

      })
      .catch(e => {
        console.log(e);
      });
      */}
  }

  repositoryList() {
    publishService.getAll()
      .then(response => {
        //console.log(response.data)
        let list_00 = {};
        //let list_type = {};
        //list_00.index = 10 
        response.data.map((item, i) => {
          if (item.type == 'lu' || item.type == 'Actos administrativos' || item.type == 'Resoluciones' || item.type == 'res' || item.type == 'Otras actuaciones' || item.type == 'oa' || item.type == 'mpr' || item.type == 'MPR') {
            if (item.publish == true) {
              //console.log(item)
              const date = moment(item.date).format('yyyy');
              if (list_00[date]) list_00[date].push(item); else {
                list_00[date] = [item]
              }
            }
          }
        })
        this.setState({ lista: list_00 })
      })
  }
  render() {
    const { translation, breadCrums, swaMsg } = this.props;
    const { json } = this.state;
    const HOMEPATH = '//curaduria1bucaramanga.com.co/';

    let _PARSE_URL = (_path) => {
      var new_path = _path;
      new_path = new_path.toLowerCase();
      new_path = new_path.replace(/ /g, "");
      return new_path;
    }
    const handleFillClick = (state, index) => {
      if (state === this.state[index + '_mes']) {
        return;
      }
      this.setState({ [index + '_mes']: state });
    };

    const handleFillClick2 = (state, index) => {
      if (state === this.state[index]) {
        return;
      }
      this.setState({ [index]: state });
    };


    let _SET_LIST = () => {
      var _COMPONENT = [];
      let _LENGTH = Object.keys(json[0]).length
      let _JSON = json[0];
      for (var i = 0; i < _LENGTH; i = i + 2) {
        //CRETES HEAD
        _COMPONENT.push(<Collapsible className='bg-white border border-info text-center' openedClassName='bg-light text-center' trigger={<><label className="m-2 text-dark"> {_JSON[i][1]}</label>
          <button className="btn btn-warning btn-sm my-2"><i class="fas fa-plus"></i> Ver Lista</button></>}>
          <table className="table table-bordered table-sm table-hover text-start">
            <tbody>
              {_SET_ITEMS(_JSON[i + 1], _JSON[i][0])}
            </tbody>
          </table>
        </Collapsible>
        )
      }
      return <>{_COMPONENT}</>;
    }
    let _SET_ITEMS = (_ITEMS, _PATH) => {
      var _COMPONENT = [];

      if(_ITEMS == undefined){
        return <div></div>
      }
      for (var j = 0; j < _ITEMS.length; j++) {
        _COMPONENT.push(<tr>
          <td><label>{_ITEMS[j]}</label></td>
          <td><a className="btn btn-sm btn-danger" href={HOMEPATH + _PATH + _ITEMS[j]} target="_blank"><i class="fas fa-cloud-download-alt"></i> VER DOCUMENTO</a>
          </td>
        </tr>
        )
      }

      return <>{_COMPONENT}</>;
    }




    const Collapse = () => {
      let x = (objec) => {
        return <Collapsible trigger={<><label className="fw-normal text-dark text-center">{objec} </label> <button className="btn btn-warning btn-sm"><i class="fas fa-plus"></i> Ver Lista</button></>}
          className='bg-white border border-info text-center' openedClassName='bg-light text-center' >
          <div className='text-start'>
            <MDBTabs fill pills className='col-12'>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('1', objec)} active={this.state[objec + '_mes'] === '1'}>
                  <label className="upper-case">Enero</label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('2', objec)} active={this.state[objec + '_mes'] === '2'}>
                  <label className="upper-case">Febrero </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('3', objec)} active={this.state[objec + '_mes'] === '3'}>
                  <label className="upper-case">Marzo </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('4', objec)} active={this.state[objec + '_mes'] === '4'}>
                  <label className="upper-case">Abril </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('5', objec)} active={this.state[objec + '_mes'] === '5'}>
                  <label className="upper-case">Mayo </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('6', objec)} active={this.state[objec + '_mes'] === '6'}>
                  <label className="upper-case">Junio </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('7', objec)} active={this.state[objec + '_mes'] === '7'}>
                  <label className="upper-case">Julio </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('8', objec)} active={this.state[objec + '_mes'] === '8'}>
                  <label className="upper-case">Agosto </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('9', objec)} active={this.state[objec + '_mes'] === '9'}>
                  <label className="upper-case">Septiembre </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('10', objec)} active={this.state[objec + '_mes'] === '10'}>
                  <label className="upper-case">Octubre </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('11', objec)} active={this.state[objec + '_mes'] === '11'}>
                  <label className="upper-case">Noviembre </label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick('12', objec)} active={this.state[objec + '_mes'] === '12'}>
                  <label className="upper-case">Diciembre </label>
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <MDBTabs fill pills className='col-12'>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick2(1, objec)} active={this.state[objec] === 1}>
                  <label className="upper-case">Licencias urbanisticas y reconocimientos</label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick2(2, objec)} active={this.state[objec] === 2}>
                  <label className="upper-case">Otras actuaciones</label>
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem className='col-1'>
                <MDBTabsLink onClick={() => handleFillClick2(3, objec)} active={this.state[objec] === 3}>
                  <label className="upper-case"> Modificacion licencia vigente-PRORROGA-REVALIDACIONES</label>
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            {_LIST(objec, '_search')}
          </div>
        </Collapsible>
      }
      const List = []
      for (var objec in this.state.lista) {
        List.push(objec)
      }
      return List.map((item) => { return x(item) })
    }
    const _LIST = (year, ID) => {
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
          cell: row => <label className='text-justify'>{row.detail}{row.subdetail == null ? '' : ', ' + row.subdetail}</label>
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

      const subHeaderComponentMemo = (year) => {
        return (
          <div class="input-group mb-2">
            <span class="input-group-text bg-info text-white">
              <i class="fas fa-search"></i>
            </span>
            <input type='text' className='form-control' placeholder='Busqueda...' onChange={(e) => this.setState({ [year + ID]: e.target.value })} />
          </div>
        );
      }

      const dataFilter = (_items) => {
        const removeAccents = (str) => {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        return (
          _items.filter(item => {
            var search = (this.state[year + ID] ?? '').toLowerCase();
            var field1 = (item.id_public ?? '').toLowerCase();
            var field2 = removeAccents(item.detail ?? '' + item.subdetail ?? '').toLowerCase();
            return field1.includes(search) || field2.includes(search)
          })
            .filter(item => {
              if (this.state[year] == 1) {
                return item.type == 'lu' || item.type == 'Resoluciones' || item.type == 'Licencias urbanisticas'
              } else if (this.state[year] == 2) {
                return item.type == 'oa' || item.type == 'Otras actuaciones'
              } else if (this.state[year] == 3) {
                return item.type == 'mpr'
              } else {
                return true
              }
            })
            .filter(item => {
              if (this.state[year + '_mes']) {
                return moment(item.date, 'YYYY-MM-DD').format('M') == this.state[year + '_mes']
              } else {
                return true
              }
            })
        )
      }
      var COMPONENT = <DataTable
        paginationComponentOptions={{ rowsPerPageText: 'Publicaciones por Pagina:', rangeSeparatorText: 'de' }}
        noDataComponent="No hay publicaciones en estos momentos"
        striped="true"
        columns={columns}
        data={dataFilter(this.state.lista[year] ? this.state.lista[year] : [],)}
        highlightOnHover
        pagination
        paginationPerPage={20}
        paginationRowsPerPageOptions={[20, 50, 100]}
        className="data-table-component"
        noHeader
        dense
        defaultSortFieldId={1}
        defaultSortAsc={false}
        progressComponent={<label className='fw-normal lead text-muted'>CARGANDO...</label>}
        subHeader
        subHeaderComponent={subHeaderComponentMemo(year)}
      />
      return COMPONENT
    }
    return (
      <div className="File container">
        <div className="row py-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_33}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-12">

            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h2 className='px-2 py-0 fw-normal'>Publicaciones curador antiguo/curador actual</h2>
                </div>
              </div>
            </div>
            <hr />
            <div class="container text-start">
              <div class="row align-items-start">
                <div className='col'>
                  <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-dark">
                    <p><b>Nota: </b>Apreciado usuario, tenga en cuenta las siguientes indicaciones.</p>
                    <p><i class="fas fa-exclamation-triangle text-warning"></i> Inicialmente, le aparecerán todas las licencias expedidas de acuerdo al año que se seleccione, posteriormente si usted desea consultar por mes solo da clic sobre el cual requiera hacer la consulta, además si requiere consultar por tipo de licencia solo da clic la que desee consultar.<br></br>
                      Cabe resaltar que también puede consultar por el id público o por detalle solo ingresa el dato a consultar en la barra de búsqueda.
                    </p>
                  </MDBTypography>
                </div>
              </div>
            </div>

            <hr />
            <h2 className='text-center' id='actual'>REPOSITORIO ARQ. LUIS CARLOS PARRA {<Button_navigation Iddown={'antiguo'} Idup={null} />}</h2>
            <div className='text-center'>
              {Collapse()}
            </div>
            <hr></hr>
            <h2 class="text-uppercase text-center pb-2" id='antiguo'>REPOSITORIO (2017-2) - (2021-1) {<Button_navigation Iddown={null} Idup={'actual'} />}</h2>
            <div className="text-center">
              {this.state.isloaded ? <>{_SET_LIST()} </> : "No Data"}
            </div>

          </div >
        </div >

      </div >
    );
  }
}

export default File;