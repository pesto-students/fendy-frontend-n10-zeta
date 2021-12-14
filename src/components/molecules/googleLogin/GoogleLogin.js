import Button, { BUTTON_SIZES, BUTTON_TYPES } from '../../atoms/button';
import {GoogleCircleFilled} from '../../atoms/icon';
const GoogleLogin = (props) => {
    const {text, ...rest} = props;
    return(
        <Button type={BUTTON_TYPES.SECONDARY} size={BUTTON_SIZES.LARGE} icon={<GoogleCircleFilled/>}> {text} </Button>
    );

}

export default GoogleLogin;