import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer--socials">
                <li><a><FontAwesomeIcon icon={faTwitterSquare} className="footer--social_icon"/></a></li>
                <li><a><FontAwesomeIcon icon={faFacebookSquare} className="footer--social_icon"/></a></li>
                <li><a><FontAwesomeIcon icon={faLinkedin} className="footer--social_icon"/></a></li>
                <li><a><FontAwesomeIcon icon={faGithubSquare} className="footer--social_icon"/></a></li>
            </ul>
        </footer>
    )
}