'use client'

import { Box, Button, Dialog, List, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import EnrollAsBG from '@/public/static/images/background/EnrollAsBg.svg'
import axios from 'axios'
import { useRouter } from 'next/router'

const EnrolAs = () => {
  const router = useRouter()

  const handleEnrol = async (enrolType: string) => {
    try {
      let data = { enrol: enrolType }
      let id = localStorage.getItem('user id')
      localStorage.setItem('enrolType', enrolType)
      console.log(data, id)
      let response = await axios.put(`http://localhost:3000/api/users/userEnrol?id=${id}`, data)
      console.log(response)
      router.push('/dashboards')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        pb: 3
      }}>
      <Dialog onClose={() => { }} open maxWidth={'lg'}>
        <Box maxWidth={'100%'} sx={{ color: '#ef8450', textShadow: "inherit", width: "100vw", height: '100vh', }}>
          <List sx={{ height: '100%', display: 'flex ', justifyContent: 'center', alignItems: 'center', width: "100%", backgroundColor: "#fff" }}>
            <Box
              style={{
                position: 'relative',
                height: '100%',
                width: "100%",

              }}
            >
              <Image src={EnrollAsBG} alt='EnrollmentBg' width={600} height={600} style={{ position: "absolute", right: 0, top: 0 }} />

            </Box>
            <Box
              style={{
                display: 'flex ', justifyContent: 'center', gap: '5%', alignItems: 'center',
                flexDirection: 'column',
                height: '100%',
                width: "100%",
                wordSpacing: 2.5,
                letterSpacing: 1.5,
                backgroundColor: "#347362",
                borderRadius: "500px 500px 5px 5px",
                boxShadow: "1px 1px 50px 5px",
                color: "wheat"

              }}
            >
              <Typography variant='h2' color={"#ef8450"} width={450} textAlign={'center'}>
                Join as Demand or Supply
              </Typography>
              <Typography variant='h4' color={'whitesmoke'} textAlign={'center'} width={'500px'} lineHeight={1.7}>
                <label>Select your role below to enroll either</label><br /><br />
                <label style={{ color: "wheat", letterSpacing: 3 }}>as a service provider (Supply) or as a consumer seeking services (Demand).</label>
                {/* <br/> Make your choice and proceed with the registration process tailored to your specific needs. */}
              </Typography>
              <Button variant='contained' onClick={() => handleEnrol('Demand')} >
                Demand
              </Button>
              Or
              <Button variant='contained' onClick={() => handleEnrol('Supply')} >
                Supply
              </Button>

            </Box>

          </List>
        </Box>
      </Dialog>
    </Box>
  )
}

export default EnrolAs