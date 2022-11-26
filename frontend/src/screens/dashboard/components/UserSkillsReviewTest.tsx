import React, { useEffect, useState } from 'react';
import { useRootStore } from '../../../base/RootStore';
import { frontendSkills } from '../../../components/competenciesGraph/data';
import { observer } from 'mobx-react-lite';
import { Button, Slider, Text, Textarea, Stack } from '@mantine/core';

interface IUserSkillsReviewTestProps {
  checked: boolean;
}

export const UserSkillsReviewTest: React.FC<IUserSkillsReviewTestProps> = observer(props => {
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
      case 'FRONTEND_LEAD':
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
    <>
      <Stack spacing={40} pb={60}>
        {skills?.map((item, index) => (
          <div>
            <Text fz={'lg'}>
              {index + 1}. {item}
            </Text>
            <Slider
              min={1}
              max={5}
              marks={marks}
              defaultValue={Math.floor(Math.random() * 5) + 1}
              showLabelOnHover={false}
              disabled={props.checked}
            />
          </div>
        ))}
      </Stack>

      {!props.checked && (
        <>
          <Text pb={12} fz={'lg'}>
            Комментарий о прогрессе
          </Text>
          <Textarea rows={6} minRows={6} />
          <Button mt={25} mb={20} fullWidth size={'lg'}>
            Подтвердить
          </Button>
        </>
      )}
    </>
  );
});
