import { Box, Button, Grid, List, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import CreateBg from '@/public/static/images/background/vector1.svg'
import CreateForm from './Form'

const CreateDealButton = ({ setList, createDeal }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Grid >
      <CreateForm createDeal={createDeal} open={open} setOpen2={setOpen} setList={setList} />
      <Box maxWidth={'100%'} sx={{ color: '#ef8450', textShadow: "inherit", width: "79vw", height: '85vh', }}>
        <List sx={{ height: '100%', display: 'flex ', justifyContent: 'center', alignItems: 'center', width: "100%", }}>
          <Box
            style={{
              position: 'relative',
              height: '100%',
              width: "100%",
              borderRadius: "600px 0px 0px 600px",
              boxShadow: "0px 6px 10px 0px",
              color: "gray",
              backgroundColor: "#347362",

            }}
          >
            {/* <Image src={EnrollAsBG1} alt='EnrollmentBg' width={300} height={300} style={{position:"absolute",top:0}}  /> */}
            <Image src={CreateBg} alt='EnrollmentBg' fill style={{ position: "absolute", }} />

          </Box>
          <Box
            style={{
              display: 'flex ', justifyContent: 'center', gap: '5%', alignItems: 'center',
              flexDirection: 'column',
              height: "100%",
              width: "100%",
              wordSpacing: 2.5,
              backgroundColor: "white",
              borderRadius: "0px 600px 600px 0px",
              letterSpacing: 1.5,
              color: "gray",
              boxShadow: "1px 6px 10px 0px"

            }}
          >
            <Typography variant='h3' style={{ fontWeight: 900, color: "#347362" }}>New Deal</Typography>
            <Typography variant='h4' color={'GrayText'} textAlign={'center'} width={'500px'} lineHeight={1.7}>
              <label>Click the
                <span style={{ color: "#ef8450", letterSpacing: 3 }}> "Create New Deal" </span>
                button below to initiate the process and set up a new deal opportunity.</label><br /><br />
            </Typography>
            <Button variant='contained'
              onClick={() => {
                setOpen((pre) => !pre);
              }}
            >
              Create New Deal
            </Button>

          </Box>

        </List>
      </Box>
    </Grid>
  )
}

export default CreateDealButton