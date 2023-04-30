import { useQuery } from '@tanstack/react-query';
import ApiClient, { FetchResponse } from '../services/api-client';
import genres from '../data/genres';

const apiClient = new ApiClient<Genre>('/genres');

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 1 day,
    initialData: { count: genres.length, results: genres }
  });
};
// { data: genres, isLoading: false, error: null });

export default useGenres;
