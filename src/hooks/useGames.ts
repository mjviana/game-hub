// eslint-disable-next-line import/no-cycle
import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient, { FetchResponse } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const fetchGames = (gameQuery: GameQuery) => {
  return apiClient
    .get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    })
    .then((res) => res.data);
};

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => fetchGames(gameQuery)
  });

export default useGames;
