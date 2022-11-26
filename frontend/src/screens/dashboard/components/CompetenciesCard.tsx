import React from 'react';
import { ActionIcon, Card, Group, Stack, Text } from '@mantine/core';
import { ArrowRight, Graph } from 'tabler-icons-react';

interface ICompetenciesCardProps {
  setOpened: () => void;
}

export const CompetenciesCard: React.FC<ICompetenciesCardProps> = props => {
  const { setOpened } = props;

  //Render
  return (
    <div>
      <Card shadow={'sm'} p={'lg'} sx={{ width: '100%', borderRadius: '15px' }} onClick={setOpened}>
        <Group position={'center'} align={'center'}>
          <Graph />
          <Text size={'lg'}>Карта компетенций</Text>
        </Group>
      </Card>
    </div>
  );
};
