import React, { Component } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardFooter, MDBBtn, MDBTypography, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentService from '../../services/appointments.service'
import Modal from 'react-modal';

const moment = require('moment');
const momentBD = require('moment-business-days');
const holydaysList = require("../../components/holydays.list.json");

const MySwal = withReactContent(Swal)

class Scheduling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
      solicitor: '',
      profesional: 1,
      date: '',
      time: '',
      motive: '',
      type: 0,
      modal: false,
      operator: {
        name: '',
        role: '',
        id: '',
        daysOn: [],
        hoursOn: [],
      },
      calendarValue: moment().format('YYYY-MM-DD'),
      minDate: moment().add(0, 'days')._d,
      maxDate: moment().add(30, 'days')._d,
      checkDate: 'Seleccione una Fecha',
      appointmentDate: null,
      alllowAppointment: false,
    };
  }
  componentDidUpdate(PrevProps, prevState) {
    if (this.state.calendarValue !== prevState.calendarValue) {
      this.checkforAvilAbleDate();
    }
  }

  checkforAvilAbleDate = () => {
    let date = moment(this.state.calendarValue).format("YYYY-MM-DD");
    let _year = moment(date).year();
    let _month = moment(date).month();
    let _day = moment(date).date();
    let dayOfWeek = moment(date).day();

    // CHEKS IF THE DATE IS AVAIABLE, FIRST BY CECKING IF ITS ON WEEKENDS OR IS A HOLYDAY
    var Verification = document.getElementById('flexCheckDefault') ? document.getElementById('flexCheckDefault').checked : false
    if (dayOfWeek == 6 || dayOfWeek == 0) {
      this.setState({
        checkDate: <label className="text-danger">{this.props.translation.form_box_152}</label>,
        alllowAppointment: false,
        appointmentDate: null,
      })
    } else if (holydaysList[_year][_month].includes(_day)) {
      this.setState({
        checkDate: <label className="text-danger">{this.props.translation.form_box_153}</label>,
        alllowAppointment: false,
        appointmentDate: null,
      })
    } else if (!this.state.operator.daysOn.includes(dayOfWeek) && !Verification) {
      this.setState({
        checkDate: <label className="text-danger">{this.props.translation.form_box_154}</label>,
        alllowAppointment: false,
        appointmentDate: null,
      })
    } else {
      let formData = new FormData();
      // IF EVERYTHING IS K, IT CHECKS ON THE DATA BASE IF THERE ARE NOT ALREADY DATE AT THE SAME DATE AND TIME
      let profesional = this.state.operator.name;
      formData.set("profesional", profesional);
      formData.set("date", date);
      let time = document.getElementById("scheduling_time") ? document.getElementById("scheduling_time").value : "";
      formData.set("time", time);

      AppointmentService.checkforAvilAbleDate(formData)
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              checkDate: <label className="text-danger">{this.props.translation.form_box_155}</label>,
              alllowAppointment: false,
              appointmentDate: null,
            })
          } else {
            this.setState({
              checkDate: <label className="text-success">{this.props.translation.form_box_14}</label>,
              alllowAppointment: true,
              appointmentDate: date,
            })
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  ////
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });

  }
  getToggle = () => {
    return this.state.modal;
  }
  setUser1 = () => {
    this.setState({
      operator: {
        name: 'LUIS PARRA',
        role: "CURADOR",
        id: '0',
        daysOn: [1, 2, 3, 4, 5],
        hoursOn: ["7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:20 am", "9:40 am", "10:00 am", "10:20 am", "10:40 am", "11:00 am", "11:20 am", "11:40 am", "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:00 pm"]
      }
    })
    this.setCalendar()
  }
  setUser2 = () => {
    this.setState({
      operator: {
        name: 'CARLOS ULLOA',
        role: "INGENIERO",
        id: '1',
        daysOn: [1, 3, 5],
        hoursOn: ["2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm"],
        blockOffHours: true,
      }
    })
    this.setCalendar()
  }
  setUser3 = () => {
    this.setState({
      operator: {
        name: 'MARIA MARGARITA',
        role: "ABOGADA",
        id: '2',
        daysOn: [2, 3, 4, 5],
        hoursOn: ["7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:20 am", "9:40 am", "10:00 am", "10:20 am", "10:40 am", "11:00 am", "11:20 am", "11:40 am", "1:00 pm", "1:20 pm", "1:40 pm", "2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm", "3:20 pm", "3:40 pm", "4:00 pm"]
      }
    })
    this.setCalendar()
  }
  setUser4 = () => {
    this.setState({
      operator: {
        name: 'JOSE TRIANA',
        role: "ARQUITECTO",
        id: '5',
        daysOn: [1, 2, 3, 4, 5],
        hoursOn: ["7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:20 am", "9:40 am", "10:00 am", "10:20 am", "10:40 am", "11:00 am", "11:20 am", "11:40 am", "1:00 pm", "1:20 pm", "1:40 pm", "2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm", "3:20 pm", "3:40 pm"]
      }
    })
    this.setCalendar()
  }
  setUser5 = () => {
    this.setState({
      operator: {
        name: 'LINDA PAEZ',
        role: "ABOGADA",
        id: '4',
        daysOn: [1, 2, 3, 4, 5],
        hoursOn: ["7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:20 am", "9:40 am", "10:00 am", "10:20 am", "10:40 am", "11:00 am", "11:20 am", "11:40 am", "1:00 pm", "1:20 pm", "1:40 pm", "2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm", "3:20 pm", "3:40 pm"]
      }
    })
    this.setCalendar()
  }
  setUser6 = () => {
    this.setState({
      operator: {
        name: 'LINA ROCHA',
        role: "ARQUITECTA",
        id: '6',
        daysOn: [1, 2, 3, 4, 5],
        hoursOn: ["7:00 am", "7:20 am", "7:40 am", "8:00 am", "11:30 am", "11:50 am", "12:10 pm", "12:30 pm"],
        blockOffHours: true,
      }
    })
    this.setCalendar()
  }
  setUser7 = () => {
    this.setState({
      operator: {
        name: 'MAYRA CEPEDEDA',
        role: "ARQUITECTA",
        id: '3',
        daysOn: [1, 2, 3, 4, 5],
        hoursOn: ["7:00 am", "7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "11:50 am", "12:10 pm", "12:30 pm",  "1:00 pm", "1:20 pm", "1:40 pm", "2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm", "3:20 pm", "3:40 pm"],
        blockOffHours: true,
      }
    })
    this.setCalendar()
  }
  setUser8 = () => {
    this.setState({
      operator: {
        name: 'ANTONIO GRANADOS',
        role: "INGENIERO",
        id: '7',
        daysOn: [1, 3, 4],
        hoursOn: ["7:00 am", "7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "11:50 am", "12:10 pm", "12:30 pm",  "1:00 pm", "1:20 pm", "1:40 pm", "2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm", "3:20 pm", "3:40 pm"],
        blockOffHours: true,
      }
    })
    this.setCalendar()
  }
  setUser9 = () => {
    this.setState({
      operator: {
        name: 'XIMENA FLOREZ',
        role: "ARQUITECTA",
        id: '21',
        daysOn: [1, 2, 3, 4, 5],
        hoursOn: ["7:00 am", "7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "11:50 am", "12:10 pm", "12:30 pm",  "1:00 pm", "1:20 pm", "1:40 pm", "2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm", "3:20 pm", "3:40 pm"],
        blockOffHours: true,
      }
    })
    
    this.setCalendar()
  }
  setUser10 = () => {
    this.setState({
      operator: {
        name: 'STEFANNY GOMEZ',
        role: "ABOGADA",
        id: '20',
        daysOn: [1, 2, 3, 4, 5],
        hoursOn: ["7:00 am", "7:20 am", "7:40 am", "8:00 am", "8:20 am", "8:40 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "11:50 am", "12:10 pm", "12:30 pm",  "1:00 pm", "1:20 pm", "1:40 pm", "2:00 pm", "2:20 pm", "2:40 pm", "3:00 pm", "3:20 pm", "3:40 pm"],
        blockOffHours: true,
      }
    })
    
    this.setCalendar()
  }

  setCalendar = () => {
    this.setState({
      calendarValue: new Date(),
      checkDate: 'Seleccione una Fecha',
    })
    this.toggle();
  }
  render() {
    const { translation, swaMsg, breadCrums } = this.props;
    const { operator, calendarValue, minDate, maxDate, checkDate } = this.state;

    // CUSTOM STYLES FOR THE MODAL
    const customStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '20%',
        right: 'auto',
        bottom: '40px',
        border: '1px solid #ccc',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        marginRight: '20%',

      }, zIndex: '4'
    };
    const selectId = translation.form_type_id.map(function (item, i) {
      return <option value={i}>{item}</option>
    })

    const xlsxx = operator.hoursOn.map(function (item, i) {
      return <>
        <option>{item}</option>
      </>
    })



    const handleCheck = (e) => {
      //console.log(this.state.operator.blockOffHours)
      if(!this.state.operator.blockOffHours) this.setState({ selectedValue: e.target.checked })
    }
    const Text = () => {
      if (this.state.selectedValue == true) {
        return <label className='text-danger'>Señor usuario tenga en cuenta que al utilizar esta opción debe aclarar y argumentar el motivo de la cita.</label>
      }
    }
    const selectHours = () => {
      //console.log(this.state.selectedValue)
      if (this.state.selectedValue == false) {

        return xlsxx
      } else if (this.state.selectedValue == true) {
        //this.setState({[operator[daysOn]]:[1,2,3,4,5]})
        return <>
          <option>7:20 am</option>
          <option>7:40 am</option>
          <option>8:00 am</option>
          <option>8:20 am</option>
          <option>8:40 am</option>
          <option>9:00 am</option>
          <option>9:20 am</option>
          <option>9:40 am</option>
          <option>10:00 am</option>
          <option>10:20 am</option>
          <option>10:40 am</option>
          <option>11:00 am</option>
          <option>11:20 am</option>
          <option>11:40 am</option>
          <option>12:00 pm</option>
          <option>1:00 pm</option>
          <option>1:20 pm</option>
          <option>1:40 pm</option>
          <option>2:00 pm</option>
          <option>2:20 pm</option>
          <option>2:40 pm</option>
          <option>3:00 pm</option>
          <option>3:20 pm</option>
          <option>3:40 pm</option>
        </>
      }
    }
    //console.log(selectHours())

    // FORMSs
    var formData = new FormData();

    let calendarOnChange = (event) => {
      this.setState({
        calendarValue: new Date(event),
        checkDate: <label className="text-warning">{translation.form_box_13}</label>
      });
    }

    let handleSubmit = (event) => {
      event.preventDefault();
      if (this.state.alllowAppointment) {
        MySwal.fire({
          title: swaMsg.title_wait,
          text: swaMsg.text_wait,
          icon: 'info',
          showConfirmButton: false,
        });

        // DATE INFORMATION
        formData.set('worker_name', this.state.operator.name);
        formData.set('worker_id', this.state.operator.id);
        formData.set('date', this.state.appointmentDate);
        const time = document.getElementById("scheduling_time").value;
        formData.set('time', time);
        const motive = document.getElementById("scheduling_motive").value;
        formData.set('motive', motive);
        const appointment_type = document.getElementById("scheduling_appointment_type").value;
        formData.set('appointment_type', appointment_type);
        const content = document.getElementById("scheduling_content").value;
        formData.set('content', content);
        // CONTACT INFORMATION
        const name = document.getElementById("scheduling_name").value;
        formData.set('name', name);
        const type_id = document.getElementById("scheduling_type_id").value;
        formData.set('type_id', type_id);
        const number_id = document.getElementById("scheduling_number_id").value;
        formData.set('number_id', number_id);
        const number_mobile = document.getElementById("scheduling_number_mobile").value;
        formData.set('number_mobile', number_mobile);
        const email = document.getElementById("scheduling_email").value;
        formData.set('email', email);
        const accesibility = document.getElementById("scheduling_accesibility").value;
        formData.set('accesibility', accesibility);

        AppointmentService.create(formData)
          .then(response => {
            if (response.data === 'OK') {
              MySwal.fire({
                title: swaMsg.scheduling_success_title,
                text: swaMsg.scheduling_success_text,
                icon: 'success',
                confirmButtonText: swaMsg.text_btn,
              })
              document.getElementById("app-form").reset();
              formData = new FormData();
              formData.set('type_id', 0);
              formData.set('appointment_type', 0);
              formData.set('time', null);
              formData.set('motive', null);
              this.toggle();
            } else {
              MySwal.fire({
                title: swaMsg.scheduling_error_title,
                text: swaMsg.text_error,
                footer: swaMsg.text_footer,
                icon: 'error',
                confirmButtonText: swaMsg.text_btn,
              });
            }
          })
          .catch(e => {
            MySwal.fire({
              title: swaMsg.scheduling_error_title,
              text: swaMsg.text_error,
              footer: swaMsg.text_footer,
              icon: 'error',
              confirmButtonText: swaMsg.text_btn,
            });
          });

      } else {
        MySwal.fire({
          title: swaMsg.scheduling_error_title,
          text: swaMsg.scheduling_error_text,
          icon: 'warning',
          confirmButtonText: swaMsg.text_btn,
        })
      }

    };

    return (
      <div className="Scheduling container">
        <div className="row my-4 d-flex justify-content-center">
          <MDBBreadcrumb className="mx-5">
            <MDBBreadcrumbItem>
              <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_61}</label></MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <div className="col-lg-8 col-md-12">
            <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
              <div class="row justify-content-center px-4 mx-2">
                <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                  <h2 className='px-2 py-0 fw-normal'>{translation.title}</h2>
                </div>
              </div>
            </div>
            <hr />
            <p className="text-justify">{translation.text_11}</p>
            <MDBRow>
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' #f5f5f5 ' }}>
                  <MDBCardBody className="justify-content-center">
                    <tabla className="table table align-middle table-sm">
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "FireBrick" }}></i></td >
                          <td><h4>{translation.text_c_1_1}</h4></td>
                        </tr>
                        <tr>
                          <td><h4>{translation.text_c_1_2}</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4 className="text-justify">{translation.text_c_1_3}</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: '#1B83C4' }} onClick={this.setUser1} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' #f5f5f5 ' }}>
                  <MDBCardBody>
                    <tabla className="table table align-middle table-sm">
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "RoyalBlue" }}></i></td >
                          <td><h4>{translation.text_c_3_1}</h4></td>
                        </tr>
                        <tr>
                          <td><h4>{translation.text_c_3_2}</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4>{translation.text_c_3_3}</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: '#1B83C4' }} onClick={this.setUser3} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3">
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' #f5f5f5 ' }}>
                  <MDBCardBody className="justify-content-center">
                    <tabla className="table table align-middle table-sm">
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "BlueViolet" }}></i></td >
                          <td><h4>{translation.text_c_2_1}</h4></td>
                        </tr>
                        <tr>
                          <td><h4>{translation.text_c_2_2}</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4 className="text-justify">{translation.text_c_2_3}</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: '#1B83C4' }} onClick={this.setUser2} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' #f5f5f5 ' }}>
                  <MDBCardBody>
                    <tabla className="table table align-middle table-sm">
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "SeaGreen" }}></i></td >
                          <td><h4>{translation.text_c_4_1}</h4></td>
                        </tr>
                        <tr>
                          <td><h4>{translation.text_c_4_2}</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4>{translation.text_c_4_3}</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: '#1B83C4' }} onClick={this.setUser4} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-3">
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' #f5f5f5 ' }}>
                  <MDBCardBody>
                    <tabla className="table table align-middle table-sm">
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "MediumVioletRed" }}></i></td >
                          <td><h4>Stefanny Gomez</h4></td>
                        </tr>
                        <tr>
                          <td><h4>Abogada</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4>Abogada revisora de proyectos</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: '#1B83C4' }} onClick={this.setUser10} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' #f5f5f5 ' }}>
                  <MDBCardBody>
                    <tabla className="table table align-middle table-sm">
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "#58c1b8" }}></i></td >
                          <td><h4>{'Ximena Florez'}</h4></td>
                        </tr>
                        <tr>
                          <td><h4>Arquitecta</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4>Arquitecta revisora de proyectos</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: '#1B83C4' }} onClick={this.setUser9} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>

            <MDBRow className="mt-3">
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' gainsboro ' }}>
                  <MDBCardBody>
                    <tabla className="table table align-middle table-sm" >
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "#fecf6a" }}></i></td >
                          <td><h4>Mayra Cepeda</h4></td>
                        </tr>
                        <tr>
                          <td><h4>{translation.text_c_6_2}</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4>{translation.text_c_6_3}</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: 'gainsboro' }} onClick={() => {}} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard className="border border-dark" style={{ backgroundColor: ' #f5f5f5 ' }}>
                  <MDBCardBody>
                    <tabla className="table table align-middle table-sm">
                      <tbody>
                        <tr>
                          <td scope="row" rowSpan="2" className="text-center"><i class="fas fa-user-tie fa-5x" style={{ color: "Orange" }}></i></td >
                          <td><h4>{'Antonio Granados'}</h4></td>
                        </tr>
                        <tr>
                          <td><h4>{translation.text_c_2_2}</h4></td>
                        </tr>
                        <tr>
                          <td colSpan="3"><h4>{translation.text_c_2_3}</h4></td>
                        </tr>
                      </tbody>
                    </tabla>
                  </MDBCardBody>
                  <MDBCardFooter className='text-end'>
                    <MDBBtn style={{ backgroundColor: '#1B83C4' }} onClick={this.setUser8} >
                      <h4 className="pt-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1}</h4>
                    </MDBBtn>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </div>
        </div>

        <Modal contentLabel="INFORMACION PQRS"
          isOpen={this.state.modal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="my-4 d-flex justify-content-between">
            <h2 className="text-center"><i class="far fa-calendar-check"></i> {translation.form_title} {operator.name + ' - ' + operator.role}</h2>
            <MDBBtn className='btn-close' color='none' onClick={this.toggle}></MDBBtn>
          </div>
          <MDBTypography note style={{ backgroundColor: '#EDEDED' }} className="mt-3 text-grey">
            <p>
              <b>Nota: </b><br />
              Apreciado usuario tenga en cuenta que los lunes en la mañana no se atienden citas.<br />
              Además, tenga en cuenta que si presenta inconvenientes a la hora de agendar su cita, puede comunicarse a cualquiera de nuestros canales de atención ya sea via whatsapp o via telefonica para agendar la cita.
            </p>
          </MDBTypography>
          <form onSubmit={handleSubmit} id="app-form">
            <MDBCard className="bg-card-2 my-3">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol className="text-center">
                    <h2 className="text-center app-text-primary">{translation.form_subTitle_1}</h2>
                    <hr />
                    <div className="ps-4">
                      <Calendar
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={calendarOnChange}
                        defaultValue={moment()}
                        value={calendarValue}
                        className="text-dark"
                        locale={translation.form_calendar_locale}
                      >
                      </Calendar>
                    </div>
                    <MDBTypography note noteColor='warning' className="my-3 Collapsible"><p>{translation.form_box_11} {checkDate}</p></MDBTypography>
                    <MDBTypography note noteColor='info' className="my-3 Collapsible"><p>{translation.form_box_16}</p></MDBTypography>
                  </MDBCol>
                  <MDBCol>
                    <h2 className="text-center app-text-primary">{translation.form_subTitle_2}</h2>
                    <hr />
                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-user"></i>
                      </span>
                      <input type="text" class="form-control" placeholder={translation.form_name} id="scheduling_name" required />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" id="type-pqrs" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-id-card"></i>
                      </span>
                      <select class="form-select" required id="scheduling_type_id" >
                        <option selected value="" disabled >{translation.form_type_id_0}</option>
                        {selectId}
                      </select>
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-id-card"></i>
                      </span>
                      <input type="text" class="form-control" placeholder={translation.form_number_id} required id="scheduling_number_id" />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-envelope"></i>
                      </span>
                      <input type="email" class="form-control" placeholder={translation.form_email} required id="scheduling_email" />
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-mobile-alt"></i>
                      </span>
                      <input type="text" class="form-control" placeholder={translation.form_number_mobile} required id="scheduling_number_mobile" />
                    </div>

                    <h2 className="text-center app-text-primary">{translation.form_subTitle_3}</h2>
                    <hr />
                    <div class="form-check  mb-3 px-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => handleCheck(e)} defaultChecked={false} />
                      <label class="form-check-label text-dark" for="">
                        ¿Requiere agendar una cita fuera del horario estipulado?
                      </label>
                    </div>
                    <div class="form-check  mb-3 px-4">
                      <input class="form-check-input" type="checkbox" value="" id="scheduling_accesibility" />
                      <label class="form-check-label text-dark" for="">
                        ¿Requiere asistencia de lenguaje de señas?
                      </label>
                    </div>
                    {Text()}
                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" id="type-pqrs" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-calendar-check"></i>
                      </span>
                      <select class="form-select" required id="scheduling_appointment_type">
                        <option selected value="" disabled>{translation.form_appointment_type}</option>
                        <option value="0">{translation.form_appointment_type_0}</option>
                        <option value="1">{translation.form_appointment_type_1}</option>
                      </select>
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" id="type-pqrs" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-clock"></i>
                      </span>
                      <select class="form-select" required id="scheduling_time" onChange={() => this.checkforAvilAbleDate()}>
                        {selectHours()}
                      </select>
                    </div>

                    <div class="input-group mb-3">
                      <span class="input-group-text text-white" id="type-pqrs" style={{ backgroundColor: '#107ABC' }}>
                        <i class="fas fa-file-alt"></i>
                      </span>
                      <select class="form-select" required id="scheduling_motive"  >
                        <option selected value="" disabled>{translation.form_motive}</option>
                        <option>{translation.form_motive_5}</option>
                        <option>{translation.form_motive_0}</option>
                        <option>{translation.form_motive_1}</option>
                        <option>{translation.form_motive_2}</option>
                        <option>{translation.form_motive_3}</option>
                        <option>{translation.form_motive_4}</option>
                      </select>
                    </div>
                  </MDBCol>
                </MDBRow>

                <div class="input-group mb-0">
                  <span class="input-group-text text-white" id="reason" style={{ backgroundColor: '#107ABC' }}>
                    <i class="fas fa-comment-alt"></i></span>
                  <input type="text" class="form-control" placeholder={translation.form_content} disabled />
                </div>
                <textarea class="form-control mb-3 mt-1" rows="4" required id="scheduling_content" ></textarea>
              </MDBCardBody>
            </MDBCard>


            <div className="text-end py-4 mt-3">
              <button className="btn btn-lg btn-success p-3 mx-2"><i class="far fa-calendar-check"></i> {translation.form_btn_1} </button>
              <MDBBtn color='info' onClick={this.toggle}>
                <h4 className="pt-2"><i class="fas fa-times-circle"></i> {translation.form_btn_2}</h4>
              </MDBBtn>
            </div >

          </form>

        </Modal>
      </div >
    );
  }
}

export default Scheduling;