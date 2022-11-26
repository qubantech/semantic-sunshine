import React from 'react';
import { Card, Group, Text, ThemeIcon } from '@mantine/core';
import { CircleDot } from 'tabler-icons-react';

export enum UpdateStatus {
  DANGER = 'danger',
  WARNING = 'warning',
}

interface ILeadUpdatesProps {
  title: string;
  description: string;
  date: string;
  status: 'danger' | 'warning';
}

export const LeadUpdates: React.FC<ILeadUpdatesProps> = props => {
  //Render
  return (
    <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder>
      <Group position={'apart'}>
        <Group>
          <ThemeIcon variant={'outline'} radius={'xl'} color={props.status === 'danger' ? 'red' : 'yellow'}>
            <CircleDot size={15} />
          </ThemeIcon>
          <Text fz={'lg'} fw={600}>
            {props.title}
          </Text>
        </Group>
        <Text fz={'sm'} fw={600}>
          {props.date}
        </Text>
      </Group>
      <Text pt={10}>{props.description}</Text>
    </Card>
  );
};
