import React, { useState } from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { CompetenciesGraph } from '../../components/competenciesGraph/CompetenciesGraph';
import { Group, Card, Text, Stack, Drawer } from '@mantine/core';
import {
  backendSkills,
  backendSkillsRate,
  frontendSkills,
  frontendSkillsRate,
} from '../../components/competenciesGraph/data';
import { CompetenciesChart } from './components/CompetenciesChart';
import { useRootStore } from '../../base/RootStore';
import { useUserReviews } from '../../modules/user/UserFirebaseService';
import { WelcomeBlock } from './components/WelcomeBlock';
import { CommonBar } from '../../components/commonBar/CommonBar';
import { useAllMQ } from '../../base/hooks/useAllMQ';

interface IUserDashboardScreenProps {}

export const UserDashboardScreen: React.FC<IUserDashboardScreenProps> = () => {
  const { isSM } = useAllMQ();
  const { userStore } = useRootStore();
  const [opened, setOpened] = useState<boolean>(false);

  const reviews = useUserReviews(userStore.userUid);

  console.log(reviews);

  //Handlers
  const handleToggleDrawer = () => {
    setOpened(!opened);
  };

  //Render
  return (
    <DefaultLayout>
      <>
        <div style={{ marginBottom: 80 }}>
          <WelcomeBlock toggleCard={handleToggleDrawer} name={userStore.userInfo?.firstName || null} />

          <Text my={20} fz={26} fw={600} style={{ lineHeight: 1 }}>
            Рекомендуем изучить
          </Text>

          <Stack>
            <Card
              shadow={'sm'}
              p={'lg'}
              radius={'md'}
              withBorder
              sx={{ width: '100%', boxShadow: '5px 5px 5px rgba(92, 124, 250, 0.5)' }}
            >
              <Text fz={'lg'} fw={500}>
                {userStore.userInfo?.role === 'FRONTEND_USER' ? 'MobX' : 'noSQL'}
              </Text>
              <Text>Используется в 15% открытых вакансий</Text>
              <Text mt={10}>
                <a style={{ textDecoration: 'underline' }}>Документация</a>
              </Text>
            </Card>
            <Card
              shadow={'sm'}
              p={'lg'}
              radius={'md'}
              withBorder
              sx={{ width: '100%', boxShadow: '5px 5px 5px rgba(92, 124, 250, 0.5)' }}
            >
              <Text fz={'lg'} fw={500}>
                {userStore.userInfo?.role === 'FRONTEND_USER' ? 'WebSockets' : 'Методология CI/CD'}
              </Text>
              <Text>Используется в 10% открытых вакансий</Text>
              <Text mt={10}>
                <a style={{ textDecoration: 'underline' }}>Документация</a>
              </Text>
            </Card>
          </Stack>

          <Group position={'center'}>
            <CompetenciesChart data={reviews.watchedObject} />
          </Group>
          <Group pt={32}>
            <CommonBar />
          </Group>
        </div>
        <CompetenciesGraph
          opened={opened}
          title={
            userStore.userInfo?.role === 'FRONTEND_USER'
              ? 'Карта компетенций Junior Front-end разработчика (React)'
              : 'Карта компетенций Junior Back-end разработчика (Java)'
          }
          setOpened={() => setOpened(false)}
          skills={userStore.userInfo?.role === 'FRONTEND_USER' ? frontendSkills : backendSkills}
          skillsRate={userStore.userInfo?.role === 'FRONTEND_USER' ? frontendSkillsRate : backendSkillsRate}
        />
      </>
    </DefaultLayout>
  );
};
