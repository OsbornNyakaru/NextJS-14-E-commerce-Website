import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes 
//Please edit this to allow other routes to be public as needed
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring the Middleware
export default authMiddleware({
    publicRoutes: ["/api/:path*"],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};