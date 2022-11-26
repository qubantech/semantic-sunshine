import React, { useState } from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { CompetenciesGraph } from '../../components/competenciesGraph/CompetenciesGraph';
import { Group, Space, Text } from '@mantine/core';
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
          <Group position={'center'} pt={32}>
            <CompetenciesChart data={reviews.watchedObject} />
          </Group>
          <Group>
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
