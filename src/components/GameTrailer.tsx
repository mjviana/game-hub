import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: gameTrailer, isLoading, error } = useTrailers(gameId);
  const firstTrailer = gameTrailer?.results[0];
  return firstTrailer ? (
    <video src={firstTrailer.data[480]} poster={firstTrailer.preview} controls />
  ) : null;
};

export default GameTrailer;
