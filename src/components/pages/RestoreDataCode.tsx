import {
  BackgroundImage,
  Card,
  Stack,
  TextInput,
  Button,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useFormSaving } from 'hooks/useFormSaving';
import * as React from 'react';
import { FormEventHandler } from 'react';
import { useStyles } from '../../styles/authStyles';
import { ISignUpFormValues } from './SignUp';
import authBgSrc from '../../images/authBg.png';

type TRestoreDataValuesCode = Omit<
  ISignUpFormValues,
  'repeatedPassword' | 'password' | 'email'
> & {
  recoveryCode: string;
};

const RestoreDataCode = (): JSX.Element => {
  const { classes } = useStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  //* form
  const form = useForm<TRestoreDataValuesCode>({
    initialValues: {
      recoveryCode: '',
    },
  });

  useFormSaving<TRestoreDataValuesCode>(form, 'signIn');

  //* submit
  const onSubmit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
    console.log(values);
    form.reset();
  });

  return (
    <BackgroundImage className={classes.container} src={authBgSrc}>
      <Card
        className={classes.card}
        px={largerThan481 ? '3%' : '4%'}
        radius="md"
      >
        <Text
          className={classes.card_welcome_text}
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          Looks like you forgot something 😣
        </Text>
        <Text
          className={classes.card_signup_text}
          data-aos="zoom-in"
          data-aos-duration="1800"
        >
          Restore your Data
        </Text>
        <form onSubmit={onSubmit}>
          <Stack spacing="md">
            <TextInput
              {...form.getInputProps('recoveryCode')}
              size="md"
              radius="md"
              label="Enter received code"
            />
          </Stack>
          <Button
            type="submit"
            sx={{ marginTop: '8%' }}
            className={classes.card_btn}
          >
            Continue
          </Button>
        </form>
      </Card>
    </BackgroundImage>
  );
};

export default RestoreDataCode;
