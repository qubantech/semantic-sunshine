import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { CheckRoleScreen } from '../screens/auth/modules/CheckRoleScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import React from 'react';
import { MainScreen } from '../screens/main/MainScreen';
import { ChartBar, InfoSquare, Mailbox, MoodSmileBeam } from 'tabler-icons-react';

export const Routes = {
  main: '/',
  auth: '/auth',
  profile: '/profile',
  checkRole: '/check-role',
};

export const NavLinks: NavLinkModel[] = [
  {
    path: '/link1',
    title: 'Профиль',
    icon: <MoodSmileBeam color={'#868E96'} />,
  },
  {
    path: '/link2',
    title: 'Метрики',
    icon: <ChartBar color={'#868E96'} />,
  },
];

export const router = createBrowserRouter([
  {
    path: Routes.auth,
    element: <AuthScreen />,
  },
  {
    path: Routes.main,
    element: <MainScreen />,
  },
  {
    path: Routes.checkRole,
    element: <CheckRoleScreen />,
  },
  {
    path: Routes.profile,
    element: <ProfileScreen />,
  },
]);

export type NavLinkModel = {
  path: string;
  title?: string;
  icon?: JSX.Element;
};
