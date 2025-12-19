import './LoopInfoStyle.css'
import { infoCud } from '../../components/jsons/vars';

export function LoopInfo() {
    return (
        <div class="info-list">
            <div class="inner">
                <div class="tag">
                    La Curaduria Urbana N°1 de Bucaramanga ofrece a los profesionales certificaciones en sus proyectos de licenciamiento
                </div>
                <div class="tag">
                    Recuerde renovar sus licencias
                </div>
                <div class="tag">
                    Este año la Curaduria Urbana N°1 de Bucaramanga esta encargada del reparto de proyectos
                </div>
                <div class="tag">
                    El horario de atención de la curaduria es de {infoCud.schedule}
                </div>

            </div>
        </div>
    )

};