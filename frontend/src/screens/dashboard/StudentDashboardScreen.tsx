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
    pros: ['Вы не потеряетесь', 'Здесь ввы станете фронтендером', 'Мы ввам дадим карту'],
    buttonLabel: '3500₽',
  },
  {
    image: img4,
    title: 'Лучший backend в мире',
    category: 'ну плз',
    pros: ['Бэк лучше фронта', 'Здесь ввы станете бэкендером', 'Карта компетенций здесь'],
    buttonLabel: '4500₽',
  },
  {
    image: img6,
    title: 'Лучший data science во вселенной',
    category: 'купите...',
    pros: ['Мы скажем вам что-нибудь хорошее', 'Дата саенс быстро развиваетмяс', 'Только для умных'],
    buttonLabel: '7890₽',
  },
];

export const StudentDashboardScreen: React.FC<IStudentDashboardScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <>
        <Text fz={'xl'} fw={'600'} mb={30} mt={10}>
          Наши предложения
        </Text>
        <Stack>
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
