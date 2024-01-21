import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios'
import RingLoader from "react-spinners/RingLoader"

const EmailLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [showOtpField, setShowOtpField] = useState(false);
  console.log(otp, data)

  const handleAction = async () => {
    if (showOtpField) {
      if (otp === data) {

        router.push('/enrollment');
        localStorage.setItem('email', email)
      } else {
        alert('Please enter a valid OTP');
      }
    } else {
      if (email.trim() !== '') {
        setLoading(true)
        setShowOtpField(true);
        try {
          let response: any = await axios.post('http://localhost:3000/api/auth/emailLogin', { email })
          console.log(response)
          if (response.data.otp.length != 0) {
            setData(response.data.otp)
            setLoading(false)
            alert('otp send successfully')
            if (response.data.newUser === 'true') {
              localStorage.setItem('user email', response.data.email)
              localStorage.setItem('user id', response.data.user.insertedId)
              localStorage.setItem('newUser', response.data.newUser)
            } else {
              let enrolas = response.data.userExist.enrol
              let email = response.data.email
              let enrollStatus = response.data.userExist.enrollStatus
              let profile = response.data.userExist.profile
              let userId = response.data.userExist._id
              localStorage.setItem('user email', email)
              localStorage.setItem('user id', userId)
              localStorage.setItem('user-profile', JSON.stringify(profile))
              localStorage.setItem('enroll-status', enrollStatus)
              localStorage.setItem('enrolType', enrolas)
              localStorage.setItem('newUser', response.data.newUser)
            }
          } else {
            alert('please try again')
            setLoading(false)
          }
        } catch (e) {
          console.log(e)
          setLoading(false)
        }
      } else {
        alert('Please enter your email');
        setLoading(false)
      }
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      {showOtpField ? (
        <TextField
          label="Enter OTP"
          fullWidth
          margin="normal"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      ) : (
        <TextField
          label="Enter Email"
          fullWidth
          type='email'
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '16px' }}
        onClick={handleAction}
      >
        {showOtpField && !loading ? "Verify OTP" : loading ? <RingLoader color="#fff" size={30} /> : "Send OTP"}
        {/* <RingLoader color="#fff" size={30} /> */}
      </Button>
    </Box>
  )
}

export default EmailLogin