import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import { Card, Group, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { ProfileLayout } from './components/ProfileLayout';

import img1 from './../../assets/icons/icons8-template-96.png';
import img2 from './../../assets/icons/icons8-backend-development-96.png';
import img3 from './../../assets/icons/silky-programming.png';

export const StudentProfileScreen = observer(() => {
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
    <ProfileLayout
      firstname={userStore.userInfo?.firstName || null}
      lastname={userStore.userInfo?.lastName || null}
      role={userStore.userInfo?.skills || null}
      teamLead={userStore.userInfo?.teamLead || null}
    >
      <>
        <Text fz={'xl'} fw={'600'} mt={40} mb={20}>
          Приобретенные товары
        </Text>
        <Group grow>
          <Card
            shadow={'sm'}
            p={'sm'}
            radius={'md'}
            withBorder
            sx={{
              height: '22vw',
              backgroundImage: `url(${img1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50%',
              backgroundPosition: 'bottom -25px right -25px',
              boxShadow: '5px 5px 5px rgba(92, 124, 250, 0.5)',
            }}
          >
            <Text fz={'lg'} sx={{ lineHeight: 1.3 }}>
              Frontend Roadmap
            </Text>
          </Card>
          <Card
            shadow={'sm'}
            p={'sm'}
            radius={'md'}
            withBorder
            sx={{
              height: '22vw',
              backgroundImage: `url(${img2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '50%',
              backgroundPosition: 'bottom -25px right -25px',
              boxShadow: '5px 5px 5px rgba(92, 124, 250, 0.5)',
            }}
          >
            <Text fz={'lg'} sx={{ lineHeight: 1.3 }}>
              Backend Roadmap
            </Text>
          </Card>
        </Group>
      </>
    </ProfileLayout>
  );
});
