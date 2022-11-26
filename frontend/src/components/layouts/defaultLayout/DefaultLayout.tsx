import {
  ActionIcon,
  Container,
  createStyles,
  Group,
  Header as MantineHeader,
  Button,
  Affix,
  Text,
  Loader,
  CloseButton,
  useMantineColorScheme,
} from '@mantine/core';
import { BrandReact } from 'tabler-icons-react';
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
import gif from './../../../assets/gifs/oops-short.gif';

const DefaultLayout = observer((props: { children: JSX.Element }) => {
  const { userStore } = useRootStore();
  const { classes } = useStyles();

  const { colorScheme } = useMantineColorScheme();

  const [navLinks, setNavLinks] = useState<NavLinkModel[] | undefined>();

  const navigate = useNavigate();

  const { isMD } = useAllMQ();

  //Effects
  useEffect(() => {
    handleGetNavLinks();
  }, [userStore.userInfo]);

  console.log(userStore.userInfo);
  console.log(navLinks);

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
        sx={{ borderTop: '1px solid #868E96 ' }}
      >
        <>
          {navLinks && navLinks.length === 3 ? (
            <Group pt={5} grow>
              {navLinks?.slice(0, -1)?.map(link => {
                return <MobileNavItem key={link.title} link={link} />;
              })}
              <Link
                style={{ position: 'absolute', height: '75px', width: '75px', bottom: '3px', right: '7vw' }}
                to={navLinks?.[navLinks?.length - 1]?.path || Routes.auth}
              >
                <ActionIcon
                  color={'indigo'}
                  size={62}
                  sx={{ position: 'absolute', bottom: 12, right: 12, borderRadius: '100%' }}
                  variant="filled"
                >
                  {navLinks?.[navLinks?.length - 1]?.icon}
                </ActionIcon>
              </Link>
            </Group>
          ) : (
            <Group grow pt={5}>
              {navLinks?.map(link => {
                return <MobileNavItem key={link.title} link={link} />;
              })}
            </Group>
          )}
        </>
      </MantineHeader>
    );
  };

  const renderMenu = () => {
    return <>{isMD ? renderDesktopMenu() : renderMobileMenu()}</>;
  };

  return (
    <>
      {userStore.nothingVisible && (
        <Affix position={{ top: 0, left: 0 }} onClick={() => userStore.setNothingVisible(false)}>
          <Group
            sx={{
              width: '100vw',
              height: '100vh',
              background: colorScheme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.85)',
              position: 'relative',
            }}
          >
            <CloseButton size={40} sx={{ position: 'absolute', right: 50, top: 50 }} />
            <Text fz={'xl'} style={{ fontFamily: 'Comic Sans MS', position: 'absolute', right: '53%', top: '27%' }}>
              Sample text
            </Text>
            <Text fz={'lg'} style={{ fontFamily: 'Comic Sans MS', position: 'absolute', left: 20, top: '40%' }}>
              Нажми на крестик, листай дальше и сделай вид что ничего не видел
            </Text>
            <Text fz={'lg'} style={{ fontFamily: 'Comic Sans MS', position: 'absolute', left: 20, top: '50%' }}>
              Не подсматривай, этот раздел еще не готов.
            </Text>
            <img
              src={gif}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 'calc(50% - 200px)',
                opacity: 1,
              }}
            />
          </Group>
        </Affix>
      )}
      {renderMenu()}
      <Container style={{ position: 'relative' }} size={'xl'} pt={isMD ? 70 : 15} pb={isMD ? 15 : 75}>
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
