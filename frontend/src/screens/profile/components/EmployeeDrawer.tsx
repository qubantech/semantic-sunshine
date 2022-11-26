import React from 'react';
import { Drawer, Text } from '@mantine/core';
import { CompetenciesChart } from '../../dashboard/components/CompetenciesChart';
import { useRootStore } from '../../../base/RootStore';
import { useUserList, useUserReviews } from '../../../modules/user/UserFirebaseService';

interface IEmployeeDrawerProps {
  opened: boolean;
  setOpened: (a: boolean) => void;
  title: string;
}

export const EmployeeDrawer: React.FC<IEmployeeDrawerProps> = props => {
  //Render
  return (
    <Drawer
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      position={'bottom'}
      title={props.title}
      padding={'lg'}
      size={'80%'}
    >
      {props.children}
    </Drawer>
  );
};
