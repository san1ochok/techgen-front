import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFormSaving } from 'hooks/useFormSaving';
import * as React from 'react';
import { useStyles } from 'styles/authStyles';
import StepsIndicator from './StepsIndicator';

interface ISecondStepFormData {
  receivedCode: string;
}

type TProps = { nextStep: () => void };

const SecondStep = ({ nextStep }: TProps): JSX.Element => {
  const { classes } = useStyles();

  //* form
  const form = useForm<ISecondStepFormData>({
    initialValues: { receivedCode: '' },
  });

  //* saving inputs values
  useFormSaving<ISecondStepFormData>(form, 'restoreSecondStep');

  //* submit
  const submit: React.FormEventHandler<HTMLFormElement> = form.onSubmit(
    values => {
      console.log(values);
      form.reset();
      nextStep();
    }
  );

  return (
    <form onSubmit={submit}>
      <TextInput
        {...form.getInputProps('receivedCode')}
        size="md"
        radius="md"
        label="Enter received code"
      />
      <StepsIndicator current={2} />
      <Button type="submit" className={classes.card_btn} mt="0">
        continue
      </Button>
    </form>
  );
};

export default SecondStep;
