import React, { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import "rsuite/dist/rsuite.min.css";
import {
  Link,
} from "react-router-dom";

// Translations Services
import { useTranslation } from "react-i18next";
import "../translation/i18n";
import * as ReactDOM from 'react-dom';

// Ttransparency
//import TransparencyDD from './transparencyDD'

export default function Navbar1(props) {
  const { authBtn } = props
  const [showNav, setShowNav] = useState(false);
  const { t } = useTranslation();

  const MyLink = React.forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return (
      <Link style={{ color: '#575757', textDecoration: 'none' }} to={href} as={as}>
        <a {...rest} />
      </Link>
    );
  });
  const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props} expand="lg ">
        <Nav activeKey={activeKey} className="w-100 d-flex justify-content-center align-items-center" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <Nav.Item eventKey="1" as={MyLink} href="/home"> <i class="fas fa-home px-1"></i> <span className='fw-bold'>Inicio</span></Nav.Item>
          <Nav.Item eventKey="2" as={MyLink} href="/transparency" ><span className='fw-bold'>Transparencia y acceso a <br />la información pública</span></Nav.Item>
          <Nav.Item eventKey="3" as={MyLink} href="/pqrs"><span className='fw-bold'> Atención y Servicio  <br />a la ciudadanía</span></Nav.Item>
          <Nav.Item eventKey="4" as={MyLink} href="/participate"><span className='fw-bold'>Participa</span></Nav.Item>
          <Nav.Menu pullRight title={<label><i class="fas fa-bookmark"></i> Curaduria</label>}>





            <Nav.Item eventKey="5" as={MyLink} href="/mision"> Misión y visión</Nav.Item>
            <Nav.Item eventKey="6" as={MyLink} href="/curator">La curaduria</Nav.Item>
            <Nav.Item eventKey="7" as={MyLink} href="/whatwedo">Lo que hacemos</Nav.Item>
            <Nav.Item eventKey="8" as={MyLink} href="/organization">Organigrama</Nav.Item>
            <Nav.Item eventKey="9" as={MyLink} href="/normogram">Normatividad</Nav.Item>
            <Nav.Item eventKey="10" as={MyLink} href="/kids">Curaduria para niños</Nav.Item>
            <Nav.Item eventKey="11" as={MyLink} href="/inclusivity">Curaduria inclusiva</Nav.Item>
            <Nav.Item eventKey="31" as={MyLink} href="/opendata">Datos abiertos</Nav.Item>






          </Nav.Menu>
          <Nav.Menu title={<label><i class="fas fa-envelope-open-text"></i> Publicidad actos </label>}>
            <Nav.Item eventKey="12" as={MyLink} href="/administrative">Publicaciones</Nav.Item>
            <Nav.Item eventKey="13" as={MyLink} href="/old">Repositorio</Nav.Item>
            <Nav.Item eventKey="14" as={MyLink} href="/news">Noticias y avisos importantes</Nav.Item>
          </Nav.Menu>


          <Nav.Menu title={<label><i class="fas fa-clipboard"></i> Recursos y herramientas</label>}>
            <Nav.Item eventKey="15" as={MyLink} href="/file">Instrumentos de apoyo</Nav.Item>
            <Nav.Item eventKey="18" as={MyLink} href="/faq">Preguntas frecuentes</Nav.Item>
            <Nav.Item eventKey="19" as={MyLink} href="/school">Escuela del curador</Nav.Item>
            <Nav.Item eventKey="20" as={MyLink} href="/data">Normatividad especial</Nav.Item>
            <Nav.Item eventKey="20" as={MyLink} href="/reports">Informes a organismos de inspección, vigilancia y control</Nav.Item>
            <Nav.Item eventKey="22" as={MyLink} href="/liquidator">Calculadora liquidacion Expensa</Nav.Item>
            <Nav.Item eventKey="23" as={MyLink} href="/pqrs">Radicacion de pqrs</Nav.Item>
            <Nav.Item eventKey="21" as={MyLink} href="/scheduling">Agendamiento de citas</Nav.Item>
            <Nav.Item eventKey="24" as={MyLink} href="/mailbox">Contáctenos</Nav.Item>
            <Nav.Item eventKey="16" as={MyLink} href="/status">Consulta estado de proceso</Nav.Item>
            <Nav.Item eventKey="42" as={MyLink} href="/entities">Diccionario de entidades</Nav.Item>
            <Nav.Item eventKey="17" as={MyLink} href="/certificacion">Certificación profesionales</Nav.Item>
          </Nav.Menu>
        </ Nav>
      </Navbar>
    );
  };
  const isCollapsed = () => {
    return
  }
  const Demo = () => {
    const [activeKey, setActiveKey] = useState(false);
    return (
      <div className="nav-wrapper my-3" style={{ backgroundColor: '#f7f7fa', }}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary w-100 justify-content-center px-4 py-0" style={{ boxShadow: 'none' }}>
          <style>{`
        .navbar a {
          text-decoration: none;
          color: #575757;
          padding: 4px !important;

        }
        .navbar li{
          margin: 0 12px !important;
          display: flex !important;
          align-items: center !important;
          box-sizing: border-box;
        }
        }
      `}</style>
          <div class="container-fluid px-4 ">
            {/* Para el collapse */}
            <a class="navbar-brand d-block d-lg-none">Menú</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* Sin el collapse */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                <li class="nav-item ">
                  <a class="nav-link" href="/home"><span className='fw-bold'><i class="fas fa-home px-1"></i> Inicio</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/transparency">
                    <span className='fw-bold d-flex align-items-center'>Transparencia y acceso a <br />la información pública</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/pqrs">
                    <span className='fw-bold'>Atención y Servicio <br />a la ciudadanía</span></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/participate">
                    <span className='fw-bold'>Participa</span></a>
                </li>
                <li class="nav-item dropdown">
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
                <li class="nav-item dropdown">

                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span><i class="fas fa-envelope-open-text"></i> Publicidad actos</span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/administrative">Publicaciones</a></li>
                    <li><a class="dropdown-item" href="old">Repositorio</a></li>
                    <li><a class="dropdown-item" href="/news">Noticias y avisos importantes</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
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
              <form class="d-lg-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
              </form>
            </div>
          </div>
        </nav >
      </div >




    );
  };
  // <div className="nav-wrapper">
  //   <NavBarInstance activeKey={activeKey} onSelect={setActiveKey} />
  // </div>
  return <>
    {Demo()}
  </>

}
