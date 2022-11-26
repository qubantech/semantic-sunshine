import React from 'react';
import { Drawer, Text } from '@mantine/core';
import { CompetenciesChart } from '../../dashboard/components/CompetenciesChart';
import { useRootStore } from '../../../base/RootStore';
import { useUserList, useUserReviews } from '../../../modules/user/UserFirebaseService';

interface IEmployeeDrawerProps {
  opened: boolean;
  setOpened: (a: boolean) => void;
}

export const EmployeeDrawer: React.FC<IEmployeeDrawerProps> = props => {
  const { userStore } = useRootStore();

  const data = useUserReviews(
    userStore.userInfo?.role === 'FRONTEND_LEAD' ? 'ZogeLGlMhuMkaxuD4ijLdMAfFtt1' : 'FsS4cGN5jiS9C0WwHVFB9aYK3Ad2',
  );

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
      <CompetenciesChart data={data.watchedObject} />
    </Drawer>
  );
};
