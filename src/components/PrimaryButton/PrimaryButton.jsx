import './PrimaryButton.css';
import PropTypes from "prop-types";

function PrimaryButton({buttonLabel, onClick}) {
    return (
        <button type="button" className="primary-button" onClick={onClick}> {buttonLabel} </button>
    );
}

PrimaryButton.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;