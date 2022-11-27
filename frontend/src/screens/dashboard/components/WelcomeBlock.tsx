import React from 'react';
import { Group, Text } from '@mantine/core';
import { CompetenciesCard } from './CompetenciesCard';
import { useRootStore } from '../../../base/RootStore';

interface IWelcomeBlockProps {
  toggleCard: () => void;
  name: string | null;
}

export const WelcomeBlock: React.FC<IWelcomeBlockProps> = props => {
  const { userStore } = useRootStore();

  //Render
  return (
    <div style={{ height: '240px' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '240px',
          backgroundColor: '#5c7cfa',
          borderRadius: '0 0 70px 70px',
          zIndex: -1,
        }}
      />
      <Text pt={15} align={'center'} fw={700} fz={32}>
        Привет, {props.name}!
      </Text>
      <Group position={'center'}>
        <Text align={'center'} style={{ width: '70%', lineHeight: 1.2 }} fz={18}>
          {userStore.userInfo?.role === 'FRONTEND_LEAD' || userStore.userInfo?.role === 'BACKEND_LEAD'
            ? 'Обновлены рекомендации для карты компетенций! Проверь сейчас!'
            : 'Готова свежая карта компетенций! Проверь сейчас!'}
        </Text>
      </Group>
      <Group pt={30} px={45} grow>
        <CompetenciesCard setOpened={props.toggleCard} />
      </Group>
    </div>
  );
};
