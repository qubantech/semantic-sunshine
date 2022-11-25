import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Group, LoadingOverlay, Space, Text, TextInput } from '@mantine/core';
import { DeviceAnalytics, Lock, Mail, School, User } from 'tabler-icons-react';
import { auth } from '../../../base/firebase/firebase-config';
import { useRootStore } from '../../../base/RootStore';
import { Routes } from '../../../routes/routes';

export const LoginComponent = () => {
  const { userStore } = useRootStore();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(email, password).then(resp => {
      if (resp?.user?.uid) {
        userStore.setUserUid(resp.user.uid);
        navigate(Routes.checkRole);
      }
    });
  };

  //Renders

  const renderAuthButtons = () => {
    return (
      <>
        <Text>Отдел Frontend</Text>
        <Group grow>
          <Button size={'lg'} leftIcon={<User />}>
            Работник
          </Button>
          <Button size={'lg'} leftIcon={<DeviceAnalytics />}>
            Тимлид
          </Button>
        </Group>

        <Text>Отдел Backend</Text>
        <Group grow>
          <Button size={'lg'} leftIcon={<User />}>
            Работник
          </Button>
          <Button size={'lg'} leftIcon={<DeviceAnalytics />}>
            Тимлид
          </Button>
        </Group>

        <Button my={16} fullWidth leftIcon={<School />}>
          Авторизоваться как студент
        </Button>
      </>
    );
  };

  return (
    <>
      {loading && <LoadingOverlay visible={true} />}
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
      </Button>
      {error?.message}
      <Divider py={24} my={'xl'} label={<Text fz={'xl'}>или</Text>} labelPosition={'center'} />

      {renderAuthButtons()}
    </>
  );
};
