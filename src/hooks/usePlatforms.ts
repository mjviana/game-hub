import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient from '../services/api-client';
import useData, { FetchResponse } from './useData';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const fetchPlatforms = () => {
  return apiClient
    .get<FetchResponse<Platform>>('platforms/lists/parents')
    .then((res) => res.data);
};

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;
