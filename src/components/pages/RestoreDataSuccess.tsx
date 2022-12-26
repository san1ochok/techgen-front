import { BackgroundImage, Card, Button, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import { useFormSaving } from 'hooks/useFormSaving';
import * as React from 'react';
import { FormEventHandler } from 'react';
import { useStyles } from '../../styles/authStyles';
import { ISignUpFormValues } from './SignUp';
import authBgSrc from '../../images/authBg.png';

type TRestoreDataSuccess = Omit<
  ISignUpFormValues,
  'repeatedPassword' | 'password' | 'email'
>;

const RestoreDataSuccess = (): JSX.Element => {
  const { classes } = useStyles();

  //* media query
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  //* form
  const form = useForm<TRestoreDataSuccess>({
    initialValues: {},
  });

  useFormSaving<TRestoreDataSuccess>(form, 'signIn');

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
          className={classes.card_signup_text}
          data-aos="zoom-in"
          data-aos-duration="1800"
        >
          Password successfully restored! ✅
          <Text
            className={classes.card_welcome_text_success}
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            Don't forget it next time, because it's always a shame to lose
            something important.
          </Text>
        </Text>
        <form onSubmit={onSubmit}>
          <Button
            type="submit"
            sx={{ marginTop: '8%' }}
            className={classes.card_btn}
          >
            sign in
          </Button>
        </form>
      </Card>
    </BackgroundImage>
  );
};

export default RestoreDataSuccess;
