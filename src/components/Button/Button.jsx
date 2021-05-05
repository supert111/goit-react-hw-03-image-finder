import styles from './Button.module.css';

const Button = ({ children, onClick}) => (
    <button type="button" className={styles.Button} onClick={onClick} >
        Load more {children}
    </button>
);

export default Button;