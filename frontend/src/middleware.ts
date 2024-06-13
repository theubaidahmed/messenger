import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authPath = ['/auth/log-in', '/auth/create'];

export function middleware(request: NextRequest) {
    const accessToken: string | undefined = request.cookies.get('accessToken')?.value;
    const { pathname } = request.nextUrl;
    console.log(pathname);

    if (accessToken) {
        if (authPath.includes(pathname) || pathname === '/') {
            return NextResponse.redirect(new URL('/c', request.nextUrl));
        } else {
            return NextResponse.next();
        }
    } else {
        if (!authPath.includes(pathname)) {
            return NextResponse.redirect(new URL('/auth/log-in', request.nextUrl));
        } else {
            return NextResponse.next();
        }
    }

    // if (accessToken && authPath.includes(pathname)) {
    //     return NextResponse.redirect(new URL('/c', request.nextUrl));
    // }
}

export const config = {
    matcher: [
        '/',
        '/auth/log-in',
        '/auth/create',
        '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
    ],
};
