import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Text } from '@mantine/core';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ICommonBarProps {}

export const CommonBar: React.FC<ICommonBarProps> = () => {
  //Data
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const labels = ['Январь', 'Апрель', 'Июль', 'Октябрь'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Среднее на основе нашей статистики',
        data: [2.54, 2.56, 2.57, 2.53],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'В твоей команде',
        data: [2.74, 2.89, 2.9, 2.92],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  //Render
  return (
    <div style={{ width: '90vw', height: '50vh', marginBottom: 50 }}>
      <Text pt={40} fz={26} fw={800} align={'center'}>
        Средний уровень компетенций для Junior разработчиков
      </Text>
      <Text pb={16} fz={'sm'} fw={300} align={'center'}>
        (выбраны все специалисты данной сферы)
      </Text>
      <Bar height={170} options={options} data={data} />
    </div>
  );
};
