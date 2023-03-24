import React, { useState, Component } from 'react'
import { Input, InputGroup, Whisper, Tooltip } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { _search } from '../../components/jsons/_search';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //modal: true
        };
    }
    componentDidMount() {
        let urlParams = this._CHECL_FOR_URL_PARAMS();
        if (urlParams) this.checkStatus(urlParams)
    }
    _CHECL_FOR_URL_PARAMS = () => {
        if (this.props.urlParams == undefined) {
            return ""
        }
        else {
            //console.log(this.props.urlsParams)
            return this.props.urlParams
        }
    }
    checkStatus = (value) => {
        //console.log(value)
    }
    render() {
        const { translation, breadCrums } = this.props;
        const styles = {
            width: 857,
            marginBottom: 0,
            //display: 'flex',
        };
        let _CHECK_STATUS = () => {
            let searchValue = this.inputSearch.value;
            this.props.history.push('/search/' + searchValue);
        }
        let approved = (parameters) => {
            const removeAccents = (str) => {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            // _search
            return _search.filter(function (value) {
                var search = (parameters ?? '').toLowerCase();
                var miCadena = search.split(" ");
                return miCadena.some(palabra => {
                    var field1 = removeAccents(value.title ?? '').toLowerCase();
                    var field2 = removeAccents(value.content ?? '').toLowerCase();
                    return field1.includes(palabra) || field2.includes(palabra)
                });
            });
        }
        //console.log(this.inputSearch)
        //console.log(this._CHECL_FOR_URL_PARAMS())
        return <>
            <MDBBreadcrumb className="mx-5 px-2 py-1">
                <MDBBreadcrumbItem>
                    <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active><i class="fas fa-search"></i> <label className="text-uppercase">Busqueda</label></MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-10'>
                        <div style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
                            <div class="row justify-content-center px-4 mx-2">
                                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                                    <h2 className='px-2 py-0 fw-normal'>Buscador curaduría 1 de Bucaramanga</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className='container justify-content-center py-3'>
                        <div className='row d-flex justify-content-center '>
                            <div className='col-lg-8 '>
                                <div className='text-start px-0'>
                                    <InputGroup inside style={styles}>
                                        <Input size="md" inputRef={ref => this.inputSearch = ref} defaultValue={this._CHECL_FOR_URL_PARAMS()} />
                                        <InputGroup.Button onClick={() => _CHECK_STATUS()} >
                                            <SearchIcon />
                                        </InputGroup.Button>
                                    </InputGroup>
                                    <div className='py-2  text-start'>
                                        {
                                            approved(this._CHECL_FOR_URL_PARAMS()).sort().map(function (value) {
                                                return <>
                                                    <ul class="list-group list-group">
                                                        <li class="list-group-item d-flex justify-content-between align-items-start">
                                                            <div class="ms-2 me-auto">
                                                                <Link style={{ color: '#4b64ca' }} to={value.link}><div class="fw-bold">{value.title}</div></Link>
                                                                <div style={{ color: '#848484' }}>{value.content}</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </>
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Search;