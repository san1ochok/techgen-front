import { BackgroundImage, Card, Text } from '@mantine/core';
import { useMediaQuery, useSessionStorage } from '@mantine/hooks';
import FirstStep from 'components/restore/FirstStep';
import SecondStep from 'components/restore/SecondStep';
import ThirdStep from 'components/restore/ThirdStep';
import React from 'react';
import { useStyles as useAuthStyles } from 'styles/authStyles';
import authBgSrc from '../../images/authBg.png';

const Restore = (): JSX.Element => {
  const [step, setStep] = useSessionStorage<number>({
    key: 'restoreStep',
    defaultValue: 1,
  });

  //* set step
  const nextStep = (): void => {
    if (step < 3) setStep(step + 1);
    else setStep(1);
  };

  const { classes: authClasses } = useAuthStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  return (
    <BackgroundImage className={authClasses.container} src={authBgSrc}>
      <Card
        className={authClasses.card}
        px={largerThan481 ? '3%' : '4%'}
        radius="md"
      >
        {step < 3 ? (
          <>
            <Text
              className={authClasses.card_helper_text}
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              Looks like you forgot something 😣
            </Text>
            <Text
              className={authClasses.card_title_text}
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              Restore your Data
            </Text>
            {step === 1 ? (
              <FirstStep nextStep={nextStep} />
            ) : (
              <SecondStep nextStep={nextStep} />
            )}
          </>
        ) : (
          <ThirdStep nextStep={nextStep} />
        )}
      </Card>
    </BackgroundImage>
  );
};

export default Restore;
