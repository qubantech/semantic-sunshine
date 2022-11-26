import React from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';
import { Group, Text } from '@mantine/core';
import { UserRoles } from '../../modules/user/types/UserTypes';
import { EmployeeTestCard } from '../profile/components/EmployeeTestCard';
import { useRootStore } from '../../base/RootStore';

interface ILeadDashboardScreenProps {}

export const LeadDashboardScreen: React.FC<ILeadDashboardScreenProps> = observer(() => {
  const { userStore } = useRootStore();

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

  //Render
  return (
    <DefaultLayout>
      <>
        <Text fz={'xl'} fw={'600'} mt={30} mb={0}>
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
                  />
                );
              })}
        </Group>

        <Text fz={'xl'} fw={'600'} mt={30} mb={0}>
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
                  />
                );
              })}
        </Group>
      </>
    </DefaultLayout>
  );
});
