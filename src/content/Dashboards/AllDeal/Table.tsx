import React from 'react'
import CreatedDealTable from '../CreateDeal/CreatedDealTable'
import { Card, Grid } from '@mui/material'
import { CryptoOrder } from '@/models/crypto_order';
import { subDays } from 'date-fns';
import { cryptoOrders } from 'pages/dashboards/createdeal';

const Table = () => {
  return (
    <Grid >
        <CreatedDealTable cryptoOrders={cryptoOrders}/>
    </Grid>
  )
}

export default Table