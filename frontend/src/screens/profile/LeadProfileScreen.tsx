import React from 'react';
import { ProfileLayout } from './components/ProfileLayout';
import { Group, Text, Button } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../base/RootStore';
import { UserRoles } from '../../modules/user/types/UserTypes';
import { EmployeeCard } from './components/EmployeeCard';
import { EmployeeTestCard } from './components/EmployeeTestCard';

interface ILeadProfileScreenProps {}

const frontendEmployeesCards = [
  {
    firstname: 'Даниил',
    lastname: 'Выравнивателевич',
    role: 'Frontend React',
    date: '10.11.2022',
    checked: true,
  },
  {
    firstname: 'Антон',
    lastname: 'Центрователевич',
    role: 'Frontend React',
    date: '10.11.2022',
    checked: false,
  },
];

const backendEmployeesCards = [
  {
    firstname: 'Константин',
    lastname: 'Бэкэндович',
    role: 'Backend Java',
    date: '10.11.2022',
    checked: true,
  },
  {
    firstname: 'Григорий',
    lastname: 'Джавович',
    role: 'Backend Java',
    date: '10.11.2022',
    checked: false,
  },
];

export const LeadProfileScreen: React.FC<ILeadProfileScreenProps> = observer(() => {
  const { userStore } = useRootStore();

  //Render
  return (
    <ProfileLayout
      firstname={userStore.userInfo?.firstName || null}
      lastname={userStore.userInfo?.lastName || null}
      role={userStore.userInfo?.roleDesc || null}
      teamLead={null}
    >
      <>
        <Button mt={20} size={'md'} variant={'outline'} fullWidth onClick={() => userStore.setNothingVisible(true)}>
          Создать апдейт
        </Button>
        <Text fz={'lg'} fw={'600'} my={30}>
          Сотрудники
        </Text>
        <Group>
          {userStore.userInfo?.role === UserRoles.BACKEND_LEAD
            ? backendEmployeesCards.map(card => {
                return <EmployeeCard firstname={card.firstname} lastname={card.lastname} role={card.role} />;
              })
            : frontendEmployeesCards.map(card => {
                return <EmployeeCard firstname={card.firstname} lastname={card.lastname} role={card.role} />;
              })}
        </Group>
        <Text fz={'lg'} fw={'600'} mt={30} mb={0}>
          Анкеты
        </Text>
        <Text fz={'xs'} fw={'600'} mb={30} color={'red'}>
          Есть требующие проверки
        </Text>
        <Group>
          {userStore.userInfo?.role === UserRoles.BACKEND_LEAD
            ? backendEmployeesCards.map(card => {
                return (
                  <EmployeeTestCard
                    firstname={card.firstname}
                    lastname={card.lastname}
                    date={card.date}
                    isChecked={card.checked}
                  />
                );
              })
            : frontendEmployeesCards.map(card => {
                return (
                  <EmployeeTestCard
                    firstname={card.firstname}
                    lastname={card.lastname}
                    date={card.date}
                    isChecked={card.checked}
                  />
                );
              })}
        </Group>
      </>
    </ProfileLayout>
  );
});
