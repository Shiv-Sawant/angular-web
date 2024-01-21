import {
  Typography,
  Box,
  Card,
  Container,
  Button,
  styled,
  Paper,
  Grid
} from '@mui/material';
import type { ReactElement } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';

import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import LoginCard from '@/content/LoginPage/LoginCard';
import Documentation from '@/content/LoginPage/Documentation';

import Image from 'next/image';




const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(8)};
  margin-bottom: ${theme.spacing(2)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper sx={{ position: "relative" }}>

      <Head>
        <title>Vision LogIn/SignIn</title>
      </Head>
      <Box display="flex" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flex={1}
        >
          <Box display={"flex"}>
            {/* <Grid>
                  <Documentation/>
                </Grid>
                <Button
                  // component={Link}
                  href="/api/auth/login"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Register
                </Button> */}
            {/* <Button
                  component={Link}
                  href="/api/auth/logout"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Logout
                </Button> */}
          </Box>
        </Box>
      </Box>
      <Box position={"relative"} sx={{ opacity: "0.98", width: "100%" }}>
        <LoginCard />

      </Box>
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>
      {page}
  </BaseLayout>;
};
