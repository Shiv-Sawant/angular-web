import { Box, Card, CardHeader, Checkbox, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { ArrowDownward, ArrowUpward, Chat } from '@mui/icons-material'

const InterestedUserTable = () => {
    
  return (
    <Card >
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  autoWidth
                >
                    <MenuItem >
                    <IconButton>
                        <ArrowUpward/>
                    </IconButton>
                    </MenuItem>
                    <MenuItem >
                    <IconButton>
                        <ArrowDownward/>
                    </IconButton>
                    </MenuItem>
                </Select>
              </FormControl>
            </Box>
          }
          title="Users Detail"
        />
        <TableContainer sx={{height:"300px"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Product ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow
                  hover
                >
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                        User Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                        <IconButton>
                            <Chat/>
                            </IconButton>
                    </Typography>
                  </TableCell>
                
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default InterestedUserTable