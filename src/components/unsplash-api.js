import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/"


const ACCESS_KEY = "10cPb7ZmAfPJJXGr0Q506wT3_T2wHthP08JX3VfepB4";

const getImages = async (query, page = 1, perPage = 12) => {
    const response = await axios.get('/search/photos', {
        params: {
            query: query,
            page,
            per_page: perPage,
            client_id: ACCESS_KEY,
        },
    });

    return response.data;
}
    export default getImages;