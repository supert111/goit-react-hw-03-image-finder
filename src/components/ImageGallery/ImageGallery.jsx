import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({children}) => { 
    
        return (
            <div className="second-component">
                <ul className={styles.ImageGallery}>
                    {children}
                </ul>
            </div>
        );
}

ImageGallery.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ImageGallery;