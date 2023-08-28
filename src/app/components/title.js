import React, { Component } from 'react';
import LanguageSwitcher from './languageSwitcher';
import { infoCud } from './jsons/vars';
import Logo from '../img/logo.png'
import { Input, InputGroup, Whisper, Tooltip, IconButton } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search'
import { Link } from 'react-router-dom';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //modal: true
        };
    }
    render() {
        const { translation } = this.props;
        const styles = {
            width: 230,
            marginBottom: 0
        };
        let _CHECK_STATUS = () => {
            let searchValue = this.inputSearch.value;
            this.props.history.push('/search/' + searchValue);
        }
        return <>

            <div className="Title container-primary">

                <div className='row mx-0' style={{ backgroundColor: '#3366CC' }}>
                    <div className='col-9 mx-0 px-0 py-2'>
                        <div className='ps-4'>
                            <a chref="https://www.gov.co" target="_blank" rel="nofollow" >
                                <img src={infoCud.icon2} alt="Imagen logo GovCo" style={{ height: '20px' }} class="img-responsive" />
                            </a>
                        </div>

                    </div>
                    <div className='col-3 px-0 pt-1 text-right'>
                        <InputGroup inside style={styles}>
                            <Input size="xs" inputRef={ref => this.inputSearch = ref} />
                            <button className=' btn-white btn-sm' onClick={() => _CHECK_STATUS()} >
                                <SearchIcon />
                            </button>
                        </InputGroup>
                    </div>
                </div>

                <div class="row justify-content-md-center d-flex align-items-center mb-3">
                    <div class="col-lg-1  d-flex justify-content-center">
                        <a href='/home'>
                            <img src={infoCud.icon} height="66px" />
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-2 mb-4 mt-3 mb-md-0">
                        <h3 class="text-uppercase text-center pb-0" >{infoCud.titles} {infoCud.dir}</h3>
                        <h3 class="text-uppercase text-center pb-0" >CURADOR URBANO N°{infoCud.nomens} DE {infoCud.city}</h3>
                    </div>
                </div>

            </div >
        </>;
    }
}

export default Title;
