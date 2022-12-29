import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useFormSaving } from 'hooks/useFormSaving';
import React, { FormEventHandler, useEffect } from 'react';
import { useStyles } from 'styles/authStyles';
import { validateIsEmpty } from 'authValidation';
import StepsIndicator from './StepsIndicator';

interface ISecondStepFormData {
  receivedCode: string;
}

type TProps = { nextStep: () => void };

const SecondStep = ({ nextStep }: TProps): JSX.Element => {
  //* removing prev step saves
  useEffect(() => {
    sessionStorage.removeItem('restoreFirstStep')
  }, [])

  const { classes } = useStyles();

  //* form
  const form = useForm<ISecondStepFormData>({
    initialValues: { receivedCode: '' },
    validate: { receivedCode: validateIsEmpty }
  });

  //* saving inputs values
  useFormSaving<ISecondStepFormData>(form, 'restoreSecondStep');

  //* submit
  const submit: FormEventHandler<HTMLFormElement> = form.onSubmit(
    values => {
      console.log(values);
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
