import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import PageHeader from '@/content/Dashboards/AllDeal/PageHeader';
import { Container, Grid } from '@mui/material';
import Table from '@/content/Dashboards/AllDeal/Table';

function DashboardAllDeal() {
  return (
    <div>
        <Head>
        <title>All Deal</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} lg={12}>
            < Table />
          </Grid>
          </Grid>
      </Container>
    </div>
  );
}

DashboardAllDeal.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardAllDeal;
