import { Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ExpandableText } from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gameDetail, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !gameDetail) throw error;

  return (
    <>
      <Heading fontSize="2xl">{gameDetail.name}</Heading>
      <ExpandableText children={gameDetail.description_raw} />
      <GameAttributes gameDetail={gameDetail} />
    </>
  );
};

export default GameDetailPage;
