import { Card, Text, Avatar, Group, Stack } from '@mantine/core';
import React from 'react';
import DefaultLayout from '../../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';
import { LogoutButton } from './LogoutButton';
import { ColorSchemeButton } from '../../../components/ColorSchemeButton';
import { useRootStore } from '../../../base/RootStore';

interface IProfileProps {
  children: JSX.Element;
  firstname: string | null;
  lastname: string | null;
  role: string | null;
  teamLead: string | null;
}

export const ProfileLayout: React.FC<IProfileProps> = observer(props => {
  //Render
  return (
    <DefaultLayout>
      <>
        <Group position={'apart'} mb={10}>
          <div style={{ paddingLeft: 0 }}>
            <ColorSchemeButton />
          </div>
          <LogoutButton />
        </Group>
        <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder>
          <Group align={'start'}>
            <Avatar radius="xl" size={'lg'} variant={'outline'} />
            <Stack spacing={0}>
              <Text tt="uppercase" fw={600}>
                {props.firstname}
              </Text>
              <Text tt="uppercase" fw={600}>
                {props.lastname}
              </Text>
              <Stack spacing={0} mt={15}>
                <Text fz={'sm'}>
                  <span style={{ fontWeight: 600 }}>Позиция:</span> {props.role}
                </Text>
                {props.teamLead && (
                  <Text fz={'sm'}>
                    <span style={{ fontWeight: 600 }}>Тимлид:</span> {props.teamLead}
                  </Text>
                )}
              </Stack>
            </Stack>
          </Group>
        </Card>
        {props.children}
      </>
    </DefaultLayout>
  );
});
