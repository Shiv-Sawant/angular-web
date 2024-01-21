'use client'

import { Box, Button, TextField } from '@mui/material'
import React from 'react'

import { useState } from "react";
import { useRouter } from "next/router";


const PhoneLogin = () => {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);

  const handleAction = async () => {
    if (showOtpField) {
      if (otp.trim() !== '') {
        router.push('/dashboards/crypto');
      } else {
        alert('Please enter a valid OTP');
      }
    } else {
      if (phone.trim() !== '' && email.trim() !== '') {
        setPhone(phone);
        setEmail(phone);

        setShowOtpField(true);
      } else {
        alert('Please enter your email');
      }
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      {/* Render the appropriate fields based on the state */}
      {showOtpField ? (
        <>

          <TextField
            label="Enter OTP"
            fullWidth
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

        </>
      ) : (
        <>
          <TextField
            label="Enter Phone Number"
            type='number'
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            type='email'
            label="Enter Email Id"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      )}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '16px' }}
        onClick={handleAction}
      >
        {showOtpField ? "Verify OTP" : "Send OTP"}
      </Button>
    </Box>
  )
}

export default PhoneLogin