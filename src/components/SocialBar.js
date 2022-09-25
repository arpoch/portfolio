import SocialBox from './SocialBox';
import { faLinkedin, faGithub, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import './SocialBar.css';

function SocialBar(){
    return(
        <div className="SocialBar">
            <ul>
                <li><SocialBox icon={faLinkedin} /></li>
                <li><SocialBox icon={faGithub} /></li>
                <li><SocialBox icon={faTwitterSquare} /></li>
            </ul>
        </div>
    )
}

export default SocialBar;