import axios from 'axios'
import { urls } from '../utils/constants'

const instance = axios.create({
  baseURL: urls.baseURL
})

instance.interceptors.request.use(config => config, err => Promise.reject(err))
instance.interceptors.response.use(response => response, err => Promise.reject(err))

export default {
  getSubject: ({ id, Mark, limit = 20 }) => instance.get(`/api/pc/subj/${id}`, { params: { Mark, limit }}),
  getMessage: (id) => instance.get(`/api/pc/msg/${id}`),
}