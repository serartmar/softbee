import React from 'react';
import { Box } from 'grommet';
import { RouterLink } from '../../legos/RouterLink';
import { theme } from '../../utils/theme';

export const ButtonNextCase = () => (
  <Box
    height="220px"
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <RouterLink
      color={theme.global.colors.brand}
      style={{
        fontSize: '48px',
        lineHeight: '56px',
        textDecorationLine: 'underline',
      }}
      to="next-case"
    >
      Next case
    </RouterLink>
  </Box>
);