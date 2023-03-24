import React, { useEffect } from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { _news } from '../../components/jsons/_news.js';
import { useParams } from 'react-router-dom';

export default function NEWS(props) {
  const { translation, breadCrums } = props;

  const query = new URLSearchParams(window.location.search);
  const id = query.get('newsId');

  useEffect(() => {
    if (id != null) {
      document.getElementById(id).scrollIntoView()
    }
  },)

  return <>
    <div className='px-4 text-center py-4 mx-4'>
      <MDBBreadcrumb className="mx-5">
        <MDBBreadcrumbItem>
          <Link to={'/home'}><i class="fas fa-home"></i> <label className="text-uppercase">{breadCrums.bc_01}</label></Link>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active><i class="far fa-bookmark"></i> <label className="text-uppercase">{breadCrums.bc_62}</label></MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <div className='container'>
        <div className='col-lg-12'>
          <div className='' style={{ backgroundColor: '#1b83c4', borderRadius: '2px' }}>
            <div class="row justify-content-center px-4 mx-2">
              <div class="col-11 text-center py-1" style={{ color: ' white ' }}>
                <h2 className='px-2 py-0 fw-normal'>NOTICIAS Y AVISOS IMPORTANTES</h2>
              </div>
            </div>
          </div>
          {_news.map(function (value) {
            return <>
              {value.noticia}
            </>
          })}
        </div>
      </div>
    </div>
  </>
}
