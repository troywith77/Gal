import axios from 'axios'
import { urls } from '../utils/constants'

const xgbInstance = axios.create({
  baseURL: urls.baseURL
})

const wowsInstance = axios.create({
  baseURL: urls.wowsURL
})

xgbInstance.interceptors.request.use(config => config, err => Promise.reject(err))
xgbInstance.interceptors.response.use(response => response, err => Promise.reject(err))

wowsInstance.interceptors.request.use(config => config, err => Promise.reject(err))
wowsInstance.interceptors.response.use(response => response, err => Promise.reject(err))

export default {
  getRank: ({ count = 9, is_asc = false, rank_type = 'core_pcp_rank' }) => wowsInstance.get('/v3/aioria/plates/rank', {
    params: {
      count,
      is_asc,
      rank_type
    }
  })
}