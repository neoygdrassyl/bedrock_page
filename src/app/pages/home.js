import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBRow, MDBCol, MDBTypography, MDBBadge, MDBInputGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink, MDBInputGroupElement } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
// Carousel IMGS
import NEW_ING from '../img/news1.jpg'
import NEW_2_ING from '../img/news_inclusivity.jpg'
import NEW_3_ING from '../img/news_certificate.jpg'
import LGOG16 from '../img/contacts/Icon2.png'
import LGOG15 from '../img/contacts/Icon.png'
import LGOG13 from '../img/pse.png'
import IMG1 from '../img/slider/img1.jpg'
import IMG2 from '../img/slider/img2.jpg'
import IMG3 from '../img/slider/img3.jpg'
import COLOMBIA from '../img/img6.jpg'
import IMG_MAP from '../img/cur/cur_mapa.png'


// Logos Carousel
import CarouselLogos from '../components/carousel.component'

// FRONT PAGE MODAL
import Modal from 'react-modal';

import './home.css'
import { infoCud } from '../components/jsons/vars';
import Map from '../components/map';
import { _news } from '../components/jsons/news/_news.js';

import { IconButton, ButtonToolbar, ButtonGroup, Row, Col, Panel, FlexboxGrid } from 'rsuite';
import ArrowDownIcon from '@rsuite/icons/ArrowDown';
import { Button_navigation } from '../components/button.component';
import { News_Home_Structure } from '../components/jsons/news/newsBodyHomePage.js';
import { LoopInfo } from '../components/LoopInfo/LoopInfo.js';
import { ServiceButton } from '../components/serviceButton/serviceButton.js';


import ImageCarousel from '../components/carousel.js';
import MainButton from '../components/mainButton/MainButton.js';



//import { useLocation } from 'react-router-dom';
//const location = useLocation();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  }


  render() {

    const { translation, } = this.props;
    const { modal } = this.state
    //const { location: { pathname }}= this.props
    {/*const modalMessage = {
      title: <h2>¡AVISO IMPORTANTE!</h2>,
      body: <dic>
        <p className='fw-bold'>MEDIANTE LA RESOLUCIÓN 0172 DEL 06 DE JUNIO DE 2022 SE MODIFICA EL HORARIO GENERAL DE ATENCIÓN AL PUBLICO Y SE ESTABLECEN HORARIOS ESPECIALES EN EL DESPACHO DEL CURADOR URBANO UNO DE BUCARAMANGA, ASÍ</p>
        <p>El horario general de atención al público del despacho del curador urbano uno de Bucaramanga, será de (07:00 am) a doce y media de la tarde (12:30pm) y de una de la tarde (1:00 pm) a cuatro de la tarde (4:00 pm). </p>
        <p>La radicación de la documentación realizada por fuera de este horario, independientemente del canal de radicación, se entenderá presentada al día hábil siguiente, por lo cual, si la radicación corresponde a un acto procesal con un término perentorio, tal como se consignó en la parte considerativa, la radicación será extemporánea dando lugar al desistimiento, rechazo del recurso, etc., según el caso.</p>
        <p>Así mismo se establecen los siguientes HORARIOS ESPECIALES, con el fin de prestar un mejor servicio,</p>
        <ul>
          <li>CONSULTA CON EL CURADOR URBANO: lunes a viernes de 7 a.m. a 12:30 p.m.</li>
          <li>ATENCIÓN A VECINOS / TERCEROS INTERESADOS: lunes a viernes de 7 a.m. a 12:30 p.m.</li>
          <li>ENTREGA DE PLANOS PARA COPIAS Y EJECUTORIAS: martes y jueves de 7 a.m. a 12:30 p.m.</li>
          <li>ASISTENCIA TÉCNICA CON REVISOR ESTRUCTURAL / REVISORA JURÍDICA: miércoles y viernes de 2:00 p.m. a 4:00 p.m.</li>
          <li>ASISTENCIA TÉCNICA CON ARQUITECTO REVISOR (PROYECTOS RADICADOS): lunes, miércoles y viernes de 7:00 a.m. a 12:30 p.m.</li>
          <li>ASISTENCIA TÉCNICA CON ARQUITECTO REVISOR (PREVIO A RADICACIÓN): martes y jueves de 7:00 a.m. a 12:30 p.m.</li>
        </ul>
        <p>SE INVITA a los usuarios a hacer uso del módulo de AGENDAMIENTO DE CITAS establecido para mejorar la prestación de nuestro servicio, al cual se puede acceder a través de la página institucional mediante el enlace https://www.curaduria1bucaramanga.com/scheduling o solicitándola a través de nuestros canales de atención los cuales son ampliamente conocidos y en todo caso pueden ser consultados en la precitada página.</p>
        <p>EL CONTENIDO DE LA RESOLUCIÓN SE ENCUENTRA DISPONIBLE PARA SU CONSULTA EN “PUBLICACIONES” DE LA PÁGINA INSTITUCIONAL (En el enlace https://www.curaduria1bucaramanga.com/administrative) ASÍ MISMO EN LUGAR VISIBLE DE LA OFICINA.</p>
      </dic>
    } */}

    const modalStyle = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 2,
      },
      content: {
        position: 'absolute',
        top: '12%',
        left: '25%',
        right: '25%',
        bottom: '5%',
        border: '1px solid #ccc',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        marginRight: 'auto',

      }
    };
    let _CHECK_STATUS = () => {
      let searchValue = this.inputSearch.value;
      this.props.history.push('/status/' + searchValue);
    }



    const Redirect = (id) => {
      var element = document.getElementById(id);
      //console.log(element)
      element.scrollIntoView();
    }
    //console.log(Redirect())


    let HOME_PAGE_SERVICE_PANEL = (icon, lb, to) => {
      return <Panel shaded bordered bodyFill className='border border-dark text-center' style={{ width: 160, height: 160, display: 'inline-block', backgroundColor: "#1B83C4", borderRadius: "80px" }}>
        <Panel>
          <Link to={to}>
            {icon}
            <h5 className='text-white fw-bold'>{lb}</h5>
          </Link>
        </Panel>
      </Panel>
    }

    // let location = this.props.location
    // const Redirect = (id)=> {
    //   return location.hash = '#'+id
    //   }
    //console.log(Redirect('1'))
    return (
      <div className="Home" id='1'>
        <div className="">
          <div class="container py-3 align-items-md-center justify-content-center mx-auto">
            <div class="row align-items-start">
              <ImageCarousel />

              <div className='col-lg-3 mx-1.2 py-2 ' >
                <div className='py-2'>
                  <MainButton logo="fas fa-file-invoice fa-2x" info="Consulta Normatividad" link={"/normogram"} />
                </div>
                <div className='py-2'>
                  <MainButton logo="fas fa-search fa-2x" info="Consulta Procesos" link={"/status"} />
                </div>
                <div className='py-2'>
                  <MainButton logo="fas fa-list-alt fa-2x" info="Consulta publicaciones" link={"/administrative"} />
                </div>
                <div className='py-2'>
                  <MainButton logo="fas fa-folder-minus fa-2x" info="Consulta repositorio" link={"/old"} />
                </div>
              </div>
            </div>
          </div>
          <LoopInfo />

          <div class="container mt-3 p-0">
            <div style={{ backgroundColor: '#2c6aa5', borderRadius: '2px' }} class="d-flex justify-content-between">
              <div class="d-flex flex-column justify-content-start align-items-start text-start py-2 px-4 col-md-6" >
                <div class="px-2 py-1">
                  <h5 className='px-2 py-0 fw-normal ' style={{ color: 'white' }}><i class="fas fa-calendar-alt text-light"></i> Horario: {infoCud.schedule}</h5>
                  <h5 className='px-2 py-0 fw-normal m-0' style={{ color: 'white' }}><i class="fas fa-calendar-alt text-light"></i> Consulta horarios especiales y atención especializada, click <Link className='text-light' to={'/mailbox'}>Aquí <i class="far fa-hand-point-left"></i></Link></h5>
                </div>

              </div>

              <div class="d-flex flex-column justify-content-start align-items-start text-start py-2 px-4 col-md-6">
                <div class="px-2 py-1">
                  <span className='col-lg-12 bg-white'>
                    <h5 className='px-2 py-0 fw-normal '><a style={{ color: 'white' }} href='https://www.google.es/maps/place/Curaduria+Urbana+No.+1+de+Bucaramanga/@7.1236512,-73.1155874,17z/data=!3m1!4b1!4m5!3m4!1s0x8e683f0ec6e6ea35:0xd99c4a977df44614!8m2!3d7.1236459!4d-73.1133987?hl=es' target="_blank"><i class="fas fa-map-marker-alt text-light"></i> {infoCud.address}</a></h5>
                    <h5 className='px-2 py-0 fw-normal m-0' style={{ color: 'white' }}><a href="https://web.whatsapp.com/send?phone=+573162795010" style={{ color: 'white' }} target="_blank"><i class="fas fa-mobile-alt text-light"></i> Whatsapp: {infoCud.number1}   - </a><i class="fas fa-envelope text-light"> </i> Correo: curaduriaurbana1@gmail.com</h5>
                  </span>
                </div>
              </div>
            </div>

            <hr className='bg-info py-0'></hr>
            <h2 className='text-center' id='services'> Servicios </h2>
            <div class="d-flex justify-content-around">
            </div>
            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item>
                <ServiceButton link={"/payments"} logo={<img src={LGOG13} height={"100px"} alt="pse" />} title="Pagos PSE" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <ServiceButton link={"/inclusivity"} logo={"fas fa-sign-language fa-5x fa-lg-4 text-2c6aa5"} title="Curaduria inclusiva" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <ServiceButton link={"/file"} logo={"fas fa-file-alt fa-5x fa-lg-4 text-2c6aa5"} title="Instrumentos y formatos" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <ServiceButton link={"/liquidator"} logo={"fas fa-calculator fa-5x fa-lg-4 text-2c6aa5"} title="Calculadora de expensa" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <ServiceButton link={"/pqrs"} logo={"fas fa-envelope-square fa-5x fa-lg-4 text-2c6aa5"} title="Radicacion PQRS" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <ServiceButton link={"/scheduling"} logo={"fas fa-calendar-check fa-5x fa-lg-4 text-2c6aa5"} title="Agendamiento de citas" />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <ServiceButton link={"/certificacion"} logo={"fas fa-file-pdf fa-5x fa-lg-4 text-2c6aa5"} title="Certificacion profesional" />
              </FlexboxGrid.Item>
            </FlexboxGrid>

            <hr className='bg-info'></hr>
            <div class="px-0 py-0 my-0 text-center">
              <i class="fas fa-search-location fa-4x"></i>
              <h3 class="" id='process'>Consulta de Procesos {<Button_navigation Iddown={'news'} Idup={'services'} />}  </h3>
              <div class="col-lg-8 mx-auto my-3">
                <h5 class=" fw-normal my-2">Ingrese el <u>ID del proceso</u> o el <u>número de cédula</u> para conocer el estado del proceso</h5>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <div style={{ width: '33rem' }}>
                    <MDBInputGroup className='mb-3'>
                      <MDBDropdown>
                        <MDBDropdownToggle style={{ backgroundColor: '#0d65c4' }}>TIPO DE PROCESO</MDBDropdownToggle>
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
                            <MDBDropdownLink onClick={() => this.inputSearch.placeholder = 'Ingrese el número de su cédula'}>CÉDULA</MDBDropdownLink>
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                      <MDBInputGroupElement type='text' label='ID del proceso' inputRef={ref => this.inputSearch = ref} />
                      <MDBBtn style={{ backgroundColor: '#0d65c4' }} onClick={() => _CHECK_STATUS()}>BUSCAR</MDBBtn>
                    </MDBInputGroup>
                  </div>
                </div>
                <p class=""><h5>aa = los dos últimos dígitos del año del proceso, 0000 = consecutivo del proceso</h5></p>
              </div>

              <hr className='bg-info'></hr>

              <h2 className='text-center' id='news'>Noticias importantes {<Button_navigation Iddown={'ubicacion'} Idup={'process'} />}</h2>
              <div className='row justify-content-center mx-0 px-0'>
                {_news.filter((data, index) => index <= 3).map((value, index) => (
                  <div key={index} className='col-lg col-md-6 col-sm-12'>
                    <div className='column align-items-center px-4 py-4 my-1'>
                      <News_Home_Structure title={value.title} date={value.date} summary={value.summary} url={value.url} image={value.image} imageTranscript={value.imageTranscript} />
                    </div>
                  </div>
                ))}
              </div>  




              {/*
              <MDBRow className="mt-5">
                <MDBCol md="4">
                  <i class="far fa-list-alt fa-4x"></i>
                  <h3 className="display-6 fw-bold">Listado de Publicaciones</h3>
                  <p className="lead">Encuentre todas las publicaciones expedidas por la Curaduría</p>
                  <Link to={'/administrative'}><MDBBtn color='secondary'>
                    <h4 className="pt-2"><i class="fas fa-chevron-right"></i> Ver Listado</h4>
                  </MDBBtn></Link>
                </MDBCol>
                <MDBCol md="4">
                  <i className="fas fa-file-invoice fa-4x"></i>
                  <h3 className="display-6 fw-bold">Radicación de Licencias</h3>
                  <p className="lead">Inicie aquí su proceso para radicar una Licencia</p>
                  <Link to={'/file'}><MDBBtn color='info'>
                    <h4 className="pt-2"><i class="fas fa-chevron-right"></i> Radicar</h4>
                  </MDBBtn></Link>
                </MDBCol>
                <MDBCol md="4">
                  <i class="fas fa-calculator fa-4x"></i>
                  <h3 className="display-6 fw-bold">Calculadora de liquidación</h3>
                  <p className="lead">Determine un valor posible de su liquidación aquí</p>
                  <Link to={'/liquidator'}><MDBBtn color='success'>
                    <h4 className="pt-2"><i class="fas fa-chevron-right"></i> Calculadora</h4>
                  </MDBBtn>
                  </Link>
                </MDBCol>
              </MDBRow> */}
            </div>

            {/*  <h2 className="mt-5">Ultimas Noticias</h2>
            <hr />z
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10">

                <div id="news_4">
                  <p className="display-6 lead fw-bold">¡AVISO IMPORTANTE PRÓRROGA DE LAS LICENCIAS Y REVALIDACIONES!</p>
                  <MDBRow>
                    <MDBCol md="12">
                      <p className="app-p lead text-justify">El Decreto 1783 De 2021 que modificó el Decreto 1077 de 2015 en el artículo 2.2.6.1.2.4.1. contempla (…) La solicitud de prórroga de una licencia urbanística deberá radicarse con la documentación completa a más tardar treinta (30) días hábiles antes del vencimiento de la respectiva licencia. La solicitud deberá acompañarse de la manifestación bajo la gravedad del juramento de la iniciación de obra por parte del urbanizador o constructor responsable.</p>
                      <p className="app-p lead text-justify">La prórroga de la revalidación se debe solicitar a más tardar treinta (30) días hábiles antes de su vencimiento y su expedición procede con la sola presentación de la solicitud por parte del interesado. Las solicitudes de prórroga de licencias urbanísticas y de prórroga de sus revalidaciones cuyo término de vigencia inicial se venza dentro de los tres meses (3) meses siguientes a la modificación del presente artículo, podrán presentarse cumpliendo con los términos establecidos en las normas vigentes antes de esta modificación (...)</p>
                      <p className="app-p lead text-justify">POR LO ANTERIOR Y EN VIRTUD DE QUE EL DECRETO ESTÁ VIGENTE DESDE EL 20 DE DICIEMBRE DE 2022: <b>SI SU LICENCIA O REVALIDACIÓN VENCE EL 21 DE MARZO DE 2022 O FECHA SIGUIENTE Y VA A RADICAR SOLICITUD DE PRÓRROGA, ESTA DEBE HACERSE DE FORMA COMPLETA 30 DÍAS HÁBILES ANTES DEL VENCIMIENTO, ES DECIR POR CITAR UN EJEMPLO, SI VENCE EL 21 DE MARZO DE 2022 DEBE RADICAR A MÁS TARDAR EL 07 DE FEBRERO DE 2022.LO ANTERIOR SÓLO APLICA PARA AQUELLAS LICENCIAS QUE PUEDEN SER PRORROGABLES</b>.</p>
                    </MDBCol>
                  </MDBRow>
                </div>

                <div id="news_3">
                  <p className="display-6 lead fw-bold">Ya disponible, certificación para profesionales que actúan ante la Curaduría</p>
                  <MDBRow>
                    <MDBCol md="4">
                      <img src={NEW_3_ING} class="d-block w-100 mt-2" alt="..." />
                    </MDBCol>
                    <MDBCol md="8">
                      <p className="app-p lead text-justify">La Curaduria Urbana N°1 de Bucaramanga ofrece a los profesionales que figuran en las actuaciones
                        urbanísticas, la certificación de participación y responsabilidad en la calidad profesional en la que haya actuado
                        en los proyectos de licenciamiento. Para generar el certificado, asi como para verificar el expedidor dar <Link to={'/certificacion'}>click aqui</Link>.</p>
                    </MDBCol>
                  </MDBRow>
                </div>
                <div id="news_1">
                  <p className="display-6 lead fw-bold ">Curaduría Inclusiva - Ley 982 de 2005</p>
                  <MDBRow>
                    <MDBCol md="8">
                      <p className="app-p lead text-justify">La Curaduria N° 1 de Bucaramanga usa la ayuda de las TIC para ofrecer un mejor servicio a quienes lo necesiten. Gracias al Ministerio de Tecnologías de la Información y las Comunicaciones- MINTIC en alianza con la Federación Nacional de Sordos de Colombia- FENASCOL, apoyándose en la tecnología ofrece servicios de forma gratuita mediante una aplicación de dispositivos móviles, de igual modo el ConVerTIC es el proyecto de inclusión del Ministerio TIC con el fin de promover la inclusión social, educativa, laboral y cultural a través de uso de las tecnologías para las personas ciegas o con baja visión. Conoce mas sobre estas alternativas
                        <Link to={'/inclusivity'}> dando click aqui</Link>. </p>
                    </MDBCol>
                    <MDBCol md="4">
                      <img src={NEW_2_ING} class="d-block w-100 mt-2" alt="..." />
                    </MDBCol>
                  </MDBRow>
                </div>

                <div id="news_2">
                  <p className="display-6 lead fw-bold">Nuestro Nuevo Punto de Atención</p>
                  <MDBRow>
                    <MDBCol md="4">
                      <img src={NEW_ING} class="d-block w-100 mt-2" alt="..." />
                    </MDBCol>
                    <MDBCol md="8">
                      <p className="app-p lead text-justify">Ya se encuentra en funcionamiento nuestro nuevo punto de atención. Nuestra nueva ubicación se encuentra en la Calle 36 # 31-39 Centro Empresarial Chicamocha - Local 101, con parqueadero público en el Centro Empresarial Chicamocha. Nuestro horario de atención permanece sin cambios, de Lunes a Viernes de 07:00 am a 12:30 pm y 1:00 pm  a 5:00 pm.</p>
                    </MDBCol>
                  </MDBRow>
                </div>



              </MDBCol>
            </MDBRow>
            */}
          </div>
        </div>
        <hr className='bg-info'></hr>
        <h2 className='text-center' id='ubicacion'> Ubicación {<Button_navigation Iddown={null} Idup={'news'} />}</h2>
        <div class="row justify-content-center px-4 mx-4 px-4 mb-5">
          <div class="col-lg-12 d-flex justify-content-center">
            <img src={IMG_MAP} width="50%" />
          </div>
        </div>


        {/*<Modal contentLabel="FRONT PAGE MODAL"
          isOpen={modal}
          style={modalStyle}
          ariaHideApp={false}
        >
          <div className="my-4 d-flex justify-content-between">
            {modalMessage.title}
            <MDBBtn className='btn-close' color='none' onClick={() => this.setState({ modal: false })}></MDBBtn>
          </div>

          <div className='border p-2'>
            {modalMessage.body}
          </div>

          <div className="text-end py-4 mt-3">
            <MDBBtn color='info' size='sm' onClick={() => this.setState({ modal: false })}>
              <h4 className="pt-2"><i class="fas fa-times-circle"></i> CERRAR</h4>
            </MDBBtn>
          </div>

        </Modal> */}

      </div >
    );
  }
}

export default Home;