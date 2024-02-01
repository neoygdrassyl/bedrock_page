import './LoopInfoStyle.css'
// import { _news } from '../jsons/news/_news'
{/* {_news.map((value, index) => (
                        <div key={index} class="tag">
                            <h4>{value.summary}</h4>
                        </div>
                    ))} */}
export function LoopInfo() {
    return (
        <div class="info-list">
            <div class="inner">
                <div class="tag">
                    La Curaduria Urbana N°1 de Bucaramanga ofrece a los profesionales certificaciones en sus proyectos de licenciamiento
                </div>
                <div class="tag">
                    El Decreto 1783 De 2021 que modificó el Decreto 1077 de 2015
                </div>
                <div class="tag">
                    Ya se encuentra en funcionamiento nuestro nuevo punto de atención. Nuestra nueva ubicación
                </div>
                {/* <div class="fade"></div> */}
            </div>
        </div>
    )

};