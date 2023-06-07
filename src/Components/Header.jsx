import headerImg from "../assets/blakeAltered2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
    return (
        <header className="header">
            <img src={headerImg} className="header--image"/>
            <h1 className="header--name">Blake Matthew</h1>
            <h3 className="header--job_title">Frontend Developer</h3>
            <p className="header--website">BlakeMatthew.website</p>
            <div className="header--btn_container">
                <button className="btn btn-light"><FontAwesomeIcon icon={faEnvelope} className="header--btn_icon"/> Email</button>
                <button className="btn btn-dark"><FontAwesomeIcon icon={faLinkedin} className="header--btn_icon"/> LinkedIn</button>
            </div>
        </header>
    )
}