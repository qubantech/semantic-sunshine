import React, { useState } from 'react';
import { Card, Drawer, Button, Group, Text, ThemeIcon, TypographyStylesProvider } from '@mantine/core';
import { CircleDot, Check, QuestionMark } from 'tabler-icons-react';
import { useRootStore } from '../../../base/RootStore';

export enum UpdateStatus {
  DANGER = 'danger',
  WARNING = 'warning',
}

interface ILeadUpdatesProps {
  title: string;
  shortDesc: string;
  description: string;
  date: string;
  status: 'danger' | 'warning';
}

export const LeadUpdates: React.FC<ILeadUpdatesProps> = props => {
  const { userStore } = useRootStore();

  const [openDrawer, setOpenDrawer] = useState(false);

  //Handlers
  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOpen = () => {
    setOpenDrawer(false);
    userStore.setNothingVisible(true);
  };

  //Render
  return (
    <>
      <Card shadow={'sm'} p={'lg'} radius={'md'} withBorder sx={{ width: '100%' }} onClick={handleToggleDrawer}>
        <Group position={'apart'}>
          <Group>
            <ThemeIcon variant={'outline'} radius={'xl'} color={props.status === 'danger' ? 'red' : 'yellow'}>
              <CircleDot size={15} />
            </ThemeIcon>
            <Text fz={'lg'} fw={600}>
              {props.title}
            </Text>
          </Group>
          <Text fz={'sm'} fw={600}>
            {props.date}
          </Text>
        </Group>
        <Text pt={10}>{props.shortDesc}</Text>
      </Card>
      <Drawer
        opened={openDrawer}
        onClose={handleToggleDrawer}
        position={'bottom'}
        title={
          <Text size={'xl'} fw={700}>
            {props.title}
          </Text>
        }
        padding={'lg'}
        size={'50%'}
      >
        <Group grow spacing={8}>
          <Button size={'lg'} color={'red'} leftIcon={<QuestionMark />} onClick={handleOpen}>
            Есть вопросы
          </Button>
          <Button size={'lg'} color={'green'} leftIcon={<Check />} onClick={handleOpen}>
            Изучено
          </Button>
        </Group>
        <TypographyStylesProvider pt={16}>
          <div style={{ fontSize: 18 }} dangerouslySetInnerHTML={{ __html: props.description }} />
        </TypographyStylesProvider>
      </Drawer>
    </>
  );
};
