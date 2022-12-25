import * as React from 'react';
import { Box, Sx } from '@mantine/core';

type TProps = { current: boolean };

const Step = ({ current }: TProps): JSX.Element => {
  const styles: Sx = {
    background: current ? '#6A6A6A' : '#474646',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  };

  return <Box sx={styles}></Box>;
};

export default Step;
