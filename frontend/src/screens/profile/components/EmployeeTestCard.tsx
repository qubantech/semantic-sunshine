import React, { useState } from 'react';
import { EmployeeDrawer } from './EmployeeDrawer';
import { ActionIcon, Card, Group, Stack, Text } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';

interface IEmployeeTestCardProps {
  firstname: string;
  lastname: string;
  date: string;
  isChecked: boolean;
}

export const EmployeeTestCard: React.FC<IEmployeeTestCardProps> = props => {
  const [opened, setOpened] = useState(false);

  //Handlers
  const onEmployeeClick = () => {
    console.log(opened);
    setOpened(true);
  };

  //Render
  return (
    <>
      <EmployeeDrawer opened={opened} setOpened={setOpened} />
      <Card
        sx={props.isChecked ? { width: '100%' } : { width: '100%', borderLeft: '2px solid red' }}
        shadow={'sm'}
        p={'lg'}
        radius={'md'}
        withBorder
        onClick={onEmployeeClick}
      >
        <Group position={'apart'}>
          <Stack spacing={0}>
            <Text fz={'md'} fw={600}>
              {props.firstname} {props.lastname}
            </Text>
            <Text fz={'sm'} fw={500}>
              {props.date}
            </Text>
          </Stack>
          <ActionIcon variant={'transparent'}>
            <ArrowRight />
          </ActionIcon>
        </Group>
      </Card>
    </>
  );
};
