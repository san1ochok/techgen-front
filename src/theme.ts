import { MantineTheme } from '@mantine/core';

const theme: Partial<MantineTheme> = {
  colorScheme: 'dark',
  white: '##E6E6E6',
  black: '#141414',
  fontFamily: 'Mulish, sans-serif',
  components: {
    Input: {
      styles: theme => ({
        input: {
          borderColor: theme.colors.gray[0],
          '&:focus-within': {
            borderColor: theme.colors.gray[0],
          },
        },
      }),
    },
  },
};

export default theme;
