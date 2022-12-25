import { createStyles } from '@mantine/core';

export const useStyles = createStyles({
  steps_indicator: {
    gap: '5px',
    margin: '23px 0 23px 0',
  },
  forget_text: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#ffffff',

    '@media (min-width: 320px)': { width: '90%' },
    '@media (min-width: 481px)': { width: '70%' },
  },
});
