import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen } from '../screens/auth/AuthScreen';
import { CheckRoleScreen } from '../screens/auth/modules/CheckRoleScreen';
import { StudentProfileScreen } from '../screens/profile/StudentProfileScreen';
import React from 'react';
import { MainScreen } from '../screens/main/MainScreen';
import { ChartBar, MoodSmileBeam } from 'tabler-icons-react';
import { LeadProfileScreen } from '../screens/profile/LeadProfileScreen';
import { UserProfileScreen } from '../screens/profile/UserProfileScreen';
import { LeadDashboardScreen } from '../screens/dashboard/LeadDashboardScreen';
import { StudentDashboardScreen } from '../screens/dashboard/StudentDashboardScreen';
import { UserDashboardScreen } from '../screens/dashboard/UserDashboardScreen';

export const Routes = {
  main: '/',
  //auth
  auth: '/auth',
  checkRole: '/check-role',
  //profile
  leadProfile: '/lead/profile',
  studentProfile: '/student/profile',
  userProfile: '/user/profile',
  //dashboard (main)
  leadDashboard: '/lead/dashboard',
  studentDashboard: '/student/dashboard',
  userDashboard: '/user/dashboard',
};

export const UserNavLinks: NavLinkModel[] = [
  {
    path: Routes.userProfile,
    title: 'Профиль',
    icon: <MoodSmileBeam color={'#868E96'} />,
  },
  {
    path: Routes.userDashboard,
    title: 'Метрики',
    icon: <ChartBar color={'#868E96'} />,
  },
];

export const LeadNavLinks: NavLinkModel[] = [
  {
    path: Routes.userProfile,
    title: 'Профиль',
    icon: <MoodSmileBeam color={'#868E96'} />,
  },
  {
    path: Routes.userDashboard,
    title: 'Метрики',
    icon: <ChartBar color={'#868E96'} />,
  },
];

export const StudentNavLinks: NavLinkModel[] = [
  {
    path: Routes.userProfile,
    title: 'Профиль',
    icon: <MoodSmileBeam color={'#868E96'} />,
  },
  {
    path: Routes.userDashboard,
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
  //profile
  {
    path: Routes.leadProfile,
    element: <LeadProfileScreen />,
  },
  {
    path: Routes.studentProfile,
    element: <StudentProfileScreen />,
  },
  {
    path: Routes.userProfile,
    element: <UserProfileScreen />,
  },
  //dashboard (main)
  {
    path: Routes.leadDashboard,
    element: <LeadDashboardScreen />,
  },
  {
    path: Routes.studentDashboard,
    element: <StudentDashboardScreen />,
  },
  {
    path: Routes.userDashboard,
    element: <UserDashboardScreen />,
  },
]);

export type NavLinkModel = {
  path: string;
  title?: string;
  icon?: JSX.Element;
};
