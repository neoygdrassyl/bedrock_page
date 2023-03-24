import React, { Component } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

class School extends Component {
  render() {
    const { translation, breadCrums } = this.props;
    return (
      <div className="School container">
        <div className="row py-4 d-flex justify-content-center">
        <MDBBreadcrumb className="mx-5">
        <MDBBreadcrumbItem>
        <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_43}</label></MDBBreadcrumbItem>
        </MDBBreadcrumb>
          <div className="col-lg-8">
            <h2 class="text-uppercase text-center pb-2">Escuela del Curador</h2>
            <hr />
            <p className="text-danger text-center">EN CONSTRUCION</p>
          </div >
        </div >
      </div >
    );
  }
}

export default School;