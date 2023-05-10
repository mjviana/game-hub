import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gameDetail, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !gameDetail) throw error;

  return (
    <>
      <Heading fontSize="2xl">{gameDetail.name}</Heading>
      <Text> {gameDetail.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
