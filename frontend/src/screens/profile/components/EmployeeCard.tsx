import React, { useState } from 'react';
import { Card, Group, Text, ActionIcon, Stack } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';
import { EmployeeDrawer } from './EmployeeDrawer';

interface IEmployeeCardProps {
  firstname: string;
  lastname: string;
  role: string;
}

export const EmployeeCard: React.FC<IEmployeeCardProps> = props => {
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
      <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder sx={{ width: '100%' }} onClick={onEmployeeClick}>
        <Group position={'apart'}>
          <Stack spacing={0}>
            <Text fz={'md'} fw={600}>
              {props.firstname} {props.lastname}
            </Text>
            <Text fz={'sm'} fw={500}>
              {props.role}
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
