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

export default ImageGallery;