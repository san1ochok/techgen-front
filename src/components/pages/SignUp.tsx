import {
  BackgroundImage,
  Button,
  Card,
  Center,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useFormSaving } from 'hooks/useFormSaving';
import React, { FormEventHandler } from 'react';
import { useStyles } from '../../styles/authStyles';
import { IconAt } from '@tabler/icons';
import authBgSrc from '../../images/authBg.png';
import { validateEmailAndIsEmpty, validateIsEmpty, validatePassword } from 'authValidation';

export interface ISignUpFormValues {
  email: string;
  password: string;
  repeatedPassword: string;
}

const SignUp = (): JSX.Element => {
  const { classes } = useStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  //* form
  const form = useForm<ISignUpFormValues>({
    initialValues: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
    validate: {
      email: validateEmailAndIsEmpty,
      password: validatePassword,
      repeatedPassword: validateIsEmpty,
    },
  });

  //* saving inputs values
  const resetSavedValues = useFormSaving<ISignUpFormValues>(form, 'signUp');

  //* checking if password equal
  const { email, password, repeatedPassword } = form.values;

  if (repeatedPassword.length > 0 && repeatedPassword !== password) {
    form.errors.repeatedPassword = "Passwords aren't same";
  }

  if (password === repeatedPassword && form.errors.password && email) {
    form.errors.repeatedPassword = null;
  }

  //* submit
  const submit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
    console.log(values);
    resetSavedValues();
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
          className={classes.card_helper_text}
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          You’re welcome! 👋
        </Text>
        <Text
          className={classes.card_title_text}
          data-aos="zoom-in"
          data-aos-duration="1800"
        >
          Sign up your new account
        </Text>
        <form onSubmit={submit}>
          <Stack spacing="md">
            <TextInput
              {...form.getInputProps('email')}
              size="md"
              radius="md"
              label="Email"
              icon={<IconAt size={18} />}
            />
            <PasswordInput
              {...form.getInputProps('password')}
              size="md"
              radius="md"
              label="Password"
            />
            <PasswordInput
              {...form.getInputProps('repeatedPassword')}
              size="md"
              radius="md"
              label="Repeat password"
            />
            <Center>
              <Text className={classes.privacy_policy_text}>
                I agreed with Privacy Policy
              </Text>
            </Center>
          </Stack>
          <Button type="submit" className={classes.card_btn}>
            sign up
          </Button>
        </form>
        <Center>
          <Text className={classes.account_text}>
            Already have an account?{' '}
            <Text c="#625BF7" component="a" href="/techgen-front/signIn">
              Sign in
            </Text>
          </Text>
        </Center>
      </Card>
    </BackgroundImage>
  );
};

export default SignUp;
