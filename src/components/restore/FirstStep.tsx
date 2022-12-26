import { Button, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAt } from '@tabler/icons';
import { useFormSaving } from 'hooks/useFormSaving';
import * as React from 'react';
import { FormEventHandler } from 'react';
import { useStyles } from 'styles/authStyles';
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
  });

  //* saving inputs values
  useFormSaving<IFirstStepFormData>(form, 'restoreFirstStep');

  //* submit
  const submit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
    console.log(values);
    form.reset();
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
