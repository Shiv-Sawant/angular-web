import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import EnrollmentForm from '@/content/Dashboards/Enrollment/EnrollmentForm';
import axios from 'axios';

const EnrollmentDetail = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [enrollData, setEnrollData] = useState<any>([])
  console.log(enrollData)

  const GetEnrolledData = async () => {
    try {
      let email = localStorage.getItem('user email')
      const res = await axios.get(`http://localhost:3000/api/users/userEnrol?email=${email}`)
      // localStorage.setItem("enroll-status", "yes")
      setEnrollData(res.data.data.enrollment)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    GetEnrolledData()
  }, [])

  return (
    <Box width={"100%"}>
      <EnrollmentForm open={open} setOpen={setOpen} />
      {/* <Button variant='contained' onClick={()=>{
        setOpen(true)
      }} >
        Fill Enrollment
      </Button> */}
      <Typography gutterBottom variant="h3" textAlign={"center"} display={"flex"} justifyContent={"space-between"} width={"100%"} py={2} >
        Enrollment Detail
        <Tooltip title="Edit Enrollment" arrow>
          <IconButton
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(true)
            }}
          >
            <EditTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Typography>
      <Box>
      </Box>
      <Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Number of states present : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData?.currency1}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Number of Branches : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData?.currency}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Founder : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData?.founder}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> SPOC : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>P{enrollData?.SPOC}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> AUM(inr crores) : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData?.AUM}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Mothly Disbursement(inr crores) : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData.Mothly_Disbursement}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Product Sagement : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['Product-Sagement']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Sub Product : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['Sub-Sagement']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Borrower Type : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['Borrower-Type']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Repayment Type : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['Repayment-Type']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Gross NPA : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData?.Gross_NPA}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Net NPA : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData?.Net_NPA}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> 1-30 DPD : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['1-30_DPD']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> 31-60 DPD : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['31-60_DPD']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> 61-90 DPD : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['61-90_DPD']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> 90+ DPD : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>{enrollData['90+_DPD']}</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Corporate Deck : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>...uploading</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Format Portfolio Cutt : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>...uploading</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Financials Last 2 Years : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>...uploading</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Last 6 Months GST Turnover (inr crores) : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>...uploading</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Borrower Journey (video/deck) : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>...uploading</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> Product/Credit Notes : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>...uploading</Typography>
        </Typography>
        <Typography sx={{ justifyContent: "space-around", alignItems: "center", display: "flex", py: 0.2 }}>
          <Typography sx={{ width: "50%", }}> KYCs & RBI Certificates : </Typography>
          <Typography sx={{ border: 1, width: "50%", borderRadius: "2px", p: 1 }}>...uploading</Typography>
        </Typography>

      </Typography>
      <Box
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        justifyContent="space-between"
      >
      </Box>
    </Box>
  )
}

export default EnrollmentDetail