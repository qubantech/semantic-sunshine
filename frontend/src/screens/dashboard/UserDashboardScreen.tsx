import React, { useState } from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { CompetenciesGraph } from '../../components/competenciesGraph/CompetenciesGraph';
import { Box } from 'tabler-icons-react';
import { Group } from '@mantine/core';
import { frontendSkills, frontendSkillsRate } from '../../components/competenciesGraph/data';

interface IUserDashboardScreenProps {}

export const UserDashboardScreen: React.FC<IUserDashboardScreenProps> = () => {
  const [opened, setOpened] = useState<boolean>(false);

  //Render
  return (
    <DefaultLayout>
      <div>
        <Group sx={{ height: '70vh', width: '100%' }}>
          <CompetenciesGraph
            opened={opened}
            title={'Карта компетенций Junior Front-end разработчика'}
            setOpened={() => setOpened(false)}
            skills={frontendSkills}
            skillsRate={frontendSkillsRate}
          />
        </Group>
      </div>
    </DefaultLayout>
  );
};
