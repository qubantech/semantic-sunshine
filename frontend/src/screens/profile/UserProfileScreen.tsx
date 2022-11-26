import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import { observer } from 'mobx-react-lite';
import { ProfileLayout } from './components/ProfileLayout';
import { Group, Text } from '@mantine/core';
import { UserRoles } from '../../modules/user/types/UserTypes';
import { LeadUpdates, UpdateStatus } from './components/LeadUpdates';

const frontendUpdatesCards = [
  {
    title: 'Новая версия React',
    description: 'Вышла новая версия React, просьба ознакомиться.',
    date: '24.11.2022',
    status: 'warning',
  },
  {
    title: 'Новый сериализатор',
    description: 'Планируется интеграция новой модели сериализатора, просьба изучить, ссылка в источнике',
    date: '10.11.2022',
    status: 'danger',
  },
];

const backendUpdatesCards = [
  {
    title: 'Новая версия NodeJS',
    description: 'Вышла новая версия NodeJS, просьба ознакомиться.',
    date: '24.11.2022',
    status: 'warning',
  },
  {
    title: 'Новый сериализатор',
    description: 'Планируется интеграция новой модели сериализатора, просьба изучить, ссылка в источнике',
    date: '10.11.2022',
    status: 'danger',
  },
];

export const UserProfileScreen = observer(() => {
  const { exampleStore, userStore } = useRootStore();

  const navigate = useNavigate();

  //Effects
  useEffect(() => {
    console.log(userStore.userUid);
    console.log(userStore.userInfo);
  }, []);

  //Handlers
  const handleLogout = () => {
    signOut(auth);
    userStore.resetStore();
    navigate(Routes.auth);
  };

  //Renders
  return (
    <ProfileLayout
      firstname={userStore.userInfo?.firstName || null}
      lastname={userStore.userInfo?.lastName || null}
      role={userStore.userInfo?.roleDesc || null}
      teamLead={userStore.userInfo?.teamLead || null}
    >
      <>
        <Text fz={'lg'} fw={'600'} my={30}>
          Апдейты
        </Text>
        <Group>
          {userStore.userInfo?.role === UserRoles.FRONTEND_USER
            ? frontendUpdatesCards.map(card => {
                return (
                  <LeadUpdates
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    date={card.date}
                    status={card.status as UpdateStatus}
                  />
                );
              })
            : backendUpdatesCards.map(card => {
                return (
                  <LeadUpdates
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    date={card.date}
                    status={card.status as UpdateStatus}
                  />
                );
              })}
        </Group>
        <Text fz={'lg'} fw={'600'} my={30}>
          Оцененные анкеты
        </Text>
      </>
    </ProfileLayout>
  );
});
