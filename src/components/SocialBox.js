import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialBox({icon}){
    return(
        <>
            <FontAwesomeIcon icon={icon} size='3x' inverse />
        </>
    );
}

export default SocialBox;