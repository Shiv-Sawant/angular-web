"use client"
import { FC, ChangeEvent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  useTheme,
  CardHeader,
  TextField,
} from '@mui/material';

import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from '../../Management/Transactions/BulkActions';
import EditForm from './EditForm';
import UpdateForm from './UpdateForm';
import { Search } from '@mui/icons-material';
import axios from 'axios';
import { useSelector } from 'react-redux';


interface Filters {
  status?: CryptoOrderStatus;
}


const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const CreatedDealTable: FC<any> = ({ cryptoOrderss }: any) => {

  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [open, setOpen] = useState<boolean>(false);
  const [deletestatus, setDeletestatus] = useState<boolean>(false)
  const [openNew, setOpenNew] = useState<boolean>(false);
  const [selectedIndex, setSelectedId] = useState<number>(0);
  const [createdeals, setCreatedeals] = useState<any>([])
  const [isUpdate, setIsUpadte] = useState<any>([])

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? cryptoOrderss.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };


  const [filteredCryptoOrders, setfilteredCryptoOrders] = useState([])

  useEffect(() => {
    const filter_data = applyFilters(cryptoOrderss, null)
    setfilteredCryptoOrders(filter_data);
  }, [cryptoOrderss])

  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrderss.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrderss.length;
  const theme = useTheme();

  const [search, setSearch] = useState([])

  // convert date
  function convertMillisecondsToDate(milliseconds) {
    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const millisecondsPart = date.getMilliseconds();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours}:${minutes}:${seconds}.${millisecondsPart}`;
    return formattedDate;
  }

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3000/api/deal?id=${id}`)
      setDeletestatus(!deletestatus)
      alert("Deals deleted sucessfully")
    } catch (error) {
      alert("deals s note deleted ")
    }
  }

  const fetchRecentDeals = async () => {
    try {
      const userid = localStorage.getItem("user id")
      const res = await axios.get(`http://localhost:3000/api/deal?id=${userid}`)
      console.log(res, "create deas response")
      setCreatedeals(res?.data)
    } catch (err) {
      console.log(err)
    }
  }

  let data = useSelector((state: any) => {
    return state.app
  })

  useEffect(() => {
    fetchRecentDeals()
  }, [deletestatus, data])
  return (
    <>
      <EditForm  open={open} setOpen={setOpen} selectedIndex={selectedIndex} />
      <UpdateForm update={isUpdate} openNew={openNew} setOpenNew={setOpenNew} setList={() => { }} />
      <Card>
        {selectedBulkActions && (
          <Box flex={1} p={2}>
            <BulkActions />
          </Box>
        )}
        {!selectedBulkActions && (
          <CardHeader
            action={
              <Box width={"100%"} display={"flex"} alignItems={"center"} gap={2} >
                <FormControl fullWidth variant="outlined">
                  {search}
                  <TextField
                    onChange={(e: any) => {
                      setSearch(e.target.value)
                    }}
                    label="Search"
                    variant='outlined'
                    InputProps={{
                      startAdornment: (
                        <Search />
                      )
                    }}
                  />
                </FormControl>

              </Box>
            }
            title="Recent Orders"
          />
        )}
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selectedAllCryptoOrders}
                    indeterminate={selectedSomeCryptoOrders}
                    onChange={handleSelectAllCryptoOrders}
                  />
                </TableCell>
                <TableCell

                >Deal Creator</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {

                createdeals.filter((element: any) => {
                  if (search.length === 0) {
                    return element;
                  } else {
                    if (element?.createdBy?.toLowerCase().includes(search)) {
                      return element?.createdBy?.toLowerCase().includes(search)
                    } else if (element?.orderID?.toLowerCase().includes(search)) {
                      return element?.orderID?.toLowerCase().includes(search)
                    } else if (element?.cryptoCurrency?.toLowerCase().includes(search)) {
                      return element?.cryptoCurrency?.toLowerCase().includes(search)
                    }
                  }
                }).map((a: any, index: any) => (
                  <TableRow
                    hover
                    key={index}
                  // selected={isCryptoOrderSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"

                      />
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {/* {createdeals?.map((a) => a?.createdBy)} */}
                        {a?.createdBy}

                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        { }
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
                        {a?.orderID}
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
                        {
                          convertMillisecondsToDate(a?.orderDate)
                        }
                        {/* {format(a?.orderDate? a?.orderDate :"" , 'MMMM dd yyyy')} */}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {/* {cryptoOrder.amountCrypto} */}
                        {a?.cryptoCurrency}

                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {/* {numeral(cryptoOrder.amount).format(
                          `${cryptoOrder.currency}0,0.00`
                        )} */}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {a?.status}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Order Information" arrow>
                        <IconButton
                          onClick={() => {
                            setOpen((pre) => !pre);
                            setSelectedId(a)
                          }}
                          sx={{
                            '&:hover': {
                              background: theme.colors.info.lighter
                            },
                            color: theme.palette.info.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <PermIdentityTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit Order" arrow>
                        <IconButton
                          onClick={() => {
                            setOpenNew((pre) => !pre);
                            // setSelectedId(a)
                            setIsUpadte(a)
                          }}
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Order" arrow>
                        <IconButton
                          sx={{
                            '&:hover': { background: theme.colors.error.lighter },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                          onClick={() => {
                            const id = a?._id
                            handleDelete(id)
                          }}
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              }


            </TableBody>
          </Table>
        </TableContainer>
        <Box p={2}>
          <TablePagination
            component="div"
            count={filteredCryptoOrders.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
        </Box>
      </Card>
    </>
  );
};

CreatedDealTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

CreatedDealTable.defaultProps = {
  cryptoOrders: []
};

export default CreatedDealTable;
