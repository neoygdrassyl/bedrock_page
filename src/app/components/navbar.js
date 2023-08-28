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
      <Navbar {...props} >
        <Navbar.Brand href="#"></Navbar.Brand>
        <Nav activeKey={activeKey} >
          <Nav.Item eventKey="1" as={MyLink} href="/home"> <i class="fas fa-home px-1"></i> Inicio</Nav.Item>
          <Nav.Item eventKey="2" as={MyLink} href="/transparency" ><i class="fas fa-list-ol px-2"></i> Transparencia</Nav.Item>
          <Nav.Item eventKey="2" as={MyLink} href="/participate" ><i class="fas fa-hand-paper"></i> Participa</Nav.Item>
          <Nav.Item eventKey="2" as={MyLink} href="/pqrs" ><i class="fas fa-id-card-alt"></i> Atención y Servicio a la ciudadanía</Nav.Item>
          <Nav.Menu title={<label><i class="fas fa-bookmark"></i> Curaduria</label>}>
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
        </Nav>
      </Navbar>
    );
  };

  const Demo = () => {
    const [activeKey, setActiveKey] = useState(false);
    return (
      <div className="nav-wrapper">
        <NavBarInstance activeKey={activeKey} onSelect={setActiveKey} />
      </div>
    );
  };

  return <>
    {Demo()}
  </>

}
