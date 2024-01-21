import React from 'react'
import CreatedDealTable from '../CreateDeal/CreatedDealTable'
import {  Grid } from '@mui/material'
import { cryptoOrders } from 'pages/dashboards/createdeal';

const Table = () => {
  return (
    <Grid >
        <CreatedDealTable cryptoOrders={cryptoOrders}/>
    </Grid>
  )
}

export default Table