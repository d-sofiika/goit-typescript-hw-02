
import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com'
export const getArticlesApi = async (searchQuery, page) => {
    const key = "FFbIksRegyHKfOJYC9jRLV9rFsq9BGS82lsUzsExKU4"
    const { data } = await axios.get(`/search/photos`, {
        params: {
            client_id:key,
            query: searchQuery,
            per_page: 24,
            page,
        }
    })

return data.results
}