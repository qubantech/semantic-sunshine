import React, { useState } from 'react';
import { Card, Group, Text, ActionIcon, Stack } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';
import { EmployeeDrawer } from './EmployeeDrawer';
import { CompetenciesChart } from '../../dashboard/components/CompetenciesChart';
import { useRootStore } from '../../../base/RootStore';
import { useUserReviews } from '../../../modules/user/UserFirebaseService';

interface IEmployeeCardProps {
  firstname: string;
  lastname: string;
  role: string;
}

export const EmployeeCard: React.FC<IEmployeeCardProps> = props => {
  const [opened, setOpened] = useState(false);

  const { userStore } = useRootStore();

  const data = useUserReviews(
    userStore.userInfo?.role === 'FRONTEND_LEAD' ? 'ZogeLGlMhuMkaxuD4ijLdMAfFtt1' : 'FsS4cGN5jiS9C0WwHVFB9aYK3Ad2',
  );

  //Handlers
  const onEmployeeClick = () => {
    setOpened(true);
  };

  //Render
  return (
    <>
      <EmployeeDrawer opened={opened} setOpened={setOpened} title={'Статистика'} employmentTime={'24.05.2021'}>
        <CompetenciesChart data={data.watchedObject} />
      </EmployeeDrawer>
      <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder sx={{ width: '100%' }} onClick={onEmployeeClick}>
        <Group position={'apart'}>
          <Stack spacing={0}>
            <Text fz={'lg'} fw={600}>
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
