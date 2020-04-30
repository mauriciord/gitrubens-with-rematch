import axios from 'axios';

import { interceptorResponseTransformData } from '../../shared/interceptors';
import { GITHUB } from '../../shared/constants/services';

const api = axios.create({
  baseURL: GITHUB.API_URL,
});

api.interceptors.response.use(interceptorResponseTransformData);

export default api;
