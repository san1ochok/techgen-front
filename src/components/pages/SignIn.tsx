import {
  Box,
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

type ISignInFormValues = Omit<ISignUpFormValues, 'repeatedPassword'>;

const SignIn = (): JSX.Element => {
  const { classes } = useStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  //* form
  const form = useForm<ISignInFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
  });

  useFormSaving<ISignInFormValues>(form, 'signIn');

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
          <Text className={classes.forget_password_text}>
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
    </Box>
  );
};

export default SignIn;
