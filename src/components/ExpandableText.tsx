import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const textToDisplay = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Text marginY={5}>
      {textToDisplay}
      <Button
        size={'xs'}
        marginLeft={1}
        fontWeight={'bold'}
        colorScheme={'yellow'}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
};
