import React from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import { useMediaQuery } from 'react-responsive';
import { Text } from '../../legos/typography/Text';
import { Button } from '../../legos/Button/Button';

export const OurTeamWeAreSection = () => {
  const size = React.useContext(ResponsiveContext);
  const columnsCount = size === 'small' ? 1 : 2;
  const isTablet = useMediaQuery({ query: '(max-width: 1100px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <Box
      height="auto"
      pad={isTablet ? { horizontal: 'medium' } : { horizontal: 'xlarge' }}
    >
      <Grid
        columns={{ count: columnsCount, size: 'auto' }}
        pad={{ horizontal: 'small', vertical: 'xlarge' }}
        gap="medium"
        style={{ height: 'auto' }}
      >
        <Box pad={{ horizontal: 'large' }}>
          <img
            style={{ height: 'auto', width: '100%' }}
            src="/assets/sectionHeader.svg"
            alt=" People create a website "
          />
        </Box>
        <Box
          width="100%"
          height="auto"
          align="center"
          justify="center"
          pad={
            isTablet
              ? { horizontal: 'small' }
              : { left: 'xlarge', right: 'large' }
          }
        >
          <Text
            color="brand"
            size={isMobile ? 'small' : 'medium'}
            align="center"
            style={{}}
          >
            We’re designers, developers, illustrators, copywriters and coders,
            but we also have pure gold ideas. iPhone games, time-keeping apps,
            dog-backpacks, too many tshirt slogans to keep track of. One day
            we’ll be rich, you’d best work with us while we need the money.
          </Text>
          <Box
            justify="center"
            align="center"
            height="50px"
            width="194px"
            margin={{ top: '50px' }}
          >
            <Button
              label="Let’s talk   &#128075;"
              fill
              color="accent-1"
              primary
              href="/let's-talk"
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
