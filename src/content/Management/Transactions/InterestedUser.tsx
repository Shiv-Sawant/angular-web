import Text from '@/components/Text'
import { Box, Card, CardContent, Dialog, Grid, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'
import InterestedUserTable from './InterestedUserTable'
import { Cancel } from '@mui/icons-material'

const InterestedUser = ({open, data, setOpen, selectedIndex}) => {
  return (
    <Dialog maxWidth="lg" fullWidth open={open} onClose={()=> {
        setOpen(false)
      }}>
        <Card sx={{p:5}}>
        <Grid container alignItems={"center"} width={"100%"}>
            <Grid item justifyContent={"space-between"} display={"flex"} width={"100%"}>
                <Typography variant="h3" component="h3" gutterBottom>
                    Interested Users
                </Typography>
                <IconButton onClick={()=> {
        setOpen(false)
      }}>
                    <Cancel/>
                </IconButton>
            </Grid>
            <CardContent sx={{ p: 4, width:"100%", textAlign:"center" }} >
              <Typography variant="subtitle2">
                <Grid container justifyContent={"space-evenly"} bgcolor={"#347362"} borderRadius={1} p={2} alignItems={"center"} spacing={0} width={"100%"}  display={"flex"}>
                  
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'center' }}>
                    <Box pr={3} pb={2} color={"white"} >
                      Deal Created By
                    </Box>
                  <Grid item xs={12} sm={8} md={12} p={1} borderRadius={2} bgcolor={"white"}>
                    <Text color="black">
                      <b>{data && data[selectedIndex].orderDetails}</b>
                    </Text>
                  </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'center' }}>
                    <Box pr={3} pb={2} color={"white"}>
                      Product:
                    </Box>
                  <Grid item xs={12} sm={8} md={12} p={1} borderRadius={2} bgcolor={"white"}>
                    <Text color="black">
                      <b>{data && data[selectedIndex].orderID}</b>
                    </Text>
                  </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'center' }}>
                    <Box pr={3} pb={2} color={"white"}>
                      Amount
                    </Box>
                  <Grid item xs={12} sm={8} md={12} p={1} borderRadius={2} bgcolor={"white"}>
                    <Text color="black">
                      <b>{data && data[selectedIndex].amountCrypto}</b>
                    </Text>
                  </Grid>
                  </Grid>
                  </Grid>
              </Typography>
            </CardContent>
        </Grid>
        <Box>
            <InterestedUserTable/>
        </Box>
        </Card>
    </Dialog>
  )
}

export default InterestedUser