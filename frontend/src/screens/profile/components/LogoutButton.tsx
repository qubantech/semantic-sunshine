import React from 'react';
import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';
import { auth } from '../../../base/firebase/firebase-config';
import { Routes } from '../../../routes/routes';
import { useRootStore } from '../../../base/RootStore';
import { useNavigate } from 'react-router-dom';
import { Logout } from 'tabler-icons-react';

interface ILogoutButtonProps {}

export const LogoutButton: React.FC<ILogoutButtonProps> = () => {
  const { exampleStore, userStore } = useRootStore();

  const navigate = useNavigate();

  //Handlers
  const handleLogout = () => {
    signOut(auth);
    userStore.resetStore();
    navigate(Routes.auth);
  };

  //Render
  return (
    <Button leftIcon={<Logout />} onClick={handleLogout}>
      Выйти
    </Button>
  );
};
