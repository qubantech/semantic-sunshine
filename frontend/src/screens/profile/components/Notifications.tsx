import React from 'react';
import { ActionIcon, Button, Card, Popover, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import { Bell } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';

export const Notifications = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const DATA = [
    {
      title: 'Хабр.Карьера',
      description: 'Опубликована новая статистика.',
      time: 'Сегодня 11:12',
      link: 'Подробнее',
    },
    {
      title: 'HeadHunter',
      description: 'Загляните в новые рекомендации!',
      time: 'Вчера 23:12',
      link: 'Подробнее',
    },
  ];

  const NotificationCard = ({
    title,
    description,
    time,
    link,
  }: {
    title: string;
    description: string;
    time: string;
    link: string;
  }) => {
    return (
      <Card shadow={'lg'} withBorder style={{ cursor: 'pointer' }}>
        <Text size={'md'} weight={700} style={{ lineHeight: '1.1' }}>
          {title}
        </Text>
        <Text size={'sm'} style={{ lineHeight: '1.1' }} mt={'xs'}>
          {description}
        </Text>
        <Text size={'xs'} my={5} c={'dimmed'}>
          {time}
        </Text>
        <Button size={'xs'} mt={15}>
          {link}
        </Button>
      </Card>
    );
  };

  return (
    <Popover shadow={'xl'} opened={opened} onClose={() => setOpened(false)} width={330} position="bottom" withArrow>
      <Popover.Target>
        <ActionIcon color={'indigo'} onClick={() => setOpened(o => !o)}>
          <Bell />
        </ActionIcon>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack spacing={20}>
          {DATA.map(notification => (
            <NotificationCard key={notification.link} {...notification} />
          ))}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};
