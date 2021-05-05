import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, onClick}) => (
    <button type="button" className={styles.Button} onClick={onClick} >
        Load more {children}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
}

export default Button;