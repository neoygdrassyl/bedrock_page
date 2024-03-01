import React, { Component } from 'react';
import { Navbar, Nav } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import {
  Link,
} from "react-router-dom";
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search'

// Translations Services
import { useTranslation } from "react-i18next";
import "../translation/i18n";
import * as ReactDOM from 'react-dom';

// Ttransparency
//import TransparencyDD from './transparencyDD'

class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };
  render() {
    let _CHECK_STATUS = () => {
      let searchValue = this.inputSearch.value;
      this.props.history.push('/search/' + searchValue);
    }
    return <>
      <div className="nav-wrapper my-3" style={{ backgroundColor: '#f7f7fa', }}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 justify-content-center px-4 py-0" style={{ boxShadow: 'none' }}>

          <div class="container-fluid px-3 ">
            <style>{`
        .navbar a {
          text-decoration: none;
          color: #575757;
          padding: 4px !important;
        }
        .nav-item:hover{
          background-color: #e5e5ea;
        }
      `}</style>
            {/* Para el collapse */}
            <a class="navbar-brand d-block d-lg-none">Menú</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* Sin el collapse */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold ">
                <li class="nav-item d-flex px-2 align-items-center border-box hover:">
                  <a class="nav-link" href="/home"><span className='fw-bold'><i class="fas fa-home px-1"></i> Inicio</span></a>
                </li>
                <li class="nav-item d-flex px-2 align-items-center border-box">
                  <a class="nav-link" href="/transparency">
                    <span className='fw-bold d-flex align-items-center'>Transparencia y acceso a <br />la información pública</span></a>
                </li>
                <li class="nav-item d-flex px-2 align-items-center border-box">
                  <a class="nav-link" href="/pqrs">
                    <span className='fw-bold'>Atención y Servicio <br />a la ciudadanía</span></a>
                </li>

                <li class="nav-item d-flex px-2 align-items-center border-box">
                  <a class="nav-link" href="/participate">
                    <span className='fw-bold'>Participa</span></a>
                </li>
                <li class="nav-item dropdown d-flex px-2 align-items-center border-box">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="fas fa-bookmark"></i> Curaduria</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/mision">Misión y visión</a></li>
                    <li><a class="dropdown-item" href="/curator">La curaduria</a></li>
                    <li><a class="dropdown-item" href="whatwedo">Lo que hacemos</a></li>
                    <li><a class="dropdown-item" href="/organization">Organigrama</a></li>
                    <li><a class="dropdown-item" href="normogram">Normatividad</a></li>
                    <li><a class="dropdown-item" href="/kids">Curaduria para niños</a></li>
                    <li><a class="dropdown-item" href="/inclusivity">Curaduria inclusiva</a></li>
                    <li><a class="dropdown-item" href="/opendata">Datos Abiertos</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown d-flex px-2 align-items-center border-box">

                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="fas fa-envelope-open-text"></i> Publicidad actos</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/administrative">Publicaciones</a></li>
                    <li><a class="dropdown-item" href="old">Repositorio</a></li>
                    <li><a class="dropdown-item" href="/news">Noticias y avisos importantes</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown d-flex px-2 align-items-center border-box">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="fas fa-clipboard"></i> Recursos y herramientas</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/file">Instrumentos de apoyo</a></li>
                    <li><a class="dropdown-item" href="faq">Preguntas frecuentes</a></li>
                    <li><a class="dropdown-item" href="/school">Escuela del curador</a></li>
                    <li><a class="dropdown-item" href="/data">Normatividad especial</a></li>
                    <li><a class="dropdown-item" href="/reports">Informes a organismos de inspección, vigilancia y control</a></li>
                    <li><a class="dropdown-item" href="/liquidator">Calculadora liquidacion Expensa</a></li>
                    <li><a class="dropdown-item" href="/pqrs">Radicacion de pqrs</a></li>
                    <li><a class="dropdown-item" href="/scheduling">Agendamiento de citas</a></li>
                    <li><a class="dropdown-item" href="/mailbox">Contáctenos</a></li>
                    <li><a class="dropdown-item" href="/status">Consulta estado de proceso</a></li>
                    <li><a class="dropdown-item" href="/entities">Diccionario de entidades</a></li>
                    <li><a class="dropdown-item" href="/certificacion">Certificación profesionales</a></li>
                  </ul>
                </li>


              </ul>
              <div className='d-xl-flex d-lg-none'>
                <InputGroup inside className='pl-5' >
                  <Input size="form-control me-2 outline-black" inputRef={ref => this.inputSearch = ref} />
                  <button className='btn btn-btn-outline-black  ' onClick={() => _CHECK_STATUS()} >
                    <SearchIcon size="5em" />
                  </button>
                </InputGroup>
              </div>
            </div>
          </div>
        </nav >
      </div >
    </>
  }
}
const MyLink = React.forwardRef((props, ref) => {
  const { href, as, ...rest } = props;
  return (
    <Link style={{ color: '#575757', textDecoration: 'none' }} to={href} as={as}>
      <a {...rest} />
    </Link>
  );
});
// let _CHECK_STATUS = () => {
//   let searchValue = this.inputSearch.value;
//   this.props.history.push('/search/' + searchValue);
// }

// <div className="nav-wrapper">
//   <NavBarInstance activeKey={activeKey} onSelect={setActiveKey} />
// </div>
export default Navbar1
