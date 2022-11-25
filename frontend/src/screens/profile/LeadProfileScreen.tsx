import React from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { LogoutButton } from './components/LogoutButton';

interface ILeadProfileScreenProps {}

export const LeadProfileScreen: React.FC<ILeadProfileScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <div>
        <LogoutButton />
      </div>
    </DefaultLayout>
  );
};
