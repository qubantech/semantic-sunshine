import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Divider,
  Group,
  LoadingOverlay,
  Space,
  Text,
  TextInput,
  Stack,
  Box,
  ActionIcon,
  useMantineColorScheme,
} from '@mantine/core';
import { DeviceAnalytics, Lock, Mail, School, User } from 'tabler-icons-react';
import { auth } from '../../../base/firebase/firebase-config';
import { useRootStore } from '../../../base/RootStore';
import { Routes } from '../../../routes/routes';
import logo from '../../../assets/icons/logo.png';

export const LoginComponent = () => {
  const { userStore } = useRootStore();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const { colorScheme } = useMantineColorScheme();

  /*  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');*/

  const navigate = useNavigate();

  /* const login = () => {
    signInWithEmailAndPassword(email, password).then(resp => {
      if (resp?.user?.uid) {
        userStore.setUserUid(resp.user.uid);
        navigate(Routes.checkRole);
      }
    });
  };*/

  const handleSaveLoginInfo = (resp: any) => {
    if (resp?.user?.uid) {
      userStore.setUserUid(resp.user.uid);
      navigate(Routes.checkRole);
    }
  };

  const handleFrontUserAuth = () => {
    signInWithEmailAndPassword('frontend@mail.ru', '123456').then(resp => {
      handleSaveLoginInfo(resp);
    });
  };

  const handleFrontLeadAuth = () => {
    signInWithEmailAndPassword('frontendlead@mail.ru', '123456').then(resp => {
      handleSaveLoginInfo(resp);
    });
  };

  const handleBackUserAuth = () => {
    signInWithEmailAndPassword('backend@mail.ru', '123456').then(resp => {
      handleSaveLoginInfo(resp);
    });
  };

  const handleBackLeadAuth = () => {
    signInWithEmailAndPassword('backendLead@mail.ru', '123456').then(resp => {
      handleSaveLoginInfo(resp);
    });
  };

  const handleStudentAuth = () => {
    signInWithEmailAndPassword('student@mail.ru', '123456').then(resp => {
      handleSaveLoginInfo(resp);
    });
  };

  //Renders
  const renderAuthButtons = () => {
    return (
      <Stack justify={'center'} spacing={0} sx={{ height: '100vh' }}>
        <Group pb={16} position={'center'} align={'center'}>
          <img
            style={{ filter: colorScheme === 'dark' ? 'invert(100%)' : undefined }}
            src={logo}
            width={40}
            height={40}
          />
          <Text fz={40} fw={600}>
            Studify
          </Text>
        </Group>
        <Box mb={200}>
          <Text fz={'lg'} pb={8}>
            Отдел Frontend
          </Text>
          <Group grow>
            <Button leftIcon={<User />} onClick={handleFrontUserAuth}>
              Работник
            </Button>
            <Button leftIcon={<DeviceAnalytics />} onClick={handleFrontLeadAuth}>
              Тимлид
            </Button>
          </Group>

          <Text fz={'lg'} pt={32} pb={8}>
            Отдел Backend
          </Text>
          <Group grow>
            <Button leftIcon={<User />} onClick={handleBackUserAuth}>
              Работник
            </Button>
            <Button leftIcon={<DeviceAnalytics />} onClick={handleBackLeadAuth}>
              Тимлид
            </Button>
          </Group>

          <Divider
            py={28}
            label={
              <Text fz={'md'} color={'gray'}>
                или
              </Text>
            }
            labelPosition={'center'}
          />

          <Button fullWidth leftIcon={<School />} onClick={handleStudentAuth}>
            Авторизоваться как студент
          </Button>
        </Box>
      </Stack>
    );
  };

  return (
    <>
      {loading && <LoadingOverlay visible={true} />}
      {/*реальная авторизация, честно*/}
      {/*
      <TextInput
        variant={'default'}
        size={'lg'}
        icon={<Mail />}
        placeholder="Электронная почта"
        onChange={(event: any) => {
          setEmail(event.target.value);
        }}
      />
      <Space h={'sm'} />
      <TextInput
        variant={'default'}
        size={'lg'}
        icon={<Lock />}
        placeholder="Пароль"
        onChange={(event: any) => {
          setPassword(event.target.value);
        }}
      />
      <Space h={'xl'} />
      <Button fullWidth onClick={login}>
        Вход
      </Button>*/}
      {error?.message}

      {renderAuthButtons()}
    </>
  );
};
