import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import { observer } from 'mobx-react-lite';
import { ProfileLayout } from './components/ProfileLayout';
import { Group, Button, Text, Drawer } from '@mantine/core';
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

  const [openJob, setOpenJob] = useState(false);

  const navigate = useNavigate();

  //Effects
  useEffect(() => {
    console.log(userStore.userUid);
    console.log(userStore.userInfo);
  }, []);

  //Handlers
  const handleToggleJob = () => {
    setOpenJob(!openJob);
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
        <Button mt={16} size={'lg'} variant={'outline'} fullWidth onClick={handleToggleJob}>
          Найти новую работу
        </Button>
        <Group position={'apart'} align={'center'} mt={40} mb={20}>
          <Text fz={'xl'} fw={'600'}>
            Апдейты от лида (+2)
          </Text>
          <Button variant={'subtle'} size={'lg'} sx={{ textDecoration: 'underline' }}>
            Ещё
          </Button>
        </Group>
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
        <Text fz={'xl'} fw={'600'} my={20}>
          Проверенные анкеты
        </Text>
        <Drawer
          opened={openJob}
          onClose={handleToggleJob}
          title={<Text fz={'xl'}>Поиск новой работы с нашей помощью</Text>}
          padding="xl"
          size="50%"
          position={'bottom'}
        >
          <Text>
            Ваши компетенции были оценены профильным специалистом. Наш сервис предоставляет возможность поделиться
            текущей картой компетенции с будущим работодателем для честного оценивания специалистами и ускорению
            процесса собеседования. Скопируйте ссылку на текущую анкету и вставьте в свое новое резюме. Удачи :)
          </Text>
          <Text pt={12} fz={'sm'} fw={400}>
            (кстати ты уволен, кстати пошел на биржу работы)
          </Text>
        </Drawer>
      </>
    </ProfileLayout>
  );
});
