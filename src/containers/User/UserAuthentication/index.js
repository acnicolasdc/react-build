import PropTypes from 'prop-types'
import UserAuthentication from './UserAuthentication';

UserAuthentication.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
};

UserAuthentication.defaultProps = {
    onSuccess: () =>{},
    onFailure: () =>{},
    onComplete: () =>{},
};

export default UserAuthentication;