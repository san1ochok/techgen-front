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
import { FormEventHandler } from 'react';
import { useStyles } from '../../styles/authStyles';

export interface IInitialFormValues {
  emailOrPhone: string;
  password: string;
  repeatedPassword: string;
}

const SignUp = (): JSX.Element => {
  const { classes } = useStyles('signUp');

  //* validate email
  const validateEmailOrPhone = (value: string): null | string => {
    if (value.includes('@')) {
      const validRegex: RegExp =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (validRegex.test(value)) return null;
      else return 'Invalid email';
    } else {
      const validRegex: RegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

      if (validRegex.test(value)) return null;
      else return 'Invalid phone number';
    }
  };

  //* validate password
  const validatePassword = (value: string): null | string => {
    //* minimum 8 eight characters: digit, symbol, uppercase, lowercase
    if (
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value)
    )
      return null;
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

  //* checking if password equal
  const { password, repeatedPassword } = form.values;

  if (repeatedPassword.length > 0 && repeatedPassword !== password)
    form.errors.repeatedPassword = "Passwords aren't same";

  //* submit
  const onSubmit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
    console.log(values);
  });

  return (
    <Box>
      <Card px="2%" radius="md" className={classes.card}>
        <Text className={classes.card_welcome_text}>You’re welcome! 👋</Text>
        <Text className={classes.card_signup_text}>
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
            <Text sx={{ color: '#625BF7' }} component="a" href="/signIn">
              Sign in
            </Text>
          </Text>
        </Center>
      </Card>
    </Box>
  );
};

export default SignUp;
