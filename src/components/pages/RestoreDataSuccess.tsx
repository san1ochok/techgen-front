import { BackgroundImage, Card, Button, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import * as React from 'react';
import { useStyles } from '../../styles/restoreDataSuccess';
import authBgSrc from '../../images/authBg.png';

const RestoreDataSuccess = (): JSX.Element => {
  const { classes } = useStyles();
  const largerThan481 = useMediaQuery('(min-width: 481px)');

  const handleClick = () => {
    // use the push method on the history object to navigate to the SignIn page
  };

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
        <Button
          onClick={handleClick}
          type="submit"
          sx={{ marginTop: '8%' }}
          className={classes.card_btn}
        >
          sign in
        </Button>
      </Card>
    </BackgroundImage>
  );
};

export default RestoreDataSuccess;
