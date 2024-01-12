import { Link } from 'react-router-dom'
import { Button_navigation } from '../../button.component'
export function News_Structure({id, title, category, date, summary, link, image, url, idDown, info}) {
    return (

        <div className='container'>
            <div class="row align-items-center py-1">
                <div class="col-12 px-4 border border-info py-4 m-3" style={{ backgroundColor: ' #f9f9f9 ', borderRadius: '2px', border: '1px' }}>
                    <div className="px-4 py-1">
                        <h3 className="text-center" id='news6'>Reparto de proyectos 2024 {<Button_navigation Iddown={'news5'} Idup={'news7'} />}</h3>
                        <div className="py-1">
                            <label><label className="px-1" style={{ color: 'gray' }}><i class="fas fa-clock text-info"></i> 20/09/2022 </label> <label className="px-1" style={{ color: 'gray' }}><i class="fas fa-user text-info"></i> Curaduria 1 de Bucaramanga</label> <label className="px-1" style={{ color: 'gray' }}><i class="fas fa-folder text-info"></i> Noticias</label>   </label>
                        </div>
                        <div className='container'>
                            <div class="row justify-content-start">
                                <div className='col-lg-10'>
                                    <p className='text-justify fw-normal'>
                                        Durante el año 2024, la curaduría urbana 1 de Bucaramanga está encargada de hacer el reparto de los proyectos institucionales de la ciudad de Bucaramanga.<br />
                                        Decreto 1077 de 2015 del Ministerio de Vivienda, Ciudad y Territorio.<br />
                                        <b>Artículo 2.2.6.6.6.1: </b> Reparto de las solicitudes de licencia o de actos de reconocimiento de proyectos de las entidades estatales y de vivienda de interés social individual. Las solicitudes de licencias o de actos de reconocimiento que presenten las entidades estatales o los particulares para proyectos de vivienda de interés social individual, deberán someterse a reparto entre los distintos curadores urbanos del municipio o distrito, en estricto orden de radicación de la solicitud ante el curador urbano responsable del reparto en los términos previstos en este artículo.

                                    </p>
                                </div>
                                <div class="col-lg-2">
                                    <img src={image} class="d-block w-100 mt-1" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}