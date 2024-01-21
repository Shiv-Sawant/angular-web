import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        height: '100%'
      }}
    >
      <UserProvider>
        {children}
      </UserProvider>
    </Box>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
