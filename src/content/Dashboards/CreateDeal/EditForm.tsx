import { Box, Card, CardContent, Divider, Grid, Modal, Typography } from '@mui/material'
import React from 'react'

import Text from '@/components/Text';

const EditForm = ({  open, setOpen, selectedIndex }) => {
  console.log(selectedIndex, "all selected index")

  function convertMillisecondsToDate(milliseconds) {
    // Create a new Date object with the provided milliseconds
    const date = new Date(milliseconds);

    // Extract individual components of the date
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const millisecondsPart = date.getMilliseconds();

    // Format the date as a string
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours}:${minutes}:${seconds}.${millisecondsPart}`;

    return formattedDate;
  }
  return (
    <Modal open={open} onClose={() => {
      setOpen(false)
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h4" gutterBottom>
                  Created Deal
                </Typography>
                <Typography variant="subtitle2">
                  Manage informations related to your Created Deal
                </Typography>
              </Box>
              {/* <Button variant="text" startIcon={<EditTwoToneIcon />}>
                Edit
              </Button> */}
            </Box>
            <Divider />
            <CardContent sx={{ p: 4 }}>
              <Typography variant="subtitle2">
                <Grid container spacing={0}>

                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Deal Created By
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{selectedIndex?.createdBy}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Product:
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{selectedIndex?.orderID}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Amount
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{selectedIndex?.cryptoCurrency}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Created Date
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Text color="black">
                      <b>{convertMillisecondsToDate(selectedIndex?.orderDate)}</b>
                    </Text>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={3} pb={2}>
                      Consultant
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8} md={9}>
                    <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                      <Text color="black">
                        {selectedIndex?.consultant}
                      </Text>
                    </Box>
                  </Grid>
                </Grid>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default EditForm