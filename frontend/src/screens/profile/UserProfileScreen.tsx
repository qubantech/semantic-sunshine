import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import { observer } from 'mobx-react-lite';
import { ProfileLayout } from './components/ProfileLayout';
import { Group, Text } from '@mantine/core';

const updatesCards = [
  {
    title: '',
    description: '',
    date: '',
    status: '',
  },
  {
    title: '',
    description: '',
    date: '',
    status: '',
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
    <ProfileLayout firstname={'Имя'} lastname={'Фамилия'} role={'Роль'} teamLead={'Тим Лид'}>
      <>
        <Text fz={'lg'} fw={'600'} mt={30}>
          Апдейты
        </Text>
        <Group>{updatesCards.map(card => {})}</Group>
      </>
    </ProfileLayout>
  );
});
