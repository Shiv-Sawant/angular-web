'use client'

import Head from 'next/head';

import { Container, Grid } from '@mui/material';
import AddEnrollment from '@/content/Dashboards/Enrollment/AddEnrollment';

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

export default DashboardEnrollment;
