import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from './Searchbar/Searchbar';
import { Layout } from './App_styled';
import { fetchImages } from 'api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoader: false,
    error: false,
    showModal: false,
    showBtn: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      try {
        this.setState({ isLoader: true, error: false });
        const data = await fetchImages(query, page);
        if (data.hits.length === 0) {
        toast.error(
        'Sorry, there are no images matching your search query. Please try again'
          )
          return;  
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          showBtn: page < Math.ceil(data.totalHits / 12),
        }));
        // if (page === Math.ceil(data.totalHits / 12)) {
        //   toast.success('We are sorry, but you have reached the end of search results.')
        // }
      } catch (error) {
        this.setState({ error: true });
         toast.error('Oops... Something went wrong. Please try again')
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  handlerRequest = (evt) => {
    evt.preventDefault()
    const query = evt.target.value.trim()
    if (!query) {
      return;
    }
    this.setState({
      query,
      images: [],
      page: 1,
    })
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (largeImageURL, tags) => {
    this.toggleModal();
    this.setState({
      largeImageURL,
      tags,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  resetSearch = () => {
    this.setState({
      query: '',
      images: [],
      page: 1,
      isLoader: false,
      error: false,
      showModal: false,
    });
  };

  render() {
    const {
      images,
      isLoader,
      error,
      largeImageURL,
      showModal,
      tags,
      showBtn
    } = this.state;
    return (
      <Layout>
        <SearchBar
          onHandlerRequest={this.handlerRequest}
          onReset={this.resetSearch}
        />
        {error &&
          !isLoader &&
          toast.error('Sorry! Something went wrong. Please try again!')}
        {isLoader && <Loader />}
        {!error && (<ImageGallery images={images} onOpenModal={this.openModal} />)}
        {showBtn && (
          <LoadMore onClick={this.onLoadMore} />
         )} 
        {showModal && (
          <Modal
            onModalClick={this.toggleModal}
            largeImage={largeImageURL}
            alt={tags}
          />
        )}
        <Toaster position="top-right" />
      </Layout>
    );
  }
}
