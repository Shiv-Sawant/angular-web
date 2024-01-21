'use client'

import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
// import Footer from '@/components/Footer';

import AccountBalance from '@/content/Dashboards/Crypto/AccountBalance';
import Wallets from '@/content/Dashboards/Crypto/Wallets';
import AccountSecurity from '@/content/Dashboards/Crypto/AccountSecurity';
import WatchList from '@/content/Dashboards/Crypto/WatchList';
import AddEnrollment from '@/content/Dashboards/Enrollment/AddEnrollment';
import ProfileForm from 'pages/profile';
import EnrolAs from 'pages/enrolas';

function DashboardEnrollment() {

  return (
    <>
      <Head>
        <title>Enrollment</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          spacing={4}
        >
          <Grid item xs={12} >
            <AddEnrollment />
          </Grid>
          <Grid item xs={12} >
            {/* <EnrolAs /> */}
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

// DashboardEnrollment.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardEnrollment;
