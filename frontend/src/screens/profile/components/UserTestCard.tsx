import React from 'react';
import { Group, Card, Stack, Text, ActionIcon } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';

interface IUserTestCardProps {
  date: string;
  onClick: (a: boolean) => void;
}

export const UserTestCard: React.FC<IUserTestCardProps> = props => {
  //Render
  return (
    <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder onClick={() => props.onClick(true)}>
      <Group position={'apart'}>
        <Text fz={'md'} fw={500}>
          Анкетирование от {props.date}
        </Text>
        <ActionIcon variant={'transparent'}>
          <ArrowRight />
        </ActionIcon>
      </Group>
    </Card>
  );
};
