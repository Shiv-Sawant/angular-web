import { useState } from 'react';
import {
  Card,
  CardHeader,
  List,
  ListItem,
  Divider,
  Avatar,
  styled
} from '@mui/material';

function AccountSecurity() {
  const [checked, setChecked] = useState(['phone_verification']);


  return (
    <Card>
      <CardHeader title="Our Website" />
      <Divider />
      <List disablePadding>
      <ListItem
          sx={{
            py: 2
          }}
        >
          To know more visit our website from here 
        </ListItem>
        <ListItem
          sx={{
            py: 2
          }}
        >
          https://getvision.in/
        </ListItem>
      </List>
    </Card>
  );
}

export default AccountSecurity;
