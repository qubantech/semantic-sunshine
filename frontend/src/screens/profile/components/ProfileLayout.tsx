import { Card, Text, Avatar, Group, Stack } from '@mantine/core';
import React from 'react';
import DefaultLayout from '../../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';
import { LogoutButton } from './LogoutButton';

interface IProfileProps {
  children: JSX.Element;
  firstname: string;
  lastname: string;
  role: string;
  teamLead: string | null;
}

export const ProfileLayout: React.FC<IProfileProps> = observer(props => {
  //Render
  return (
    <DefaultLayout>
      <>
        <Group position={'right'} mb={10}>
          <LogoutButton />
        </Group>
        <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder>
          <Group align={'start'}>
            <Avatar radius="xl" size={'lg'} variant={'outline'} />
            <Stack spacing={0}>
              <Text tt="uppercase" fw={500}>
                {props.firstname}
              </Text>
              <Text tt="uppercase" fw={500}>
                {props.lastname}
              </Text>
              <Stack spacing={0} mt={15}>
                <Text fz={'sm'}>Позиция: {props.role}</Text>
                {props.teamLead && <Text fz={'sm'}>Тимлид: {props.teamLead}</Text>}
              </Stack>
            </Stack>
          </Group>
        </Card>
        {props.children}
      </>
    </DefaultLayout>
  );
});
