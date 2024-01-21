import { Box, Button, Card, CardContent, Container, Divider, Grid, MenuItem, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileBG from '@/public/static/images/background/ProfileFormBackground.svg'
import ProfileFront from '@/public/static/images/background/ProfileFormFron.svg'
import axios from 'axios'
import { useRouter } from 'next/router'

export const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];
const ProfileForm = () => {
  const [profile, setProfile] = useState([])
  const router = useRouter()

  const handleInput = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  // profile push into DB
  const handleProfile = async () => {
    console.log('handle profile')
    try {
      console.log('handle profile')
      let userId = localStorage.getItem('user id')
      await axios.put(`http://localhost:3000/api/profile?id=${userId}`, { profile, enrollStatus: 'no' })
      localStorage.setItem('user-profile', JSON.stringify(profile))
      localStorage.setItem('enroll-status', "no")
      router.push('/enrolas')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ position: "relative", height: "600px", display: "flex", justifyContent: "center", top: 10, width: "100%" }}>

      <Image src={ProfileBG} alt='EnrollmentBg' width={1200} height={600} style={{ position: "absolute", left: "0" }} />

      <Grid item xs={6} position={"relative"}  >
        <Card sx={{ justifyItems: "center", paddingTop: '50px', display: 'flex', bgcolor: "#347362", flexDirection: 'column', alignItems: 'center', height: "90%" }}>
          <Typography variant='h3' paddingBottom={2} color={"#ffffff"}>Profile</Typography>
          <Divider />
          <CardContent sx={{ display: "grid", justifyContent: "space-evenly", gap: 2, alignItems: "center", }}>
            <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Name"
                name='Name'
                type='text'
                placeholder='Name'
                sx={{ bgcolor: "white", }}
                variant='filled'
                onChange={handleInput}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email"
                name='Email'
                type='email'
                placeholder='Email'
                sx={{ bgcolor: "white" }}
                variant='filled'
                onChange={handleInput}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="PlatForm Name"
                name='PlatFormName'
                type='text'
                placeholder="Platform Name"
                sx={{ bgcolor: "white" }}
                variant='filled'
                onChange={handleInput}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Social Meadia Account"
                name='SocialMeadiaAccount'
                type="text"
                placeholder="Social Meadia Account"
                sx={{ bgcolor: "white" }}
                variant='filled'
                onChange={handleInput}

              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Phone No."
                name='PhoneNo'
                type="number"
                placeholder="Phone"
                sx={{ bgcolor: "white" }}
                variant='filled'
                onChange={handleInput}

              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Company Type"
                name='CompanyType'
                value='EUR'
                onChange={handleInput}
                sx={{ bgcolor: "white" }}
                variant='filled'

              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="City"
                name='City'
                value='EUR'
                onChange={handleInput}
                sx={{ bgcolor: "white" }}
                variant='filled'
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

            </Box>
          </CardContent>
          <Button variant='contained' onClick={handleProfile} sx={{ width: "78%", color: "white" }}>
            Submit
          </Button>
        </Card>
      </Grid>

      <Image src={ProfileFront} alt='EnrollmentBg' width={600} height={600} style={{ position: "absolute", right: "0", }} />

    </Container >
  )
}

export default ProfileForm