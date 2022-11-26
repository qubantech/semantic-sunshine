import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import { observer } from 'mobx-react-lite';
import { ProfileLayout } from './components/ProfileLayout';
import { Group, Button, Text, Drawer, Stack } from '@mantine/core';
import { UserRoles } from '../../modules/user/types/UserTypes';
import { LeadUpdates, UpdateStatus } from './components/LeadUpdates';
import { UserTestCard } from './components/UserTestCard';
import { EmployeeDrawer } from './components/EmployeeDrawer';
import { UserSkillsReviewTest } from '../dashboard/components/UserSkillsReviewTest';

const frontendUpdatesCards = [
  {
    title: 'Новая версия React',
    shortDesc: 'Вышла новая версия React, просьба ознакомиться.',
    description:
      '<p>Вышла новая версия React, просьба ознакомиться.</p><p>Полезные ссылки:</p><p>-React changelog: <a href="https://github.com/facebook/react/blob/main/CHANGELOG.md">https://github.com/facebook/react/blob/main/CHANGELOG.md</a></p><p>-Видео по теме: <a href="https://www.youtube.com/watch?v=yFW6rfwoYns&t=3s">https://www.youtube.com/watch?v=yFW6rfwoYns&t=3s</a></p>',
    date: '24.11.2022',
    status: 'warning',
  },
  {
    title: 'Новый сериализатор',
    shortDesc: 'Планируется интеграция новой модели сериализатора',
    description: 'Планируется интеграция новой модели сериализатора, просьба изучить, ссылка будет добавлена позже',
    date: '10.11.2022',
    status: 'danger',
  },
];

const backendUpdatesCards = [
  {
    title: 'Новая версия NodeJS',
    shortDesc: 'Вышла новая версия NodeJS, просьба ознакомиться',
    description:
      '<p>Вышла новая версия Node, просьба ознакомиться.</p><p>Полезные ссылки:</p> <p>-Видео по теме: <a href="https://www.youtube.com/watch?v=yFW6rfwoYns&t=3s">https://www.youtube.com/watch?v=yFW6rfwoYns&t=3s</a></p>',
    date: '24.11.2022',
    status: 'warning',
  },
  {
    title: 'Новый сериализатор',
    shortDesc: 'Планируется интеграция новой модели сериализатора',
    description:
      'Планируется интеграция новой модели сериализатора, просьба изучить, ссылка ссылка будет добавлена позже',
    date: '10.11.2022',
    status: 'danger',
  },
];

const testCards = [
  {
    date: '11.06.2022',
  },
  {
    date: '11.11.2022',
  },
];

export const UserProfileScreen = observer(() => {
  const { userStore } = useRootStore();

  const [openJob, setOpenJob] = useState(false);

  const navigate = useNavigate();

  const [checkedTestOpen, setCheckTestOpen] = useState(false);

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
        <Group position={'apart'} align={'center'} mt={40} mb={5}>
          <Text fz={'xl'} fw={'600'}>
            Апдейты от лида (+2)
          </Text>
          <Button
            variant={'subtle'}
            size={'lg'}
            sx={{ textDecoration: 'underline' }}
            onClick={() => userStore.setNothingVisible(true)}
          >
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
                    shortDesc={card.shortDesc}
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
                    shortDesc={card.shortDesc}
                    description={card.description}
                    date={card.date}
                    status={card.status as UpdateStatus}
                  />
                );
              })}
        </Group>
        <Text fz={'xl'} fw={'600'} mt={40} mb={10}>
          Проверенные анкеты
        </Text>
        <Stack spacing={15}>
          {testCards.map(card => {
            return <UserTestCard date={card.date} onClick={setCheckTestOpen} />;
          })}
        </Stack>

        <EmployeeDrawer
          opened={checkedTestOpen}
          setOpened={setCheckTestOpen}
          title={'Проверенная анкета'}
          employmentTime={null}
        >
          <UserSkillsReviewTest checked={true} />
        </EmployeeDrawer>

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
