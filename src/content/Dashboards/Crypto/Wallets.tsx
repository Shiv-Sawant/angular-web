import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { FcDebt } from "react-icons/fc";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import EnrollmentForm from '../Enrollment/EnrollmentForm';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);



function Wallets() {
  const [liveDeals, setLiveDeals] = useState([])
  const [open, setOpen] = useState<boolean>(false)

  const router = useRouter()

  const handleopen = () => {
    console.log('open')
    const enrollUser = localStorage.getItem("enroll-status")
    if (enrollUser == "no" || enrollUser == null) {
      setOpen(true)
    } else {
      router.push("/dashboards/createdeal")
    }
  }

  useEffect(() => {
    const fetchLiveDeals = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/deal")
        setLiveDeals(res?.data)
        console.log(res?.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchLiveDeals()
  }, [])

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <EnrollmentForm open={open} setOpen={setOpen} />
        <Typography variant="h3">Live Deals</Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleopen}
        >
          Add new deal
        </Button>
      </Box>
      <Grid height={300} px={3} display={"flex"} justifyItems={"center"} alignItems={"center"} gap={2} displayPrint={"none"} overflow={"scroll"}>
        {
          liveDeals?.map((item, index) => {
            return (
              <Grid xs={12} sm={6} md={3} item key={index}>
                <Card
                  sx={{
                    px: 1
                  }}
                >
                  <CardContent>
                    <AvatarWrapper>
                      <FcDebt style={{ width: '2rem', height: '2rem' }} />
                    </AvatarWrapper>
                    <Typography variant="h5" noWrap>
                      {item?.orderID}
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      2 Lender
                    </Typography>
                    <Box
                      sx={{
                        pt: 3
                      }}
                    >
                      <Typography variant="h3" gutterBottom noWrap>
                        {`${item?.cryptoCurrency ? item?.cryptoCurrency : "0"} CR`}
                      </Typography>
                      <Typography variant="subtitle2" noWrap>
                        Consultant: No
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
        <Grid xs={12} sm={6} md={3} item style={{ height: '15rem' }}>
          <Tooltip arrow title="Click to add a new deal">
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
