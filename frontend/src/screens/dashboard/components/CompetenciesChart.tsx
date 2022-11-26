import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UserReview } from '../../../modules/user/types/UserTypes';
import { Loader, Stack, Text } from '@mantine/core';
import { ColorHelper } from '../../../helpers/ColorHelper';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      fullSize: true,
      labels: {
        font: {
          family: 'Greycliff CF',
          size: 14,
          lineHeight: 2,
        },
        pointStyle: 'circle',
        usePointStyle: true,
        padding: 20,
      },
    },
    title: {
      display: true,
      fullSize: true,
      font: {
        family: 'Greycliff CF',
        weight: '600',
        size: 24,
        lineHeight: 2,
      },
    },
  },
};

interface ICompetenciesChartProps {
  data: { [key: string]: UserReview } | null;
}

export const CompetenciesChart: React.FC<ICompetenciesChartProps> = props => {
  const { data } = props;

  const [chartData, setChartData] = useState<any>();

  //Effects
  useEffect(() => {
    handleChartData();
  }, [data]);

  //Handlers
  const handleChartData = () => {
    let labels: string[] = [];
    let datasets: any[] = [];

    if (!!data?.length) {
      Object.values(data).map(item => {
        labels.push(item?.date);
      });
      Object.entries(data?.[1]?.skills)?.map((skillItem: any, index) => {
        const color = ColorHelper.getRandomColor();
        datasets.push({
          label: skillItem[0].replaceAll('_', ' '),
          data: Object.values(data).map(item => {
            return item?.skills?.[skillItem[0]];
          }),
          borderColor: color,
          backgroundColor: color,
          hidden: [0, 1, 2].includes(index) ? false : true,
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
        });
      });
    }
    setChartData({ labels, datasets });
  };

  //Render
  return (
    <Stack sx={{ width: '90vw' }} align={'center'}>
      <Stack spacing={0} sx={{ width: '90vw' }}>
        <Text fz={26} fw={800} align={'center'}>
          Динамика развития компетенций
        </Text>
        <Text mb={-56} fz={'sm'} fw={300} align={'center'}>
          (выберите нужные параметры, чтобы отразить их на графике)
        </Text>
      </Stack>
      {chartData ? <Line height={350} options={options} data={chartData} /> : <Loader />}
    </Stack>
  );
};
