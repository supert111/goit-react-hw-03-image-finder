

// window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth',
//   });
const Button = ({ children, onClick}) => (
    <button type="button" className="IconButton" onClick={onClick} >
        {children}
    </button>
);

export default Button;