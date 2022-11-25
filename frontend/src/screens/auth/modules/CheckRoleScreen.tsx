import React, { useEffect } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useRootStore } from '../../../base/RootStore';
import { useUser } from '../../../modules/user/UserFirebaseService';
import { Routes } from '../../../routes/routes';

interface ICheckRoleScreenProps {}

export const CheckRoleScreen: React.FC<ICheckRoleScreenProps> = () => {
  const { userStore } = useRootStore();

  const navigate = useNavigate();

  const userInfo = useUser(userStore.userUid);

  //Effects
  useEffect(() => {
    if (userInfo) {
      userStore.setUserInfo(userInfo.watchedObject);
      switch (userInfo.watchedObject?.role) {
        case "STUDENT":
          navigate(Routes.studentDashboard);
          break;
        case "FRONTEND_USER": case "BACKEND_USER":
          navigate(Routes.userDashboard)
          break;
        case "FRONTEND_LEAD": case "BACKEND_LEAD":
          navigate(Routes.leadDashboard)
      }
    }
  }, [userInfo]);

  //Renders
  return (
    <>
      <LoadingOverlay visible={true} title={"Авторизация..."} />
    </>
  );
};
