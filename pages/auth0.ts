var ManagementClient = require('auth0').ManagementClient;

export const auth0ManagementClient: any = new ManagementClient({
  domain: 'dev-ngvx2oexcw8osiwo.us.auth0.com',
  clientId: 'vzKlbT0aO6i8xyKfTaLalzHG9ol8brzS',
  clientSecret: 'ifDDuJ5O31pqrXqczF-IFrTz2Tpg7YnsCKVGK6wusNofmSmtUyEe6nxFtbPLgAqU',
  scope: 'read:users update:users'
});
