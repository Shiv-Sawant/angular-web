import {
  getSession,
  handleAuth,
  handleLogin,
  handleProfile
} from '@auth0/nextjs-auth0';
import Cookie from 'js-cookie'
// import { NextResponse, NextRequest } from 'next/server';
import { auth0ManagementClient } from '../../../auth0';

export default handleAuth({

  async login(req: any, res: any) {
    // Add your own custom logger
    // Pass custom parameters to login
    return await handleLogin(req, res, {
      returnTo: '/enrollment'
    });
  },
  // onError(req: any, error: Error) {
  //   if (
  //     // @ts-ignore
  //     error.cause?.errorDescription.startsWith('SIGNUP:EMAIL_NOT_VERIFIED:')
  //   ) {
  //     // @ts-ignore
  //     const email = error.cause?.errorDescription.split(':').pop();
  //     return NextResponse.redirect(
  //       new URL(
  //         `/email-verification?email=${encodeURIComponent(email)}`,
  //         req.nextUrl.origin
  //       )
  //     );
  //   }
  //   return NextResponse.error()
  // },
  // async profile(req: any, res: any) {
  //   const session = await getSession();
  //   console.log("Session", session);

  //   const { data: userDetails } = await auth0ManagementClient.users.get({
  //     id: session?.user.sub
  //   });
  //   console.log(userDetails, "userDetails")
  //   return res.json(userDetails);
  // },
  // 'refresh-profile': () => {
  //   handleProfile({ refetch: true })
  // }
});
