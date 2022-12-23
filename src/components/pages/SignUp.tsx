import {
  Box,
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
import * as React from 'react';
import { FormEventHandler } from 'react';
import { useStyles } from '../../styles/authStyles';

export interface IInitialFormValues {
  emailOrPhone: string;
  password: string;
  repeatedPassword: string;
}

const SignUp = (): JSX.Element => {
  const { classes } = useStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)')

  //* validate email
  const validateEmailOrPhone = (value: string): null | string => {
    if (value.includes('@')) {
      const validRegex: RegExp = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

      if (validRegex.test(value)) return null;
      else return 'Invalid email';
    } else {
      const validRegex: RegExp =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

      if (validRegex.test(value)) return null;
      else return 'Invalid phone number';
    }
  };

  //* validate password
  const validatePassword = (value: string): null | string => {
    //* minimum 8 eight characters: digit, symbol, uppercase, lowercase
    const validRegex: RegExp =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (validRegex.test(value)) return null;
    else return 'Invalid password';
  };

  //* form
  const form = useForm<IInitialFormValues>({
    initialValues: {
      emailOrPhone: '',
      password: '',
      repeatedPassword: '',
    },
    validate: {
      emailOrPhone: validateEmailOrPhone,
      password: validatePassword,
      repeatedPassword: validatePassword,
    },
  });

  useFormSaving<IInitialFormValues>(form, 'signUp');

  //* checking if password equal
  const { password, repeatedPassword } = form.values;

  if (repeatedPassword.length > 0 && repeatedPassword !== password)
    form.errors.repeatedPassword = "Passwords aren't same";

  //* submit
  const onSubmit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
    console.log(values);
    form.reset();
  });

  return (
    <Box>
      <Card className={classes.card} px={largerThan481 ? 0 : '4%'} radius="md">
        <Text
          className={classes.card_welcome_text}
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          You’re welcome! 👋
        </Text>
        <Text
          className={classes.card_signup_text}
          data-aos="zoom-in"
          data-aos-duration="1800"
        >
          Sign up your new account
        </Text>
        <form onSubmit={onSubmit}>
          <Stack spacing="md">
            <TextInput
              {...form.getInputProps('emailOrPhone')}
              size="md"
              radius="md"
              label="Your email or Phone"
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
            <Text c="#625BF7" component="a" href="/signIn">
              Sign in
            </Text>
          </Text>
        </Center>
      </Card>
    </Box>
  );
};

export default SignUp;
