import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../base/RootStore';
import DefaultLayout from '../../components/layouts/defaultLayout/DefaultLayout';
import { Check, QuestionMark, Video } from 'tabler-icons-react';
import { Button, Text, Stepper, Slider, Textarea, Card } from '@mantine/core';
import { frontendSkills } from '../../components/competenciesGraph/data';

interface ISkillsReviewScreenProps {}

export const UserSkillsReviewScreen: React.FC<ISkillsReviewScreenProps> = observer(() => {
  const { userStore } = useRootStore();

  const [activeStep, setActiveStep] = useState(0);

  const [skills, setSkills] = useState<string[]>();

  //Effects
  useEffect(() => {
    handleGetSkills();
  }, [userStore.userInfo?.role]);

  //Handlers
  const handleGetSkills = () => {
    switch (userStore.userInfo?.role) {
      case 'FRONTEND_USER':
        setSkills(frontendSkills);
    }
  };

  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  //Render
  return (
    <DefaultLayout>
      <div>
        <Text pb={32} fz={'xl'} fw={600} align={'center'}>
          Тестирование для формирования карты компетенций
        </Text>
        <Stepper breakpoint={'sm'} style={{ width: '100%' }} active={activeStep}>
          <Stepper.Step icon={<QuestionMark />} label={'Шаг 1'} description="Прохождение самооценки" />
          <Stepper.Step icon={<Video />} label={'Шаг 2'} description="Общение с лидом" />
          <Stepper.Step icon={<Check />} label={'Шаг 3'} description="Получение результатов и обновление компетенций" />
        </Stepper>
        <Card mt={32} mb={-16} shadow={'sm'} p={'lg'} radius={'md'} withBorder>
          <Text fz={'lg'} align={'center'}>
            Оцените свои компетенции по пятибальной шкале, где 0 - плохо (не знаю), а 5 - отлично (владею в
            совершенстве):
          </Text>
        </Card>
        {skills?.map((item, index) => (
          <div>
            <Text pt={60} pb={12} fz={'lg'}>
              {index + 1}. {item}
            </Text>
            <Slider min={1} max={5} marks={marks} defaultValue={1} showLabelOnHover={false} />
          </div>
        ))}
        <Text pt={60} pb={12} fz={'lg'}>
          Комментарий о прогрессе (необязательно)
        </Text>
        <Textarea rows={6} minRows={6} />
        <Button mt={25} mb={80} fullWidth size={'lg'}>
          Отправить на рассмотрение
        </Button>
      </div>
    </DefaultLayout>
  );
});
