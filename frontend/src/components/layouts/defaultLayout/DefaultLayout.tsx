import { ActionIcon, Container, createStyles, Group, Header as MantineHeader, Button } from '@mantine/core';
import { BrandReact, Checklist } from 'tabler-icons-react';
import { ColorSchemeButton } from '../../ColorSchemeButton';
import { useRootStore } from '../../../base/RootStore';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserNavLinks, Routes, NavLinkModel, LeadNavLinks, StudentNavLinks } from '../../../routes/routes';
import { observer } from 'mobx-react-lite';
import { DesktopNavItem } from './components/DesktopNavItem';
import { useAllMQ } from '../../../base/hooks/useAllMQ';
import { MobileNavItem } from './components/MobileNavItem';
import { useEffect, useState } from 'react';
import { LeadUsers, UserRoles, UsualUsers } from '../../../modules/user/types/UserTypes';

const DefaultLayout = observer((props: { children: JSX.Element }) => {
  const { userStore } = useRootStore();
  const { classes } = useStyles();

  const [navLinks, setNavLinks] = useState<NavLinkModel[] | undefined>();

  const location = useLocation();
  const navigate = useNavigate();

  const { isMD } = useAllMQ();

  //Effects
  useEffect(() => {
    handleGetNavLinks();
  }, []);

  //Handlers
  const handleGetNavLinks = () => {
    switch (userStore.userInfo?.role as string) {
      case UsualUsers.BACKEND_USER:
      case UsualUsers.FRONTEND_USER:
        setNavLinks(UserNavLinks);
        break;
      case LeadUsers.BACKEND_LEAD:
      case LeadUsers.FRONTEND_LEAD:
        setNavLinks(LeadNavLinks);
        break;
      case UserRoles.STUDENT:
        setNavLinks(StudentNavLinks);
        break;
    }
  };

  const handleUserButton = () => {
    if (userStore.userInfo) {
      navigate(Routes.leadProfile);
    } else {
      navigate(Routes.auth);
    }
  };

  //Renders

  const renderDesktopMenu = () => {
    return (
      <MantineHeader height={55} fixed={true}>
        <Container size={'xl'} className={classes.inner}>
          <Group align={'stretch'}>
            <ActionIcon size={'xl'}>
              <BrandReact size={40} />
            </ActionIcon>
            {renderDesktopNavList()}
          </Group>
          <Group position={'right'}>
            <Button variant={'subtle'} onClick={handleUserButton}>
              {userStore.userInfo ? userStore.userInfo?.lastName : 'Вход'}
            </Button>
            <ColorSchemeButton />
          </Group>
        </Container>
      </MantineHeader>
    );
  };

  const renderDesktopNavList = () => {
    return (
      <Group align={'center'} pt={2} pl={8}>
        {navLinks?.map(link => {
          return <DesktopNavItem link={link} />;
        })}
      </Group>
    );
  };

  const renderMobileMenu = () => {
    return (
      <MantineHeader
        height={60}
        fixed={true}
        position={{ bottom: -1, left: 0, right: 0 }}
        sx={{ borderTop: '2px solid #D0D0D0' }}
      >
        <Group grow pt={5}>
          {navLinks?.map(link => {
            return <MobileNavItem link={link} />;
          })}
          <Link
            style={{ position: 'absolute', height: '75px', width: '75px', bottom: '3px', right: '7vw' }}
            to={Routes.main}
          >
            <ActionIcon
              color={'indigo'}
              size={62}
              sx={{ position: 'absolute', bottom: 12, right: 12, borderRadius: '100%' }}
              variant="filled"
            >
              <Checklist size={35} />
            </ActionIcon>
          </Link>
        </Group>
      </MantineHeader>
    );
  };

  const renderMenu = () => {
    return <>{isMD ? renderDesktopMenu() : renderMobileMenu()}</>;
  };

  return (
    <>
      {location.pathname !== Routes.auth && renderMenu()}
      <Container size={'xl'} pt={70}>
        {props.children}
      </Container>
    </>
  );
});
export default DefaultLayout;

const useStyles = createStyles(theme => ({
  inner: {
    height: 55,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkLabel: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
  },
}));
