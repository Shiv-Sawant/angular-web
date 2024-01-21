import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function PageHeader() {
  const user = {
    name: 'Abhishek Jha',
    avatar: '/static/images/avatars/3.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          All Deal
        </Typography>
        <Typography variant="subtitle2">
        "Seal every deal with purpose, passion, and precision."
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
