import React, { useState } from 'react';
import { EmployeeDrawer } from './EmployeeDrawer';
import { ActionIcon, Card, Group, Stack, Text } from '@mantine/core';
import { ArrowRight } from 'tabler-icons-react';
import { UserSkillsReviewScreen } from '../../skillsReview/UserSkillsReviewScreen';
import { UserSkillsReviewTest } from '../../dashboard/components/UserSkillsReviewTest';

interface IEmployeeTestCardProps {
  firstname: string;
  lastname: string;
  date: string;
  isChecked: boolean;
  employmentTime: string;
}

export const EmployeeTestCard: React.FC<IEmployeeTestCardProps> = props => {
  const [opened, setOpened] = useState(false);

  //Handlers
  const onEmployeeClick = () => {
    console.log(opened);
    setOpened(true);
  };

  //Render
  return (
    <>
      <EmployeeDrawer
        opened={opened}
        setOpened={setOpened}
        title={props.firstname + ' ' + props.lastname}
        employmentTime={props.employmentTime}
      >
        <UserSkillsReviewTest checked={props.isChecked} />
      </EmployeeDrawer>
      <Card
        sx={props.isChecked ? { width: '100%' } : { width: '100%', borderLeft: '2px solid red' }}
        shadow={'sm'}
        p={'lg'}
        radius={'md'}
        withBorder
        onClick={onEmployeeClick}
      >
        <Group position={'apart'}>
          <Stack spacing={0}>
            <Text fz={'lg'} fw={600}>
              {props.firstname} {props.lastname}
            </Text>
            <Text fz={'sm'} fw={500}>
              {props.date}
            </Text>
          </Stack>
          <ActionIcon variant={'transparent'}>
            <ArrowRight />
          </ActionIcon>
        </Group>
      </Card>
    </>
  );
};
