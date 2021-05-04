import styles from './Button.module.css';

// window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
const Button = ({ children, onClick}) => (
    <button type="button" className={styles.Button} onClick={onClick} >
        Load more {children}
    </button>
);

export default Button;