import { createStyles } from '@mantine/core';

export const useStyles = createStyles({
  container: {
    width: '100%',
    height: '100vh',
  },

  card: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    filter: 'drop-shadow(0px 4px 100px rgba(121, 126, 249, 0.19))',

    '@media (min-width: 320px)': {
      width: '92%',
    },
    '@media (min-width: 481px)': {
      width: '60%',
    },
    '@media (min-width: 769px)': {
      width: '30%',
    },
  },

  card_welcome_text: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    color: 'rgba(241, 241, 241, 0.85)',

    '@media (min-width: 320px)': {
      marginTop: '33px',
    },
    '@media (min-width: 481px)': {
      marginTop: '43px',
    },
  },

  card_welcome_text_success: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    color: 'rgba(241, 241, 241, 0.85)',
    marginTop: '12px',
  },

  card_signup_text: {
    fontWeight: 500,
    fontSize: '24px',
    color: '#E6E6E6',
    marginTop: '5px',
    marginBottom: '30px',
  },

  card_btn: {
    color: '#ffffff',
    background: '#625BF7',
    borderRadius: '6px',
    height: '45px',
    padding: '9px 14px',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '16px',
    marginTop: '25px',
    width: '100%',
    transition: '0.4s ease-in-out',

    '&:hover': { background: '#5852cc' },
  },

  privacy_policy_text: {
    color: '#6A6A6A',
    fontSize: '12px',
  },

  account_text: {
    color: '#6A6A6A',
    fontSize: '12px',
    marginTop: '15px',
  },

  forgot_password_text: {
    color: '#625BF7',
    fontWeight: 700,
    fontSize: '12px',
    marginTop: '20px',
  },
});
