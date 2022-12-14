import React from 'react';
import { Drawer, Stack, Text } from '@mantine/core';

interface IEmployeeDrawerProps {
  opened: boolean;
  setOpened: (a: boolean) => void;
  title: string;
  employmentTime: string | null;
}

export const EmployeeDrawer: React.FC<IEmployeeDrawerProps> = props => {
  //Render
  return (
    <Drawer
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      position={'bottom'}
      title={
        <Stack spacing={0}>
          <Text fz={'xl'} fw={600}>
            {props.title}
          </Text>
          {props.employmentTime && <Text fz={'md'}>Работник на предприятии с {props.employmentTime}</Text>}
        </Stack>
      }
      padding={'lg'}
      size={'80%'}
    >
      {props.children}
    </Drawer>
  );
};
