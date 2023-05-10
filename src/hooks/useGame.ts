import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import ApiClient from '../services/api-client';

const apiClient = new ApiClient<GameDetails>('/games');

interface GameDetails {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
}

const useGame = (slug: string) => {
  return useQuery<GameDetails, Error>({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
  });
};

export default useGame;
