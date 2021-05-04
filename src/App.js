import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';


function App () {
    // const user = {
    //     name: 'Iryna',
    // };

    return (
        <div className="App"> 
        <h1>Hello React Mykola </h1>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal />
        </div>

    );
}
export default App;