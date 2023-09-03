import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '38353563-faefe35241da6d2bdd21486de';

export const fetchImages = async (searchQuery, page) => {
  const resp = await axios.get(`/?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    return resp.data;
};

