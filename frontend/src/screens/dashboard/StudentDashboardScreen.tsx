import React from 'react';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';

import img4 from './../../assets/icons/matey-seated-woman-holding-a-tablet.png';
import img5 from './../../assets/icons/matey-seated-man-with-a-laptop.png';
import img6 from './../../assets/icons/matey-girl-in-pajamas-is-sitting-with-a-laptop-on-her-lap.png';
import { Stack, Text } from '@mantine/core';
import { StudentSellingCard } from './components/StudentSellingCard';

interface IStudentDashboardScreenProps {}

const sellingCards = [
  {
    image: img5,
    title: 'Лучший frontend в стране',
    category: 'купите плз',
    pros: ['Разместите здесь продающий текст', 'Здесь вы станете фронтендером', 'Мы вам дадим роудмэп'],
    buttonLabel: '3500₽',
  },
  {
    image: img4,
    title: 'Лучший backend в мире',
    category: 'ну плз',
    pros: [
      'Разместите здесь продающий текст',
      'Здесь вы станете бэкендером',
      'Вложитесь в карту компетенций сегодня и станьте бэкендером завтра',
    ],
    buttonLabel: '4500₽',
  },
  {
    image: img6,
    title: 'Лучший data science во вселенной',
    category: 'купите...',
    pros: ['Разместите здесь продающий текст', 'Биг дата быстро и понятно', 'Не только для умных'],
    buttonLabel: '7890₽',
  },
];

export const StudentDashboardScreen: React.FC<IStudentDashboardScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <>
        <Stack mt={10} mb={40} spacing={0}>
          <Text fz={30} fw={'600'}>
            Наши предложения
          </Text>
          <Text fz={'lg'} fw={'400'} style={{ lineHeight: 1.3, maxWidth: '350px' }}>
            Выберите направление разработки для своей души и получите пошаговые рекомендации для достижения цели.
          </Text>
        </Stack>
        <Stack spacing={20}>
          {sellingCards.map(card => {
            return (
              <StudentSellingCard
                key={card.image}
                image={card.image}
                title={card.title}
                category={card.category}
                pros={card.pros}
                buttonLabel={card.buttonLabel}
              />
            );
          })}
        </Stack>
      </>
    </DefaultLayout>
  );
};
