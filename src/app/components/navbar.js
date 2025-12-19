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
                  <Link class="nav-link" to={"/home"}>
                    <span className='fw-bold'><i class="fas fa-home px-1"></i> Inicio</span>
                  </Link>
                </li>
                <li class="nav-item d-flex px-2 align-items-center border-box">
                  <Link class="nav-link" to={"/transparency"}>
                    <span className='fw-bold d-flex align-items-center'>Transparencia y acceso a <br />la información pública</span>
                  </Link>
                </li>
                <li class="nav-item d-flex px-2 align-items-center border-box">
                  <Link class="nav-link" to={"/pqrs"}>
                    <span className='fw-bold'>Atención y Servicio <br />a la ciudadanía</span>
                  </Link>
                </li>
                <li class="nav-item d-flex px-2 align-items-center border-box">
                  <Link class="nav-link" to={"/participate"}>
                    <span className='fw-bold'>Participa</span>
                  </Link>
                </li>
                <li class="nav-item dropdown d-flex px-2 align-items-center border-box">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="fas fa-bookmark"></i> Curaduria</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to={"/mision"}>Misión y visión</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/curator"}>La curaduria</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/whatwedo"}>Lo que hacemos</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/organization"}>Organigrama</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/normogram"}>Normatividad</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/kids"}>Curaduria para niños</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/inclusivity"}>Curaduria inclusiva</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/opendata"}>Datos Abiertos</Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown d-flex px-2 align-items-center border-box">

                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="fas fa-envelope-open-text"></i> Publicidad actos</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to={"/administrative"}>Publicaciones</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/old"}>Repositorio</Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to={"/news"}>Noticias y avisos importantes</Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown d-flex px-2 align-items-center border-box">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="fas fa-clipboard"></i> Recursos y herramientas</span>
                  </a>
                  <ul class="dropdown-menu">
                     <li>
                      <Link class="dropdown-item" to={"/file"}>Instrumentos de apoyo</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/faq"}>Preguntas frecuentes</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/school"}>Escuela del curador</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/data"}>Normatividad especial</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/reports"}>Informes a organismos de inspección, vigilancia y control</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/liquidator"}>Calculadora liquidacion Expensa</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/pqrs"}>Radicacion de pqrs</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/scheduling"}>Agendamiento de citas</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/mailbox"}>Contáctenos</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/status"}>Consulta estado de proceso</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/entities"}>Diccionario de entidades</Link>
                    </li>
                     <li>
                      <Link class="dropdown-item" to={"/certificacion"}>Certificación profesionales</Link>
                    </li>
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
