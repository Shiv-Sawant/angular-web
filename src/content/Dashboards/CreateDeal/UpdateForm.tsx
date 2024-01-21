import { useEffect, useState } from 'react';
import {
  Card,
  Divider,
  TextField,
  Button,
  Grid,
  CardContent,
  Box,
  MenuItem,
  Typography,
  Dialog,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from 'axios';


const currencies = [
  {
    value: 'Co-Landing',
    label: 'Co-Landing'
  },
  {
    value: 'Term Loan',
    label: 'Term Loan'
  },
  {
    value: 'Co-Landing',
    label: 'Co-Landing'
  },
  {
    value: 'Term Loan',
    label: 'Term Loan'
  }
];

function UpdateForm({ update, setList, openNew, setOpenNew, }) {
  // const [currency, setCurrency] = useState('EUR');
  const [data, setData] = useState({...update})

  console.log(data, "deals for update")

  const handleUpdate = async () => {
    try {
      const obj = {
        consultant: data?.createdBy,
        createdBy: data?.orderID,
        cryptoCurrency: data?.cryptoCurrency,
        orderDate: new Date().getTime(),
        orderID: data?.orderID,
        status: "pending"
      };
      // console.log(obj, "object created")
      const response = await axios.put(`http://localhost:3000/api/deal?${update?._id}`, obj);
      console.log(response, "response");
      alert("successfully updated");
      setOpenNew(false);
    } catch (error) {
      alert("update failed");
    }
  };
  

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    setData({...update})
  }, [update])
  return (
    <Dialog open={openNew} onClose={() => {
      setOpenNew(false)
    }}>
      <Grid item xs={12} position={"relative"} width={"100vw"} height={"100wh"} >
        <Button sx={{ position: "absolute", right: 0, bgcolor: "transparent", color: "red", fontSize: "900px", '&:hover': { cursor: "pointer" } }} onClick={
          () => {
            setOpenNew(false)
          }
        }>
          <CloseOutlinedIcon />
        </Button>
        <Card sx={{ justifyItems: "center", paddingY: '50px', borderRadius: "0px 300px 0px 0px", boxShadow: "1px 15px 20px 9px", display: 'flex', bgcolor: "#347362", flexDirection: 'column', alignItems: 'center', height: "100%", width: "100%", }}>
          <Typography variant='h3' paddingBottom={2} color={"#ffffff"}>Update New Deal</Typography>
          <Divider />
          <CardContent sx={{ display: "grid", justifyContent: "space-evenly", gap: 2, alignItems: "center", }}>
            <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Deal Creator"
                type='text'
                placeholder='Deal Creator'
                sx={{ bgcolor: "white", }}
                name='createdBy'
                value={data?.createdBy}
                variant='filled'
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                label="Product"
                name="orderID"
                value={data?.orderID}
                onChange={handleChange}
                sx={{ bgcolor: "white" }}
                variant='filled'
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value} onClick={() => {
                    setData(pre => {
                      return ({
                        ...pre, orderID: option.value
                      })
                    })
                  }}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 2 }}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Amount"
                type='text'
                placeholder="Amount"
                name="cryptoCurrency"
                value={data?.cryptoCurrency}
                sx={{ bgcolor: "white" }}
                variant='filled'
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="consultant"
                type="text"
                name="consultant"
                value={data?.consultant}
                placeholder="consultant"
                sx={{ bgcolor: "white" }}
                variant='filled'
               onChange={handleChange}
              />
            </Box>

          </CardContent>
          <Button variant='contained' sx={{ width: "78%", color: "white" }} onClick={() => {
            handleUpdate()
            setList((pre) => {
              return [...pre, {
                id: '1',
                orderDetails: 'Owner',
                createdBy: 'Khushboo',
                orderDate: new Date().getTime(),
                status: 'Pending',
                consultant: "",
                orderID: 'Term Loan',
                sourceName: 'Bank Account',
                sourceDesc: '*** 1111',
                amountCrypto: ' ',
                cryptoCurrency: '0',
                currency: '₹',
                ...data
              }]
            })
          }} >
            Submit
          </Button>
        </Card>
      </Grid>
    </Dialog>

  );
}

export default UpdateForm;
