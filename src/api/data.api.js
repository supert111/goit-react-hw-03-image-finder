import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const  KEY = '20667930-64a6ab52d11330f7fc72003b0';
const URL = `${BASE_URL}?key=${KEY}`;

const fetchPhoto = (searchQuery = '', currentPage = 1, pageSize = 12) => {
    return axios
        .get (
            `${URL}&q=${searchQuery}&image_type=photo&per_page=${pageSize}&page=${currentPage}`,
        )
        .then(response => response.data.hits);
};

export default fetchPhoto;  