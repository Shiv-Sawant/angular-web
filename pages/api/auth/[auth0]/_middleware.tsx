import {
  getSession,
  handleAuth,
  handleLogin,
  handleProfile
} from '@auth0/nextjs-auth0';
import { NextResponse, NextRequest } from 'next/server';
import { auth0ManagementClient } from '../../../auth0';

export default handleAuth({
  async login(req, res) {
    
    // Add your own custom logger
    // Pass custom parameters to login
    return await handleLogin(req, res, {
      returnTo: '/dashboards'
    });
  },
  onError(req: NextRequest, error: Error) {
    if (
      // @ts-ignore
      error.cause?.errorDescription.startsWith('SIGNUP:EMAIL_NOT_VERIFIED:')
    ) {
      // @ts-ignore
      const email = error.cause?.errorDescription.split(':').pop();
      return NextResponse.redirect(
        new URL(
          `/email-verification?email=${encodeURIComponent(email)}`,
          req.nextUrl.origin
        )
      );
    }
    return NextResponse.error()
  },
  async profile() {
    const session = await getSession();
    console.log("Session", session);
    
    const { data: userDetails } = await auth0ManagementClient.users.get({
      id: session?.user.sub
    });
    return NextResponse.json(userDetails);
  },
  'refresh-profile':()=>{
    handleProfile({ refetch: true })
  } 
});
