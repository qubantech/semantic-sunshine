import React, { useState } from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';
import { Group, Text } from '@mantine/core';
import { UserRoles } from '../../modules/user/types/UserTypes';
import { EmployeeTestCard } from '../profile/components/EmployeeTestCard';
import { useRootStore } from '../../base/RootStore';
import { WelcomeBlock } from './components/WelcomeBlock';
import {
  backendSkills,
  backendSkillsRate,
  frontendSkills,
  frontendSkillsRate,
} from '../../components/competenciesGraph/data';
import { CompetenciesGraph } from '../../components/competenciesGraph/CompetenciesGraph';

interface ILeadDashboardScreenProps {}

export const LeadDashboardScreen: React.FC<ILeadDashboardScreenProps> = observer(() => {
  const { userStore } = useRootStore();

  const [opened, setOpened] = useState(false);

  const frontendEmployeesCards = {
    checked: [
      {
        firstname: 'Даниил',
        lastname: 'Выравнивателевич',
        role: 'Frontend React',
        date: '10.06.2022',
        checked: true,
      },
      {
        firstname: 'Антон',
        lastname: 'Центрователевич',
        role: 'Frontend React',
        date: '10.06.2022',
        checked: true,
      },
    ],
    unchecked: [
      {
        firstname: 'Даниил',
        lastname: 'Выравнивателевич',
        role: 'Frontend React',
        date: '10.11.2022',
        checked: false,
      },
      {
        firstname: 'Антон',
        lastname: 'Центрователевич',
        role: 'Frontend React',
        date: '10.11.2022',
        checked: false,
      },
    ],
  };

  const backendEmployeesCards = {
    checked: [
      {
        firstname: 'Константин',
        lastname: 'Бэкэндович',
        role: 'Backend Java',
        date: '10.06.2022',
        checked: true,
      },
      {
        firstname: 'Григорий',
        lastname: 'Джавович',
        role: 'Backend Java',
        date: '10.06.2022',
        checked: true,
      },
    ],
    unchecked: [
      {
        firstname: 'Константин',
        lastname: 'Бэкэндович',
        role: 'Backend Java',
        date: '10.11.2022',
        checked: false,
      },
      {
        firstname: 'Григорий',
        lastname: 'Джавович',
        role: 'Backend Java',
        date: '10.11.2022',
        checked: false,
      },
    ],
  };

  //Handlers
  const handleToggleDrawer = () => {
    setOpened(!opened);
  };

  //Render
  return (
    <DefaultLayout>
      <>
        <WelcomeBlock toggleCard={handleToggleDrawer} name={userStore.userInfo?.firstName || null} />
        <Text fz={'xl'} fw={'600'} mt={40} mb={20}>
          Непроверенные анкеты
        </Text>
        <Group>
          {userStore.userInfo?.role === UserRoles.BACKEND_LEAD
            ? backendEmployeesCards.unchecked.map(card => {
                return (
                  <EmployeeTestCard
                    firstname={card.firstname}
                    lastname={card.lastname}
                    date={card.date}
                    isChecked={card.checked}
                    employmentTime={'11.11.2021'}
                  />
                );
              })
            : frontendEmployeesCards.unchecked.map(card => {
                return (
                  <EmployeeTestCard
                    firstname={card.firstname}
                    lastname={card.lastname}
                    date={card.date}
                    isChecked={card.checked}
                    employmentTime={'11.06.2020'}
                  />
                );
              })}
        </Group>

        <Text fz={'xl'} fw={'600'} mt={40} mb={20}>
          Проверенные анкеты
        </Text>

        <Group>
          {userStore.userInfo?.role === UserRoles.BACKEND_LEAD
            ? backendEmployeesCards.checked.map(card => {
                return (
                  <EmployeeTestCard
                    firstname={card.firstname}
                    lastname={card.lastname}
                    date={card.date}
                    isChecked={card.checked}
                    employmentTime={'11.11.2021'}
                  />
                );
              })
            : frontendEmployeesCards.checked.map(card => {
                return (
                  <EmployeeTestCard
                    firstname={card.firstname}
                    lastname={card.lastname}
                    date={card.date}
                    isChecked={card.checked}
                    employmentTime={'11.06.2020'}
                  />
                );
              })}
        </Group>

        <CompetenciesGraph
          opened={opened}
          role={userStore.userInfo?.role}
          title={
            userStore.userInfo?.role === 'FRONTEND_USER' || userStore.userInfo?.role === 'FRONTEND_LEAD'
              ? 'Карта компетенций Junior Front-end разработчика (React)'
              : 'Карта компетенций Junior Back-end разработчика (Java)'
          }
          setOpened={() => setOpened(false)}
          skills={
            userStore.userInfo?.role === 'FRONTEND_USER' || userStore.userInfo?.role === 'FRONTEND_LEAD'
              ? frontendSkills
              : backendSkills
          }
          skillsRate={
            userStore.userInfo?.role === 'FRONTEND_USER' || userStore.userInfo?.role === 'FRONTEND_LEAD'
              ? frontendSkillsRate
              : backendSkillsRate
          }
        />
      </>
    </DefaultLayout>
  );
});
