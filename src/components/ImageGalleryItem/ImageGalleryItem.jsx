import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryitem = ({ hits, onClick }) => {

    return (
        <>
            { hits.map(({ id, webformatURL }) =>  ( 
                <li key={id} onClick={()=>onClick(id) } className={styles.ImageGalleryItem}>
                    <img id={id} src={webformatURL} alt="" className={styles.ImageGalleryItem_image} />
                </li>
            )) }
        </>
    
    )
}

ImageGalleryitem.propTypes = {
    hits: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ),
    onClick: PropTypes.func.isRequired,
}

export default ImageGalleryitem;