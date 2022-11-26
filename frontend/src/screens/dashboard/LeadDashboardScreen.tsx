import React from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { observer } from 'mobx-react-lite';

interface ILeadDashboardScreenProps {}

export const LeadDashboardScreen: React.FC<ILeadDashboardScreenProps> = observer(() => {
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
  //Render
  return (
    <DefaultLayout>
      <div></div>
    </DefaultLayout>
  );
});
