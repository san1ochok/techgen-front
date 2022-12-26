import * as React from 'react';
import { Group } from '@mantine/core';
import Step from './Step';
import { useStyles } from 'styles/restoreStyles';

interface IStep {
  step: number;
  current: boolean;
}

type TProps = { current: number };

//* create steps
const createSteps = (count: number): IStep[] => {
  const arr: IStep[] = [];
  for (let i: number = 1; i <= count; i++)
    arr.push({ step: i, current: false });

  return arr;
};

const StepsIndicator = ({ current }: TProps): JSX.Element => {
  const { classes } = useStyles();

  const steps = createSteps(3);
  steps[current - 1].current = true;

  return (
    <Group className={classes.steps_indicator} position="center">
      {steps.map(step => (
        <Step key={step.step} current={step.current} />
      ))}
    </Group>
  );
};

export default StepsIndicator;
