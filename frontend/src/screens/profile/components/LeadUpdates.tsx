import React from 'react';
import { Card, Group, Text } from '@mantine/core';

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
        <Text fz={'sm'} fw={600}>
          {props.title}
        </Text>
        <Text fz={'xs'} fw={600}>
          {props.date}
        </Text>
      </Group>
      <Text pt={10}>{props.description}</Text>
    </Card>
  );
};
