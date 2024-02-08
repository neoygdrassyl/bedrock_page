import './serviceButtonStyle.css'
import { Link } from "react-router-dom"
export function ServiceButton({ link, logo, title }) {
    return (
        <Link to={link} style={{
            textDecoration: 'none',
            color: 'royalblue',
        }}>
            <button class="service-button">
                <div class="service-button-image-container">
                    <i class={logo}/>
                </div>
                <div class="service-button-title-container">
                    <h5>{title}</h5>
                </div>
            </button>
        </Link >

    )

}