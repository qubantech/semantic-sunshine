import React from 'react';
import { createStyles, Text, Stack } from '@mantine/core';
import { NavLinkModel } from '../../../../routes/routes';
import { ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';

interface INavLinkProps {
  link: NavLinkModel;
}

export const MobileNavItem: React.FC<INavLinkProps> = props => {
  const { link } = props;

  const { classes } = useStyles();

  //Render
  return (
    <Link to={link.path}>
      <ActionIcon size={48} style={{ margin: 'auto' }}>
        <Stack className={classes.link} align={'center'} spacing={0}>
          {link.icon}
          <Text fz={'sm'} className={classes.linkLabel}>
            {link.title}
          </Text>
        </Stack>
      </ActionIcon>
    </Link>
  );
};

const useStyles = createStyles(theme => ({
  linkLabel: {
    fontWeight: 600,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[6],
  },
  link: {
    color: 'inherit',
  },
}));
