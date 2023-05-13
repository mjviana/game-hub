import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ExpandableText } from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import { GameScreenshots } from '../components/GameScreenshots';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gameDetail, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !gameDetail) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
      <GridItem>
        <Heading>{gameDetail.name}</Heading>
        <ExpandableText children={gameDetail.description_raw} />
        <GameAttributes gameDetail={gameDetail} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={gameDetail.id} />
        <GameScreenshots gameId={gameDetail.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
