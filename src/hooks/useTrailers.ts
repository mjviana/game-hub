import { useQuery } from '@tanstack/react-query';
import Trailer from '../entities/Trailer';
import ApiClient from '../services/api-client';

const useTrailers = (id: number) => {
  const apiClient = new ApiClient<Trailer>(`games/${id}/movies`);

  return useQuery({
    queryKey: ['trailers', id],
    queryFn: apiClient.getAll
  });
};

export default useTrailers;
