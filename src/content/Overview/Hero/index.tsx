import {
  Button,
  Container,
  Grid,
} from '@mui/material';


function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          
          <Button
            // component={Link}
            href="/dashboards/crypto"
            size="large"
            variant="contained"
          >
            Browse Live Preview
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://bloomui.com/product/tokyo-free-black-react-nextjs-material-ui-admin-dashboard"
            size="large"
            variant="text"
          >
            Key Features
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
