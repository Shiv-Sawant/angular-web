// Import the necessary components and hooks
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Avatar, Container, IconButton } from "@mui/material";
import Logo from "../../../public/static/images/logo/VisionLogo.svg";
import LoginTab from "./LoginTab";
import BGLogin from '@/public/static/images/background/bgloginfolder.svg'
import { makeStyles } from "@mui/styles";
import Documentation from "./Documentation";
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';

export default function LoginCard() {
  return (
    <Container sx={{
      width: "100vw",
      height: "100vh",
      textAlign: "center",
      overflow: "hidden",
    }}>
      <link rel="stylesheet" href="/globle.css" />
      <ul className="circles">
        <Box width={"100%"} height={"100%"} display={"flex"}>
          <Box sx={{
            width: "100%",
            height: "96.9%",
            borderRadius: "0px 110px 0px 30px",
            boxShadow: "10px 0px 5px 5px #708090",
            backgroundColor: "#347362",
          }}>
            <Box sx={{
            }}>
              <Container sx={{
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}>
                {/* <Button
                  href="/api/auth/login"
                  variant="text"
                >
                  <Avatar sx={{ '&:hover': { backgroundColor: "transparent" }, bgcolor: "transparent" }}>
                    <ExitToAppTwoToneIcon />
                  </Avatar>
                  Register
                </Button> */}
                <Grid sx={{ display: "flex" }}>
                  <Documentation />

                </Grid>
              </Container>
            </Box>
            <Box sx={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              gap: "3%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <Typography color={"white"} variant="h3">
                Login
              </Typography>
              <LoginTab />
              <Grid container justifyContent={"center"} >
                <Button
                  href="/api/auth/login?returnTo=/dashboards"
                  color="primary"
                  variant="text"
                  sx={{ '&:hover': { color: "#fff" } }}
                >
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Box>
          </Box>
          <Box sx={{
            width: "100%",
            height: "96.9%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Box sx={{
              width: "100%",
              height: "15%",
            }}>
              <img src={Logo} width={"30%"} />
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "85%",
              width: "100%",
              borderRadius: "0 30px 30px 0px",
              boxShadow: "5px 0 0 5px #708090",
              backgroundColor: "#347362",
            }}>
              <img src={BGLogin} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt='BgLoginNew' />
              <Typography color={"white"} position={"absolute"} bottom={40} right={"28%"}>
                We are Vision, a trailblazing Digital Neo Non-Banking Exchange platform
              </Typography>
            </Box>
          </Box>
        </Box>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Container>
  );
}
