import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: 'c66bcb42cb3d436faf5d6b672affa64d' },
});