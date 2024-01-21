import * as React from 'react';
import {  Box, Button, Dialog, List, ListItem, Typography } from '@mui/material';
import EnrollmentBG from '../../../../public/static/images/background/enrollment1.svg';
import EnrollmentCoinBG from '../../../../public/static/images/background/enrollment2.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function AddEnrollment() {
  const router = useRouter()
  const [user, setUser] = React.useState("")

  const handleEnrollment = () => {
    console.log(user, "user")
    router.push('/profile')
  }

  const getLocalStorage = () => {
    let newUser = localStorage.getItem('newUser')
    setUser(newUser)
  }

  React.useEffect(() => {
    getLocalStorage()
    if (user == 'false') {
      router.push('/dashboards')
    }
  }, [user])

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        pb: 3
      }}>
      <Dialog onClose={() => { }} open maxWidth={'lg'}>
        <Box maxWidth={'100%'} sx={{ color: '#ef8450', width: "100vw", height: '100vh', }}>
          <List sx={{ height: '100%', display: 'flex ', justifyContent: 'center', alignItems: 'center', width: "100%", backgroundColor: "#347362" }}>
            <Box
              style={{
                display: 'flex ', justifyContent: 'center', gap: '5%', alignItems: 'center',
                flexDirection: 'column',
                height: '100%',
                width: "100%",
                wordSpacing: 2.5,
                letterSpacing: 1.5,
                backgroundColor: "#fff",
                borderRadius: "5px 200px 5px 200px"
              }}
            >
              <Typography variant='h2' width={350} textAlign={'center'}>
                Digital Non-Banking Exchange Platform Enrollment Dashboard
              </Typography>
              <Typography variant='h5' color={'#00000070'} textAlign={'center'} lineHeight={1.7}>
                A Comprehensive Interface Designed for<br /><label style={{ color: "GrayText", letterSpacing: 2, }}>Streamlined Registration, Monitoring, and Management </label> <br /> of Digital Exchange Participants.
              </Typography>
              <Button variant='contained' onClick={handleEnrollment}>
                Add Enrollment
              </Button>

            </Box>
            <Box
              style={{
                position: 'relative',
                height: '100%',
                width: "100%"
              }}
            >
              <Image src={EnrollmentBG} alt='EnrollmentBg' width={600} height={600} style={{ position: "absolute", right: 0, top: 0 }} />
              <Image src={EnrollmentCoinBG} alt='EnrollmentBg' width={300} height={300} style={{ position: "absolute", bottom: 0 }} />
              <ListItem
                disableGutters
                sx={{
                  bgcolor: 'rgba(250, 250, 250,)',
                  height: '100%',
                  width: '100%',
                  zIndex: 2
                }}
              >
              </ListItem>
            </Box>
          </List>
        </Box>
      </Dialog>
    </Box>
  );
}