import { ManagementClient } from 'auth0';

export const auth0ManagementClient = new ManagementClient({
  domain: `${process.env.AUTH0_ACCOUNT}.auth0.com`,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'read:users update:users'
});
