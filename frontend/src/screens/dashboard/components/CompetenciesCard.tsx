import React from 'react';
import { ActionIcon, Card, Group, Stack, Text } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';

interface ICompetenciesCardProps {
  setOpened: () => void;
}

export const CompetenciesCard: React.FC<ICompetenciesCardProps> = props => {
  const { setOpened } = props;

  //Render
  return (
    <div>
      <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder sx={{ width: '100%' }} onClick={setOpened}>
        <Group position={'apart'}>
          <Text>Карта компетенций</Text>
          <ActionIcon variant={'transparent'}>
            <ArrowRight />
          </ActionIcon>
        </Group>
      </Card>
    </div>
  );
};
