import { MantineTheme } from '@mantine/core';

const theme: Partial<MantineTheme> = {
  globalStyles: theme => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {},
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    a: { textDecoration: 'none', color: 'currentColor' },
    p: { margin: 0 },
    h1: { margin: 0 },
    h2: { margin: 0 },
    h3: { margin: 0 },
    h4: { margin: 0 },
    h5: { margin: 0 },
    h6: { margin: 0 },
    img: {
      display: 'block',
      maxWidth: '100%',
      height: 'auto',
    },
    textarea: {
      resize: 'none',
    },
  }),
  colorScheme: 'dark',
  white: '#E6E6E6',
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
