import { Link } from "react-router-dom";
import './MainButton.css';
const MainButton = ({ info, logo ,link}) => {
    return (

        <Link style={{textDecoration:'none',color: 'white', backgroundImage: 'white' }} to={link}>
            <button class="main-button">
                <span class="main-button-span">
                    {logo}
                    <h4 class="main-button-info">{info}</h4>
                </span>

            </button>

        </Link >
    )

}
export default MainButton;