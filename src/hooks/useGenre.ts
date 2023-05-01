import useGenres from './useGenres';

const useGenre = (genreId?: number) => {
  const { data: genresData } = useGenres();
  return genresData?.results.find((g) => g.id === genreId);
};

export default useGenre;
