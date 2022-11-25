import React from 'react';
import { Drawer, Text } from '@mantine/core';

interface IEmployeeDrawerProps {
  opened: boolean;
  setOpened: (a: boolean) => void;
}

export const EmployeeDrawer: React.FC<IEmployeeDrawerProps> = props => {
  //Render
  return (
    <Drawer
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      position={'bottom'}
      title="Статистика"
      padding={'lg'}
      size={'80%'}
    >
      <Text>aaaaa</Text>
    </Drawer>
  );
};
