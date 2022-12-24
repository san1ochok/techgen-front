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
import * as React from 'react';
import { FormEventHandler } from 'react';
import { useStyles } from '../../styles/authStyles';
import { IconAt } from '@tabler/icons';
import authBgSrc from '../../images/authBg.png';

export interface ISignUpFormValues {
  email: string;
  password: string;
  repeatedPassword: string;
}

const SignUp = (): JSX.Element => {
  const { classes } = useStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  //* validate email
  const validateEmail = (value: string): null | string => {
    const validRegex: RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validRegex.test(value)) return null;
    else return 'Invalid email';
  };

  //* validate password
  const validatePassword = (value: string): null | string => {
    //* minimum 8 eight characters: digit, symbol, uppercase, lowercase
    const validRegex: RegExp =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (validRegex.test(value)) return null;
    else
      return 'Password must include minimum 8 characters: digit, symbol, uppercase, lowercase';
  };

  //* form
  const form = useForm<ISignUpFormValues>({
    initialValues: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
    validate: {
      email: validateEmail,
      password: validatePassword,
      repeatedPassword: validatePassword,
    },
  });

  useFormSaving<ISignUpFormValues>(form, 'signUp');

  //* checking if password equal
  const { password, repeatedPassword } = form.values;

  if (repeatedPassword.length > 0 && repeatedPassword !== password) {
    form.errors.repeatedPassword = "Passwords aren't same";
  }

  if (password === repeatedPassword && form.errors.password) {
    form.errors.repeatedPassword = null;
  }

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
