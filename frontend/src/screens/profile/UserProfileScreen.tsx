import React from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { LogoutButton } from './components/LogoutButton';

interface IUserProfileScreenProps {}

export const UserProfileScreen: React.FC<IUserProfileScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <div>
        <LogoutButton />
      </div>
    </DefaultLayout>
  );
};
