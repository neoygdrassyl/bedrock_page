import NEW_3_ING from '../../../img/news_certificate.jpg'
import NEW_2_ING from '../../../img/news_inclusivity.jpg'
import NEW_ING from '../../../img/news1.jpg'
import NEW_AVIS from '../../../img/aviso.jpg'
import NEW_AVIS2 from '../../../img/aviso2.jpg'
import REPARTO from '../../../img/Reparto.png'

import { Link } from 'react-router-dom'
import { Button_navigation } from '../../button.component'
import { News_Structure } from './newsBody'

const icon_folder = <i class="fas fa-folder " style={{ color: '#107ABC' }}></i>;
const icon_date = <i class="fas fa-clock " style={{ color: '#107ABC' }}></i>;



const info6 = <p>Durante el año 2024, la curaduría urbana 1 de Bucaramanga está
    encargada de hacer el reparto de los proyectos
    institucionales de la ciudad de Bucaramanga.<p /><br />
    <p>Decreto 1077 de 2015 del Ministerio de Vivienda, Ciudad y Territorio.
    </p><br />
    <b>Artículo 2.2.6.6.6.1: </b> Reparto de las solicitudes de licencia
    o de actos de reconocimiento de proyectos de las entidades estatales
    y de vivienda de interés social individual. Las solicitudes de licencias o
    de actos de reconocimiento que presenten las entidades estatales o los particulares
    para proyectos de vivienda de interés social individual, deberán someterse a reparto
    entre los distintos curadores urbanos del municipio o distrito, en estricto orden de
    radicación de la solicitud ante el curador urbano responsable del reparto en los
    términos previstos en este artículo.
</p>

const info5 = <p>El horario general de atención al público del despacho del curador urbano uno de Bucaramanga,
    será de <strong>07:00 am</strong> a doce y media de la tarde <strong>12:30pm</strong> y de una de la tarde <strong>1:00pm</strong> a cuatro de la tarde <strong>4:00pm</strong>.<p /><br />
    <p>La radicación de la documentación realizada por fuera de este horario,
        independientemente del canal de radicación, se entenderá presentada al día hábil siguiente,
        por lo cual, si la radicación corresponde a un acto procesal con un término perentorio,
        tal como se consignó en la parte considerativa, la radicación será extemporánea dando lugar al desistimiento,
        rechazo del recurso, etc... , según el caso.
    </p><br />
    <p>Así mismo se establecen los siguientes <b>HORARIOS ESPECIALES</b> , con el fin de prestar un mejor servicio </p>
    <ul>
        <li> CONSULTA CON EL CURADOR URBANO: lunes a viernes de 7 a.m. a 12:30 p.m.</li>
        <li> ATENCIÓN A VECINOS / TERCEROS INTERESADOS: lunes a viernes de 7 a.m. a 12:30 p.m.</li>
        <li> ENTREGA DE PLANOS PARA COPIAS Y EJECUTORIAS: martes y jueves de 7 a.m. a 12:30 p.m.</li>
        <li>ASISTENCIA TÉCNICA CON REVISOR ESTRUCTURAL / REVISORA JURÍDICA: miércoles y viernes de 2:00 p.m. a 4:00 p.m. </li>
        <li>ASISTENCIA TÉCNICA CON ARQUITECTO REVISOR (PROYECTOS RADICADOS): lunes, miércoles y viernes de 7:00 a.m. a 12:30 p.m.</li>
        <li> ASISTENCIA TÉCNICA CON ARQUITECTO REVISOR (PREVIO A RADICACIÓN): martes y jueves de 7:00 a.m. a 12:30 p.m.</li>
    </ul>
    <p>SE INVITA a los usuarios a hacer uso del módulo de AGENDAMIENTO DE CITAS
        establecido para mejorar la prestación de nuestro servicio,
        al cual se puede acceder a través de la página institucional
        dando <a href='https://www.curaduria1bucaramanga.com/scheduling'>Click aquí </a>
        o solicitándola a través de los canales de atención los cuales son ampliamente conocidos y en todo caso pueden
        ser consultados en la precitada página.<br />
        <br />
        EL CONTENIDO DE LA RESOLUCIÓN SE ENCUENTRA DISPONIBLE PARA SU CONSULTA EN <a href='https://www.curaduria1bucaramanga.com/administrative'>PUBLICACIONES </a>
        DE LA PÁGINA INSTITUCIONAL
        ASÍ MISMO EN LUGAR VISIBLE DE LA OFICINA.</p>
</p>




const info4 = <p>La Curaduria Urbana N°1 de Bucaramanga ofrece a
    los profesionales que figuran en las actuaciones urbanísticas,
    la certificación de participación y responsabilidad en la calidad profesional
    en la que haya actuado en los proyectos de licenciamiento.
    Para generar el certificado, asi como para verificar el expedidor
    dar <Link to={'/certificacion'}>Click aqui</Link>.</p>

const info3 = <p><p>El Decreto 1783 De 2021 que modificó el Decreto 1077
    de 2015 en el artículo 2.2.6.1.2.4.1. contempla (…)
    La solicitud de prórroga de una licencia urbanística deberá radicarse con la
    documentación completa a más tardar treinta (30) días hábiles antes del
    vencimiento de la respectiva licencia.</p> <br />
    <p> La solicitud deberá acompañarse de la manifestación bajo la gravedad del
        juramento de la iniciación de obra por parte del urbanizador o constructor responsable.
        <p /><br />

        <p>La prórroga de la revalidación se debe solicitar a más tardar treinta (30)
            días hábiles antes de su vencimiento y su expedición procede con la sola
            presentación de la solicitud por parte del interesado.</p><br />
        <p>Las solicitudes de prórroga de licencias urbanísticas y de prórroga de sus
            revalidaciones cuyo término de vigencia inicial se venza dentro de los tres
            meses (3) meses siguientes a la modificación del presente artículo, podrán
            presentarse cumpliendo con los términos establecidos en las normas vigentes antes de esta modificación (...)</p><br />

        <b> POR LO ANTERIOR Y EN VIRTUD DE QUE EL DECRETO ESTÁ VIGENTE DESDE EL
            20 DE DICIEMBRE DE 2022: SI SU LICENCIA O REVALIDACIÓN VENCE EL 21 DE
            MARZO DE 2022 O FECHA SIGUIENTE Y VA A RADICAR SOLICITUD DE PRÓRROGA,
            ESTA DEBE HACERSE DE FORMA COMPLETA 30 DÍAS HÁBILES ANTES DEL VENCIMIENTO,
            ES DECIR POR CITAR UN EJEMPLO, SI VENCE EL 21 DE MARZO DE 2022 DEBE RADICAR A
            MÁS TARDAR EL 07 DE FEBRERO DE 2022.LO ANTERIOR SÓLO APLICA PARA AQUELLAS LICENCIAS
            QUE PUEDEN SER PRORROGABLES.</b></p></p>


const info2 = <p>La Curaduria N° 1 de Bucaramanga usa la ayuda de las TIC
    para ofrecer un mejor servicio a quienes lo necesiten. Gracias al Ministerio
    de Tecnologías de la Información y las Comunicaciones- MINTIC en alianza con
    la Federación Nacional de Sordos de Colombia- FENASCOL, apoyándose en la tecnología
    ofrece servicios de forma gratuita mediante una aplicación de dispositivos móviles,
    de igual modo el ConVerTIC es el proyecto de inclusión del Ministerio TIC con el fin
    de promover la inclusión social, educativa, laboral y cultural a través de uso de las
    tecnologías para las personas ciegas o con baja visión.<p />
    <p>     </p>Conoce mas sobre estas alternativas
    dando <Link to={'/inclusivity'}>Click aqui </Link></p>

const info1 =
    <p> Ya se encuentra en funcionamiento el nuevo punto de atención.
        se encuentra en la Calle 36 # 31-39 <strong>Centro Empresarial Chicamocha - Local 101</strong>
        , con parqueadero público en el Centro Empresarial Chicamocha.
        <br></br> Horario de atención permanece sin cambios,
        de Lunes a Viernes de 07:00 am a 12:30 pm y 1:00 pm a 5:00 pm. (<Link to={'/news/?newsId=news5  '
        }>Revisar horarios actuales </Link>)</p>

export const _news = [
    {
        id: 'news6',
        title: 'Reparto de proyectos 2024',
        category: 'Noticias',
        date: '01/01/2024',
        summary: <p>
            Durante el año 2024 la Curaduría Urbana <br />N°1 de Bucaramanga está <br />
            encargada de hacer el reparto.
        </p>,
        image: REPARTO,
        url: '/news/?newsId=news6',
        noticia:
            // eslint-disable-next-line react/jsx-pascal-case
            <News_Structure
                id={'news6'}
                title={'Reparto de proyectos 2024'}
                category={'Noticias'}
                date={'01/01/2024'}
                image={REPARTO}
                info={info6}
                key={'news6'}
            />

    },
    {
        id: 'news5',
        title: 'Modificación horario general',
        category: 'Aviso',
        date: '6/06/2022',
        summary:
            <p>El horario general de atención<br /> al público del despacho del<br /> curador urbano uno de Bucaramanga</p>,
        link: 'Ver mas',
        image: NEW_AVIS2,
        url: '/news/?newsId=news5',
        noticia:
            // eslint-disable-next-line react/jsx-pascal-case
            <News_Structure
                id={'news5'}
                title={'Modificación horario general'}
                category={'Aviso'}
                date={'6/06/2022'}
                image={NEW_AVIS2}
                info={info5}
                key={'news5'}
            />

    },
    {
        id: 'news4',
        title: 'Certificación para profesionales',
        category: 'Noticia',
        date: '15/12/2021',
        summary: <p>La Curaduria Urbana N°1 de Bucaramanga <br />ofrece a los profesionales certificaciones <br />en sus proyectos de licenciamiento</p>,
        link: 'Ver mas',
        image: NEW_3_ING,
        url: '/news/?newsId=news4',
        noticia:
            // eslint-disable-next-line react/jsx-pascal-case
            <News_Structure
                id={'news4'}
                title={'Certificación para profesionales'}
                category={'Aviso'}
                date={'15/12/2021'}
                image={NEW_3_ING}
                info={info4}
                key={'news4'}
            />

    },
    {
        id: 'news3',
        title: 'Prórroga de licencias y revalidaciones',
        category: 'Aviso',
        date: '12/05/2022',
        summary: 'El Decreto 1783 De 2021 que modificó el Decreto 1077 de 2015 en el artículo 2.2.6.1.2.4.1.',
        link: 'Ver mas',
        image: NEW_AVIS,
        url: '/news/?newsId=news3',
        noticia:
            // eslint-disable-next-line react/jsx-pascal-case
            <News_Structure
                id={'news3'}
                title={'Prórroga de licencias y revalidaciones'}
                category={'Aviso'}
                date={'12/05/2022'}
                image={NEW_AVIS}
                info={info3}
                key={'news6'}
            />
    },
    {
        id: 'news2',
        title: 'Curaduría Inclusiva - Ley 982 de 2005',
        category: 'Noticia',
        date: '6/12/2021',
        summary: 'La Curaduria N° 1 de Bucaramanga usa la ayuda de las TIC para ofrecer un mejor',
        link: 'Ver mas',
        image: NEW_2_ING,
        url: '/news/?newsId=news2',
        noticia:
            // eslint-disable-next-line react/jsx-pascal-case
            <News_Structure
                id={'news2'}
                title={'Curaduría Inclusiva - Ley 982 de 2005'}
                category={'Noticia'}
                date={'6/12/2021'}
                image={NEW_2_ING}
                info={info2}
                key={'news2'}
            />

    },
    {
        id: 'news1',
        title: 'Nuestro Nuevo Punto de Atención',
        category: 'Noticia',
        date: '15/06/2021',
        summary: 'Ya se encuentra en funcionamiento nuestro nuevo punto de atención. Nuestra nueva ubicación',
        link: 'Ver mas',
        image: NEW_ING,
        url: '/news/?newsId=news1',
        noticia:
            // eslint-disable-next-line react/jsx-pascal-case
            <News_Structure
                id={'news1'}
                title={'Nuestro Nuevo Punto de Atención'}
                category={'Noticia'}
                date={'15/06/2021'}
                image={NEW_ING}
                info={info1}
                key={'news1'}
            />

    }]