import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

export const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  console.log(`game screenshots: ${data}`);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6}>
      {data?.results?.map((screenshot) => {
        return (
          <Image
            key={screenshot.id}
            src={screenshot.image}
            alt={screenshot.id.toString()}
          />
        );
      })}
    </SimpleGrid>
  );
};
