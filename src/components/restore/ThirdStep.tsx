import React, { MouseEventHandler, useEffect } from 'react';
import { useStyles as useAuthStyles } from 'styles/authStyles';
import { Text, Button, Sx } from '@mantine/core';
import StepsIndicator from './StepsIndicator';
import { useStyles } from 'styles/restoreStyles';
import { useNavigate } from 'react-router-dom';

type TProps = { nextStep: () => void };

const ThirdStep = ({ nextStep }: TProps): JSX.Element => {
  //* removing prev step saves
  useEffect(() => {
    sessionStorage.removeItem('restoreSecondStep')
  }, [])

  const { classes: authClasses } = useAuthStyles();
  const { classes } = useStyles();

  const navigate = useNavigate();

  //* responsive
  const titleStyles: Sx = {
    '@media (min-width: 320px)': { width: '100%' },
    '@media (min-width: 481px)': { width: '80%' },
  };

  //* sign in
  const signIn: MouseEventHandler<HTMLButtonElement> = () => {
    nextStep();
    navigate('/techgen-front/signIn');
  };

  return (
    <>
      <Text
        className={authClasses.card_title_text}
        data-aos="zoom-in"
        data-aos-duration="900"
        sx={titleStyles}
      >
        Password successfully restored! ✅
      </Text>
      <Text className={classes.forget_text}>
        Don't forget it next time, because it's always a shame to lose something
        important.
      </Text>
      <StepsIndicator current={3} />
      <Button className={authClasses.card_btn} mt="0" onClick={signIn}>
        sign in
      </Button>
    </>
  );
};

export default ThirdStep;
