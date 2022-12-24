import * as React from 'react';
import { Loader as MLoader, Box } from '@mantine/core';
import { useStyles } from '../styles/loaderStyles';

const Loader = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <MLoader size="xl" variant="bars" />
    </Box>
  );
};

export default Loader;
