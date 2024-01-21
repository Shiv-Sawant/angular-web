import { Box, Button, Card, CardContent, Dialog, Divider, Grid, IconButton, MenuItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { currencies } from '../../../../pages/profile';
import  { Upload } from './Component';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Cancel } from '@mui/icons-material';

const EnrollmentForm = ({ open, setOpen }) => {
  const [currency, setCurrency] = useState('EUR');
  const [currency_two, setCurrency_two] = useState('EUR');
  const [inputs, setInputs] = useState([])
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<any>([])
  const [uploadedFiles, setUploadedFiles] = useState({
    file1: [],
    file2: [],
    file3: [],
    file4: [],
    file5: [],
    file6: [],
    file7: [],
  });

  console.log(selectedFile, "selectedFile")

  const handleFilesUpload = (field, files) => {
    setUploadedFiles({
      ...uploadedFiles,
      [field]: files
    });
    console.log(uploadedFiles)
  };



  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  const handleInput = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((prev) => ({ ...prev, [name]: value }))
    // setInputs({...inputs, [name]:value})
    console.log(inputs, "all insn")
  }

  // const [enrollData, setEnrollData] = useState([])
  // console.log(enrollData)


  const handleEnrollSubmit = async () => {
    try {
      const id = localStorage.getItem("user id")
      let obj = {
        enrollment: inputs,
        enrollStatus: "yes",
        files: uploadedFiles
      }
      const res = await axios.put(`http://localhost:3000/api/users/userEnrol?id=${id}`, obj)
      localStorage.setItem("enroll-status", "yes")
      // setEnrollData(res.data.data.enrollment)
      alert("updated enrollment")
      router.push("/dashboards/createdeal")
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange_tow = (event) => {
    setCurrency_two(event.target.value);
  };

  const [value, setValue] = useState(30);
  return (
    <Dialog open={open} maxWidth={"md"} fullWidth onClose={() => { setOpen(false) }}>
      <Grid item xs={12} position={"relative"} overflow={"hidden"} sx={{ padding: 5 }}  >
        <Box display={"flex"} paddingBottom={2} justifyContent={"space-between"} alignItems={"center"}  >
          <Typography variant='h3' >Enrollment Form</Typography>
          <IconButton onClick={() => { setOpen(false) }} >
            <Cancel fontSize='large' />
          </IconButton>
        </Box>
        <Card sx={{ justifyItems: "center", overflowY: "scroll", paddingBottom: '50px', display: 'flex', bgcolor: "#347362", flexDirection: 'column', alignItems: 'center', height: "500px" }}>
          <Divider />
          <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 2, alignItems: "center", width: "100%" }}>
            <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Founder"
                type='text'
                placeholder='Founder'
                sx={{ bgcolor: "white", }}
                variant='filled'
                name="founder"
                // value={inputs.founder}
                onChange={handleInput}

              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="SPOC"
                type='text'
                placeholder='SPOC'
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="SPOC"
                onChange={handleInput}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="AUM(inr crores)"
                type='number'
                placeholder="AUM(inr crores)"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="AUM"
                onChange={handleInput}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Mothly Disbursement(inr crores)"
                type="number"
                placeholder="Mothly Disbursement(inr crores)"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="Mothly_Disbursement"
                onChange={handleInput}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Gross NPA"
                type="number"
                placeholder="Gross NPA"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="Gross_NPA"
                onChange={handleInput}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Net NPA"
                type="number"
                placeholder="Net NPA"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="Net_NPA"
                onChange={handleInput}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="1-30 DPD"
                type="number"
                placeholder="1-30 DPD"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="1-30_DPD"
                onChange={handleInput}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="31-60 DPD"
                type="number"
                placeholder="31-60 DPD"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="31-60_DPD"
                onChange={handleInput}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="61-90 DPD"
                type="number"
                placeholder="61-90 DPD"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="61-90_DPD"
                onChange={handleInput}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="90+ DPD"
                type="number"
                placeholder="90+ DPD"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="90+_DPD"
                onChange={handleInput}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                id="outlined-select-currency currency1"
                select
                label="Number of states present"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="currency1"
                onChange={handleInput}
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
                label="Number of Branches"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="currency"
                onChange={handleInput}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                select
                fullWidth
                id="Product-Sagement"
                label="Product Sagement"
                placeholder="Product Sagement"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="Product-Sagement"
                onChange={handleInput}
              >
                <MenuItem value="Unsecured Business Loan">
                  Unsecured Business Loan
                </MenuItem>
              </TextField>
              <TextField
                select
                fullWidth
                id="Sub-Sagement"
                label="Sub Product"
                placeholder="Sub Product"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="Sub-Sagement"
                onChange={handleInput}

              >
                <MenuItem value="Term Loan">
                  Term Loan
                </MenuItem>
              </TextField>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                select
                fullWidth
                id="Borrower-Type"
                label="Borrower Type"
                placeholder="Borrower Type"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="Borrower-Type"
                onChange={handleInput}

              >
                <MenuItem value="MSME">
                  MSME
                </MenuItem>
                <MenuItem value="Self Employed">
                  Self Employed
                </MenuItem>
                <MenuItem value="Start Up">
                  Start Up
                </MenuItem>
              </TextField>
              <TextField
                select
                fullWidth
                id="Repayment-Type"
                label="Repayment Type"
                placeholder="Repayment Type"
                sx={{ bgcolor: "white" }}
                variant='filled'
                name="Repayment-Type"
                onChange={handleInput}

              >
                <MenuItem value="EMI">
                  EMI
                </MenuItem>
                <MenuItem value="EFI">
                  EFI
                </MenuItem>
              </TextField>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload id={"CorporateDeck"} onFilesUpload={(files: any) => handleFilesUpload('file1', files)} label="Corporate Deck" />
              <Upload id={"FormatPortfolioCutt"} onFilesUpload={(files: any) => handleFilesUpload('file2', files)} label="Format Portfolio Cutt" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload id={3} onFilesUpload={(files: any) => handleFilesUpload('file3', files)} label="Financials Last 2 Years" />
              <Upload id={4} onFilesUpload={(files: any) => handleFilesUpload('file4', files)} label="Last 6 Months GST Turnover (inr crores)" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload id={5} onFilesUpload={(files: any) => handleFilesUpload('file5', files)} label="Borrower Journey (video/deck)" />
              <Upload id={6} onFilesUpload={(files: any) => handleFilesUpload('file6', files)} label="Product/Credit Notes" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <Upload id={7} onFilesUpload={(files: any) => handleFilesUpload('file7', files)} label="KYCs & RBI Certificates" />
            </Box>

          </CardContent>
          <Button variant='contained' sx={{ width: "90%", color: "white" }} onClick={handleEnrollSubmit}>
            Submit
          </Button>
        </Card>
      </Grid>
    </Dialog>
  )
}

export default EnrollmentForm