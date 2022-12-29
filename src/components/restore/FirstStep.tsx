import { Button, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAt } from '@tabler/icons';
import { useFormSaving } from 'hooks/useFormSaving';
import React, { FormEventHandler } from 'react';
import { useStyles } from 'styles/authStyles';
import { validateEmailAndIsEmpty, validateIsEmpty } from 'authValidation';
import StepsIndicator from './StepsIndicator';

interface IFirstStepFormData {
  email: string;
  recoveryCode: string;
}

type TProps = { nextStep: () => void };

const FirstStep = ({ nextStep }: TProps): JSX.Element => {
  const { classes } = useStyles();

  //* form
  const form = useForm<IFirstStepFormData>({
    initialValues: {
      email: '',
      recoveryCode: '',
    },
    validate: {
      email: validateEmailAndIsEmpty,
      recoveryCode: validateIsEmpty,
    },
  });

  //* saving inputs values
  useFormSaving<IFirstStepFormData>(form, 'restoreFirstStep');

  //* submit
  const submit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
    console.log(values);
    nextStep();
  });

  return (
    <form onSubmit={submit}>
      <Stack spacing="md">
        <TextInput
          {...form.getInputProps('email')}
          size="md"
          radius="md"
          label="Email"
          icon={<IconAt size={18} />}
        />
        <TextInput
          {...form.getInputProps('recoveryCode')}
          size="md"
          radius="md"
          label="Recovery Code"
        />
      </Stack>
      <StepsIndicator current={1} />
      <Button type="submit" className={classes.card_btn} mt="0">
        continue
      </Button>
    </form>
  );
};

export default FirstStep;
