import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import fetchPhoto from './api/data.api';

class App extends Component {
    state = {
        hits: [],
        currentPage: 1,
        seachQuery: '',
        isLoading: false,
        error: null,
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

    // searchBigImg = (idImg) => {
    //     const { hits } = this.state;
    //     const { id, webformatURL, largeImageURL } = hits;
    //     if (idImg === id) {

    //     }
    // }

    render() {
        const { hits, isLoading, error } = this.state;
        const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

        return (
            <div className="App"> 
                {error && <h1>Try entering another request</h1>}
                <h1>Hello React Mykola </h1>
                <Searchbar onSubmit={this.onChangeQuery}/>
                <ImageGallery>
                    <ImageGalleryItem hits={hits}/>
                </ImageGallery> 
                {isLoading && <Loader />}
                {shouldRenderLoadMoreButton && <Button onClick={this.fetchImages}/>}
                <Modal />
            </div>    
        );
    }
}

export default App;