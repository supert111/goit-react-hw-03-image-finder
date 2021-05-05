import styles from './ImageGalleryItem.module.css';

const ImageGalleryitem = ({ hits }) => {
    return (
        <>
            { hits.map(({id, webformatURL, largeImageURL }) =>  ( 
                <li key={id} className={styles.ImageGalleryItem}>
                    <img id={id} src={webformatURL} alt="" className={styles.ImageGalleryItem_image} />
                </li>
            )) }
        </>
    
    )
}

export default ImageGalleryitem;