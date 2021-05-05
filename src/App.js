import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import fetchPhoto from './api/data.api';
import styles from './App.module.css';

class App extends Component {
    state = {
        hits: [],
        currentPage: 1,
        seachQuery: '',
        isLoading: false,
        error: null,
        showModal: false,
        bigImageURL: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.seachQuery !== this.state.seachQuery) {
            this.fetchImages();
        }
    }

    fetchImages = () => {
        const { seachQuery, currentPage } = this.state;

        this.setState({isLoading: true});
        
        fetchPhoto(seachQuery, currentPage)
            .then(hits => { 
                this.setState(prevState => ({
                    hits: [...prevState.hits, ...hits],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({error}))
            .finally(() => {
                this.setState({isLoading: false});
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            });
    };

    onChangeQuery = query => {
        this.setState({
            seachQuery: query,
            currentPage: 1,
            hits: [],
            error: null,
        });
    };

    toggleModal = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal,
        }))
    }

    searchBigImg = (idImg) => {
        const { hits } = this.state;
        const searchIdImg = hits.find( item => item.id === idImg);
        const { largeImageURL } = searchIdImg;
        this.setState({ bigImageURL: largeImageURL });
        this.toggleModal();
    }

    render() {
        const { hits, isLoading, error, showModal, bigImageURL } = this.state;
        const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

        return (
            <div className={styles.App}> 
                <Searchbar onSubmit={this.onChangeQuery}/>
                {error && <h1>Try entering another request</h1>}
                <ImageGallery>
                    <ImageGalleryItem hits={hits} onClick={this.searchBigImg}/>
                </ImageGallery> 
                {isLoading && <Loader />}
                {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages}/>}
                {showModal && <Modal onClose={this.toggleModal}> <img src={ bigImageURL } alt="" /> </Modal> }
            </div>    
        );
    }
}

export default App;