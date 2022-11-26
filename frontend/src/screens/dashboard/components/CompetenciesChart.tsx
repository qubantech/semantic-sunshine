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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { UserReview } from '../../../modules/user/types/UserTypes';
import { Loader } from '@mantine/core';
import { ColorHelper } from '../../../helpers/ColorHelper';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Динамика компетенций',
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
      Object.entries(data?.[1]?.skills)?.map((skillItem: any) => {
        datasets.push({
          label: skillItem[0],
          data: Object.values(data).map(item => {
            return item?.skills?.[skillItem[0]];
          }),
          borderColor: ColorHelper.getRandomColor(),
        });
      });
    }
    setChartData({ labels, datasets });
  };

  //Render
  return <div>{chartData ? <Line options={options} data={chartData} /> : <Loader />}</div>;
};
