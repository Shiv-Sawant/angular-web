import {
  Card,
  CardHeader,
  List,
  ListItem,
  Divider,
} from '@mui/material';

function AccountSecurity() {
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
