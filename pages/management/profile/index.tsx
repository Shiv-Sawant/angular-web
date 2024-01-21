import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { Grid, Container } from '@mui/material';
import ProfileCover from '@/content/Management/Users/details/ProfileCover';
import RecentActivity from '@/content/Management/Users/details/RecentActivity';
import { useEffect, useState } from 'react';


function ManagementUserProfile() {

  const [profile, SetProfile] = useState<any>([])

  console.log(profile)

  const getLocalStorage = () => {
    let userData = JSON.parse(localStorage.getItem('user-profile'))
    SetProfile(userData)
  }

  useEffect(() => {
    getLocalStorage()
  }, [])

  const user = {
    savedCards: 7,
    name: profile?.Name,
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    email: profile?.Eame,
    platformName: profile?.PlatFormName,
    socialMedia: profile?.SocialMeadiaAccount,
    phoneNumber: profile?.PhoneNo,
    city: profile?.City
  };

  return (
    <>
      <Head>
        <title>User Details - Management</title>
      </Head>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} >
            {/* <ProfileForm/> */}
            {/* <EnrollmentForm/> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

ManagementUserProfile.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserProfile;
