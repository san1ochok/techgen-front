import {
  BackgroundImage,
  Card,
  Stack,
  TextInput,
  PasswordInput,
  Center,
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
import { IconAt } from '@tabler/icons';
import authBgSrc from '../../images/authBg.png';

type TSignInFormValues = Omit<ISignUpFormValues, 'repeatedPassword'>;

const SignIn = (): JSX.Element => {
  const { classes } = useStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  //* form
  const form = useForm<TSignInFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
  });

  useFormSaving<TSignInFormValues>(form, 'signIn');

  //* submit
  const submit: FormEventHandler<HTMLFormElement> = form.onSubmit(values => {
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
          </Stack>
          <Button
            type="submit"
            sx={{ marginTop: '8%' }}
            className={classes.card_btn}
          >
            sign in
          </Button>
        </form>
        <Center>
          <Text className={classes.forgot_password_text}>
            Forgot your password?
          </Text>
        </Center>
        <Center>
          <Text className={classes.account_text}>
            Already have an account?{' '}
            <Text c="#625BF7" component="a" href="/techgen-front/signUp">
              Sign up
            </Text>
          </Text>
        </Center>
      </Card>
    </BackgroundImage>
  );
};

export default SignIn;
