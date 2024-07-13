
import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com'

export interface ApiResponse<T> {
  results: T;
  total: number;
  total_pages: number;
}
export const getArticlesApi = async <T> (searchQuery:string, page:number): Promise<T[]> => {
    const key = "FFbIksRegyHKfOJYC9jRLV9rFsq9BGS82lsUzsExKU4"
    const { data } = await axios.get<ApiResponse<T[]>>(`/search/photos`, {
        params: {
            client_id:key,
            query: searchQuery,
            per_page: 24,
            page,
        }
    })

return data.results
}