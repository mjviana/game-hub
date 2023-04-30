import { useQuery } from '@tanstack/react-query';
import apiClient, { FetchResponse } from '../services/api-client';
import genres from '../data/genres';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const fetchGenres = () => {
  return apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data);
};

const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 1 day,
    initialData: { count: genres.length, results: genres }
  });
};
// { data: genres, isLoading: false, error: null });

export default useGenres;
