import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';
import { Container, Grid } from '@mui/material';
import CreatedDealTable from '@/content/Dashboards/CreateDeal/CreatedDealTable';
import { CryptoOrder } from '@/models/crypto_order';
import { useEffect, useState } from 'react';
import CreateDealButton from '@/content/Dashboards/CreateDeal/CreateDealButton';
import { filterDataAndLastSevenDaysData } from '@/util/dataTimeUtil';


export const cryptoOrders: CryptoOrder[] = [
  {
    id: '1',
    orderDetails: 'Owner',
    createdBy: 'Khushboo',
    orderDate: new Date().getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 34.4565,
    amount: 56787,
    cryptoCurrency: 'cr',
    currency: '₹'
  },
  {
    id: '1',
    orderDetails: 'Owner',
    createdBy: 'Khushboo',
    orderDate: new Date("2023-12-21").getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 34.4565,
    amount: 56787,
    cryptoCurrency: 'cr',
    currency: '₹'
  },
  {
    id: '1',
    orderDetails: 'Owner',
    createdBy: 'Khushboo',
    orderDate: new Date("2023-12-27").getTime(),
    status: 'completed',
    orderID: 'Term Loan',
    sourceName: 'Bank Account',
    sourceDesc: '*** 1111',
    amountCrypto: 34.4565,
    amount: 56787,
    cryptoCurrency: 'cr',
    currency: '₹'
  },
];
function DashboardCreatDeal() {
  const [list, setList] = useState(cryptoOrders)
  const [isDealCreate, setIsDealCreate] = useState<any>(false)

  console.log(isDealCreate, "from deal page")


  const createDeal = (isdealcreate: any) => {
    setIsDealCreate(!isdealcreate)
  }

  useEffect(() => {

  }, [isDealCreate])

  return (
    <div>
      <Head>
        <title>Create Deal</title>
      </Head>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item maxWidth={'lg'}>
            <CreateDealButton createDeal={createDeal} setList={setList} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <CreatedDealTable isDealCreate={isDealCreate} cryptoOrderss={filterDataAndLastSevenDaysData({ accessor: "orderDate", data: list })} />
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

DashboardCreatDeal.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCreatDeal;
